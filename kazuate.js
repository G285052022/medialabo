// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let b = document.querySelector('#print');
b.addEventListener('click', hantei);
function hantei() {
  let i = document.querySelector('input[name="seisu"]');
  let kazu = i.value;
  var yoso =Number(kazu);     // ユーザが記入した文字列
  kaisu=kaisu+1;

  let p1=document.querySelector('span#kaisu'); 
  p1.textContent = kaisu;
  let p2 = document.querySelector('span#answer');      
  p2.textContent = yoso; 
  let p3 = document.querySelector('p#result');

  if(yoso === kotae){
    console.log("正解です．おめでとう!");
    p3.textContent = '正解です．おめでとう!';
  }
  else if(kaisu===3){
    console.log("まちがい．残念でした答えは"+kotae+"です");
    p3.textContent = 'まちがい．残念でした答えは'+kotae+'です';
  }
  else if(kaisu>3){
    console.log("答えは"+kotae+"でした．すでにゲームは終わっています");
    p3.textContent = '答えは'+kotae+'でした。すでにゲームは終わっています';
  }
  else if(yoso>kotae){
    console.log("まちがい．答えはもっと小さいですよ");
    p3.textContent = 'まちがい．答えはもっと小さいですよ';
  }
  else {
    console.log("まちがい．答えはもっと大きいですよ");
   p3.textContent = 'まちがい．答えはもっと大きいですよ';
  }
}

// ボタンを押した後の処理をする関数 hantei() の定義

  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する

  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール