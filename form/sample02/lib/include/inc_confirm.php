<?php if (!defined('BASEPATH')) exit('No direct script access allowed'); ?>
<!--
==============================================
main
=============================================
-->
<section class="sec_contents">
	<h2 class="pages_ttl">お問い合わせフォーム</h2>
	<p class="confirm_txt">入力内容を確認し、問題無ければ<br class="sp">「送信」をクリックして下さい。</p>
	<form class="confirm_item">
		<dl class="form_dl">
			<dt>御社名</dt>
			<dd><?php echo h($form_field['company_name']);?></dd>
			<dt>お名前</dt>
			<dd><?php echo h($form_field['user_name']);?></dd>
			<dt>連絡先お電話番号</dt>
			<dd><?php echo h($form_field['tel']);?></dd>
			<dt>連絡先メールアドレス</dt>
			<dd><?php echo h($form_field['email']);?></dd>
			<dt>お問い合わせ内容</dt>
			<dd>
				<?php echo nl2br(h($form_field['contact_category']));?>
			</dd>
			<dt>お役に立つ情報のメール配信</dt>
			<dd><?php echo h($form_field['mail_magazine']);?></dd>
            <dt>資料請求</dt>
			<dd><?php echo h(join(",",$form_field['catalog']));?></dd>
            <dt>問い合わせ種別</dt>
			<dd><?php echo h($form_field['category']);?></dd>
		</dl>
		<p class="confirm_txt">記入内容にお間違いがなければ<br class="sp">送信するをクリックしてください。</p>
		<div class="confirm_submit_area">
			<p class="form_submit"><input type="button" class="btn_submit return" id="btn_contact_back" value="入力内容を修正"></p>
			<p class="form_submit"><input type="button" class="btn_submit" id="btn_contact_send" value="送信する"></p>
		</div>
	</form>

	<form method="post" action="./index.php?complete" id="contact_form_send">
		<input type="hidden" name="mode" value="send" >
		<input type="hidden" name="token" value="<?php echo h($_SESSION['token']);?>">
	</form>

	<form method="post" action="./index.php" id="contact_form_back">
		<input type="hidden" name="mode" value="back">
	</form>
</section>
