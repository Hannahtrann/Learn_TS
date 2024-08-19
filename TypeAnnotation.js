// //Type annotation để chỉ định kiểu dữ liệu cho các biến, hàm, tham số >> giúp ngăn chặn lỗi khi code và cải thiện khả năng đọc mã nguồn 
// //Type annotation cho biến: 
// let firstName: string = "Hannah"; //trong TS không được sd biến 'name' vì nó là một biến mặc định có sẵn trong TS 
// let age: number = 18;
// let isFemale: boolean = true;
// //Type annotation cho mảng: 
// let number: number[] =[1, 2, 3, 4, 5];
// let gender: string[] =["Male", "Female"];
// //Type annotation cho object:
// let employee: { firstName: string; age: number; gender: string} = {
//     firstName: "Hannah",
//     age: 18,
//     gender: "Female"
// };
// //Type annotation cho hàm: 
// function greet(name: string): string {
//     return "Hello, " + name + "learn TS";
//   }
//   let greeting: string = greet("Hannah"); // Kết quả: "Hello, Hannah learn TS"
// //Type annotation cho tham số hàm:
// function add(a: number, b: number): number {
//     return a + b;
// }
// let sum: number = add(2, 3); 
// console.log(sum); //Kết quả = 8
// let username;
var company = ['Adamo', 6];
company.push('Adamo');
company.push(6);
console.log(">>> check array: ", company);
//Adding type to function: 
function add(a, b) {
    var result = a + b;
    return result;
}
var a = 5;
var b = 8;
console.log(add(a, b)); //Or: console.log(add(5,8)) >>Truyền thẳng đối số vào
var newUser = {
    name: "Hannah",
    age: 18,
    isAdmin: true,
    id: 123
};
console.log(newUser);
var user2 = "Hannah";
var user3 = "Dennis";
var user4 = "John";
console.log(user2, user3);
console.log(user2 + " is admin of this website");
;
var user5 = {
    name: "Hannah",
    age: 20,
    isAdmin: true
};
var employee1 = {
    name: "Hannah",
    age: 20,
    isAdmin: true,
    company: "Adamo",
    jobTitle: "Software Engineer",
    greet: function () {
        console.log("Hello, my name is ".concat(this.name, " and I'm a ").concat(this.jobTitle));
    }
};
employee1.greet();
