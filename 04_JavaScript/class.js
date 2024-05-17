// // //class 는 template이다. 데이터가 없음
// // //object는 class에 데이터를 넣으면 객체가 된다.(ES6)

// // class Person{
// //     constructor(name, age) {    // 필드
// //         this.name = name;
// //         this.age = age;
// //     }
// //     speak(){                   // 메서드
// //     console.log(`${this.name}: hello`)
// //     }
// // }

// // const ader = new Person('ader',30);
// // console.log(ader);
// // console.log(ader.name);
// // console.log(ader.age);

// // //getter setter
// class User{         //클래스 이름은 앞 글자 대문자
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     get age() {
//         return this._age;
//     }
//     set age(value){
//         this._age = value < 0 ? 0 : value;
//     }
// }
// const user1 = new User('gang','ster',-1);
// console.log(user1.age);
// // 그냥 age를 사용할 경우에는 this에있는 age를 사용하기 때문에 _와 같이 값의 형태를 다르게 줘야한다

// // 생성자 없이 필드를 작성하면  public, #기호를 붙이면 private 
// class Ex{
//     publicField = 2;
//     #privateField = 0;      
// }
// const ex = new Ex();
// console.log(ex.publicField);
// console.log(ex.privateField);

// // static - static 을 붙히면 클래스 맴버가 된다
// // 이놈들을 클래스 이름으로 접근해야한다
// // 각 객체마다 만들어지지 않고 공통으로 사용되는 데이터나 메서드에 사용
// class Article{
//     static publicsher = 'Dream Coding';
//     constructor(articleNumber){
//         this.articleNumber = articleNumber;
//     }
//     static printPublisher(){
//         console.log(Article.publicsher);
//     }
// }
// const article1 = new Article();
// // article1.printPublisher();
// console.log(Article.publicsher);

// inheritance
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(){
        console.log(`drawing ${this.color} color of`);
    }
    getArea(){
        return this.width * this.height;
    }
};
class Rectangle extends Shape{ };
const rectangle = new Rectangle(20 , 20 , 'blue')
rectangle.draw();

// overring
class Triangle extends Shape{
    getArea(){
        return (this.width * this.height) / 2;
    }
}
const tri = new Triangle(20, 20, 'red');
console.log(tri.getArea());

// instanceof : 왼쪽에 있는 오브젝트가 오른쪽에 있는 클래스의 오브젝트인지 확인
// 모든 오브젝트들은 최상위 Object 클래스를 상속한다 
console.log(tri instanceof Triangle);
console.log(tri instanceof Rectangle);
console.log(tri instanceof Shape);
console.log(tri instanceof Object);