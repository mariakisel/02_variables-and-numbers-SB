/*Способ 1. Из всех перепробаванных мной способов,
только этот позволяет получить нечетное число 
и не выйти за границы диапазона при абсолютно любых числах */

let n = 1.888;
let m = -3.9;
let min = Math.ceil(Math.min(n,m));
let max = Math.floor(Math.max(n,m));
let range = Math.abs(max-min);

let rangeNumber = Math.floor(min + Math.random() * range);

//меняет знак на противоположный
let reversedSignNumber = -rangeNumber;
let finalResult = reversedSignNumber + Math.abs(reversedSignNumber % 2) - 1;
//выводим с изначальным знаком
console.log(-finalResult);

/*Способ 2 (наверное немного читерский) 
Принудительно устанавливать нулевой бит в 1.

let n = 1.888;
let m = -3.9;
let range = Math.abs(m-n);
let min = Math.min(n,m);
let max = Math.max(n,m);
console.log((min + Math.random() * (max - min)) | 1);

*/
