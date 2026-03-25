<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

// CodeIgniterから拝借したフォームバリデーション用ライブラリをちょっと改造

class Form_validation {

	var $CI;
	var $_field_data			= array();
	var $_config_rules			= array();
	var $_error_array			= array();
	var $_error_messages		= array();
	var $_error_prefix			= '<p>';
	var $_error_suffix			= '</p>';
	var $error_string			= '';
	var $_safe_form_data 		= FALSE;

	var $_noerror_prefix = '';
	var $_noerror_suffix = '';
	var $form_default_values = array();
	var $_my_field_error = '';


	/**
	 * Constructor
	 *
	 */
	function __construct($rules = array())
	{
		//$this->CI =& get_instance();

		// Validation rules can be stored in a config file.
		$this->_config_rules = $rules;

		// Automatically load the form helper
		//$this->CI->load->helper('form');

		$this->_error_messages['required']              = "%sを入力してください。";
		$this->_error_messages['isset']                 = "%sを入力してください。";
		$this->_error_messages['valid_email']           = "正しいメールアドレスを入力してください。";
		$this->_error_messages['valid_emails']          = "%sには正しいメールアドレスを入力してください。";
		$this->_error_messages['valid_url']             = "正しいURLを入力してください。";
		$this->_error_messages['valid_ip']              = "%sには正しいIPアドレスを入力してください。";
		$this->_error_messages['min_length']            = "%sは最低 %s 文字以上でなければなりません。";
		$this->_error_messages['max_length']            = "%sは %s 文字を超えてはいけません。";
		$this->_error_messages['exact_length']          = "%sは %s 文字でなければなりません。";
		$this->_error_messages['alpha']                 = "%sには、半角アルファベット以外は入力できません。";
		$this->_error_messages['alpha_numeric']         = "%sには、半角英数字以外は入力できません。";
		$this->_error_messages['alpha_dash']            = "%sには、半角英数字、アンダースコア(_)、ハイフン(-)以外は入力できません。";
		$this->_error_messages['numeric']               = "%sには、半角数字以外は入力できません。";
		$this->_error_messages['is_numeric']            = "%sには、数値以外は入力できません。";
		$this->_error_messages['integer']               = "%sには、整数以外は入力できません。";
		$this->_error_messages['matches']               = "%sが%s欄と一致しません。";
		$this->_error_messages['is_natural']            = "%sには、正の整数以外は入力できません。";
		$this->_error_messages['is_natural_no_zero']    = "%sには、0以下の数値は入力できません。";

		$this->_error_messages['valid_email_local']		= '%sには、半角英数字以外、記号『-_.=+!#$%%&\'*/?^`{|}』以外は入力できません。';
		$this->_error_messages['valid_domain']			= "%sには、半角英数字以外、記号『-.』以外は入力できません。";
		$this->_error_messages['alnum_first']			= "%sの1文字目には、半角英数以外は入力できません。";
		$this->_error_messages['alnum_last']			= "%sの最終文字には、ドットおよび半角英数以外は入力できません。";
		$this->_error_messages['undouble_dot']			= "%sには、連続したドットは入力できません。";
		$this->_error_messages['valid_password']		= "%sには、半角英数字と記号『:;<=>?@[]^_`{|}~』以外は入力できません。";
		$this->_error_messages['date']                  = '%sは YYYY/MM/DD の形式で正しい値を入力してください。';
		$this->_error_messages['min_num']               = '%sは %s 以上の値を入力してください。';
		$this->_error_messages['max_num']               = '%sは %s 以下の値を入力してください。';
		$this->_error_messages['is_in']			        = "%sの値が正しくありません。";
		$this->_error_messages['hiragana']              = '%sはひらがなで入力してください。';
		$this->_error_messages['katakana']              = '%sはカタカナで入力してください。';
		$this->_error_messages['hankaku_katakana']      = '%sは半角カタカナで入力してください。';
		$this->_error_messages['valid_tel']             = '%sを正しく入力してください。';
		$this->_error_messages['valid_zip']             = '%sは000-0000形式で入力してください。';
		$this->_error_messages['unmatches']             = "%sが重複しています。";
		$this->_error_messages['iunmatches']            = "%sが重複しています。";
		$this->_error_messages['date_lte']              = "%sの指定が正しくありません。";
		$this->_error_messages['valid_pref']            = "都道府県を選択してください。";
		$this->_error_messages['valid_pref_no_zero']    = "都道府県を選択してください。";
		$this->_error_messages['valid_gender_no_zero']  = "性別を選択してください。";
		$this->_error_messages['valid_path']			= "%sには、半角英数字と記号『-_.』以外は入力できません。";
		$this->_error_messages['required_select']       = "%sを選択してください。";
		$this->_error_messages['required_check']        = "%sを選択してください。";

		$this->set_error_delimiters('<div class="attention">', '</div>');
		$this->set_noerror_delimiters('', '');

	}

	// --------------------------------------------------------------------
	/**
	 * Validation Method: valid_hundred
	 * 100文字以上
	 */
	function valid_hundred($val) {
		if(mb_strlen($val,'utf-8') > 100){
			return false;
		}else{
			return true;
		}
	}

	/**
	 * Validation Method: valid_twohundred
	 * 200文字以上
	 */
	function valid_twohundred($val) {
		if(mb_strlen($val,'utf-8') > 200){
			return false;
		}else{
			return true;
		}
	}

	/**
	 * FAX番号
	 */
	function valid_fax($str) {
		if(preg_match("/^\d{1,6}\-\d{1,6}\-\d{1,6}$/Du", $str) && strlen($str) >= 11){
			return true;
		}else{
			return false;
		}
	}

	/**
	 * すでに設定されているfieldのrules末尾にValidation Ruleを追加する
	 * @param string
	 * @param string
	 */
	function add_field_rules($field, $rules) {
		if (isset($this->_field_data[$field])) {
			$this->_field_data[$field]['rules'] .= '|' . $rules;
		}
		return false;
	}

