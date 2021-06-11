/*Math.round в данном случае не подойдет, т.к для b 
дробная часть будет не 891, а 892*/

let a = 13.890123;
let b = 2.891564;
let n = 3;
let fract_a = Math.trunc((a%1) * Math.pow(10,n));
let fract_b = Math.trunc((b%1) * Math.pow(10,n));

console.log('Дробная часть а =',fract_a, 'Дробная часть b =',fract_b);
//Сравнение
console.log('a > b -',fract_a > fract_b);
console.log('a < b -',fract_a < fract_b);
console.log('a >= b -',fract_a >= fract_b);
console.log('a <= b -',fract_a <= fract_b);
console.log('a = b -',fract_a === fract_b);
console.log('a != b -',fract_a != fract_b);