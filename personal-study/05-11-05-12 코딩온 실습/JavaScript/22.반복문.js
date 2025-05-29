/*let num = 1000;

for (let i = 1; i <= 1000; i++) {
  if (i % 13 === 0 && i % 2 === 1) {
    console.log(i);
  }
}


for (let dan = 2; dan <= 9; dan++) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${dan} x ${i} = ${dan * i}`);
  }
  console.log('');
}

*/

let number = 1;
let sum = 0;
while (number <= 100) {
  if (number % 2 == 0 || number % 5 == 0) sum += number;
  number++;
}
console.log(sum);
