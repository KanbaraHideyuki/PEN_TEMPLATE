<?php
/**
 * The header for our theme
 *
 * @link    https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package    WordPress
 * @subpackage seiko
 * @since      1.0.0
 */
?>


<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>

<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title><?php wp_title(); ?></title>

<!--<meta name="description" content="<?php //bloginfo( 'description' ); ?>">-->

<meta name="format-detection" content="telephone=no">
<link rel="apple-touch-icon" href="<?php echo home_url(); ?>/apple-touch-icon.png">
<link rel="icon" href="<?php echo home_url(); ?>/favicon.ico">

<!-- js -->
<?php wp_deregister_script('jquery'); ?>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-migrate/3.1.0/jquery-migrate.min.js"></script>


<?php if (is_page(array('contact','apply','download'))):?>
  <link rel ="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <script src="//ajaxzip3.github.io/ajaxzip3.js" charset="UTF-8"></script>
  <script>
    jQuery(function($) {
      $('.zip-button').click(function(){
        AjaxZip3.zip2addr('zip1','zip2','pref','address');
      });
    });
  </script>
<?php endif;?>

<?php wp_head(); ?>

</head>

<body>


<?php if (is_home() || is_front_page()): ?>
<div id="container" class="top">
<?php elseif (is_page()):?>
<div id="container" class="<?php echo esc_attr($post->post_name);?>">
<?php else:?>
<div id="container">
<?php endif;?>


<!--■■■■■ header ■■■■■-->

  <header>
    
	</header>


<!--■■■■■ /header ■■■■■-->
