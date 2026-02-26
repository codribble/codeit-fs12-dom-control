let count = 0;
// count를 1더하고 싶어.

// count = count + 1;
count++; // count = count + 1;
// console.log(count);

// count = count + 1;
count++;
// console.log(count);

// 감소 연산자 (--)
let score = 10;
score--; // score = score - 1
// console.log(score); // 9

score--;
// console.log(score); // 8

// 후위 증가 (먼저 사용, 나중에 증가)
let a = 5;
let b = a++;
console.log(a); // 6
console.log(b); // 5

// 전위 증가 (먼저 증가, 나중에 사용)
let x = 5;
let y = ++x;
console.log(x); // 6
console.log(y); // 6

// 기본 할당
let x = 10;

// 복합 할당
x += 5; // x = x + 5
console.log(x); // 15

x -= 3; // x = x - 3
console.log(x); // 12

x *= 2; // x = x * 2
console.log(x); // 24

x /= 4; // x = x / 4
console.log(x); // 6

x %= 4; // x = x % 4
console.log(x); // 2
