<?php get_header(); ?>

<!--■■■■■ main ■■■■■-->
<main id="main">
  <div class="main_inner">


    <!-- 検索結果ページで「検索ワード」と「件数」表示 -->
    <div class="productList_ttl">
      <p>
      <?php if (isset($_GET['s']) && empty($_GET['s'])):?>
        検索キーワード未入力</p>
      <?php else:?>
        「<?php echo esc_html($_GET['s']) ?>」の検索結果：<?php echo $wp_query->found_posts; ?>件
      <?php endif; ?>
      </p>
    </div>


    <!-- 検索結果を引き継いでソートする -->
    <?php 
      $url = $_SERVER['REQUEST_URI'];
      $url_product = home_url().'/product/';
    ?>
    <div class="productList_order">
      <select onchange="location.href=value;">
        <option value="<?php echo esc_url(add_query_arg( array('s' => $_GET['s'] ), $url_product ) ); ?>">並び順</option>
        <option value="<?php echo esc_url(add_query_arg( array('order' => 'ASC', 'sort' => 'date','s' => $_GET['s'] ), $url_product ) ); ?>"<?php if(strstr($url,'sort=date&order=DESC')): ?>selected<?php endif; ?>>新着順</option>
        <option value="<?php echo esc_url(add_query_arg( array('meta_key' => 'product_subttl', 'orderby' => 'meta_value', 'order' => 'ASC','s' => $_GET['s'] ), $url_product ) ); ?>"<?php if(strstr($url,'meta_key=product_subttl&orderby=meta_value&order=ASC')): ?>selected<?php endif; ?>>製品名順（昇順）</option>
        <option value="<?php echo esc_url(add_query_arg( array('meta_key' => 'product_subttl', 'orderby' => 'meta_value', 'order' => 'DESC','s' => $_GET['s'] ), $url_product ) ); ?>"<?php if(strstr($url,'meta_key=product_subttl&orderby=meta_value&order=DESC')): ?>selected<?php endif; ?>>製品名順（降順）</option>
        <option value="<?php echo esc_url(add_query_arg( array('meta_key' => 'product_model', 'orderby' => 'meta_value', 'order' => 'ASC','s' => $_GET['s'] ), $url_product ) ); ?>"<?php if(strstr($url,'meta_key=product_model&orderby=meta_value&order=ASC')): ?>selected<?php endif; ?>>型番順（昇順）</option>
        <option value="<?php echo esc_url(add_query_arg( array('meta_key' => 'product_model', 'orderby' => 'meta_value', 'order' => 'DESC','s' => $_GET['s'] ), $url_product ) ); ?>"<?php if(strstr($url,'meta_key=product_model&orderby=meta_value&order=DESC')): ?>selected<?php endif; ?>>型番順（降順）</option>
      </select>
    </div>


    <!-- searchArea -->
    <?php get_template_part('searchArea');?>
    <!-- /searchArea -->
    
    
  </div><!-- main_inner -->
</main>
<!--■■■■■ main ■■■■■-->
<?php get_footer(); ?>
