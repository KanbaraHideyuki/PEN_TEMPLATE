<?php

//アイキャッチ表示	
add_theme_support('post-thumbnails');

/*
 *サイトurlのショートコード
 *
 *使い方例 <a href="[url]/hoge/hoge/">
*/

//ショートコード
add_shortcode('url', 'shortcode_url');
function shortcode_url() {
    return esc_url( home_url() );
}

//　assets/パス変換
function imagepassshort($arg) {
  $theme_url = get_bloginfo('template_directory');
  $search = ['"assets/', ', assets/'];
  $replace = ['"' . $theme_url . '/assets/', ', ' . $theme_url . '/assets/'];
  $content = str_replace($search, $replace, $arg);
  return $content;
}
add_action('the_content', 'imagepassshort');

//svgのメディアアップロードを許可
add_filter('upload_mimes', 'set_mime_types');
function set_mime_types($mimes) {
	$mimes['svg'] = 'image/svg+xml';
	return $mimes;
}


// プレビューのリンクの修正
//function replace_preview_post_link( $url ) {
//	$replace_url = str_replace(home_url(), site_url(), $url);
//	return $replace_url;
//}
//add_filter('preview_post_link', 'replace_preview_post_link');


// ショートコードを有効にする
function Include_my_php($params = array()) {
    extract(shortcode_atts(array(
        'file' => 'default'
    ), $params));
    ob_start();
    include(get_theme_root() . '/' . get_template() . "/$file.php");
    return ob_get_clean();
}
add_shortcode('myphp', 'Include_my_php');

//親ページを取得
// function is_parent_slug() {
//   global $post;
//   if( !is_404() ){
//     if ($post->post_parent) {
//       $post_data = get_post($post->post_parent);
//       return $post_data->post_name;
//     }
//   }
// }
function is_parent_slug() {
  // 404ページでは早期リターン
  if (is_404()) {
    return false;
  }
  // 現在の投稿IDを取得
  $post_id = get_the_ID();
  if (!$post_id) {
    return false;
  }
  // 親ページIDを取得
  $parent_id = wp_get_post_parent_id($post_id);
  if ($parent_id) {
    $post_data = get_post($parent_id);
    return $post_data ? $post_data->post_name : false;
  }
  return false;
}

// ACFのオプション設定を反映させる（ボックス配置データを削除する）
function clear_meta_box_order(){
  // 通常の投稿ページの編集画面
  delete_user_meta( wp_get_current_user()->ID, 'meta-box-order_post' );
  // カスタム投稿ページの編集画面
  delete_user_meta( wp_get_current_user()->ID, 'meta-box-order_news' );
  // カスタム投稿ページの編集画面
  delete_user_meta( wp_get_current_user()->ID, 'meta-box-order_product' );
}
add_action( 'admin_init', 'clear_meta_box_order' );

//タクソノミーのチェックボックス、初期チェック
add_action( 'admin_head-post-new.php', 'default_taxonomy_select' );
function default_taxonomy_select() {
?>
  <script type="text/javascript">
    jQuery(function($) {
      $('#news_typechecklist li:first-child input[type="checkbox"]').prop('checked', true);//ニュースのタイプ
      $('#event_typechecklist li:first-child input[type="checkbox"]').prop('checked', true);//イベントのタイプ
    });
  </script>
<?php
}

//タクソノミーのチェックボックス、ターム親子階層を維持する
function solecolor_wp_terms_checklist_args( $args, $post_id ){
  if ( $args['checked_ontop'] !== false ){
       $args['checked_ontop'] = false;
  }
  return $args;
}
add_filter('wp_terms_checklist_args', 'solecolor_wp_terms_checklist_args',10,2);



/**---------------
* 検索から固定ページを除外
-----------------*/

function search_pre_get_posts( $query ) {
  if ( $query->is_search && !is_admin() ){
  $query->set( 'post__not_in', array(43,23,17,20,13,8,48,46) );
  }
  return $query;
  }
add_action( 'pre_get_posts', 'search_pre_get_posts' );

