<?php
/*
Template Name: 子ページへリダイレクト
*/
$childpage = current( get_children( 'post_type=page&numberposts=1&post_parent=' . get_the_ID() ) );
if ( $childpage ) :
  // 子ページがある場合
  $location = $childpage->guid;
  $status = 301;
  wp_redirect( $location, $status );
  exit;
else :
  // 子ページがない場合は通常の固定ページと同じにしておくと安全。
endif;
?>