	/**
	 * すでに設定されているfieldのrulesを削除する
	 * @TODO null以外の時のテスト
	 * @param string
	 * @param string
	 */
	function remove_field_rules($field, $rules = null) {
		if (is_null($rules)) {
			$this->_field_data[$field]['rules'] = '';
		} else {
			$this->_field_data[$field]['rules'] = preg_replace("/${rules}|?/iu", '', $this->_field_data[$field]['rules']);
		}
	}

	/**
	 * 特定フィールドにエラーを設定する
	 * @param string
	 * @param string
	 */
	function set_field_error($field, $mess) {
		if (isset($this->_field_data[$field])) {
			$this->_field_data[$field]['error'] = $mess;
			$this->_error_array[$field] = $mess;
		}
	}


	/**
	 * 非エラー時にもmy_set_errorでタグを用意しておきたい場合に設定する
	 * @param string
	 * @param string
	 */
	function set_noerror_delimiters($prefix = '<p>', $suffix = '</p>') {
		$this->_noerror_prefix = $prefix;
		$this->_noerror_suffix = $suffix;
	}

	/**
	 * set_value()でフォームの値を取得する時
	 * POST内容が空の場合に代わりに出力する値を設定する
	 * 無いものは追加する by TKY
	 * @param array
	 * @return bool
	 */
	function set_form_defaults($defaults) {
		if (is_array($defaults)) {
			$this->form_default_values = $defaults;
			return true;
		}
		return false;
	}




	// VALIDATION METHODS ///////////////////////////////////////////


	/**
	 * 値配列に含まれる場合かどうか
	 * @param string
	 * @param string (カンマ区切りの値配列)
	 * @return bool
	 */
	function is_in($str, $val) {
		$vals = explode(',', $val);
		if (array_search($str, $vals, true) !== false) {
			return true;
		}
		return false;
	}


	/**
	 * Validation Method: Email もともとあるのを上書き
	 * @param string
	 * @return bool
	 */
	function valid_email($str) {
		return (preg_match("/^[a-z0-9][a-z0-9_\-\.=\+!#$%&'\*\/\?^`{|}]{1,63}@[a-z0-9](?:[a-z0-9\-]|\.(?!\.)){2,253}[a-z0-9\.]$/Diu", $str) && preg_match("/@.*[^\.]\.[^\.]/Diu", $str)) ? true : false;
	}

	function valid_email_local($str) {
		return preg_match("/^[a-z0-9][a-z0-9_\-\.=\+!#$%&'\*\/\?^`{|}]{1,63}$/Diu", $str) ? true : false;
	}

	/**
	 * emailがvalid_emailなのでそれに合わせた名前にしてみた。
	 */
	function valid_domain($str) {
		return (preg_match("/^[a-z0-9]([a-z0-9\-]|\.(?!\.)){2,253}[a-z0-9\.]$/Diu", $str) && preg_match("/[^\.]\.[^\.]/Diu", $str)) ? true : false;
	}

	/**
	 * １文字目には、半角英数以外は入力できません。
	 */
	function alnum_first($str) {
		return preg_match("/^[a-z0-9]/Diu", $str) ? true : false;
	}

	/**
	 * 最終文字には、ドットおよび半角英数以外は入力できません。
	 */
	function alnum_last($str) {
		return preg_match("/[a-z0-9\.]$/Diu", $str) ? true : false;
	}

	/**
	 * 連続したドットは入力できません。
	 */
	function undouble_dot($str) {
		return preg_match("/\.\./Diu", $str) ? false : true;
	}

	/**
	 * 文字数制限はここでやらなくても良い
	 */
	function valid_password($str) {
		return preg_match("/^[a-z0-9:;<=>\?@\[\]^_`{|}~]+$/Diu", $str) ? true : false;
	}


	/**
	 * 電話番号
	 */
	function valid_tel($str) {

		//全角を半角に
        $str = mb_convert_kana($str,"a");
        //半角または全角のハイフンは取り除く
        $str = mb_ereg_replace("-", "", $str);
        $str = mb_ereg_replace("ー", "", $str);
        $str = mb_ereg_replace("－", "", $str);

		//if(preg_match("/^\d{1,6}\-\d{1,6}\-\d{1,6}$/Du", $str) && strlen($str) >= 11){
		if(preg_match("/^\d{1,6}\-\d{1,6}\-\d{1,6}$/Du", $str)){	//半角数字ハイフンあり
			return true;
		}elseif( preg_match("/^\d{1,6}\d{1,6}\d{1,6}$/Du", $str) ){	//半角数字ハイフンなし
			return true;
		}else{
			return false;
		}
		//return preg_match("/^\d{1,6}\-\d{1,6}\-\d{1,6}$/Du", $str) ? true : false;
	}


	/**
	 * 郵便番号
	 */
	function valid_zip($str) {
		return preg_match("/^\d{3}\-\d{4}$/Du", $str) ? true : false;
	}


	/**
	 * Validation Method: date YYYY/MM/DD形式
	 */
	function date($str) {
		if($str == '') return false;
		if(preg_match("~(?<=^[0-9]{4})(?<!0000)[-/. ](0?[1-9]|1[012])[-/. ](0?[1-9]|[12][0-9]|3[01])$~Du", $str)){
			$date = new DateTime($str);
			return $date->format("Y/m/d");
		}
		return false;
	}

	/**
	 * Validation Method: 全角カタカナかどうか
	 * @param string
	 * @return bool
	 */
	function katakana($str) {
		return preg_match("/^[ァ-ヶー　]+$/Du", $str) ? true: false;
	}


	/**
	 * Validation Method: 半角カタカナかどうか
	 * @param string
	 * @return bool
	 */
	function hankaku_katakana($str) {
		return preg_match("/^[｡-ﾟ]+$/Du", $str) ? true: false;
	}


