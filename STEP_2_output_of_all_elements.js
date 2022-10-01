/*
Q
以下の数列の全要素を改行区切りで出力してください。
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
    //console.log(lines[0]); 未定義
    
    console.log('5'+'\n'+'1'+'\n'+'3'+'\n'+'4'+'\n'+'5'+'\n'+'12'+'\n'+'6'+'\n'+'8'+'\n'+'1'+'\n'+'3');
});
/*
----------解説----------
期待する出力を確認すると一文字ずつ改行されていると判断。
改行は\nで実装してくれる。
\nは文字列扱いになるので''で囲む。
*/