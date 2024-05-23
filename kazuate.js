// 答え
let kotae = Math.floor(Math.random()*10) + 1;


// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
hantei();
hantei();
hantei();
hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso = 4;
  
  // 課題3-1: 正解判定する
    let p1 = document.querySelector('span#kaisu');
    p1.textContent = kaisu+1;

    let p2 = document.querySelector('span#answer');
    p2.textContent = yoso;

    console.log((kaisu+1) +'回目の予想: '+yoso);

    if(0<=kaisu && kaisu<=1){
        if(kotae==yoso){
            let p = document.querySelector('p#result');
            p.textContent = '正解です。おめでとう!';

            console.log("正解です。おめでとう!");

        }else if(kotae < yoso){
            let p = document.querySelector('p#result');
            p.textContent = '間違い。答えはもっと小さいですよ。';

            console.log("間違い。答えはもっと小さいですよ。");

        }else if(kotae > yoso){
            let p = document.querySelector('p#result');
            p.textContent = '間違い。答えはもっと大きいですよ。';

            console.log("間違い。答えはもっと大きいですよ。")
        }
    }else if(kaisu==2){
        if(kotae==yoso){
            let p = document.querySelector('p#result');
            p.textContent = '正解です。おめでとう!';

            console.log("正解です。おめでとう!");

        }else{
            let p = document.querySelector('p#result');
            p.textContent = "残念でした。答えは"+kotae+"です。";

            console.log("残念でした。答えは"+kotae+"です。");

        }
    }else if(3 <= kaisu){
        let p = document.querySelector('p#result');
            p.textContent = "答えは"+kotae+"でした。すでにゲームは終わっています。";

        console.log("答えは"+kotae+"でした。すでにゲームは終わっています。");

    }

    kaisu=kaisu+1;
  
   
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}