// // 일치연산자
// let num = 10;
// let str = '10';
// if (num == str) console.log('같다');
// if (num === str) console.log('같다');
// else console.log('다르다');

// /*
// == 동등 연산자
// === 일치 연산자
// */
// console.log(0 == false);
// console.log(0 === false);
// console.log("" == false);
// console.log("" === false);
// console.log(null == undefined);
// console.log(null === undefined);

// // 제어문
// // 선택
// const name = '';
// if (name === 'adam') {
//     console.log("welcome a");
// } else if (name === 'scott') {
//     console.log("welcome s");
// } else {
//     console.log("unknown name");
// }

// console.log(name == 'smith' ? 'yes' : 'no');

// // switch
// const browser = 'chrome';
// switch (browser) {
//     case 'IE':
//         console.log('microsoft');
//     case 'firefox':
//         console.log('mozilla');
//     case 'chrome':
//         console.log('google');
//     default:
//         console.log('unknown browser');
// }

// //  입력한 숫자가 3의 배수인지 확인하는 프로그램 작성
// let N = prompt("숫자를 입력하세요");
// if (N === null) {
//     alert("다시 입력");
// }
// else {
//     if (N % 3 === 0) {
//         alert('3의 배수');
//     } else {
//         alert('3의 배수가 아님');
//     }
// }

// document.open();
// let session = prompt("관심 세션을 선택해 주세요. 1. 마케팅, 2. 개발, 3. 디자인");

// switch (session) {
//     case '1':
//         document.write("<p>마케팅 세션은 <strong>201호</strong>에서 진행됩니다</p>");
//         break;
//     case '2':
//         document.write("<p>개발 세션은 <strong>203호</strong>에서 진행됩니다</p>");
//         break;
//     case '3':
//         document.write("<p>디자인 세션은 <strong>205호</strong>에서 진행됩니다</p>");
//         break;
//     default:
//         alert("잘못된 입력입니다.")
// }
// document.close();
// // script태그에 defer속성이 있으면 decument를 open과 close로 닫아줘야한다

// 반복문 
// for 문
// let sum = 0;
// for(let i = 1; i <= 1000; i++) {
//     sum += i;
// } 
// document.write("<h1>1부터 1000까지 더한 값: </h1>"+ sum);

// let ary = [10,20,30,40,50];
// for(let i =0; i < 5; i++) {
//     console.log(ary[i]);
// }
// for(let i of ary) {
//     console.log(i)
// }

// let i;
// while(i > 0) {
//     console.log(`while: ${i}`);
// }

//  1. 입력된 구구단
//  2. 1단부터 9단까지 출력
//  3. 0부터 100까지 4의 배수를 출력(continue)
//  4. 입력된 숫자만큼 카운터 하시오

// -----------------------입력된 구구단---------------------
document.write("<h1>구구단</h1>")
let num1 = prompt("숫자를 입력하세요 : ");
for(let i = 1; i <= 9; i++) { 
    document.write(`${num1} * ${i} = ${num1 * i}<br>`);
}

// ----------------1단부터 9단까지 출력------------------
document.write("<h1>1단부터 9단까지 출력</h1>")
for(let i = 1; i <= 9; i++) {
    document.write(`${i}단<br>`);
    for(let j = 1; j <= 9; j++) {
        document.write(`${i} * ${j} = ${i * j}<br>`);
    }
}

// ----------0부터 20까지 4의 배수를 제외한 출력(continue)-----------
document.write("<h1>0부터 20까지 4의 배수를 제외한 출력(continue 사용)</h1>")
for(let i = 1; i < 20; i++) {
    if(i % 4 === 0) continue;
    document.write(`${i}<br>`);
}

// -------------입력된 숫자만큼 카운터 하시오-------------------
document.write("<h1>입력된 숫자만큼 카운터 하시오</h1>")
let N = prompt("숫자를 입력하세요 : ");
for(let i = 0; i <= N; i++){
    document.write(`${i}&nbsp;`)
}
