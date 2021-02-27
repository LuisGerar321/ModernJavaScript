//Primitive

//String
const name  =  "John Doe";
const age  = 24;
const  hasKids = true;

const car = null

let test;

const sym = Symbol();

console.log(typeof sym)

//Reference Types - Objects
//Array
const hobbies =  ['movies',  'music'];
//Object literal

const address = {
    city:  "Boston",
    state: "MA"
}
console.log(typeof address);
const today =  new Date();

console.log( today);
console.log(typeof today);


let topic = "JavaScript ";

if(topic){
  let topic = "Lexical Scope";
  console.log("block ", topic)
}
console.log("Global ", topic);

if(topic === "Lexical Scope"){
  console.log("this")
}

let dayOfWeek = "Friday"

if(dayOfWeek === "Friday" || dayOfWeek === "Sathurday"){
  console.log("Its the wekkend")

}else if(dayOfWeek === "Sathurday"){
  console.log("Still the weekend")
}else{
  console.log('weekend over')
}


try{
  console.log(year)
  console.log("Hello world")
}catch(error){
  console.log(error)
}
