/* // function
// 함수선언(정의), 호출
func(); // 함수 호출
func(){ // 함수 정의

}
funtion [함수명](입력) { ~~~~~~};
*/
function printHello(){  // 함수 정의를 만드는게 제일 먼저다 -> 함수 호출이 이루어진다
    console.log("Hello");
} 
printHello();   // 함수 호출 : 함수이름();

function log(message) { // 함수정의
    console.log(message);
}
log();
log("hi@");
log(123);

function showError() {
    alert('Error Error')
}
// showError();
// showError(); - 지원되는 내장 함수들을 볼 수있다. 왜냐하면 함수가 객체이기 때문

// 입력 파라미터를 객체로 받는 함수
function changeName(obj){
    obj.name = 'coder';
}

const ellie = {name: 'ellie'};  // ellie객체 생성
console.log(ellie);
changeName(ellie);
console.log(ellie);

function showmessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`)
}
showmessage("HI");