function printTable(n){
    for(let i=n;i<=n*10;i+=n){
        console.log(i);
    }

}
printTable(4);

function sum(a,b){
    console.log("Hallow");
    console.log("world");
    return a+b;
    //Unreachable code------- after return
    console.log("ashish");
    console.log("sahoo")
}
sum(4,4)
function isAdult(age){
    if(age>=18){
        return"adult";
    }else{return "not Adult"}
    console.log(isAdult) 
}
