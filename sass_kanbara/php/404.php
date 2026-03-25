<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package WordPress
 * @subpackage 
 * @since 1.0.0
 */
?>

<?php get_header(); ?>

<!--■■■■■ main ■■■■■-->
<main class="l-main" id="main">
  <div class="l-main_inner">

    <!-- not_found_404 -->
    <div class="sec anchor" id="not_found_404">
      <div class="sec_inner pt50 pb100" id="c-not_found_404">
        <div class="mod_inner">

        <h2 class="ttl">お探しのページが見つかりません</h2>
        <p>お客様がお探しのページは見つかりませんでした。</p>
        <p class="error_url">URL ：<span><?php echo get_pagenum_link(); ?></span></p>
        <p>該当のページはアドレスが変更されたか、削除された可能性がございます。</p>
        <div class="mt50">
          <a href="<?php echo home_url(); ?>" class="btn"><span>TOPページに戻る</span></a>
        </div>

        </div>
      </div>
    </div>
    <!-- /formArea -->

  </div><!-- main_inner -->
</main>
<!--■■■■■ main ■■■■■-->

<?php get_footer(); ?>
