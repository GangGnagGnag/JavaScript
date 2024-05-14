// // async & await

// function fetchUser() {
//     // 10s.......
//     return 'ellie';
// }

function fetchUser() {      
    return new Promise((resolve, reject) => {
        resolve('ellie');
    })
}

const user = fetchUser();
user.then(console.log);
// console.log(user);

// // -----------------------------------------------------

// // async : 코드블럭이 promise로 변환된다. 리턴도 promise 

// async function fetchUser() {
//     return 'ellie';
// }
// const user1 = fetchUser();
// user1.then(console.log);

// async function func1() {
//     return '제대로 알려줘...';   // 이렇게 사용해도 무방하다.
//     // return Promise.resolve(1);   //명시적으로 사용해도 되지만
// }
// func1().then(alert);

// await - async 키워드가 있는 함수에만 사용가능
// // 비동기의 작업의 완료를 기다린다
// async function func2() {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('completer');
//         }, 2000);
//     })
//     let result = await promise;
//     alert(result);
// }
// func2();

// 동기적 처리

function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}
async function getApple() {
    await delay(2000); // 여기서 오타 수정
    return '🍎';
}
async function getBanana() {
    await delay(2000); // 여기서 오타 수정
    return '🍌';
}

// 아래와 결가값이 같음 
// (꼬리에 꼬리를 무는 콜백 형태이기때문에 아래코드가 더 보기 좋은 코드임)
// 1번
// function pickFruits() {
//     return getApple()
//     .then(apple => {
//         return getBanana()
//         .then(banana => `${apple} + ${banana}`);
//     });
// }

// // 2번
// async function pickFruits() {
//     const apple = await getApple();
//     const banana = await getBanana();
//     return `${apple} + ${banana}`;
// }
// // 3번
// async function pickFruits() {
//     const applePromise = getApple();
//     const bananaPromise = getBanana();
//     const apple = await applePromise;
//     const banana = await bananaPromise;
//     return `${apple} + ${banana}`;
// }
// // 4번  (배열로 전달된 promise들이 모두 병렬로 처리된다.)
// function pickFruits() {
//     return Promise.all([getApple(),getBanana()])
//     .then(fruits => fruits.join('+'))
// }
// 1,2,3,4 모두 결과같이 같음 
// pickFruits().then(console.log);
function pickOnlyOne(){
    return Promise.race([getApple(),getBanana()]);
}
pickOnlyOne().then(console.log);