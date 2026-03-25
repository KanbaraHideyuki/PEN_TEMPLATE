<!-- ■■■■■■ wordpress MEMO ■■■■■■ -->

<?php get_header(); ?>
<?php get_footer(); ?>

<?php echo home_url(); ?>
<?php echo get_template_directory_uri(); ?>

<!-- ■■■■■■ 基本テンプレートファイル ■■■■■■ -->
header.php 
index.php
sidebar.php
footer.php
single.php
page.php
comments.php
search.php
searchform.php
archive.php
functions.php
404.php
style.css

<!-- PHP関数 -->
<?php echo date( 'Y' )?>

<!-- ■■■■■■ テンプレートタグ ■■■■■■ -->
<?php the_time(); ?><!-- 現在の記事の投稿時間を表示 -->
<?php the_date(); ?><!-- 現在の記事の投稿日時を表示 -->
<?php the_title(); ?><!-- 現在の記事のタイトルを表示 -->
<?php the_content(); ?><!-- 現在の記事の本文を表示 -->
<?php the_permalink(); ?><!-- 現在の記事のパーマリンクURLを表示 -->
<?php the_category(); ?><!-- 記事のカテゴリーをリンク付きで表示 -->
<?php the_author(); ?><!-- 現在の記事の著者名を表示 -->
<?php the_tags(); ?><!-- 現在の記事のタグを表示 -->
<?php the_ID(); ?><!-- 現在の記事の記事IDを表示 -->
<?php wp_list_pages(); ?><!-- リンク付きページ一覧を表示／取得 -->
<?php wp_list_categories(); ?><!-- リンク付きカテゴリ一覧を表示／取得 -->
<?php posts_nav_link(); ?><!-- 前後のページへのリンクを表示 -->
<?php next_post_link(); ?><!-- 記事ページで次の記事へのリンクを表示 -->
<?php previous_post_link(); ?><!-- 記事ページで前の記事へのリンクを表示 -->
<?php the_search_query();?><!-- 検索文字列を表示 -->
<?php trackback_url(display); ?><!-- トラックバックURIを表示／取得 -->
<?php wp_tag_cloud(); ?><!-- タグクラウドを表示 -->
<?php get_calendar(); ?><!-- カレンダーを表示 -->
<?php wp_get_archives(); ?><!-- リンク付きアーカイブリストを表示 -->

<!-- ■■■■■■ テンプレートタグ/bloginfo ■■■■■■ -->
<?php bloginfo('name'); ?><!-- ブログのタイトル -->
<?php bloginfo('description'); ?><!-- ブログの説明文 -->
<?php bloginfo('url'); ?><!-- サイトURL -->
<?php bloginfo('stylesheet_url'); ?><!-- メインCSSファイルのURL -->
<?php bloginfo('template_url'); ?><!-- テーマファイルディレクトリのURL -->
<?php bloginfo('rss2_url'); ?><!-- RSS 2.0 形式のメインフィードURL -->
<?php bloginfo('charset'); ?><!-- 「表示設定」で指定された文字コード -->
<?php bloginfo('version'); ?><!-- 現在使用中のWordPressのバージョン -->
<?php bloginfo('html_type'); ?><!-- “Content-type”の設定値 -->

<!-- ■■■■■■ インクルードタグ ■■■■■■ -->
<?php get_header(); ?><!-- header.phpを読み込む -->
<?php get_sidebar(); ?><!-- sidebar.phpを読み込む -->
<?php get_footer(); ?><!-- footer.phpを読み込む -->
<?php comments_template(); ?><!-- comments.phpを読み込む -->
<?php get_search_form(); ?><!-- 検索フォームを読み込む -->
<?php include( TEMPLATEPATH . '/header2.php' ); ?><!-- その他のファイルを読み込む -->


<!-- その他 -->
<?php echo esc_attr($post->post_name);?><!-- 投稿のスラッグ名 -->




