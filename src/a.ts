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
function x(){
    console.log("I am function");
    
}
function test(x:Function):void{
    setTimeout(()=>{
        x()
    },5000)
}
console.log(typeof test);

test(x)