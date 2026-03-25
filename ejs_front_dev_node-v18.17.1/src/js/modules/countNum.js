export function countNum() {
  const countNum = document.querySelector('.countNum');
  if(countNum) {
    var countUps = document.getElementsByClassName('countNum');

    // MutationObserverのコールバック関数を定義
    var callback = function(mutationsList, observer) {
        for (var mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                var targetElement = mutation.target;
                // targetElementに'is-animated'クラスが追加されたかをチェック
                if (targetElement.classList.contains('is-animated')) {
                    // カウントアップ関数を呼び出す
                    animateCounter(targetElement);
                    // 監視を停止する
                    observer.disconnect();
                }
            }
        }
    };

    // 各要素に対してMutationObserverを設定
    for (var i = 0; i < countUps.length; i++) {
        var observer = new MutationObserver(callback);
        observer.observe(countUps[i], { attributes: true });
    }

    // カウントアップアニメーションを適用する関数
    function animateCounter(element) {
      var startValue = element.getAttribute('data-start');
      var endValue = element.getAttribute('data-end');

      // 数値としての開始値と終了値を取得
      var numStart = parseFloat(startValue);
      var numEnd = parseFloat(endValue);

      var duration = 2000; // アニメーションの継続時間（ミリ秒）を2秒に設定
      var steps = 100; // ステップ数
      var stepTime = duration / steps; // 各ステップの時間

      var increment, displayFunction;

      // 小数が含まれるか判断
      if (hasDecimals(startValue) || hasDecimals(endValue)) {
          increment = (numEnd - numStart) / steps; // 1ステップあたりの増加値（小数も扱える）
          displayFunction = function(value) {
              var parts = value.toFixed(1).split('.'); // 小数点で分割
              return `${parts[0]}<span>.${parts[1]}</span>`; // 整数部と小数部を分けて表示
          };
      } else {
          increment = Math.ceil((numEnd - numStart) / steps); // 整数の場合、1以上の増加値
          displayFunction = function(value) {
              return Math.floor(value).toString();
          };
      }

      var currentValue = numStart; // 現在のカウンター値を開始値で初期化

      var interval = setInterval(function() {
          currentValue += increment; // カウンターをインクリメント
          element.innerHTML = displayFunction(currentValue); // HTML要素の内容を更新（textContentからinnerHTMLに変更）

          if ((increment > 0 && currentValue >= numEnd) || (increment < 0 && currentValue <= numEnd)) {
              element.innerHTML = displayFunction(numEnd); // 最終的な値を設定
              clearInterval(interval); // インターバルを停止
          }
      }, stepTime);
    }

    // 小数が含まれているかを判断する関数
    function hasDecimals(value) {
        return value.includes('.');
    }

  }
}