<!-- ■■■■■■ 条件分岐タグ ■■■■■■ -->
is_home()><!-- メインブログページが表示されている場合 -->
is_front_page()><!-- サイトのフロントページが表示されている場合 -->
is_single()><!-- 個別記事のページが表示されている場合 -->
is_page()><!-- ページが表示されている場合 -->
is_category()><!-- あるカテゴリーのアーカイブページが表示されている場合 -->
▼
<?php if (is_home() || is_front_page()): ?>
<?php if (is_page()):?>
<?php if (is_page(array('AAAA','BBBB','CCCC'))):?>
<?php elseif ():?>
<?php else:?>
<?php endif;?>





<!-- ■■■■■■ ループ ■■■■■■ -->

<?php if (have_posts()) : ?>
<?php while (have_posts()) : the_post(); ?>
  <!-- ループ コンテンツを表示 -->
<?php endwhile; ?><?php else : ?>
  <!-- コンテンツがない時の表示 -->
  <p>記事はありません</p>
<?php endif; ?><!-- loop終了 -->
<?php wp_reset_postdata(); ?>


<!-- ▼▼▼▼ 実例 WP_query ▼▼▼▼ --><!-- おすすめスニペット：https://sole-color-blog.com/blog/265/ -->
<?php
  $paged = get_query_var('paged')? get_query_var('paged') : 1;  //pagedに渡す変数
  $args = array(

    'paged' => $paged,
    'posts_per_page' => 15,


    'post_type'  => 'news',
    'post_status' => '',//['publish'（デフォルト：公開） 'draft'（下書） 'private'（一般） 'inherit'（継承） 'any'（全て）]

    //並び順（ソート）
    'orderby' => '', //[ 'date'（デフォルト）'title' 'meta_value_num' 'comment_count'（コメント数） 'rand'（ランダム）]
    'orderby' => 'date title',//複数条件の順
    'orderby' => array( 'date' => 'DESC', 'title' => 'ASC' ),//複数条件の順
    'order' => '',//['ASC'（123/abc）'DESC'（321/cba）]

    //カテゴリー関連
    'cat' => 5,// カテゴリーIDを指定
    'category_name' => 'news, blog',// カテゴリースラッグを指定
    'category__and' => array( 2 , 6 ), // カテゴリーIDを配列で指定（カテゴリーIDを含む記事を絞り込む）
    'category__in' => array( 2 , 6 ), // カテゴリーIDを配列で指定（カテゴリーIDを含む記事を絞り込む）
    'category__not_in' => array( 2 , 6 ), // カテゴリーIDを配列で指定（カテゴリーIDを含まない記事を絞り込む）

    //タグ関連
    'tag' => 'cooking',// タグスラッグを指定
    'tag_id' => 5, // タグIDを指定
    'tag__and' => array( 2 , 6 ),// タグIDを配列で指定（タグIDを含む記事を絞り込む）
    'tag__in' => array( 2 , 6 ),// タグIDを配列で指定（タグIDを含む記事を絞り込む）
    'tag__not_in' => array( 2 , 6 ),// タグIDを配列で指定（タグIDを含まない記事を絞り込む）

    //カスタムフィールド関連
    'meta_key' => '',//カスタムフィールドのキーの値
    'meta_value' => '',//カスタムフィールドの値
    'meta_compare' => '!='//['='(デフォルト一致) '!=' '>' '>=' '<' '<=' 'LIKE'（含む） 'NOT LIKE' 'BETWEEN'（範囲内） 'NOT BETWEEN' 'NOT EXISTS'（空）]
    'meta_query' => array(
      array(
        'key'		=> '',//カスタムフィールドのキーの値
        'value'		=> '',//カスタムフィールドの値
        'compare'	=> '',//['='(デフォルト一致) '!=' '>' '>=' '<' '<=' 'LIKE'（含む） 'NOT LIKE' 'BETWEEN'（範囲内） 'NOT BETWEEN' 'NOT EXISTS'（空）]
      ),
    ),

    //タクソノミー ターム関連
    'tax_query' => array(
      'relation' => '',//以下の条件関係 ['AND' 'OR']
      array(
        'taxonomy' => '',//タクソノミースラッグ
        'field'    => 'slug',//タクソノミータームの種類の選択 ['term_id'(デフォルト) 'name' 'slug' 'term_taxonomy_id'] 
        'terms'    => '',//タクソノミーターム
        'terms'    => array( '', '' ),//タクソノミーターム複数
        'include_children' => true,//子孫タクソノミーを含める[true false]
        'operator' => 'IN' , // ['IN'(デフォルト), 'NOT IN', 'AND', 'EXISTS' 'NOT EXISTS']
      ),
    ),
  );

  if(is_year()){
      $paged = get_query_var('paged')? get_query_var('paged') : 1;  //pagedに渡す変数
      $year = get_query_var('year');
      $args = array(
        'posts_per_page' => 15,
        'post_type' => 'news',
        'year' => $year,
        'paged' => $paged,
      );
    }
    else{
      $paged = get_query_var('paged')? get_query_var('paged') : 1;  //pagedに渡す変数
      $year = get_query_var('year');
      $args = array(
        'posts_per_page' => 15,
        'post_type' => 'news',
        'paged' => $paged,
      );
    }
  );
  $the_query = new WP_Query($args);
