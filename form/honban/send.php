<?php
$data = $_POST;

$to      = 'check@penseur.co.jp';
$subject = 'タイトル';
$message = '本文'. $data[“user_id”];
$headers = 'From: check@penseur.co.jp' . "\n";
$header .= "Return-Path: check@penseur.co.jp \n";
$header .= "Sender: fujimoto@penseur.co.jp \n";
$header .= "Reply-To: check@penseur.co.jp \n";

echo '<!DOCTYPE html>';
echo '<html lang="ja">';
echo '<head>';
echo '<meta charset="utf-8">';
echo '</head>';
echo '<body>';
echo $data['user_id'];

if(mb_send_mail($to, $subject, $message, $headers,"-f fujimoto@penseur.co.jp"))
{
  echo "メール送信成功です";
}
else
{
  echo "メール送信失敗です";
}

echo '</body>';
echo '</html>';
