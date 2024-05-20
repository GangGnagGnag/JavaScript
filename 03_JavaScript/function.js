// /* // function
// // 함수선언(정의), 호출
// func(); // 함수 호출
// func(){ // 함수 정의

// }
// funtion [함수명](입력) { ~~~~~~};

// printHello();
// function printHello();    // 함수선언

// */
// function printHello(){  // 함수 정의를 만드는게 제일 먼저다 -> 함수 호출이 이루어진다
//     console.log("Hello");
// } 
// printHello();   // 함수 호출 : 함수이름();

// function log(message) { // 함수정의
//     console.log(message);
// }
// log();
// log("hi@");
// log(123);

// function showError() {
//     alert('Error Error')
// }
// // showError();
// // showError(); - 지원되는 내장 함수들을 볼 수있다. 왜냐하면 함수가 객체이기 때문

// // 입력 파라미터를 객체로 받는 함수
// function changeName(obj){
//     obj.name = 'coder';
// }

// //자바에서는 객체를 생성하기 위해서는 클래스가 필요하지만 JSP 에는 필요가없음
// const ellie = {name: 'ellie'};  // ellie객체 생성
// console.log(ellie);
// changeName(ellie);
// console.log(ellie);

// function showmessage(message, from = 'unknown'){
//     console.log(`${message} by ${from}`)
// }
// showmessage("HI");

// console.clear();

// // Rest Parameters(added in ES6)
// function printAll(...args){
//     for(let i=0; i< args.length; i++){
//         console.log(args[i]);
//     }
//     for(const arg of args){
//         console.log(arg);
//     }
//     args.forEach((arg) => console.log(arg));
// }
// printAll('dream','coding','javis','ader',1,2);


// //  함수 출력
// function add(num1, num2){
//     return num1 + num2;
// }
// const res = add(10,20);
// console.log(res);

// console.clear();

// // 함수표현식 : 이름없는 함수를 만든다.
// // let func = function() {} // 함수를 변수에 할당 시킨다
// let showHello = function() {
//     console.log('hello');
// }
// showHello();
// let hiHello = showHello;
// hiHello();

// // 즉시 실행 함수: 즉시 실행되며 단 한번만 호출되어 다시는 호출할 수 없다   -()를 사용해서 전체적으로 묶어야함
// let result = (function () {
//     let a = 10;
//     let b = 20;
//     return a + b;
// }());
// console.log(result);

// // 입력 파라미터가 있는 즉시 실행 함수
// let res2 = (function (a, b) {
//     return a * b
// }(10 , 20)); // 입렵에 해당하는 부분
// console.log(res2);

// // 화살표 함수
// // let func = () => {};
// const simplePrint = function(){
//     console.log('simplePrint');
// }
// console.log(simplePrint);   // 함수의 이름은 포인터(주소)
// console.log(simplePrint()); // ()를 써야 사용이 가능함 
// // 쉽게 생각해서 simplePrint는 함수이름이다
// const simplePrint1 = () => {console.log('simplePrint');}
// console.log(simplePrint1());
// const simplePrint2 = () => console.log('simplePrint');
// console.log(simplePrint2());

// 입력이 없는경우
const add = (a, b) => {return a + b};
console.log(add(10,20));

// const hi = () => {alert("ㅎㅇ 반갑농")};
// hi();

document.open();
let hi1 = (user) => {document.write(user + "님 반갑습니다")};
hi1("javis");

// 콜백함수
function randomQuiz(answer,printYes,printNo) {
    if(answer === 'i love you') {
        printYes();
    } else printNo();
}
const printYes = function(){
    console.log('yes');
}
const printNo = function(){
    console.log('no');
}
randomQuiz('i love you', printYes, printNo);
randomQuiz('worng', printYes, printNo);
