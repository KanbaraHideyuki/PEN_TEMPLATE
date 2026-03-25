<?php if (!defined('BASEPATH')) exit('No direct script access allowed');
//----------------------------------------------------------------------
//概要：フォームプログラム：ヘルパー
//作成：fujimoto@penseur.co.jp
//
//----------------------------------------------------------------------
//概要：htmlエンティティ変換のラップ
function h($v, $br = false){
	if($br){
		return nl2br(htmlspecialchars($v, ENT_QUOTES));
	}else{
		return htmlspecialchars($v, ENT_QUOTES);
	}
}//
//----------------------------------------------------------------------
//概要：デバッグ出力
function d($v, $e = 0){
	echo '<pre>' . print_r($v, true) . '</pre>';
	if($e){ exit; }
}//
//----------------------------------------------------------------------
/**
 * メールの文字化け対策で文字分割（mb_）
 * @param string
 * @param int
 * @return string
 */
function word_wrap($msg = '', $n = 74){
	return preg_replace("/([^\r\n]{{$n}})/uD", "\\1\n", $msg);
}//
//----------------------------------------------------------------------
//概要：フォームでの送信用配列データ暗号化＆複合化
function array2serialize($p = array(), $type = 'enc'){
	if( $type == 'enc' ){
		return base64_encode(serialize($p));
	}else{
		return unserialize(base64_decode($p));
	}
}//
//----------------------------------------------------------------------
//概要：ajaxリクエストの判別
function is_ajax() {
	if( !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest' ){
		return true;
	}
	return false;
}//
//----------------------------------------------------------------------
//概要：json出力
function json_output($json = array()){
	header("Content-Type: text/javascript; charset=utf-8");
	echo json_encode($json);
	exit;
}//