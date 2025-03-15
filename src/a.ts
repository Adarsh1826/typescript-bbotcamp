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

// interface User {
//     firstName:string,
//     lastname:string,
//     age:number
// }
// function greet(user:User){
//     console.log("hi there "+user.firstName);
// }
// greet({
//     firstName:"adarshh",
//     lastname:"singh",
//     age:20
// })

// enum
// enum Direction{
//     Up ="up",
//     Down="down",
//     Left="left",
//     Right="right"
// }

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

// function identity<T>(arg:T){
//     return arg
// }
// let output1 = identity("myString").toUpperCase()
// let output2= identity(100)
// console.log(output1);
// console.log(output2);

// Array generic
// function test<T>(arg:T[]){
//     return arg[0]
// }
// let o = test([true,false])
// console.log(o);

// // types
// type  Us = {
//     firstname:string,
//     lastname:string,
//     age:number
// }
// // the main diffrence between Interface and type is that
// // we can use such operation like | & on type not on interface

// // Advance ts
// interface User {
//     id:string,
//     name:string,
//     password:string,
//     age:number,
//     email:string
// }

// now here we are using pick to select some desired things from
// the User interface


// here we Uses generic and Pick to extract the name email ans age
// type UpdateUser = Pick<User,'name'|'age'|'email'>
// // type UpdateUserOptinal = Partial<UpdateUser>
// function updateUser(props:UpdateUser){
//     console.log(`${props.name}, ${props.age} , ${props.email}`);
// }
// const test2 ={
//     name:"adarsh",
//     age:20,
//     email:"ads@gmail.com"
// }
// updateUser(test2)

// Partial it make value optional
// here in test2 user is not updating all things
// so we use partial to do this
// type UpdateUserOptinal = Partial<UpdateUser>
// // readonly is used to fix the value so it can never be changes

// type UserOne ={
//     readonly name:string,
//     readonly age:number
// }

// cleaner way to create  object
// type Userss = Record<string,{age:number,name:string}>
// const user:Userss={
//     "add":{age:20,name:"adarsh"}
   
// }
type User ={
    name:string,
    age:number,
    email:string
}
const users = new Map<string,User>()
users.set("ads",{name:"Ras",age:30,email:"ads@gmail.com"})
users.set("sara",{name:"Ras",age:31,email:"sara@gmail.com"})

const user = users.get("ads")
console.log(user);
type EventType ='click' |'scroll' |'mousemove';
type ExcludeEvent = Exclude<EventType,'scroll'>
const handleEvent  = (event:ExcludeEvent)=>{
    console.log(`${event}`);
    
}
handleEvent('click')
