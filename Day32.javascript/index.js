// let str=["h1","hello","bye","!"];
// function concat (str){
//     let result;
//     for(let i=0;i<str.length;i++){
//         result +=str[i];
//     }
//     return result;
// }
// for(let i=1;i<=5;i++){
//     console.log(i);
    
// }
// let age=20;
// if(age>=18){
//     let str="adult";
//     console.log(str)
// // }
// function ouerFunc(){
//     let a=5;
//     let b=3;
//     function innerfunc(){//function scope 
//  console.log(a);
//  console.log(b);
//     }
//     console.log(a);
//     innerfunc()
// }
// let name="ashish";
// let sum=function(a,b){
//     return a+b;
// }
// let hallo=function(){
//     console.log("hello");
// }
// function multiplegreet(func,n){
// for(let i=1; i<=n;i++){
//     func();
// }
// }
// let greet=function(){
//     console.log("hello");

// }
// multiplegreet(greet,2)
// let odd= function(n){
//     console.log(!(n%2 == 0));
// }
// let even =function(n){
//     console.log(n%2==0);
// }
// let request ="odd";



const calculator={
    num:55,
    add: function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    }
}