<?php
/**
 * The template for displaying all single posts
 *
 * @link       https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 * @package    WordPress
 * @subpackage 
 * @since      1.0.0
 */
?>

<?php get_header(); ?>

<!--■■■■■ l-main ■■■■■-->
<main class="l-main" id="main">
  <div class="l-main_inner">

    <?php if(have_posts()): while(have_posts()):the_post(); ?>

    <!-- コンテンツを配置 -->

    <?php endwhile; endif; ?>

  </div><!-- main_inner -->
</main>
<!--■■■■■ l-main ■■■■■-->

<?php get_footer(); ?>