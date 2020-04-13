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



// 文字列の長さを取得するコード
// テキストエリア
let textarea =document.querySelector('.textarea');
// 入力中の文字数
let string_num = document.querySelector('.string_num');
// テキストを入力する度にonKeyUp()を実行する
textarea.addEventListener('keyup' , onKeyUp);
function onKeyUp() {
    // 入力されたテキスト
    const inputText = textarea.value;
    // 文字数を反映
    string_num.innerText = inputText.length;
};




document.querySelector('#submitButton').addEventListener('click', (event) => {
    // 電話番号を取得
    const phoneNumber = document.querySelector('#phoneNumberText').
    value;

    // 電話番号に「-」が含まれている場合は''（空文字）に置き換える
    const trimmedPhoneNumber = phoneNumber.replace(/-/g,'');
    alert(`電話番号は${trimmedPhoneNumber}です`);

    // ボタンのデフォルトの挙動をキャンセル
    event.preventDefault();
});



// 文字列の結合
// 姓の入力
const familyNameText = document.querySelector('#familyNameText');
// 名前の入力欄
const firstNameText = document.querySelector('#firstNameText');
// 姓名
const fullName = document.querySelector('#fullName');
// 文字を入力する度にonKeyUp()を実行する
firstNameText.addEventListener('keyup', onKeyUp);
familyNameText.addEventListener('keyup', onKeyUp);
// 文字列が入力される度に実行される関数
function onKeyUp() {
    // 姓
    const familyName = familyNameText.value;
    // 名
    const firstName = firstNameText.value;
    // フルネーム出力
    fullName.innerHTML = `${familyName} ${firstName}`;
};


// 今日の日付を取得
const today = new Date();
// #main内にHTMLコードを動的に書き出す
document.querySelector('#main').innerHTML = `
  <h1>今日${today.getMonth() + 1}/${today.getDate()}の天気</1>
  <p>広島は、晴れでしょう<p/>
`;





// ふわっと現れる画像アニメーション できなかった
// 到達したら要素を表示させる
function showElememtAnimation() {
    let element = document.getElementsByClassName('js-animation');
    // 要素がなかったら処理をキャンセル
    if(!element) return;

    let showTiming = window.innerHeight > 768 ? 200 : 40; //要素が出てくるタイミングはここで調節
    let scrollY = window.pageY0ffset;
    let windowH = window.innerHeight;
    
    for(let i = 0; i < element.length; i++) {
        let elemClientRect = element[i].getBoundingClientRect(); let elemY = scrollY + elemClientRect.top; if(scrollY + windowH - showTiming > elemY) {
            element[i].classList.add('is-show');
        } else if(scrollY + windowH < elemY) {
            // 上にスクロールして再度非表示にする場合はこちらを記述
            element[i].classList.remove('is-show');
        }
    }
}
showElememtAnimation();
window.addEventListener('scroll', showElememtAnimation);
















// 文字列を取り出す ここは今の俺にはできませんでした！
// console.log('JavaScript'.charAt(1));＝最大の文字数
// 検索語
// const searchWordText = document.querySelector('#search-word-input');
// 県名のリスト
// const prefectureList = document.querySelectorAll('#prefecture-List button');

// 文字が入力される度に内容のチェックを行う
// searchWordText.addEventListener('keyup', () => {
    // 検索語欄に入れられた値を取得
    // const searchWord = searchWordText.value;
    
    // 県名リストについてループ
    // elementはそれぞれの要素に当たる
    // prefectureList.forEach((element) => {
        // 検索語が無ければ全ての要素を表示する
        // if (!searchWord || searchWord === '') {
        //     element.classList.remove('hide');
        //     return;
        // }

    // 県名を取得
    // const prefectureName = element.dataset.name;
    // ふりがなを取得
    // const phonetic = element.dataset.phonetic;

    // 検索語の最初の一文字が一致するかどうかで、hideクラスの付与を決定する
    // hideクラスが付与された要素は、画面上から削除される
    // if (
    //     searchWord.charAt(0) === prefectureName.charAt(0) ||
    //     searchWord.charAt(0) === phonetic.charAt(0)
    // ) {
        // 検索語の最初の一文字が一致する場合、hideクラスを除去
    //     element.classList.remove('hide');
    // } else {
        // 検索語の最初の文字が一致しない場合、hideクラスを追加
//         element.classList.add('hide');
//     }
//     });
// });


