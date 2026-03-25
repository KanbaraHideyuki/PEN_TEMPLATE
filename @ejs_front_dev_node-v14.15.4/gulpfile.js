const gulp = require("gulp");

// sass
const sass = require("gulp-sass");

// PostCss
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer"); // ベンダープレフィックス付けてくれる
const mqpacker = require("css-mqpacker"); // 同じメディアクエリーをまとめてくれる
const cssnano = require("cssnano"); // cssの圧縮
const flexBugsFixes = require("postcss-flexbugs-fixes"); // ブラウザによるflexboxのバグを防ぐ記述に変更してくれる

// img(圧縮用)
const imagemin = require("gulp-imagemin");
const pngquant = require("imagemin-pngquant");
const mozjpeg = require("imagemin-mozjpeg");

// ejs
const ejs = require("gulp-ejs");
const ejsSrc = ["src/ejs/**/*.ejs", "!" + "src/ejs/**/_*.ejs"];
const rename = require("gulp-rename");

// babel
const babel = require("gulp-babel");

// webpack
const webpack = require("webpack"); // webpack本体
const webpackStream = require("webpack-stream"); // webpackをgulpで使用する為のプラグイン

// webpackの設定ファイルの読み込み
const webpackConfig = require("./webpack.config");

// other
const browserSync = require("browser-sync").create(); // 監視
const plumber = require("gulp-plumber"); // Stream中に起こるのエラーが原因でタスクが強制停止することを防止するモジュール
const replace = require("gulp-replace"); // 置き換える
const header = require("gulp-header"); // cssの先頭にcharset入れるために使用
const notify = require("gulp-notify"); // エラーがあったりしたら通知出してくれる

// path
const distPath = "./public_html/assets"; // css、img、jsの出力先のパス
const path = {
	root: "./src",
	html: {
		src: "./public_html/**/*.html",
		dest: "./public_html/"
	},
	styles: {
		src: "./src/scss/**/*.scss",
		dest: distPath + "/css/",
		map: distPath + "/css/maps"
	},
	scripts: {
		src: "./src/js/**/*.js",
		dest: distPath + "/js/",
		map: distPath + "/js/maps"
	},
	ejs: {
		src: "./src/ejs/**/*.ejs",
		dest: "./public_html/"
	},
	images: {
		src: "./src/img/**/*.{jpg,jpeg,png,svg,gif}",
		dest: distPath + "/img/"
	},
	movie: {
		src: "./src/movie/**/*",
		dest: distPath + "/movie/"
	},
	fonts: {
		src: "./src/fonts/**/*",
		dest: distPath + "/fonts/"
	},
	plugin: {
		src: "./src/plugin/**/*",
		dest: distPath + "/plugin/"
	}
};

// autoprefixer config
const autoprefixerOption = {
	grid: true
};

// PostCss config
const postcssOption = [
	autoprefixer(autoprefixerOption),
	mqpacker(),
	flexBugsFixes,
	cssnano({ autoprefixer: false })
];

/*********************** 以下は処理 *******************************/

// sassコンパイル
function sassCompress() {
	return gulp
		.src(path.styles.src, { sourcemaps: true })
		.pipe(
			plumber({
				errorHandler: notify.onError("<%= error.message %>")
			})
		)
		.pipe(
			sass({
				outputStyle: "expanded"
			})
		)
		.pipe(replace(/@charset "UTF-8";/g, ""))
		.pipe(header('@charset "UTF-8";\n\n'))
		.pipe(postcss(postcssOption))
		.pipe(gulp.dest(path.styles.dest, { sourcemaps: "./map" }));
}

// 画像の最適化(設定)
const imageminOption = [
	pngquant({
		quality: [0.7, 0.85]
	}),
	mozjpeg({
		quality: 85
	}),
	imagemin.gifsicle(),
	imagemin.jpegtran(),
	imagemin.optipng(),
	imagemin.svgo({
		plugins: [{ removeViewBox: false }]
	})
];

// 画像の最適化
function images() {
	return gulp
		.src(path.images.src)
		.pipe(imagemin(imageminOption))
		.pipe(gulp.dest(path.images.dest));
}

// webpackを使ってjsファイルをトランスパイルする
function esTranspile() {
	return gulp
		.src(path.scripts.src)
		.pipe(plumber())
		.pipe(webpackStream(webpackConfig, webpack)) // webpackStreamの第2引数にwebpackを渡す。
		.pipe(gulp.dest(path.scripts.dest));
}

// ejsのコンパイル
function ejsCompile() {
	return gulp
		.src(ejsSrc)
		.pipe(plumber())
		.pipe(ejs())
		.pipe(rename({ extname: ".html" }))
		.pipe(gulp.dest(path.ejs.dest));
}

// fonts
function fontsCompile() {
	return gulp
		.src(path.fonts.src)
		.pipe(gulp.dest(path.fonts.dest));
}
// plugin
function pluginCompile() {
	return gulp
		.src(path.plugin.src)
		.pipe(gulp.dest(path.plugin.dest));
}
// movie
function movieCompile() {
	return gulp
		.src(path.movie.src)
		.pipe(gulp.dest(path.movie.dest));
}

// ブラウザ自動更新&監視
const browserSyncOption = {
	port: 8080,
	server: {
		baseDir: "./public_html/",
		index: "index.html"
	},
	open: "external",
	reloadOnRestart: true
};

function browsersync(done) {
	browserSync.init(browserSyncOption);
	done();
}

function watchFiles(done) {
	const browserReload = () => {
		browserSync.reload();
		done();
	};

	gulp
		.watch(path.styles.src)
		.on("change", gulp.series(sassCompress, browserReload));
	gulp
		.watch(path.scripts.src)
		.on("change", gulp.series(esTranspile, browserReload));
	gulp.watch(path.ejs.src).on("change", gulp.series(ejsCompile, browserReload));
	gulp.watch(path.html.src).on("change", gulp.series(browserReload));
	gulp.watch(path.images.src).on("change", gulp.series(browserReload));
	gulp.watch(path.fonts.src).on("change", gulp.series(browserReload));
	gulp.watch(path.plugin.src).on("change", gulp.series(browserReload));
	gulp.watch(path.movie.src).on("change", gulp.series(browserReload));
}

/**
 * デフォルトタスク
 * sassのコンパイル
 * jsのトランスパイル
 * npm run start でタスク起動ﾌﾞｨｨｨｨｨﾝ
 */
gulp.task(
	"default",
	gulp.series(
		gulp.parallel(sassCompress, ejsCompile, esTranspile, images,fontsCompile,pluginCompile,movieCompile),
		gulp.series(browsersync, watchFiles)
	)
);

gulp.task("imagemin", images);