	/**
	 * Validation Method: 全角ひらがなかどうか
	 * @param string
	 * @return bool
	 */
	function hiragana($str) {
		return preg_match("/^[ぁ-んー　]+$/Du", $str) ? true: false;
	}

	/**
	 * Validation Method: to Fixed Number
	 * like javascript Number.toFixed
	 * 少数文字列の小数部桁数を固定した値に変換する
	 * @param  string form value
	 * @param  string rule value
	 * @return string
	 *
	 */
	function fixed_number($str, $val) {
		if ($str !== '') {
			$f = intval($val);
			$value = (double)$str;
			if ($f !== 0) {
				$pow = pow(-10, $f);
				$value = round($value * $pow) / $pow;
				$f =  ($f > 0) ? "0{$f}" : 0;
			}
			return sprintf("%.{$f}f", $value);
		}
		return true;
	}


	/**
	 * Validation Method: to URL
	 * URL文字列チェック
	 */
	function valid_url($str) {
		return preg_match('/^[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+$/', $str) ? true : false;
	}


	/**
	 * Validation Method: to number
	 * 最大値
	 */
	function max_num($val, $p) {
		if($val <= $p){
			return true;
		}else{
			return false;
		}
	}


	/**
	 * Validation Method: to number
	 * 最小値
	 */
	function min_num($val, $p) {
		if($val >= $p){
			return true;
		}else{
			return false;
		}
	}


	/**
	 * 半角文字→全角文字への強制変換
	 * @access	public
	 * @param	string
	 * @return	string
	 */
	function han2zen($str)
	{
		if(strlen($str) > 0){
			return mb_convert_kana($str, 'KVA');
		}else{
			return '';
		}
	}


	// 郵便番号：フォーマット統一
	function zip_conv($str)
	{
		return preg_replace('/-/', '', $str);
	}


	/**
	 * 全角英数字＋スペース→半角英数字＋スペースへの強制変換
	 * @access	public
	 * @param	string
	 * @return	string
	 */
	function zen2han($str)
	{
		if(strlen($str) > 0){
			return mb_convert_kana($str, 'as');
		}else{
			return '';
		}
	}

	/**
	 * 全角カタカナ→半角カタカナへの強制変換
	 */
	function zen2han_kana($str)
	{
		if(strlen($str) > 0){
			return mb_convert_kana($str, 'k');
		}else{
			return '';
		}
	}

	/**
	 * Not Match one field to another
	 *
	 * @access	public
	 * @param	string
	 * @param	field
	 * @return	bool
	 */
	function unmatches($str, $field)
	{
		if ( ! isset($_POST[$field]))
		{
			return FALSE;
		}

		$field = $_POST[$field];

		return ($str !== $field) ? TRUE : FALSE;
	}


	/**
	 * Not Match one field to another ignorecase
	 *
	 * @access	public
	 * @param	string
	 * @param	field
	 * @return	bool
	 */
	function iunmatches($str, $field)
	{
		if ( ! isset($_POST[$field]))
		{
			return FALSE;
		}

		$field = $_POST[$field];

		return (mb_strtolower($str) !== mb_strtolower($field)) ? TRUE : FALSE;
	}


	/**
	 * Is $str less than or equal $field value?
	 * @access	public
	 * @param	string
	 * @param	field
	 * @return	bool
	 */
	function date_lte($str, $field)
	{
		if ( ! isset($_POST[$field]) || empty($_POST[$field])) {
			return TRUE;
		}
		if (preg_match("/^(\d+)[^\d](\d+)[^\d](\d+)$/uD", $str, $matches)) {
			$less = sprintf("%04d%02d%02d", $matches[1], $matches[2], $matches[3]);
		} else {
			return FALSE;
		}
		if (preg_match("/^(\d+)[^\d](\d+)[^\d](\d+)$/uD", $_POST[$field], $matches)) {
			$more = sprintf("%04d%02d%02d", $matches[1], $matches[2], $matches[3]);
		} else {
			return FALSE;
		}
		return ($less <= $more) ? TRUE : FALSE;
	}


	// 都道府県チェック
	function valid_pref($str, $field) {
		$prefs = DEF::$PREF;
		if( !isset($prefs[$str]) ) return false;
		return true;
	}


	// 都道府県チェック空白禁止
	function valid_pref_no_zero($str, $field) {
		$prefs = DEF::$PREF;
		if( !isset($prefs[$str]) ) return false;
		if( $str <= 0 ) return false;
		return true;
	}


	// 性別チェック空白禁止
	function valid_gender_no_zero($str, $field) {
		$gender = DEF::$GENDER;
		if( !isset($gender[$str]) ) return false;
		if( $str <= 0 ) return false;
		return true;
	}


	// URL文字列として許可する文字列
	function valid_path($str) {
		return preg_match("/^[-_.a-zA-Z0-9]+$/Diu", $str) ? true : false;
	}


	/**
	 * RequiredSelect
	 *
	 * @access	public
	 * @param	string
	 * @return	bool
	 */
	function required_select($str)
	{
		if ( ! is_array($str))
		{
			return (trim($str) == '') ? FALSE : TRUE;
		}
		else
		{
			if ( count($str) > 0 )
			{
				return true;
			}
		}
	}
	function required_check($str)
	{
		if ( ! is_array($str))
		{
			return (trim($str) == '') ? FALSE : TRUE;
		}
		else
		{
			if ( count($str) > 0 )
			{
				return true;
			}
		}
	}


	// END OF VALIDATION METHODS ////////////////////////////////////



	// FOR HELPER ///////////////////////////////////////////////////

	/**
	 * エラーが発生したかどうか
	 * @return bool
	 */
	function is_error() {
		return count($this->_error_array) > 0;
	}



