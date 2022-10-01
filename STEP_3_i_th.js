/*
Q
以下の数列の 4 番目の要素を出力してください。
5 1 3 4 5 12 6 8 1 3

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
  //console.log(lines);                     //lines[0],lines[1]も未定義なので自分で4を定義するのか？
  const a = '5 1 3 4 5 12 6 8 1 3';           //↑の解答は未定義なので5 1 3 4 5 12 6 8 1 3を自分で定義する。
  //console.log(a);                           //5 1 3 4 5 12 6 8 1 3
  const brbr = a;
  const trds = brbr.split(' ');
  console.log(trds[3]);

});
/*
----------解説----------
lines[0],lines[1]も未定義なので自分で与えられた要素を変数で宣言する。
配列の中の要素が1つの塊になっているのでsplitを使って一文字ずつに配列にする。
アウトプットが4なので配列は0から数えるので4は3番目になるので
trds[3]という書き方になる。
*/
