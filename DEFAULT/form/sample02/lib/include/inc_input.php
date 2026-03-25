<?php if (!defined('BASEPATH')) exit('No direct script access allowed'); ?>

<!--
==============================================
main
=============================================
-->
<section>
	<h2 class="pages_ttl">お問い合わせフォーム</h2>

	<form method="post" action="./index.php" id="contact_form" onSubmit="return false;">
		<dl class="form_dl">
			<dt>御社名</dt>
			<dd><input type="text" class="inputs" name="company_name" placeholder="例）サンプル" value="<?php echo $form_field["company_name"]; ?>"></dd>

			<dt>お名前<span class="must">&#8251;必須</span></dt>
			<dd id="_field_user_name"><input type="text" class="inputs" name="user_name" value="<?php echo $form_field["user_name"]; ?>" placeholder="例）山田太郎"></dd>

			<dt>連絡先お電話番号<span class="must">&#8251;必須</span></dt>
			<dd id="_field_tel"><input type="text" class="inputs" name="tel" placeholder="例）03-111-1111" value="<?php echo $form_field["tel"]; ?>"></dd>

			<dt>連絡先メールアドレス<span class="must">&#8251;必須</span></dt>
			<dd id="_field_email"><input type="email" class="inputs" name="email" placeholder="sample＠sample.co.jp" value="<?php echo $form_field["email"]; ?>"></dd>

			<dt>連絡先メールアドレス（確認用）<span class="must">&#8251;必須</span></dt>
			<dd id="_field_email_confirm"><input type="email" class="inputs" name="email_confirm" placeholder="sample＠sample.co.jp" value="<?php echo $form_field["email_confirm"]; ?>"></dd>

			<dt>お問い合わせ内容<span class="must">&#8251;必須</span></dt>
			<dd id="_field_contact">
                <textarea name="contact" rows="5"><?php echo $form_field["contact"] ?></textArea>
			</dd>

			<dt>お役に立つ情報のメール配信</dt>
			<dd class="inquiry_col">
<?php
                foreach( $field_conf["mail_magazine"]["element_value"] as $key => $val ):
?>
                    <input type="radio" name="mail_magazine" class="form_radio" id="mail_magazine<?php echo $key; ?>" value="<?php echo $val; ?>"
<?php
                        if( $val==$form_field["mail_magazine"]){
                            echo "checked";
                        }
?>
                    ><label for="mail_magazine<?php echo $key; ?>"><?php echo $val; ?></label>
<?php
                endforeach;
?>
			</dd>

            <dt>資料請求<span class="must">&#8251;必須</span></dt>
            <dd id="_field_catalog">
<?php
                foreach( $field_conf["catalog"]["element_value"] as $key => $val ):
?>
                    <input type="checkbox" name="catalog[]" class="form_check" id="catalog<?php echo $key; ?>" value="<?php echo $val; ?>"
<?php
                        if( in_array($val,$form_field["catalog"])){
                            echo "checked";
                        }
?>
                    ><label for="catalog<?php echo $key; ?>"><?php echo $val; ?></label>
<?php
                endforeach;
?>
            </dd>
            <dt>問い合わせ種別</dt>
            <dd id="_field_category">

                <select name="category">
<?php
                foreach( $field_conf["category"]["element_value"] as $key => $val ):
?>
                    <option value="<?php echo $val; ?>"><?php echo $val; ?></option>
<?php
                        if( $val==$form_field["category"]){
                            echo "selected";
                        }
?>
                    >
<?php
                endforeach;
?>
                </select>
            </dd>
		</dl>

		<div id="_field_" class="checkbox_area checkbox_b">
			<?php
				if( $form_field["privacy"] ){
					$checked = "checked";
				}else{
					$checked = "";
				}
			?>
			<input type="checkbox" id="checkbox02" name="privacy" <?php echo $checked; ?> /><label for="checkbox02">個人情報規約に同意する。</label>
			<span class="must">&#8251;必須</span>
			<span id="_field_privacy"></span>
		</div>
		<div class="form_submit">
			<input type="button" class="btn_submit" id="btn_contact_confirm" value="入力内容を確認する">
			<input type="hidden" name="mode" value="validation" >
		</div>
	</form>

	<form method="post" action="./<?php echo $script_name;?>?confirm" id="contact_form2">
		<input type="hidden" name="mode" value="confirm">
	</form>
</section>
