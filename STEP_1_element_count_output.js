/*
Q
以下の数列の要素数を出力してください。
5 1 3 4 5 12 6 8 1 3

*/process.stdin.resume();
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
  //console.log(lines[0]); undefined
  const a = 10;
  console.log(a);
  
  /*
  ----------解説----------
  lines[0]の中身をアウトプットする。
  undefined（未定義）とアウトプットされたので
  自分で整数を変数に宣言する必要があると考える。
  期待する出力を確認すると10、問題文に10個の要素数があるので
  10を変数定義してアウトプットする。
  */
});