/**---------------
* 検索
-----------------*/

//カスタム投稿タイプの検索
add_filter('template_include','custom_search_template');
function custom_search_template($template){
  if ( is_search() ){
    $post_types = get_query_var('post_type');
    foreach ( (array) $post_types as $post_type )
      $templates[] = "search-{$post_type}.php";
      $templates[] = 'search.php';
      $template = get_query_template('search',$templates);
     }
  return $template;
}

/**---------------
* ソートにカスタムフィールド追加
-----------------*/

function add_meta_query_vars( $public_query_vars ) {
  $public_query_vars[] = 'meta_key'; //カスタムフィールドのキー
  $public_query_vars[] = 'meta_value'; //カスタムフィールドの値（文字列）
  return $public_query_vars;
}
add_filter( 'query_vars', 'add_meta_query_vars' );


/*---------------
* 子カテゴリチェック時に親カテゴリにチェック
-----------------*/
function category_parent_check_script() {
  ?>
  <script>
  jQuery(function($) {
    $('.categorydiv .children input').change(function() {
      function parentNodes(checked, nodes) {
        parents = nodes.parent().parent().parent().prev().children('input');
        if (parents.length != 0) {
          parents[0].checked = checked;
          parentNodes(checked, parents);
        }
      }
      var checked = $(this).is(':checked');
      $(this).parent().parent().siblings().children('label').children('input').each(function() {
        checked = checked || $(this).is(':checked');
      })
        parentNodes(checked, $(this));
    });
  });
  </script>
  <?php
  }
  add_action('admin_head-post-new.php', 'category_parent_check_script');
  add_action('admin_head-post.php', 'category_parent_check_script');



/**---------------
* Register Styles
-----------------*/

function my_styles() {
  wp_register_style('common-style', get_template_directory_uri() .'/css/common.css',array(),filemtime( get_theme_file_path('/css/common.css')));
  wp_register_style('main-style', get_template_directory_uri() .'/css/style.css',array(),filemtime( get_theme_file_path('/css/style.css')));
  wp_register_style('form', get_template_directory_uri() .'/css/form.css',array(),filemtime( get_theme_file_path('/css/form.css')));
  if (!is_admin()) {
    wp_enqueue_style('common-style');
    wp_enqueue_style('main-style');
    if (is_home() || is_front_page()) {
    } elseif (is_page(array('contact','apply','download','confirm','complete'))) {
      wp_enqueue_style('form');
    } else {
    }
  }
}
add_action( 'wp_enqueue_scripts', 'my_styles' );



/**---------------
* Register Scripts
-----------------*/

/*
function my_scripts() {
	if (!is_admin()) {
		//wp_deregister_script('jquery');
  	//wp_enqueue_script('jquery', '//cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js', array(), '3.4.1',false);
    wp_deregister_script('jquery-migrate');
    wp_enqueue_script('jquery-migrate', '//cdnjs.cloudflare.com/ajax/libs/jquery-migrate/3.1.0/jquery-migrate.min.js', array(), '3.1.0');
    wp_enqueue_script( 'main_script', get_template_directory_uri() . '/js/script.js', array(),filemtime( get_theme_file_path('/js/script.js')), true );
    wp_enqueue_script( 'ripples', get_template_directory_uri() . '/js/lib/jquery.ripples-min.js', array(),'2022', true );
    if (is_home() || is_front_page()) {
      wp_enqueue_script( 'scroll_anim', get_template_directory_uri() . '/js/scroll_anim.js', array(),filemtime( get_theme_file_path('/js/scroll_anim.js')), true );
      wp_enqueue_script( 'particles-min', get_template_directory_uri() . '/js/lib/particles.min.js', array(),'2022', true );
      wp_enqueue_script( 'setting', get_template_directory_uri() . '/js/lib/setting.js', array(),filemtime( get_theme_file_path('/js/lib/setting.js')), true );
      wp_enqueue_script( 'TweenMax', '//cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js', array(), "2022", true );
      wp_enqueue_script( 'ScrollMagic', '//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js', array(),'2.0.5', true );
      wp_enqueue_script( 'animation_gasp', '//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.min.js', array(),'2.0.5', true );
    } else {
      
    }
	}
}
add_action( 'wp_enqueue_scripts', 'my_scripts' );

*/