?>

<?php if( $the_query->have_posts() ): ?>
<?php while( $the_query->have_posts() ): $the_query->the_post(); ?>
  <!-- ループ コンテンツを表示 -->
<?php endwhile; ?><?php else : ?>
  <!-- コンテンツがない時の表示 -->
  <p>記事はありません</p>
<?php endif; ?><!-- loop終了 -->
<?php wp_reset_postdata(); ?>


<!-- ■■■■■■ ループ内の記述 ■■■■■■ -->

<?php the_title(); ?>
<?php the_permalink(); ?>
<?php the_time('Y.m.d'); ?>
<?php the_post_thumbnail(); ?>
<?php the_field(''); ?>


<!-- サムネイル画像の使用 -->
<?php if(has_post_thumbnail()): ?>
<?php 
  $title= get_the_title();//タイトルを取得
  the_post_thumbnail(array( 220,9999 ),//サムネイル画像サイズ指定
  array( 'alt' =>$title, 'title' => $title));//alt tttleに設定
 ?>
<?php else: ?>
<img src="<?php echo get_template_directory_uri(); ?>/images/img_00.svg" alt="">
<?php endif; ?>


<?php
// リンク無しターム出力　※クラス付与
$terms = get_the_terms($post->ID,'news_type');
if ( $terms ) {
  echo '<div class="cat">';
  foreach ( $terms as $term ) {
    $term_slug = $term -> slug;
    echo ('<span class="');
    echo esc_html($term_slug);
    echo '">'.$term->name.'</span>';
  }
  echo '</div>';
}
?>


<!-- カスタムフィールド有無での使用 -->
<?php if(get_field('')): ?>
  <!-- 有：内容 -->
<?php else: ?>
  <!-- 無：内容 -->
<?php endif; ?>

<!-- 繰り返しフィールド -->
<?php if(have_rows('group')): ?>
<?php while(have_rows('group')): the_row(); ?>
  <!-- ▼サブフィールド -->
  <?php the_sub_field('group_sub'); ?>
  <!-- ▼サブフィールドの有無 -->
  <?php if(get_sub_field('group_sub')): ?>
    <?php the_sub_field('group_sub'); ?>
  <?php endif; ?>

<?php endwhile; ?>
<?php endif; ?>



<!-- ループ内で　投稿から特定のタクソノミタームで条件分岐 -->
<?php
$terms_taxonomySlug = get_the_terms($post->ID, 'taxonomySlug');
if($terms_taxonomySlug){
  foreach( $terms_taxonomySlug as $term ) {
    if($term->slug === 'aaa'){
      echo '<p>AAAA</p>';
    }elseif($term->slug === 'bbb'){
      echo '<p>BBBB</p>';
    }elseif($term->slug === 'ccc'){
      echo '<p>CCCC</p>';
    }elseif($term->slug === 'ddd'){
      echo '<p>DDDD</p>';
    }
  }
}
?>




