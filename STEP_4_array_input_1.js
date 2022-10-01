/*
Q
以下の数列の全要素を改行区切りで出力してください。
8 1 3 3 8 1 1 3 8 8

*/
process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  //console.log(lines[0]);          未定義だから定義していく〜〜〜
  const a = '8 1 3 3 8 1 1 3 8 8';
  //console.log(a);                  8 1 3 3 8 1 1 3 8 8
  
  const brbr = a;
  const trds= brbr.split(" ");
  console.log(trds[0]+'\n'+trds[1]+'\n'+trds[2]+'\n'+trds[3]
  +'\n'+trds[4]+'\n'+trds[5]+'\n'+trds[6]+'\n'+trds[7]+'\n'
  +trds[8]+'\n'+trds[9]);

 });
 /*
 ----------解説----------
 数列を文字列で変数宣言する。
 文字列を一つずつの配列にしないと改行が適応されないので
 splitを使用し分解する。
 分解したのちに文字列の\nを使い改行しアウトプットする。
 */