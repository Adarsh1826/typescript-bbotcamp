// TSC is compiler of typescript
// Ts is strictly typed
// First it transcompile the .ts file then create a .js file
// Browser and node does not understand ts


// here we are defining the type of variable 
// so x can't be used for any other types
// such as string , bool , etc ...

// const x : number = 1
// console.log(x);



// greeting function ins ts
// function greet(y:string){
//     console.log(`Hello ${y}`);
// }
// greet('Adarsh')


// sum basic fn

// function sum(x:number,y:number) 
//     {return x+y}
// let res : number = sum(2,3)
// console.log(res);

// bool return type 

// function adult(x:number){
//     if(x>18){
//         return true
//     }
//     else return false;
// }
// let ans : boolean = adult(15)
// if(ans){
//     console.log("Adult");
// }
// else console.log("Not Adult");

// console.log(ans);

// fn taking argument as function
// function x(){
//     console.log("I am function");
    
// }
// function test(x:Function):void{
//     setTimeout(()=>{
//         x()
//     },5000)
// }
// console.log(typeof test);

// test(x)

// Try to reduce the code repetion
// here we create create Interface to use at many place by just def
// in one place

interface User {
    firstName:string,
    lastname:string,
    age:number
}
function greet(user:User){
    console.log("hi there "+user.firstName);
}
greet({
    firstName:"adarshh",
    lastname:"singh",
    age:20
})

// enum
enum Direction{
    Up ="up",
    Down="down",
    Left="left",
    Right="right"
}

// enum can be used at many place where we can just change the value 
// at one place and all occurences changes
// function doSomething(key:Direction):void{
//     if(key==Direction.Up){
//         console.log(Direction.Up);
        
//     }
// }
// doSomething(Direction.Up)

// // array in ts

// function maxEle(num:number[]){
//     let max = 0;
//     for(let i=0;i<num.length;i++){
//         if(num[i]>max) max=num[i];
//     }
//     return max;
// }
// let ans  = maxEle([1,2,3,4,5])
// console.log(ans);

// Generics

function identity<T>(arg:T){
    return arg
}
let output1 = identity("myString").toUpperCase()
let output2= identity(100)
console.log(output1);
console.log(output2);

// Array generic
function test<T>(arg:T[]){
    return arg[0]
}
let o = test([true,false])
console.log(o);

// types
type  Us = {
    firstname:string,
    lastname:string,
    age:number
}
// the main diffrence between Interface and type is that
// we can use such operation like | & on type not on interface