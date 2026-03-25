<?php get_header(); ?>

<!--■■■■■ l-main ■■■■■-->
<main class="l-main" id="main">
  <div class="l-main_inner">

    <?php
      if (have_posts()) :
      while (have_posts()) :
      the_post();
      remove_filter('the_content', 'wpautop'); // 記事やページを作成時、自動的に <p> でくくられれないようにする
      the_content(); // cobtentをループで挟むと管理画面の内容が出てくる
      add_filter('the_content', 'wpautop'); // 特定の箇所のみPタグを無効化
      endwhile;
      endif;
    ?>

  </div><!-- main_inner -->
</main>
<!--■■■■■ l-main ■■■■■-->

<?php get_footer(); ?>