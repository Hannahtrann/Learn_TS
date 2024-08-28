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

// let company: (string | number) [] = ['Adamo', 6];
// company.push('Adamo'); 
// company.push(6);
// console.log(">>> check array: ", company)

// //Adding type to function: 
// function add(a: number, b: number) {
//     const result = a + b;
//     return result;
// }
// let a = 5;
// let b = 8;


//Custom type or Type Aliases: 
//Custom Types: Tự tạo ra một kiểu dữ liệu, có thể re-use nhiều lần
// type user = {
//     name: string;
//     age: number;
//     isAdmin: boolean;
//     id: string | number;
// }

// let newUser: user = {
//     name: "Hannah",
//     age: 18,
//     isAdmin: true,
//     id: 123
// }

// console.log(newUser);

// //Type Aliases: đặt một tên mới cho một kiểu dữ liệu cụ thể trong TS
// type username = string;
// let user2: username = "Hannah";
// let user3: username = "Dennis";
// let user4: username = "John";
// console.log(user2,user3);
// console.log(user2 + " is admin of this website");

// //Interface with object: định nghĩa kiểu dữ liệu cho các đối tượng 
// interface person {
//     name: string;
//     age: number;
//     isAdmin: boolean;
// };

// let user5: person = {
//     name: "Hannah",
//     age: 20,
//     isAdmin: true
// };

// //Kế thừa interface: tạo interface mới từ interface hiện tại 
// interface employee extends person {
//     company: string;
//     jobTitle: string;
//     greet(): void;
// }

// let employee1: employee = {
//     name: "Hannah",
//     age: 20,
//     isAdmin: true,
//     company: "Adamo",
//     jobTitle: "Software Engineer",
//     greet() {
//         console.log(`Hello, my name is ${this.name} and I'm a ${this.jobTitle}`)
//     }
// };

// employee1.greet(); //phương thức greet phải nằm trong object or class để có thể sử dụng 'this' một cách chính xác


//Merge type: có 2 cách để merge type: dùng keyword type và interface 
//C1: Keyword type:
// type Admin = {
//     permissions: string[]
// };

// type AppUser = {
//     userName: string
// };

// type AppAdmin = Admin & AppUser;

// //C2: interface: 
// interface Admin1 {
//     permissions: string []
// };

// interface AppUser1 {
//     userName: string
// };

// interface AppAdmin1 extends Admin1, AppUser1 {
//     //can add any property at here or leave empty
// };

// let admin1: AppAdmin1;
// admin1 = {
//     permissions: ['login', 'read', 'edit', 'delete'],
//     userName: 'Hannah'
// };


// //Literal Type: Cho phép người dùng chỉ định các giá trị cụ thể mà một biến có thể chứa
// //Literal type cho biến: 
// let role1: 'CEO' | 'COO' | 'Manager';
// role1 = 'CEO'; //hợp lệ
// // role1 = 'HR'; //không hợp lệ

// //Literal Type cho object: 
// type userRole = {
//     role: 'CEO' | 'COO' | 'Manager';
//     level: 1 | 2 | 3;
// };

// let user11: userRole = {
//     role: 'CEO',
//     level: 1
// };1
// console.log(user11);

// // let user11: userRole = {
// //     role: 'HR', Lỗi: giá trị 'HR' không được gán cho biến role
// //     level: 3
// // }; 
 

//Generic type: 
//Để khởi tạo các hàm, lớp, interface có thể làm việc với nhiều kiểu dữ liệu khác nhau thay vì cố định một kiểu dữ liệu
//Generic cho function: 
function adding<T>(a:T): T {
    return a;
}

let output1 = adding<string>("Hello, my name is Hannah");
// let output2 = adding<number>(24);

console.log(output1);

//Generic Interface: 
interface animal<T, U> {
    name: T;
    age: U;
}
const animal1: animal<string, number> = {
    name: "dog",
    age: 2
};
console.log(animal1);