	/**
	 * set_valueヘルパーで使用する関数
	 * @return mixed
	 */
	function set_value($field = '', $default = '') {
		//already validation run
		if (!isset($this->_field_data[$field]['postdata']))
		{
			if ($default !== null) {
				return $default;
			}
			if (isset($this->form_default_values[$field])) {
				return $this->form_default_values[$field];
			}

			return null;
		}

		$value = $this->_field_data[$field]['postdata'];

		return $value;
	}

	/**
	 * form_error ヘルパーで使用する関数を上書き
	 * @param	string
	 * @param	string	allowed tags
	 * @param	string	allowed tags
	 *
	 */
	function error($field = '', $prefix = '', $suffix = '') {
		if (isset($this->_my_field_error[$field])) {
			$error = $this->_my_field_error[$field];
		}elseif ( ! isset($this->_field_data[$field]['error']) OR $this->_field_data[$field]['error'] == '') {
			return '';
		} else {
			$error = $this->_field_data[$field]['error'];
		}

		if (strlen($prefix) === 0) {
			$prefix = $this->_error_prefix;
		}
		if (strlen($suffix) === 0) {
			$suffix = $this->_error_suffix;
		}

		return $prefix.h($error).$suffix; //本家はh()をしていないが...
	}



	/**
	 * Set Rules
	 *
	 * This function takes an array of field names and validation
	 * rules as input, validates the info, and stores it
	 *
	 * @access	public
	 * @param	mixed
	 * @param	string
	 * @return	void
	 */
	function set_rules($field, $label = '', $rules = '')
	{
		// No reason to set rules if we have no POST data
		if (count($_POST) == 0)
		{
			return;
		}

		// If an array was passed via the first parameter instead of indidual string
		// values we cycle through it and recursively call this function.
		if (is_array($field))
		{
			foreach ($field as $row)
			{
				// Houston, we have a problem...
				if ( ! isset($row['field']) OR ! isset($row['rules']))
				{
					continue;
				}

				// If the field label wasn't passed we use the field name
				$label = ( ! isset($row['label'])) ? $row['field'] : $row['label'];

				// Here we go!
				$this->set_rules($row['field'], $label, $row['rules']);
			}
			return;
		}

		// No fields? Nothing to do...
		if ( ! is_string($field) OR  ! is_string($rules) OR $field == '')
		{
			return;
		}

		// If the field label wasn't passed we use the field name
		$label = ($label == '') ? $field : $label;

		// Is the field name an array?  We test for the existence of a bracket "[" in
		// the field name to determine this.  If it is an array, we break it apart
		// into its components so that we can fetch the corresponding POST data later
		if (strpos($field, '[') !== FALSE AND preg_match_all('/\[(.*?)\]/', $field, $matches))
		{
			// Note: Due to a bug in current() that affects some versions
			// of PHP we can not pass function call directly into it
			$x = explode('[', $field);
			$indexes[] = current($x);

			for ($i = 0; $i < count($matches['0']); $i++)
			{
				if ($matches['1'][$i] != '')
				{
					$indexes[] = $matches['1'][$i];
				}
			}

			$is_array = TRUE;
		}
		else
		{
			$indexes 	= array();
			$is_array	= FALSE;
		}

		// Build our master array
		$this->_field_data[$field] = array(
											'field'				=> $field,
											'label'				=> $label,
											'rules'				=> $rules,
											'is_array'			=> $is_array,
											'keys'				=> $indexes,
											'postdata'			=> NULL,
											'error'				=> ''
											);
	}

	// --------------------------------------------------------------------

	/**
	 * Set Error Message
	 *
	 * Lets users set their own error messages on the fly.  Note:  The key
	 * name has to match the  function name that it corresponds to.
	 *
	 * @access	public
	 * @param	string
	 * @param	string
	 * @return	string
	 */
	function set_message($lang, $val = '')
	{
		if ( ! is_array($lang))
		{
			$lang = array($lang => $val);
		}

		$this->_error_messages = array_merge($this->_error_messages, $lang);
	}

	// --------------------------------------------------------------------

	/**
	 * Set The Error Delimiter
	 *
	 * Permits a prefix/suffix to be added to each error message
	 *
	 * @access	public
	 * @param	string
	 * @param	string
	 * @return	void
	 */
	function set_error_delimiters($prefix = '<p>', $suffix = '</p>')
	{
		$this->_error_prefix = $prefix;
		$this->_error_suffix = $suffix;
	}


	// --------------------------------------------------------------------

	/**
	 * Error String
	 *
	 * Returns the error messages as a string, wrapped in the error delimiters
	 *
	 * @access	public
	 * @param	string
	 * @param	string
	 * @return	str
	 */
	function error_string($prefix = '', $suffix = '')
	{
		// No errrors, validation passes!
		if (count($this->_error_array) === 0)
		{
			return '';
		}

		if ($prefix == '')
		{
			$prefix = $this->_error_prefix;
		}

		if ($suffix == '')
		{
			$suffix = $this->_error_suffix;
		}

		// Generate the error string
		$str = '';
		foreach ($this->_error_array as $val)
		{
			if ($val != '')
			{
				$str .= $prefix.$val.$suffix."\n";
			}
		}

		return $str;
	}

	// --------------------------------------------------------------------

