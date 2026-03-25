window.addEventListener('DOMContentLoaded', function (e) {

	//----------------------------------------------------------------------------------------------------
	//概要：入力チェック
	var btn_confirm = document.querySelector("#btn_contact_confirm");

	if (btn_confirm) {
		btn_confirm.addEventListener("click", function () {
		
			//▼エラーの削除
			errorNone();

			//▼フォームデータの取得
			var form = document.querySelector("#contact_form")
			var field_data = new FormData(form);

			//▼通信
			var xhr = new XMLHttpRequest();

			xhr.open('POST', 'index.php');
			xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
			xhr.send(field_data);

			xhr.onreadystatechange = function () {

				if (xhr.readyState === 4 && xhr.status === 200) {
				
					var json = JSON.parse(xhr.responseText || "null");
				
					if (json.res == 'OK') {
						var form2 = document.querySelector("#contact_form2");

						form2.submit();
					} else {
						siteUtilContact.fieldError(json.error);
					}
				}
			};

			return false;
		});
	}//
	//----------------------------------------------------------------------------------------------------
	//概要：バック
	var btn_back = document.querySelector("#btn_contact_back");
	
	if (btn_back) {
		btn_back.addEventListener("click", function (e) {
			e.preventDefault();

			var form_back = document.querySelector("#contact_form_back");

			form_back.submit();

			return false;
		});
	}//
	//----------------------------------------------------------------------------------------------------
	//概要：送信
	var btn_send = document.querySelector("#btn_contact_send");
	
	if (btn_send) {
		btn_send.addEventListener("click", function (e) {
			e.preventDefault();

			var form_send = document.querySelector("#contact_form_send");

			form_send.submit();

			return false;
		});
	}//
	//----------------------------------------------------------------------------------------------------
	//その他
	//----------------------------------------------------------------------------------------------------
	//概要：エラーの削除
	function errorNone(){
		
		var error_list = document.querySelectorAll(".err");

		error_list.forEach(function (target) {
			target.remove();
		});
	}//
	//----------------------------------------------------------------------------------------------------
	var siteUtilContact = {

		// 入力エラー表示
		fieldError: function (error)
		{
			//▼全て表示エラーの削除
			errorNone();
			
			//▼個別メッセージの表示
			for ( var f in error ){
				if ( f != '' && error[f] != '' )
				{
					f2 = f.replace('[', '');
					f2 = f2.replace(']', '');

					var err_field = document.querySelector("#_field_" + f2);

					err_field.insertAdjacentHTML("beforeend", '<span class="err">※' + error[f] + '</span>');
				}
			}

			//▼最初のエラーにスクロール
			var err_object = document.querySelectorAll(".err");
			
			if (err_object.length > 0) {
				var object = err_object[0].getBoundingClientRect();

				window.scrollTo( 0, object.x-150);
			}
		}
	}//
});