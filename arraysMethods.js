
let arr = [33,66,7,6];
let arr2 = new Array(1,6,8,3,89,2);
let mixed =  [22, "Hello" ];
let fruit  =  ["Apple", "Cherry", "Bannana"]

let val;

// Find index of value

val = arr.indexOf( 7 );

// Mutating Arrays //
arr.push(250);

//Add in front
arr.unshift(700);

//Take off from end
arr.pop();

//Take off from front
arr.shift();

console.log("Antes splice ", arr);
arr.splice(1,2); //Comienza elimnar desde el elemento a a lo largo de n veces 


console.log("Despues splice ",arr);
console.log(val);

// Sorting an array 
fruit.sort();

//Sorting Numbers

arr2.sort( function(x,y){return y-x} );

// Find 
function over50(num){
    return num > 50;
}

val = arr2.find( over50);

console.log("Fruits arr: ",fruit)
console.log("Arr2: ", arr2)
console.log("val: ", val)

