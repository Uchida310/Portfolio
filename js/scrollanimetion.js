var scrollAnimationElm = document.querySelectorAll('.sa');
const fadein = document.getElementById('fade-anim');
let cnt;
var scrollAnimationFunc = function() {
  for(var i = 0; i < scrollAnimationElm.length; i++) {
    var triggerMargin = 300;
    //innerheight(ﾍﾟｰｼﾞが表示される高さ)>class(sa)の位置+200の時
    if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
      //class(sa)のクラスにshowを追加する
      scrollAnimationElm[i].classList.add('show');  
      fadein.classList.add('fadein');
    }   
  }
}
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);

/*
要素.getBoundingClientRect()メソッド・・
要素の位置を、ブラウザ表示領域の左上を基点として、
そこからの相対値を持つtopなら要素の上端
*/

/*
addEventListener()メソッド・・・さまざまのイベント処理を実行できる
webﾍﾟｰｼﾞが読み込まれたか？
クリックされたか？
フォームに何かしらの操作が行われたか？
キーボードから入力が行われたか？
構文:対象要素.addEventListener(イベントの種類,メソッド,)
今回のイベントは読み込みが完了したときloadと画面がスクロールした時
*/