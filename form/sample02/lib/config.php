<?php if (!defined('BASEPATH')) exit('No direct script access allowed');
//----------------------------------------------------------------------
//概要：フォームプログラム設定ファイル
//作成：fujimoto@penseur.co.jp
//
//----------------------------------------------------------------------
//▼エラー制御
error_reporting(0);

//----------------------------------------------------------------------
//▼セッション名
define("SESS_NAME","contact");

//▼セッション設定
session_start();

//----------------------------------------------------------------------
//▼ロケール設定＆文字コード：メールの文字化け対策
setlocale(LC_ALL, 'ja-JP');
mb_language('uni');
mb_internal_encoding('UTF-8');
date_default_timezone_set('Asia/Tokyo');

//----------------------------------------------------------------------
//メール設定
//----------------------------------------------------------------------
$mail_conf = array(
	'to'          => array(
		'check@penseur.co.jp',
		//'web@penseur.co.jp',	//本番
	),
	'from'        => 'check@penseur.co.jp',
	'from_name'   => '送信元メールアドレス',
	'title_user'  => 'お問い合わせ',
	'title_admin' => 'お問い合わせがありました',
);

//----------------------------------------------------------------------
//確認画面設定
//----------------------------------------------------------------------
$form_confirm = true;	//true（表示） or false（非表示）

//----------------------------------------------------------------------
//フォーム構成（CIに依存する）
//----------------------------------------------------------------------
//element	input_text
//			textarea
//
$field_conf = 	array(
	'company_name' => array(
		'field' 	=> 'company_name',
		'label' 	=> '御社名',
		'rules' 	=> 'max_length[200]',
		'element'	=> 'input_text',
	),
	'user_name' => array(
		'field' 	=> 'user_name',
		'label' 	=> 'お名前',
		'rules' 	=> 'required|max_length[200]',
		'element'	=> 'input_text',
	),
	'tel' => array(
		'field' => 'tel',
		'label' => '連絡先お電話番号',
		'rules' => 'required|valid_tel|max_length[200]',
		'element'		=> 'input_text',
	),
	'email' => array(
		'field' => 'email',
		'label' => '連絡先メールアドレス',
		'rules' => 'required|valid_email|matches[email_confirm]|max_length[200]',
		'element'		=> 'input_text',
	),
	'email_confirm' => array(
		'field' => 'email_confirm',
		'label' => '連絡先メールアドレス（確認用）',
		'rules' => 'required|valid_email|max_length[200]',
		'element'		=> 'input_text',
	),
    'contact' => array(
		'field' => 'contact',
		'label' => 'お問い合わせ内容',
		'rules' => 'required',
		'element'		=> 'textarea',
	),
	'mail_magazine' => array(
		'field' => 'mail_magazine',
		'label' => 'メール配信希望',
		'rules' => '',
		'element'	=> 'input_radio',
		'element_value' => array("希望する","希望しない")
	),
    'catalog' => array(
		'field' => 'catalog',
		'label' => '資料請求',
		'rules' => 'required_check',
        'element'	=> 'input_check',
		'element_value' 	=> array('商品A','商品B')
	),
    'category' => array(
		'field' => 'category',
		'label' => '問い合わせ種別',
		'rules' => 'required_select',
        'element'	=> 'select',
		'element_value' 	=> array('採用に関する問い合わせ','商品に関する問い合わせ')
	),
	'privacy' => array(
		'field' => 'privacy',
		'label' => '個人情報規約',
		'rules' => 'required',
		'element'		=> 'input_check',
	),
);
//----------------------------------------------------------------------
//計測タグ関連
//----------------------------------------------------------------------
//▼入力画面
//<head>タグの後に出力
$tag_input_head_sta = <<<EOT
EOT;
//</head>タグの前に出力
$tag_input_head_end = <<<EOT
EOT;
//<body>タグの後に出力
$tag_input_body_sta = <<<EOT
EOT;
//</body>タグの前に出力
$tag_input_body_end = <<<EOT
EOT;

//▼確認画面
//<head>タグの後に出力
$tag_confirm_head_sta = <<<EOT
EOT;
//</head>タグの前に出力
$tag_confirm_head_end = <<<EOT
EOT;
//<body>タグの後に出力
$tag_confirm_body_sta = <<<EOT
EOT;
//</body>タグの前に出力
$tag_confirm_body_end = <<<EOT
EOT;

//▼完了画面
//<head>タグの後に出力
$tag_send_head_sta = <<<EOT
EOT;
//</head>タグの前に出力
$tag_send_head_end = <<<EOT
EOT;
//<body>タグの後に出力
$tag_send_body_sta = <<<EOT
EOT;
//</body>タグの前に出力
$tag_send_body_end = <<<EOT
EOT;
?>
