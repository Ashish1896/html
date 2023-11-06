let months=["january","june","march","august"]
console.log(months)
months.shift();
months.shift();
months.shift();

months.unshift("july");
months.unshift("june");
months.unshift("january");
console.log(months);
let first=[1,2,3,4,5,6];
let second=[7,8,9,"january","june",24,747];
let final=first.concat(second);
console.log(final);
let reverse=second.concat(first);
console.log(reverse);
first.reverse();
console.log(first);
let ak=first.slice(3);
console.log(ak);
let cars=["audi","lambogini","maruti","hunda"];
cars.splice(2);
console.log(cars);
cars.splice(0,1);
console.log(cars)
cars.push("hero");
console.log(cars)
cars.pop();
console.log(cars)
cars.push("mercidies")
console.log(cars)
cars.splice(1,0,"farari");
console.log(cars);
cars.splice(2,1,"waganar");
console.log(cars);
cars.sort();
console.log(cars);
let result=[100,23,34,32,45];
result.sort()
console.log(result);