	/**
	 * Run the Validator
	 *
	 * This function does all the work.
	 *
	 * @access	public
	 * @return	bool
	 */
	function run($group = '')
	{
		// Do we even have any data to process?  Mm?
		if (count($_POST) == 0)
		{
			return FALSE;
		}

		// Does the _field_data array containing the validation rules exist?
		// If not, we look to see if they were assigned via a config file
		if (count($this->_field_data) == 0)
		{
			// No validation rules?  We're done...
			if (count($this->_config_rules) == 0)
			{
				return FALSE;
			}

			// Is there a validation rule for the particular URI being accessed?
			//$uri = ($group == '') ? trim($this->CI->uri->ruri_string(), '/') : $group;
			$uri = '';

			if ($uri != '' AND isset($this->_config_rules[$uri]))
			{
				$this->set_rules($this->_config_rules[$uri]);
			}
			else
			{
				$this->set_rules($this->_config_rules);
			}

			// We're we able to set the rules correctly?
			if (count($this->_field_data) == 0)
			{
				log_message('debug', "Unable to find validation rules");
				return FALSE;
			}
		}

		// Load the language file containing error messages
		//$this->CI->lang->load('form_validation');
		// Cycle through the rules for each field, match the
		// corresponding $_POST item and test for errors
		foreach ($this->_field_data as $field => $row)
		{
			// Fetch the data from the corresponding $_POST array and cache it in the _field_data array.
			// Depending on whether the field name is an array or a string will determine where we get it from.

			if ($row['is_array'] == TRUE)
			{
				$this->_field_data[$field]['postdata'] = $this->_reduce_array($_POST, $row['keys']);
			}
			else
			{
				if (isset($_POST[$field]) AND $_POST[$field] != "")
				{
					$this->_field_data[$field]['postdata'] = $_POST[$field];
				}
			}

			$this->_execute($row, explode('|', $row['rules']), $this->_field_data[$field]['postdata']);
		}

		// Did we end up with any errors?
		$total_errors = count($this->_error_array);

		if ($total_errors > 0)
		{
			$this->_safe_form_data = TRUE;
		}

		// Now we need to re-set the POST data with the new, processed data
		$this->_reset_post_array();

		// No errors, validation passes!
		if ($total_errors == 0)
		{
			return TRUE;
		}

		// Validation fails
		return FALSE;
	}

	// --------------------------------------------------------------------

	/**
	 * Traverse a multidimensional $_POST array index until the data is found
	 *
	 * @access	private
	 * @param	array
	 * @param	array
	 * @param	integer
	 * @return	mixed
	 */
	function _reduce_array($array, $keys, $i = 0)
	{
		if (is_array($array))
		{
			if (isset($keys[$i]))
			{
				if (isset($array[$keys[$i]]))
				{
					$array = $this->_reduce_array($array[$keys[$i]], $keys, ($i+1));
				}
				else
				{
					return NULL;
				}
			}
			else
			{
				return $array;
			}
		}

		return $array;
	}

	// --------------------------------------------------------------------

	/**
	 * Re-populate the _POST array with our finalized and processed data
	 *
	 * @access	private
	 * @return	null
	 */
	function _reset_post_array()
	{
		$this->_safe_form_data = false;
		foreach ($this->_field_data as $field => $row)
		{
			if ( ! is_null($row['postdata']))
			{
				if ($row['is_array'] == FALSE)
				{
					if (isset($_POST[$row['field']]))
					{
						$_POST[$row['field']] = $this->prep_for_form($row['postdata']);
					}
				}
				else
				{
					// start with a reference
					$post_ref =& $_POST;

					// before we assign values, make a reference to the right POST key
					if (count($row['keys']) == 1)
					{
						$post_ref =& $post_ref[current($row['keys'])];
					}
					else
					{
						foreach ($row['keys'] as $val)
						{
							$post_ref =& $post_ref[$val];
						}
					}

					if (is_array($row['postdata']))
					{
						$array = array();
						foreach ($row['postdata'] as $k => $v)
						{
							$array[$k] = $this->prep_for_form($v);
						}

						$post_ref = $array;
					}
					else
					{
						$post_ref = $this->prep_for_form($row['postdata']);
					}
				}
			}
		}
	}

	// --------------------------------------------------------------------