/**---------------
* MW WP FORM 「パラメータ改ざんによる不正なメール送信」対策コード
* id 41 
-----------------*/
function add_sender_info( $value, $key, $insert_contact_data_id ) {
  // 1行で終わるテキスト項目 改行コードを取り除く
  // 特に返信メール先頭に配置されてる「name」が大事 
  $targets = ["name","mail","company","department","position","zip1","zip2","pref","address"];
  foreach($targets as $target){
    if($target == $key){
      $value = preg_replace("/\n|\r|\r\n/", "", $value);
    }
  }
  return $value;
}
add_filter( 'mwform_custom_mail_tag_mw-wp-form-41', 'add_sender_info', 10, 3 );

/**---------------
* REST APIを無効
-----------------*/
function deny_restapi_except_plugins_demo( $result, $wp_rest_server, $request ){
  $namespaces = $request->get_route();

  //oembedの除外
  if( strpos( $namespaces, 'oembed/' ) === 1 ){
    return $result;
  }
  //Jetpackの除外
  if( strpos( $namespaces, 'jetpack/' ) === 1 ){
    return $result;
  }
  //MW WP FORMの除外
  if( strpos( $namespaces, 'mw-wp-form/' ) === 1 ){
    return $result;
  }

  return new WP_Error( 'rest_disabled', __( '' ), array( 'status' => rest_authorization_required_code() ) );
}
add_filter( 'rest_pre_dispatch', 'deny_restapi_except_plugins_demo', 10, 3 );

/**---------------
* キャッシュコントロール
-----------------*/
function my_header_cache_control() {
    if(
      is_page("confirm") || is_page("contact") || is_page("complete") || is_page("apply") || is_page("download") || 
      is_search() || is_tax() 
    ) {
      header( 'Cache-Control: no-store, no-cache, must-revalidate' );
      header( 'Cache-Control: post-check=0, pre-check=0', FALSE );
      header('Pragma:no-cache');
    } else {
      header('Expires: ' . gmdate( 'D, d M Y H:i:s', time() + 600 ) . ' GMT');
      header('Cache-Control: max-age=600, public');
    } 
}
add_action('template_redirect', 'my_header_cache_control');

/**---------------
* ログインセッション時間変更2
-----------------*/
// 一定期間経過で自動ログアウト
//remove_action('admin_enqueue_scripts', 'wp_auth_check_load');

/*
add_filter('auth_cookie_expiration', 'stay_logged_in' );
function stay_logged_in( $expire ) {
  return 60 * 30; //30分
}

//一定時間操作がない場合に自動ログアウト
function mytheme_admin_init() {
  add_filter('auth_cookie_expiration','mytheme_auth_cookie_expiration', 10, 3 );
  wp_set_auth_cookie( get_current_user_id(), true ,is_ssl(), wp_get_session_token());
}
function mytheme_auth_cookie_expiration( $expiration, $user_id, $remember ) {
  if ( $remember ) $expiration = 60 * 30; //30分
  return $expiration;
}
add_action( 'admin_init', 'mytheme_admin_init' );

*/

// wpバージョン情報非表示
remove_action('wp_head','wp_generator');


/**---------------
* mw wp form ダウンロード用 フィルターフック
-----------------*/

/**
 * タクソノミーのターム名をinputに引用する。
 * @param string  $value valueの初期値
 * @param string  $name name属性値
 */
function my_mwform_value( $value, $name ) {
  // $_GET['hoge']があったら、name属性がhogeの項目の初期値に設定
  if ( $name === 'group_company' && !empty( $_GET['post_id'] ) && !is_array( $_GET['post_id'] ) ) {
      $postId = $_GET['post_id'];
      $type = get_the_terms($postId,'type_company');
      foreach( $type as $term ) {
          $type = $term->name;
      }
      $value = $type;
  }
  return $value;
}
add_filter( 'mwform_value_mw-wp-form-873', 'my_mwform_value', 10, 2 );


