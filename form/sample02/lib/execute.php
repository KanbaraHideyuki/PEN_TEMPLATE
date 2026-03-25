<?php if (!defined('BASEPATH')) exit('No direct script access allowed');
//----------------------------------------------------------------------
//概要：フォームプログラム：本処理
//作成：fujimoto@penseur.co.jp
//----------------------------------------------------------------------
//▼エラーメッセージ初期化
$error_msg = "";

//▼モードの取得
$mode = $_REQUEST['mode'];

//▼処理振り分け
switch( $mode ){
	case "validation":

		//----------------------------------------
		//入力チェック（レスポンスはjson）
		//----------------------------------------
		//▼ajaxチェック
		if( ! is_ajax() ) exit();

		//▼初期化
		$form_field 	= array();	//セッション保存・フォーム用データ
		$json 		= array(	//json
						'res'   => 'NG',
						'error' => array(),
						'token' => '',
					);

		//▼バリデーションルールの取得
		$rules = $field_conf;

		//▼バリデーション実行
		$form_validation = new Form_validation;
		$form_validation->set_rules($rules);

		if( $form_validation->run() ){

			//▼フォーム項目の設定
			foreach ( $rules as $key => $value ){

				if ( isset($_POST[$key]) ){
					$form_field[$key] = $_POST[$key];
				}
			}

			//▼トークン作成
			$token = md5(uniqid(rand(), true));

			//▼セッション
			$_SESSION[SESS_NAME]	= $form_field;
			$_SESSION['token']		= $token;

			//▼入力OK
			$json['res']   = 'OK';
			$json['token'] = $token;

		}else{
			// 入力エラー
			$json['error'] = $form_validation->_error_array;
		}

		//▼返り値
		json_output($json);

		break;

	case "confirm":
		//----------------------------------------
		//確認画面表示
		//----------------------------------------
		//▼セッションデータ
		$form_field = $_SESSION[SESS_NAME];

		//▼フォーム確認スキップ
		if( $form_confirm == false ){
			header("location:./index.php?mode=send&token=".$_SESSION['token']);
		}

		break;


	case "send":

		//----------------------------------------
		// 完了
		//----------------------------------------
        if ($_SESSION['token'] == $_REQUEST['token']) {
            //▼セッションデータの取得
            $form_field = $_SESSION[SESS_NAME];

            //▼日付
            $time = time();
            $form_field["unixtimestamp"] = $time;
            $form_field["date"] = date("Y/m/d H:i:s", $time);

            //▼メール本文初期化
            $parser = new Parser;
            $data = array(
				'mail_body' => '',
				'date_now'  => $form_field["date"],
			);

            //▼項目の取得
            foreach ($field_conf as $key => $value) {
                if (strlen($form_field[$key]) > 0 || is_array($form_field[$key])) {

                //▼配列対応
                    if (is_array($form_field[$key])) {
                        $field_val = implode("\n", $form_field[$key]);
                    } else {
                        $field_val = $form_field[$key];
                    }

                    $data[$key] = $field_val;
                } else {
                    $data[$key] = "";
                }
            }


            //▼メール送信（管理者）
            //▼メールヘッダ
            $m_headers = "From: ".mb_encode_mimeheader($mail_conf['from_name'], "UTF-8")."<" .$mail_conf['from'] ."> \n";

            //▼メールボディ
            $m_body = $parser->parse(BASEPATH . '/lib/'.'/mail/mail_admin.txt', $data);

            if (! is_array($mail_conf['to'])) {
                $mail_conf['to'] = array($mail_conf['to']);
            }

            foreach ($mail_conf['to'] as $to) {
                mb_send_mail($to, $mail_conf['title_admin'], $m_body, $m_headers);
            }

            //▼メール送信（ユーザ）
            if ($form_field['email']) {

            //▼メールヘッダ
                $m_headers = "From: ".mb_encode_mimeheader($mail_conf['from_name'], "UTF-8")."<" .$mail_conf['from'] ."> \n";

                //▼メールボディ
                $m_body = $parser->parse(BASEPATH . '/lib/'.'/mail/mail_user.txt', $data);

                mb_send_mail($form_field['email'], $mail_conf['title_user'], $m_body, $m_headers);
            }
        }

		//▼セッション消去
		$_SESSION[SESS_NAME]	= array();
		$_SESSION['token']		= '';
		break;

	default:
		//----------------------------------------
		// 入力画面
		//----------------------------------------
		//▼モードの設定
		$mode = "input";

		//▼フォーム初期化
		if( $_REQUEST['mode'] == 'back' && isset($_SESSION[SESS_NAME]) ){
			$form_field = $_SESSION[SESS_NAME];

		}else{

			$form_field = array();

			foreach ( $field_conf as $key => $value ){

				if ( isset($value['is_array']) && $value['is_array'] ){
					$form_field[$key] = array();
				}else{
					$form_field[$key] = '';
				}
			}
		}
		break;
}///

?>
