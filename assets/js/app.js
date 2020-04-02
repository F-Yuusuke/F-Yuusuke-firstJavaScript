// これからコードを書きます
// let res = document.getElementById('btn');
// let result = document.getElementById('result');
// btn.addEventListener('click',function(){
//   let res = ['大吉',　'中吉',　'小吉',　'末吉',　'凶'];
//   let randomNum = Math.random();

//   let num = Math.floor
//   (randomNum * res.length);

//   console.log(res[num]);
//     result.textContent = (res[num]);
// });

// const res = document.getElementById('btn');
// console.log(res);
// const result = document.getElementById('result');
// btn.addEventListener()

const res = document.getElementById('btn');
console.log(res);
btn.addEventListener('click',function(){
    console.log("成功したよ！");
});


const form = document.forms.myform;
form.sample.addEventListener('change',function(){
    console.log("何かが入力されました");
});


function test(){
    console.log(event.keyCode);
};


window.addEventListener('DOMContentLoaded',function() {
    console.log('ページが読み込まれました！成功です！');
});


// alert('2回目のこんにちは');
// alert('alertを使うと画面にプイッと文字が表示される');
// const a = 10;
// const b = 20;
// const sum = a + b;
// console.log(sum);
// console.log(`こんにちは。現在の時刻は${new Date()}です`);
// let myName = 'ユウスケ';
// alert(myName);




// バックグラウンドカラーをランダムに変更するコード
// 0以上1未満のランダムな少数
Math.random();
// 0以上100未満のランダムな整数
Math.floor(Math.random() * 100);
// 10以上20未満のランダムな整数
10 + Math.floor(Math.random() * 10);
// 長方形
const rectangle = document.querySelector('.rectangle');
// ボタンをクリックしたらonClickButton()を実行する
document.querySelector('.button').addEventListener('click',onClickButton);
// ボタンをクリックする度に長方形のグラデーションの色を変更する
function onClickButton() {
    // 0~359の間のランダムな数を取得する
    const randomHue = Math.trunc(Math.random() * 360);
    // グラデーションの開始色と終了色を決定
    const randomColorStart = `hsl(${randomHue}, 100%, 50%)`;
    const randomColorEnd = `hsl(${randomHue + 40}, 100%, 50%)`;
    // 長方形のグラデーションのための変数（---startと---end）を変更
    rectangle.style.setProperty('--start', randomColorStart);
    rectangle.style.setProperty('--start', randomColorEnd);
};
