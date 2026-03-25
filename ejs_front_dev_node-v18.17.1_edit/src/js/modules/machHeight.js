export function machHeight() {

  const autoHeight = () => {
    // クラスが'js-machHeight'の要素をすべて取得
    let elems = document.getElementsByClassName('js-machHeight');
    
    // data属性ごとに要素をグループ化するオブジェクトを初期化
    let groups = {};

    // 要素をループし、data属性ごとにグループ化
    Array.prototype.forEach.call(elems, function(elem) {
        // data属性を取得
        let dataValue = elem.getAttribute('data-group');

        // グループがまだ存在しない場合は初期化
        if (!groups[dataValue]) {
            groups[dataValue] = [];
        }

        // 要素を対応するグループに追加
        groups[dataValue].push(elem);
    });

    // グループごとに高さを揃える処理
    Object.keys(groups).forEach(key => {
        let group = groups[key];
        let maxHeight = 0;

        // グループ内の要素の高さを一時的にリセットし、最大高さを取得
        group.forEach(elem => {
            elem.style.height = '';
            maxHeight = Math.max(maxHeight, elem.clientHeight);
        });

        // グループ内の要素の高さを最大高さに揃える
        group.forEach(elem => {
            elem.style.height = maxHeight + 'px';
        });
    });
  }

  // ロードとリサイズ時に関数autoHeightを実行
  autoHeight();
  window.addEventListener('load', autoHeight);
  window.addEventListener('resize', autoHeight);
  
}