/* ---------- 投稿カスタムフィールドを引数にして自動返信の内容を変える ---------- */
function my_mail_var( $Mail, $values, $Data ){
  if(get_post_meta($_GET['post_id'], 'case_toggle',true)){
    if(get_post_meta( $_GET['post_id'], 'dl_file', true ) ){
      $file = get_post_meta( $_GET['post_id'], 'dl_file', true );
      $file_url = wp_get_attachment_url( $file );
      //$file_anker = get_post_meta( $_GET['post_id'], 'file_anker', true );
      //$Mail->body .= '資料PDFは下記よりダウンロードいただけます。' . "\n" . $file_url . "\n" . "\n";
      $Mail->body .= $file_url;
    }
  }elseif(get_post_meta($_GET['post_id'], 'news_file',true)){
    $file = get_post_meta( $_GET['post_id'], 'news_file', true );
    $file_url = wp_get_attachment_url( $file );
    //$file_anker = get_post_meta( $_GET['post_id'], 'news_file_name', true );
    //$Mail->body .= '資料PDFは下記よりダウンロードいただけます。' . "\n" . $file_url . "\n" . "\n";
    $Mail->body .= $file_url;
  }else{
    if(have_rows( 'product_detail_txt', $_GET['post_id'] ) ){
      while (have_rows('product_detail_txt', $_GET['post_id'] ) ): the_row();
        $file = get_sub_field('file', $_GET['post_id'], true);
        $file_anker = get_sub_field('file_name', $_GET['post_id'], true);
      endwhile;
      //$Mail->body .= '資料「' . $file_anker . '」は下記よりダウンロードいただけます。' . "\n" . $file . "\n" . "\n";
      $Mail->body .= $file;
    }
  }
	return $Mail;
}
add_filter( 'mwform_auto_mail_mw-wp-form-873', 'my_mail_var', 10, 3 );
add_filter( 'mwform_admin_mail_mw-wp-form-873', 'my_mail_var', 10, 3 );


// mw-wp-form ダウンロード用 送信先設定
function change_admin_address_mwform($Mail, $values, $Data) {
  $postId = $_GET['post_id'];
  $type = get_the_terms($postId,'type_company');
  foreach( $type as $term ) {
      $company = $term->name;
      if ( $company === 'セイコーNPC株式会社'){
        $Mail->to = 'NPC@example.jp';
        return $Mail;
      }else if ( $company === 'セイコーインスツル株式会社'){
        $Mail->to = 'SII@example.jp';
        return $Mail;
      }else if ( $company === 'セイコーソリューションズ株式会社'){
        $Mail->to = 'SSOL@example.jp';
        return $Mail;
      }else if ( $company === 'セイコータイムクリエーション株式会社'){
        $Mail->to = 'STC@example.jp';
        return $Mail;
      }
  }
}
add_filter('mwform_admin_mail_mw-wp-form-873', 'change_admin_address_mwform', 10, 3);



/**---------------
* mw wp form イベント申し込み フィルターフック
-----------------*/


// mw-wp-form イベント申し込み用 送信先設定
function change_admin_address_event_mwform($Mail, $values, $Data) {
	$post_id = $_GET['post_id'];
	$company = get_post_meta($post_id, 'event_company', true);
  if ( $company === 'セイコーNPC株式会社'){
    $Mail->to = 'NPC@example.jp';
    return $Mail;
  }else if ( $company === 'セイコーインスツル株式会社'){
    $Mail->to = 'SII@example.jp';
    return $Mail;
  }else if ( $company === 'セイコーソリューションズ株式会社'){
    $Mail->to = 'SSOL@example.jp';
    return $Mail;
  }else if ( $company === 'セイコータイムクリエーション株式会社'){
    $Mail->to = 'STC@example.jp';
    return $Mail;
  }
	return $Mail;
}
add_filter('mwform_admin_mail_mw-wp-form-899', 'change_admin_address_event_mwform', 10, 3);


?>