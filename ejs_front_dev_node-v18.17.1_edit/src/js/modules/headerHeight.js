export function anchor() {
  
  const anchor = document.querySelector('.anchor');
  if(anchor) {
    //ヘッダーの高さに連動したアンカー
    function headerHeightSwitch() {
      var headerHeight = document.querySelector('.l-header_inner').offsetHeight; 
      var anchors = document.querySelectorAll('.anchor');
      for (var i = 0; i < anchors.length; i++) {
        anchors[i].style.paddingTop = headerHeight + 'px';
        anchors[i].style.marginTop = -headerHeight + 'px';
      }
    }
    //初期ロード
    headerHeightSwitch();
    //リサイズ
    window.addEventListener('resize', function() {
      headerHeightSwitch();
    });
  }
}