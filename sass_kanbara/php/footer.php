<?php
/**
 * The template for displaying the footer
 *
 * @link       https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package    WordPress
 * @subpackage 
 * @since      1.0.0
*/
?>

<!--■■■■■ footer ■■■■■-->
  <footer class="l-footer">
    <div class="ftInner">

      <div class="ftLogo"><a href="<?php echo home_url(); ?>/"><img src="<?php echo get_template_directory_uri(); ?>/images/common/logo_w.svg" alt="<?php bloginfo( 'name' ); ?>"></a></div>
      <div class="copyright"><small>Copyright &copy;</small></div>
      
    </div><!--/ft_inner-->
  </footer>
<!--■■■■■ l-footer ■■■■■-->
</div><!--/#container-->

<?php wp_footer(); ?>

</body>
</html>