	/**
	 * Executes the Validation routines
	 *
	 * @access	private
	 * @param	array
	 * @param	array
	 * @param	mixed
	 * @param	integer
	 * @return	mixed
	 */
	function _execute($row, $rules, $postdata = NULL, $cycles = 0)
	{
		// If the $_POST data is an array we will run a recursive call
		if (is_array($postdata))
		{
			foreach ($postdata as $key => $val)
			{
				$this->_execute($row, $rules, $val, $cycles);
				$cycles++;
			}

			return;
		}

		// --------------------------------------------------------------------

		// If the field is blank, but NOT required, no further tests are necessary
		$callback = FALSE;
		if ( ! in_array('required', $rules) AND ! in_array('required_select', $rules) AND ! in_array('required_check', $rules) AND is_null($postdata))
		{
			// Before we bail out, does the rule contain a callback?
			if (preg_match("/(callback_\w+)/", implode(' ', $rules), $match))
			{
				$callback = TRUE;
				$rules = (array('1' => $match[1]));
			}
			else
			{
				return;
			}
		}

		// --------------------------------------------------------------------

		// Isset Test. Typically this rule will only apply to checkboxes.
		if (is_null($postdata) AND $callback == FALSE)
		{
			if (in_array('isset', $rules, TRUE) OR in_array('required', $rules) OR in_array('required_select', $rules) )
			{
				// Set the message type
				$type = (in_array('required', $rules)) ? 'required' : 'isset';
				$type = (in_array('required_select', $rules)) ? 'required_select' : 'isset';

				if ( ! isset($this->_error_messages[$type]))
				{
					//if (FALSE === ($line = $this->CI->lang->line($type)))
					//{
					//	$line = 'The field was not set';
					//}
				}
				else
				{
					$line = $this->_error_messages[$type];
				}

				// Build the error message
				$message = sprintf($line, $this->_translate_fieldname($row['label']));

				// Save the error message
				$this->_field_data[$row['field']]['error'] = $message;

				if ( ! isset($this->_error_array[$row['field']]))
				{
					$this->_error_array[$row['field']] = $message;
				}
			}

			elseif (in_array('isset', $rules, TRUE) OR in_array('required', $rules)  OR in_array('required_check', $rules))
			{
				// Set the message type
				$type = (in_array('required', $rules)) ? 'required' : 'isset';
				$type = (in_array('required_check', $rules)) ? 'required_check' : 'isset';

				if ( ! isset($this->_error_messages[$type]))
				{
					//if (FALSE === ($line = $this->CI->lang->line($type)))
					//{
					//	$line = 'The field was not set';
					//}
				}
				else
				{
					$line = $this->_error_messages[$type];
				}

				// Build the error message
				$message = sprintf($line, $this->_translate_fieldname($row['label']));

				// Save the error message
				$this->_field_data[$row['field']]['error'] = $message;

				if ( ! isset($this->_error_array[$row['field']]))
				{
					$this->_error_array[$row['field']] = $message;
				}
			}

			return;
		}

		// --------------------------------------------------------------------

		// Cycle through each rule and run it
		foreach ($rules As $rule)
		{
			$_in_array = FALSE;

			// We set the $postdata variable with the current data in our master array so that
			// each cycle of the loop is dealing with the processed data from the last cycle
			if ($row['is_array'] == TRUE AND is_array($this->_field_data[$row['field']]['postdata']))
			{
				// We shouldn't need this safety, but just in case there isn't an array index
				// associated with this cycle we'll bail out
				if ( ! isset($this->_field_data[$row['field']]['postdata'][$cycles]))
				{
					continue;
				}

				$postdata = $this->_field_data[$row['field']]['postdata'][$cycles];
				$_in_array = TRUE;
			}
			else
			{
				$postdata = $this->_field_data[$row['field']]['postdata'];
			}

			// --------------------------------------------------------------------

			// Is the rule a callback?
			$callback = FALSE;
			if (substr($rule, 0, 9) == 'callback_')
			{
				$rule = substr($rule, 9);
				$callback = TRUE;
			}

			// Strip the parameter (if exists) from the rule
			// Rules can contain a parameter: max_length[5]
			$param = FALSE;
			if (preg_match("/(.*?)\[(.*?)\]/", $rule, $match))
			{
				$rule	= $match[1];
				$param	= $match[2];
			}

			// Call the function that corresponds to the rule
			if ($callback === TRUE)
			{
				if ( ! method_exists($this->CI, $rule))
				{
					continue;
				}

				// Run the function and grab the result
				$result = $this->CI->$rule($postdata, $param);

				// Re-assign the result to the master data array
				if ($_in_array == TRUE)
				{
					$this->_field_data[$row['field']]['postdata'][$cycles] = (is_bool($result)) ? $postdata : $result;
				}
				else
				{
					$this->_field_data[$row['field']]['postdata'] = (is_bool($result)) ? $postdata : $result;
				}

				// If the field isn't required and we just processed a callback we'll move on...
				if ( ! in_array('required', $rules, TRUE) AND $result !== FALSE)
				{
					continue;
				}
			}
			else
			{
				if ( ! method_exists($this, $rule))
				{
					// If our own wrapper function doesn't exist we see if a native PHP function does.
					// Users can use any native PHP function call that has one param.
					if (function_exists($rule))
					{
						$result = $rule($postdata);

						if ($_in_array == TRUE)
						{
							$this->_field_data[$row['field']]['postdata'][$cycles] = (is_bool($result)) ? $postdata : $result;
						}
						else
						{
							$this->_field_data[$row['field']]['postdata'] = (is_bool($result)) ? $postdata : $result;
						}
					}

					continue;
				}

				$result = $this->$rule($postdata, $param);

				if ($_in_array == TRUE)
				{
					$this->_field_data[$row['field']]['postdata'][$cycles] = (is_bool($result)) ? $postdata : $result;
				}
				else
				{
					$this->_field_data[$row['field']]['postdata'] = (is_bool($result)) ? $postdata : $result;
				}
			}

			// Did the rule test negatively?  If so, grab the error.
			if ($result === FALSE)
			{
				if ( ! isset($this->_error_messages[$rule]))
				{
					//if (FALSE === ($line = $this->CI->lang->line($rule)))
					//{
					//	$line = 'Unable to access an error message corresponding to your field name.';
					//}
				}
				else
				{
					$line = $this->_error_messages[$rule];
				}

				// Is the parameter we are inserting into the error message the name
				// of another field?  If so we need to grab its "field label"
				if (isset($this->_field_data[$param]) AND isset($this->_field_data[$param]['label']))
				{
					$param = $this->_field_data[$param]['label'];
				}

				// Build the error message
				$message = sprintf($line, $this->_translate_fieldname($row['label']), $param);

				// Save the error message
				$this->_field_data[$row['field']]['error'] = $message;

				if ( ! isset($this->_error_array[$row['field']]))
				{
					$this->_error_array[$row['field']] = $message;
				}

				return;
			}
		}
	}

	// --------------------------------------------------------------------

	/**
	 * Translate a field name
	 *
	 * @access	private
	 * @param	string	the field name
	 * @return	string
	 */
	function _translate_fieldname($fieldname)
	{
		// Do we need to translate the field name?
		// We look for the prefix lang: to determine this
		if (substr($fieldname, 0, 5) == 'lang:')
		{
			// Grab the variable
			$line = substr($fieldname, 5);

			// Were we able to translate the field name?  If not we use $line
			if (FALSE === ($fieldname = $this->CI->lang->line($line)))
			{
				return $line;
			}
		}

		return $fieldname;
	}


	// --------------------------------------------------------------------

	/**
	 * Set Select
	 *
	 * Enables pull-down lists to be set to the value the user
	 * selected in the event of an error
	 *
	 * @access	public
	 * @param	string
	 * @param	string
	 * @return	string
	 */
	function set_select($field = '', $value = '', $default = FALSE)
	{
		if ( ! isset($this->_field_data[$field]) OR ! isset($this->_field_data[$field]['postdata']))
		{
			if ($default === TRUE AND count($this->_field_data) === 0)
			{
				return ' selected="selected"';
			}
			return '';
		}

		$field = $this->_field_data[$field]['postdata'];

		if (is_array($field))
		{
			if ( ! in_array($value, $field))
			{
				return '';
			}
		}
		else
		{
			if (($field == '' OR $value == '') OR ($field != $value))
			{
				return '';
			}
		}

		return ' selected="selected"';
	}

