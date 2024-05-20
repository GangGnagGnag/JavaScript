/* console.log("Hello world!");
console.log("Hi world!");


**변수**
1. 변수선언(3개의 키워드)
var, let, const: ES6 
let - 지역변수, 재선언, 호이스팅시 초기화 안됨 <-> var
const - 상수

let adam = 'adam';
console.log(adam);

console.log(age);
age = 5;
var age;

name = 4;
let name;

 전역변수 : 키워드없이 사용하면 전역변수
n = 10;
console.log(n);

let n1 = 100;
console.log(n1);
{
let name = 'scott'; // 지역변수
console.log(name);
name = 'adam';
console.log(name);
console.log(n);     // 전역변수
console.log(n1);
}
console.log(name); // 지역변수이기 때문에 사용 불가능

-------------------------------------------------------------------
*/
/* 변수 호이스팅 */ 
/*var a;
console.log("a의 값은 : " + a);
console.log("b의 값은 : " + b)
var b;

// console.log("c의 값은 : " + c);
// let c;
let d;
console.log("d값: " + d);

console.log(x===undefined);
var x = 3;


var myvar = "my value";
console.log(myvar);
(
    function (){
        console.log(myvar);     // undefined
        console.log(100);
        var myvar = "local value";
        var m1 = "local";
    }
)();
console.log(myvar);
// console.log(m1);

//  함수 호이스팅
sayHello();
function sayHello(){
    console.log("Hello");
}
--------------------------------------------------------------------
let name = "scott";
console.log(name);
name = 1200;
console.log(name);
name = 'hong';
const message = `my name is ${name}`;
console.log(message);
// number, string, boolean, null, undefined, symbol(ES6), obj
console.log(typeof(100));   //typeof()는 타입확인
let pi = 3.14;
console.log(typeof(pi)); //number: -2^53 ~ 2^53
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);
let x;
console.log(`value: ${nothing}, type: ${typeof x}`);
const infinity = 1 / 0;
console.log(infinity);
const negativeInfinity = -1 / 0;
console.log(negativeInfinity);
const nAn = 'not a number' / 2;
console.log(nAn);

----------------------------------------------------------------------------
*/

/*const char = 'a';
const smith = 'smith';
const greeting = 'Hello' + smith;
console.log(`value : ${char}, type: ${typeof char}`);
console.log(`value: ${smith}, type: ${typeof smith}`);
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const msg = 18 + 'old';
console.log(msg);
const i = '나는';
const age = '30';
console.log(i + age + '살 입니다');
*/

// boolean
// false: 0, null, undefined, NaN
// true: any other CSSMathValue

/* symbol : 고유한 식별자가 필요한 경우 */ 
/*onst str1 = 'strId';
const str2 = 'strId';
console.log(str1 == str2);
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1);
console.log(symbol2);
console.log(typeof(symbol1))
console.log(symbol1 === symbol2);
const symbol3 = Symbol.for('id');
const symbol4 = Symbol.for('id');
console.log(symbol3);
console.log(symbol3 === symbol4);
//  for을 쓰면 입력되는 문자열로 key 가 만들어진다 

// wapper
let str = 'javascript';
let len = str.length;
console.log(len);*/

/*et text = 'hello ';
console.log(text.charAt(0));
console.log(`value:${text}.type:${typeof text}`)
text = 1;
console.log(`value:${text}.type:${typeof text}`)
// console.log(text.charAt(0)); // 현재 타입이 number로 바꼈는데 0번 을 읽어오라 하니까 오류가 남
text = '10' + 5;  // = value:105.type:string
console.log(`value:${text}.type:${typeof text}`)
text = '22' / '2';  // 문자열안에 들어가있는게 숫자기 때문에 숫자고 바뀌었음  = value:11.type:number
console.log(`value:${text}.type:${typeof text}`)

// const
const bird = {specice: "kestrel"};
console.log(bird.specice);
bird.specices = "Striated Caracara";
console.log(bird.specices);
// 형변환
console.log(String(30), String(true), String(false));
console.log(String(null));
console.log(Number('12345'));
*/
/* 
출력방법
1. console.log - 콘솔창에 출력
2. doucument.wirte - 웹페이지 문서에 출력
3. alert() - 윈도우 알림창에 출력
4. innerHTML - 웹페이지

입력방법
1. alert()
2. prompt()
3. confirm()
*/

// const name = prompt('이름을 입력하세요');
// alert('반갑습니다' + name + '님');

// 두개의 정수를 입력받아서 더하시오.

const num1 = prompt('첫번째 숫자를 입력하세요');
const num2 = prompt('두번째 숫자를 입력하세요');
const result = Number(num1) + Number(num2);
alert(num1 + '+' + num2 + '=' + result);
confirm('두 수를 더한 값은: ' + result)