<!-- ■■■■■■ ループ外の記述 ■■■■■■ -->


<!-- ターム リンク付き 一覧 -->
<?php
$tags = get_terms('product_tag');
foreach ($tags as $tag) {
    echo '<a href="' . get_tag_link($tag->term_id) . '" class="tag '.$tag->slug.'">' . $tag->name . '</a>';
}
?>

<!-- ターム リンク付き 一覧 ※親タームのみ -->
<?php
$terms_category = get_terms('type_company',['parent' => 0]);
foreach ($terms_category as $tag) {
    echo '<a href="' . get_tag_link($tag->term_id) . '" class="tag '.$tag->slug.'">' . $tag->name . '</a>';
}
?>


<?php 
  $url = $_SERVER['REQUEST_URI'];//現在のURL取得
  $term_object = get_queried_object(); // タームオブジェクトを取得
  $slug = $term_object->slug; // タームスラッグ
  $url_product = home_url().'/product/case/'.$slug.'/';
?>
<!-- select option ソート　カスタムフィールド値を使用 -->
<div class="productList_order">
  <select onchange="location.href=value;">
    <option value="<?php echo esc_url($url_product); ?>">並び順</option>
    <option value="<?php echo esc_url(add_query_arg( array('order' => 'ASC', 'sort' => 'date'), $url_product ) ); ?>"<?php if(strstr($url,'sort=date') and strstr($url,'order=DESC') ): ?>selected<?php endif; ?>>新着順</option>
    <option value="<?php echo esc_url(add_query_arg( array('meta_key' => 'product_subttl', 'orderby' => 'meta_value', 'order' => 'ASC' ), $url_product ) ); ?>"<?php if(strstr($url,'meta_key=product_subttl&orderby=meta_value&order=ASC')): ?>selected<?php endif; ?>>製品名順（昇順）</option>
    <option value="<?php echo esc_url(add_query_arg( array('meta_key' => 'product_subttl', 'orderby' => 'meta_value', 'order' => 'DESC' ), $url_product ) ); ?>"<?php if(strstr($url,'meta_key=product_subttl&orderby=meta_value&order=DESC')): ?>selected<?php endif; ?>>製品名順（降順）</option>
    <option value="<?php echo esc_url(add_query_arg( array('meta_key' => 'product_model', 'orderby' => 'meta_value', 'order' => 'ASC' ), $url_product ) ); ?>"<?php if(strstr($url,'meta_key=product_model&orderby=meta_value&order=ASC')): ?>selected<?php endif; ?>>型番順（昇順）</option>
    <option value="<?php echo esc_url(add_query_arg( array('meta_key' => 'product_model', 'orderby' => 'meta_value', 'order' => 'DESC' ), $url_product ) ); ?>"<?php if(strstr($url,'meta_key=product_model&orderby=meta_value&order=DESC')): ?>selected<?php endif; ?>>型番順（降順）</option>
  </select>
</div>

<?php if(strstr($url,'aaaaa')): ?>
  <!-- URLに文字列を含む場合の内容 -->
<?php endif; ?>



<!-- ■■■■■■ ページャー  プラグイン：wp_pagenavi ■■■■■■ -->
<!-- ▼デフォルト -->
<?php if(function_exists('wp_pagenavi')) { wp_pagenavi(); } ?>
<!-- ▼wp_query使用時 -->
<?php if(function_exists('wp_pagenavi')) { wp_pagenavi(array('query' => $the_query)); } ?>


<!-- ■■■■■■パンくずリスト  プラグイン：Breadcrumb NavXT ■■■■■■ -->
<div class="breadcrumbs" typeof="BreadcrumbList" vocab="https://schema.org/">
  <?php if(function_exists('bcn_display')){bcn_display();}?>
</div>


<!-- ■■■■■■ ショートコード ■■■■■■ -->
<?php echo do_shortcode('[]'); ?>