	// --------------------------------------------------------------------

	/**
	 * Set Radio
	 *
	 * Enables radio buttons to be set to the value the user
	 * selected in the event of an error
	 *
	 * @access	public
	 * @param	string
	 * @param	string
	 * @return	string
	 */
	function set_radio($field = '', $value = '', $default = FALSE)
	{
		if ( ! isset($this->_field_data[$field]) OR ! isset($this->_field_data[$field]['postdata']))
		{
			if ($default === TRUE AND count($this->_field_data) === 0)
			{
				return ' checked="checked"';
			}
			return '';
		}

		$field = $this->_field_data[$field]['postdata'];

		if (is_array($field))
		{
			if ( ! in_array($value, $field))
			{
				return '';
			}
		}
		else
		{
			if (($field == '' OR $value == '') OR ($field != $value))
			{
				return '';
			}
		}

		return ' checked="checked"';
	}

	// --------------------------------------------------------------------

	/**
	 * Set Checkbox
	 *
	 * Enables checkboxes to be set to the value the user
	 * selected in the event of an error
	 *
	 * @access	public
	 * @param	string
	 * @param	string
	 * @return	string
	 */
	function set_checkbox($field = '', $value = '', $default = FALSE)
	{
		if ( ! isset($this->_field_data[$field]) OR ! isset($this->_field_data[$field]['postdata']))
		{
			if ($default === TRUE AND count($this->_field_data) === 0)
			{
				return ' checked="checked"';
			}
			return '';
		}

		$field = $this->_field_data[$field]['postdata'];

		if (is_array($field))
		{
			if ( ! in_array($value, $field))
			{
				return '';
			}
		}
		else
		{
			if (($field == '' OR $value == '') OR ($field != $value))
			{
				return '';
			}
		}

		return ' checked="checked"';
	}

	// --------------------------------------------------------------------

	/**
	 * Required
	 *
	 * @access	public
	 * @param	string
	 * @return	bool
	 */
	function required($str)
	{
		if ( ! is_array($str))
		{
			return (trim($str) == '') ? FALSE : TRUE;
		}
		else
		{
			return ( ! empty($str));
		}
	}

	// --------------------------------------------------------------------

	/**
	 * Match one field to another
	 *
	 * @access	public
	 * @param	string
	 * @param	field
	 * @return	bool
	 */
	function matches($str, $field)
	{
		if ( ! isset($_POST[$field]))
		{
			return FALSE;
		}

		$field = $_POST[$field];

		return ($str !== $field) ? FALSE : TRUE;
	}

	// --------------------------------------------------------------------

	/**
	 * Minimum Length
	 *
	 * @access	public
	 * @param	string
	 * @param	value
	 * @return	bool
	 */
	function min_length($str, $val)
	{
		if (preg_match("/[^0-9]/", $val))
		{
			return FALSE;
		}

		if (function_exists('mb_strlen'))
		{
			return (mb_strlen($str) < $val) ? FALSE : TRUE;
		}

		return (strlen($str) < $val) ? FALSE : TRUE;
	}

	// --------------------------------------------------------------------

	/**
	 * Max Length
	 *
	 * @access	public
	 * @param	string
	 * @param	value
	 * @return	bool
	 */
	function max_length($str, $val)
	{
		if (preg_match("/[^0-9]/", $val))
		{
			return FALSE;
		}

		if (function_exists('mb_strlen'))
		{
			return (mb_strlen($str) > $val) ? FALSE : TRUE;
		}

		return (strlen($str) > $val) ? FALSE : TRUE;
	}

	// --------------------------------------------------------------------

	/**
	 * Exact Length
	 *
	 * @access	public
	 * @param	string
	 * @param	value
	 * @return	bool
	 */
	function exact_length($str, $val)
	{
		if (preg_match("/[^0-9]/", $val))
		{
			return FALSE;
		}

		if (function_exists('mb_strlen'))
		{
			return (mb_strlen($str) != $val) ? FALSE : TRUE;
		}

		return (strlen($str) != $val) ? FALSE : TRUE;
	}


	// --------------------------------------------------------------------

	/**
	 * Alpha
	 *
	 * @access	public
	 * @param	string
	 * @return	bool
	 */
	function alpha($str)
	{
		return ( ! preg_match("/^([a-z])+$/i", $str)) ? FALSE : TRUE;
	}

	// --------------------------------------------------------------------

	/**
	 * Alpha-numeric
	 *
	 * @access	public
	 * @param	string
	 * @return	bool
	 */
	function alpha_numeric($str)
	{
		return ( ! preg_match("/^([a-z0-9])+$/i", $str)) ? FALSE : TRUE;
	}

	// --------------------------------------------------------------------

	/**
	 * Alpha-numeric with underscores and dashes
	 *
	 * @access	public
	 * @param	string
	 * @return	bool
	 */
	function alpha_dash($str)
	{
		return ( ! preg_match("/^([-a-z0-9_-])+$/i", $str)) ? FALSE : TRUE;
	}

	// --------------------------------------------------------------------

	/**
	 * Numeric
	 *
	 * @access	public
	 * @param	string
	 * @return	bool
	 */
	function numeric($str)
	{
		return (bool)preg_match( '/^[\-+]?[0-9]*\.?[0-9]+$/', $str);

	}

	// --------------------------------------------------------------------

    /**
     * Is Numeric
     *
     * @access    public
     * @param    string
     * @return    bool
     */
    function is_numeric($str)
    {
        return ( ! is_numeric($str)) ? FALSE : TRUE;
    }

	// --------------------------------------------------------------------

	/**
	 * Integer
	 *
	 * @access	public
	 * @param	string
	 * @return	bool
	 */
	function integer($str)
	{
		return (bool)preg_match( '/^[\-+]?[0-9]+$/', $str);
	}

	// --------------------------------------------------------------------

