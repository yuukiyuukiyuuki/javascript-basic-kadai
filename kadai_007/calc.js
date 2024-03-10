// 変数(num)1以上の正
let num = Math.floor(Math.random() * 100) + 1;
//変数(num)が3の倍数の場合
if (num % 3 === 0 && num % 5 === 0) {
  console.log('３の倍数です');
//変数(num)が5の倍数の場合
} else if (num % 3 ===  0) {
  console.log('5の倍数です');
//変数(num)が3の倍数かつ5の倍数の場合
} else if (num % 5 === 0) {
  console.log('3と5の倍数です');
}
//それ以外の場合
else {
  console.log(num);
}