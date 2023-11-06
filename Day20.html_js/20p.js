// const favourite="Avtar";
// let guess= prompt("guess my favourite movie");
// while((guess!= favourite)&& (guess!="quit"));{
// // console.log("wrong guess");
// guess=prompt("wrong guess Pless try again");}
// if(guess==favourite){
//     console.log("Congrats!");
// }else{
//     console.log("you quite");}

let i=1;
while(i<=5){
    if (i==3){
        break;
    }
    console.log(i);
    i++;
}
console.log("we use break to exite")
// IT IS A ORE GAME TO ENTER THE FACTOR

const favourite="Avtar";
let guess= prompt("guess my favourite movie");
while(guess!= favourite){ if (guess=="quit"){
console.log("you Quit");
break;}
guess=prompt("wrong guess Pless try again");}
if(guess==favourite){
    console.log("Congrats!");}

let fruits =["mango","apple","banana","litchi","orange"];
fruits.push("pinapple");
for(let i=0;i<fruits.length;i++){
    
    console.log(i,fruits[i]);
}
let heroes =[["ironman","spiderman","thor"],
["sukuns","itachi","madara","sasuke"]]
for (let i=0; i<heroes.length;i++){
    console.log(i,heroes[i],heroes[i].length);
    for (let j=0;j<heroes[i].length;j++){
        console.log(j);
    }
}
let student =[["ashish",89],["Sradha",98.3],["rakesh",78.34]];
for (let i=0;i<student.length;i++){
    // console.log('info of student #${i}' );
    for(let j=0;j<student[i].length;j++){
        console.log(student[i][j]);
    }
}