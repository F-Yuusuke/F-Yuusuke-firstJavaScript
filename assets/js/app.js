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
