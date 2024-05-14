// state : pending -> fulfiied or rejected
// 1. producer
// promise를 생성하는 순간에 자동으로 실행된다
// const promise = new Promise((resolve, reject) => {
//     console.log("doing something");
// });

let promise = new Promise((resolve, reject) => {
    console.log("doing something");    
    setTimeout(() => {
        resolve('ader');    // 실행이 정상적으로 완료되면 resolve 호출
    },2000);
});

promise.then((value) => {
    console.log(value);
});