    /**
     * Is a Natural number  (0,1,2,3, etc.)
     *
     * @access	public
     * @param	string
     * @return	bool
     */
    function is_natural($str)
    {
   		return (bool)preg_match( '/^[0-9]+$/', $str);
    }

	// --------------------------------------------------------------------

    /**
     * Is a Natural number, but not a zero  (1,2,3, etc.)
     *
     * @access	public
     * @param	string
     * @return	bool
     */
	function is_natural_no_zero($str)
    {
    	if ( ! preg_match( '/^[0-9]+$/', $str))
    	{
    		return FALSE;
    	}

    	if ($str == 0)
    	{
    		return FALSE;
    	}

   		return TRUE;
    }

	// --------------------------------------------------------------------

	/**
	 * Valid Base64
	 *
	 * Tests a string for characters outside of the Base64 alphabet
	 * as defined by RFC 2045 http://www.faqs.org/rfcs/rfc2045
	 *
	 * @access	public
	 * @param	string
	 * @return	bool
	 */
	function valid_base64($str)
	{
		return (bool) ! preg_match('/[^a-zA-Z0-9\/\+=]/', $str);
	}

	// --------------------------------------------------------------------

	/**
	 * Prep data for form
	 *
	 * This function allows HTML to be safely shown in a form.
	 * Special characters are converted.
	 *
	 * @access	public
	 * @param	string
	 * @return	string
	 */
	function prep_for_form($data = '')
	{
		if (is_array($data))
		{
			foreach ($data as $key => $val)
			{
				$data[$key] = $this->prep_for_form($val);
			}

			return $data;
		}

		if ($this->_safe_form_data == FALSE OR $data === '')
		{
			return $data;
		}

		return str_replace(array("'", '"', '<', '>'), array("&#39;", "&quot;", '&lt;', '&gt;'), stripslashes($data));
	}

	// --------------------------------------------------------------------

	/**
	 * Prep URL
	 *
	 * @access	public
	 * @param	string
	 * @return	string
	 */
	function prep_url($str = '')
	{
		if ($str == 'http://' OR $str == '')
		{
			return '';
		}

		if (substr($str, 0, 7) != 'http://' && substr($str, 0, 8) != 'https://')
		{
			$str = 'http://'.$str;
		}

		return $str;
	}

	// --------------------------------------------------------------------

	/**
	 * Convert PHP tags to entities
	 *
	 * @access	public
	 * @param	string
	 * @return	string
	 */
	function encode_php_tags($str)
	{
		return str_replace(array('<?php', '<?PHP', '<?', '?>'),  array('&lt;?php', '&lt;?PHP', '&lt;?', '?&gt;'), $str);
	}

}
// END Form Validation Class

/**
 * Parser Class
 *
 * @package		CodeIgniter
 * @subpackage	Libraries
 * @category	Parser
 * @author		ExpressionEngine Dev Team
 * @link		http://codeigniter.com/user_guide/libraries/parser.html
 */
 class Parser {

		var $l_delim = '{';
		var $r_delim = '}';
		var $object;

		/**
		 *  Parse a template
		 *
		 * Parses pseudo-variables contained in the specified template,
		 * replacing them with the data in the second param
		 *
		 * @access	public
		 * @param	string
		 * @param	array
		 * @param	bool
		 * @return	string
		 */
		function parse($template, $data, $return = TREU)
		{
			//$template = $CI->load->view($template, $data, TRUE);
			$template = $this->_view($template, $data);

			if ($template == '')
			{
				return FALSE;
			}

			foreach ($data as $key => $val)
			{
				if (is_array($val))
				{
					$template = $this->_parse_pair($key, $val, $template);
				}
				else
				{
					$template = $this->_parse_single($key, (string)$val, $template);
				}
			}

			return $template;
		}

		// --------------------------------------------------------------------

		/**
		 *  Set the left/right variable delimiters
		 *
		 * @access	public
		 * @param	string
		 * @param	string
		 * @return	void
		 */
		function set_delimiters($l = '{', $r = '}')
		{
			$this->l_delim = $l;
			$this->r_delim = $r;
		}

		// --------------------------------------------------------------------

		/**
		 *  Parse a single key/value
		 *
		 * @access	private
		 * @param	string
		 * @param	string
		 * @param	string
		 * @return	string
		 */
		function _parse_single($key, $val, $string)
		{
			return str_replace($this->l_delim.$key.$this->r_delim, $val, $string);
		}

		// --------------------------------------------------------------------

		/**
		 *  Parse a tag pair
		 *
		 * Parses tag pairs:  {some_tag} string... {/some_tag}
		 *
		 * @access	private
		 * @param	string
		 * @param	array
		 * @param	string
		 * @return	string
		 */
		function _parse_pair($variable, $data, $string)
		{
			if (FALSE === ($match = $this->_match_pair($string, $variable)))
			{
				return $string;
			}

			$str = '';
			foreach ($data as $row)
			{
				$temp = $match['1'];
				foreach ($row as $key => $val)
				{
					if ( ! is_array($val))
					{
						$temp = $this->_parse_single($key, $val, $temp);
					}
					else
					{
						$temp = $this->_parse_pair($key, $val, $temp);
					}
				}

				$str .= $temp;
			}

			return str_replace($match['0'], $str, $string);
		}

		// --------------------------------------------------------------------

		/**
		 *  Matches a variable pair
		 *
		 * @access	private
		 * @param	string
		 * @param	string
		 * @return	mixed
		 */
		function _match_pair($string, $variable)
		{
			if ( ! preg_match("|".$this->l_delim . $variable . $this->r_delim."(.+?)".$this->l_delim . '/' . $variable . $this->r_delim."|s", $string, $match))
			{
				return FALSE;
			}

			return $match;
		}


		function _view($template, $data){
			ob_start();
			extract($data);
			include_once($template);
			$source = ob_get_contents();
			ob_end_clean();
			return $source;
		}

	}
	// END Parser Class
