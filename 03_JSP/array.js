// 배열
const arr1 = new Array(); 
const arr2 = [1,2,3,4,5];
console.log(arr2);

const fruits = ['🍓','🍊'];
console.log(fruits);

// 기본 for문
for(let i =0; i < 2; i++) {
    console.log(fruits[i]);
}   
// for of
for(let fruit of fruits) {
    console.log(fruit);
}
// forEach (자바스크립트는 함수도 입력ㄴ으로 사용이 가능하다)
fruits.forEach(function(fruit, index, array){   // 함수
    console.log(fruit, index, array);
});

fruits.forEach((fruit, index) => {  // 애로우 함수(화살표 함수)
    console.log(fruit, index);
}); // fruit에 있는 요소와 인덱스 번호 출력

fruits.forEach((fruit) => console.log(fruits)); // 몸체부분이 하나인 경우에는 한줄로 사용이 가능함 ( {} 생략가능 )

let ary = [1,2,3,4,5];
console.log(ary.length);
ary.push(10);   //배열의 원소를 마지막에 추가한다
console.log(ary.length);
console.log(ary);
ary.unshift(0); // 배열의 첫번째 요소로 추가한다 
console.log(ary.length);
console.log(ary);

ary.pop();  //배열의 마지막 원소를 삭제한다
console.log(ary.length);
console.log(ary);

ary.shift(); 
console.log(ary.length);
console.log(ary);

//  slice
fruits.push('🍒','🍉','🍈','🍋');   //['🍓', '🍊', '🍒', '🍉', '🍈', '🍋']
console.log(fruits);
fruits.splice(1,1);     //(시작 인덱스, 삭제갯수, 추가 갯수) 결과 = ['🍓', '🍒', '🍉', '🍈', '🍋']
console.log(fruits);
fruits.splice(3,2);     // ['🍓', '🍒', '🍉']
console.log(fruits);
fruits.splice(1,1,'🍌','🍍');
console.log(fruits);    //   ['🍓', '🍌', '🍍', '🍉']

// concat 함수를 통해 배열2개 붙이기
const fruit2 = ['🍃','🍂'];
console.log(fruit2);
const newFruits = fruits.concat(fruit2);
console.log(newFruits); // ['🍓', '🍌', '🍍', '🍉', '🍃', '🍂']

// seraching
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍓')); // 인덱스 리턴
console.log(fruits.indexOf('🍌'));
console.log(fruits.includes('🍘')); // 있으면 true, 없으면 false
console.log(fruits.includes('🍌'));
console.clear();