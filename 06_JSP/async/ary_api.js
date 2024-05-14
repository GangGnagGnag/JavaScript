// join(): array -> string
// const fruits = ['apple', 'banana', 'orange'];
// const result = fruits.join(',');
// console.log(result);
// split(): string -> array 로 변환
const fruits = '사과, 바나나, 체리, 포도';
const result = fruits.split(',');
console.log(result);

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 19, false, 90),
    new Student('C', 39, true, 50),
    new Student('D', 49, false, 60),
    new Student('E', 59, true, 90)
];
{
    // find - 제일 처음의 요소를 리턴
    const result = students.find(function (student, index) {
        // console.log(student, index);
        return student.score === 90;
    });
    console.log(result);
}
{
    console.clear();
    // filter : 찾은 것을 전부 리턴한다.
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}
{
    console.clear();
    // const result = students.map((student) => student);
    const result = students.map((student) => student.score * 2);
    console.log(result);
}