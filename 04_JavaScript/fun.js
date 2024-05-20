// //function quiz
// //funtion calculate(command, a, b) 
// //command: add, sub, divide, mul
// //return

// function calculate(command, a, b){
//     switch(command) {
//         case 'add':
//             return a + b;
//         case'sub':
//             return a - b;
//         case 'divide':
//             return a / b;
//         case'mul':
//             return a * b;
//         default:
//             throw error("Unknown command");
//     }
// }
// console.log(calculate('add',10,20));


// //함수를 입력파라미터로 받을 때는 함수 이름을 전달한다.
// function doSomething(add){
//     console.log(add);
//     const res = add(2, 3);
//     console.log(res);
// }
// function add(a,b){
//     const sum = a + b;
//     return sum;
// }

// doSomething(add);
//  //콜백의 다형성
function add(num1, num2){
    return num1 + num2;
}
function mul(num1, num2){
    return num1 * num2;
}
function surpise(callback){
    const result = callback(2, 3);
    console.log(result)
}
surpise(mul);

