<?php
//----------------------------------------------------------------------
//概要：フォームプログラム
//作成：fujimoto@penseur.co.jp
//
//----------------------------------------------------------------------
//▼ベースパス
define('BASEPATH',realpath(dirname(__FILE__)));

//▼ライブラリ読み込み
require_once(BASEPATH.'/lib/helper.php');			//CIより
require_once(BASEPATH.'/lib/Form_validation.php');	//CIより

//▼処理実行
require_once(BASEPATH.'/lib/config.php');			//設定ファイル
require_once(BASEPATH.'/lib/execute.php');			//処理実行ファイル

//----------------------------------------------------------------------
//HTML出力処理
//----------------------------------------------------------------------
//▼テンプレートヘッダの読み込み
include(BASEPATH."/lib/include/common/header_inc.php");

//▼ボディの書き込み
if( $error_msg != '' ){
	//▼エラー画面
	echo "<p>".h($error_msg, true)."</p>";

}else{

	//▼サブミットアクション
	switch($mode){
		case "confirm":
			//--------------------------------------------------
			//確認画面
			//--------------------------------------------------
			include_once(BASEPATH."/lib/include/inc_confirm.php");
			break;

		case "send":
			//--------------------------------------------------
			// 完了画面
			//--------------------------------------------------
			include_once(BASEPATH."/lib/include/inc_thanks.php");
			break;

		default:
			//--------------------------------------------------
			//入力
			//--------------------------------------------------
			include_once(BASEPATH."/lib/include/inc_input.php");
			break;
	}//
}///

//▼テンプレートフッタの読み込み
include(BASEPATH."/lib/include/common/footer_inc.php");

?>
