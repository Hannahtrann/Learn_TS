// //Union Type (Alternative type)
// //can be a multiple type 
// let userId: string | number = 'abc1';
// userId = 1;
// userId = 'abc';
// //userId = true; //wrong type 

//Object Type:
type userType = {
    name: string;
    age: number;
    isAdmin: boolean
};


let user8:userType  = {
    name: 'Hannah',
    age: 18,
    isAdmin: true
};

// let user1 = {
//     name: 'John',
//     age: 20,
//     isAdmin: false
// };

//Array Type:
let company1: (string | number) [] = ['Adamo', 6];
company1.push('Adamo'); 
company1.push(6);
console.log(">>> check array: ", company1)

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