"use strict";

/**
 * パッケージ一覧
 */
const   gulp            = require("gulp"),
        gulpif          = require("gulp-if"),
        changed         = require("gulp-changed"),
        rename          = require("gulp-rename"),
        plumber         = require("gulp-plumber"),
        notify          = require("gulp-notify"),
        sass            = require("gulp-sass"),
        postcss         = require("gulp-postcss"),
        cssnext         = require("postcss-cssnext"),
        autoprefixer    = require("gulp-autoprefixer"),
        cleanCss				= require('gulp-clean-css'),
				sourcemaps			= require('gulp-sourcemaps'),
        imagemin        = require("gulp-imagemin"),
        pngquant        = require("imagemin-pngquant"),
        packageImporter = require("node-sass-package-importer"),
        webserver       = require("gulp-webserver"),
        runSequense     = require("run-sequence");


/**
 * gulp-webserverのポート番号を指定
 * @type {Number}
 */
const SERVER_PORT = 8080;

/**
 * ソースの指定
 * @type {String}
 */
const SOURCE_PATH = "./src/";

/**
 * 出力先パスを指定
 * @type {String}
 */
const DEST_PATH = "./public_html/";

/**
 * パスを指定
 * @type {Object}
 */
const paths = {
  "scss" : SOURCE_PATH + "scss/*",
  "css" : DEST_PATH + "assets/css/",
  "srcimg" : [SOURCE_PATH + "images/*", SOURCE_PATH + "images/**/*", SOURCE_PATH + "images/**/**/*"],
  "destimg" : DEST_PATH + "assets/images/",
  "srcjs" : [SOURCE_PATH + "js/*", SOURCE_PATH + "js/**/*", SOURCE_PATH + "js/**/**/*"],
  "destjs" : DEST_PATH + "assets/js/",
};


/**
 * 実行するtaskの指定
 * @type {Array}
 */
const runTask = ["sass","dist","image","js"];

/**
 * gulpのデフォルトタスク
 */
gulp.task("default", ["init"], () => {
  return gulp.watch([SOURCE_PATH + "*", SOURCE_PATH + "**/*", SOURCE_PATH + "**/**/*"], ["sequence"]);
});

/**
 * 初期起動タスク
 */
gulp.task("init", () => {
  return runSequense(runTask,"server");
});

/**
 * runSequenseによってシークエンス制御
 */
gulp.task("sequence", () => {
  return runSequense(runTask);
});

/**
 * gulp-sassのタスク
 */
gulp.task("sass", () => {
	
  gulp.src(paths.scss + "*.scss")
    .pipe(changed( paths.css ))
		.pipe(plumber({
     errorHandler: notify.onError('<%= error.message %>')
     }))
		.pipe(sourcemaps.init())
    .pipe(sass())
		.pipe(cleanCss())
    .pipe(sourcemaps.write({includeContent: false}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(autoprefixer({
			grid: true,
      browsers: [
        "ie >= 11",
        "last 2 Edge versions",
        "last 2 Firefox versions",
        "last 2 Chrome versions",
        "last 2 Safari versions",
        "last 2 Opera versions",
        "last 2 iOS versions",
        "last 2 ChromeAndroid versions"],
      cascade:false
    }))
		.pipe(sourcemaps.write('./sourcemaps/'))
    .pipe(gulp.dest(paths.css));
});

/**
 * gulp-imageminのタスク
 */
gulp.task("image", () => {
  return gulp.src(paths.srcimg)
    .pipe(changed(paths.destimg))
    .pipe(imagemin({
      progressive: true,
      use: [pngquant({quality: "65-80", speed: 1})]
    }))
  .pipe(gulp.dest(paths.destimg));
});

/**
 * jsのタスク
 */
gulp.task("js", () => {
  return gulp.src(paths.srcjs)
    .pipe(changed(paths.destjs))
  .pipe(gulp.dest(paths.destjs));
});


/**
 * ファイルをパッケージング
 */
gulp.task("dist", () => {
  return gulp.src([
		SOURCE_PATH + "*",
    SOURCE_PATH + "**/*",
    "!" + SOURCE_PATH + "scss",
    "!" + SOURCE_PATH + "scss/*",
    "!" + SOURCE_PATH + "scss/**/*",
    "!" + SOURCE_PATH + "images",
    "!" + SOURCE_PATH + "images/*",
    "!" + SOURCE_PATH + "images/**/*",
    "!" + SOURCE_PATH + "images/**/**/*",
    "!" + SOURCE_PATH + "js",
    "!" + SOURCE_PATH + "js/*",
    "!" + SOURCE_PATH + "js/**/*",
    "!" + SOURCE_PATH + "js/**/**/*",
  ]).pipe(gulp.dest(DEST_PATH));
});

/**
 * gulp-webserverでブラウザ自動更新
 */
gulp.task("server", () => {
  return gulp.src(DEST_PATH)
    .pipe(webserver({
      path: "/",
      livereload: true,
      open: true,
      port: SERVER_PORT
    }));
});