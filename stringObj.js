const firstName = "Luis"; 
const lastName =  "Camara";
const str = "Hello there my name is luis";

val = firstName + " " +lastName;
val = lastName.length;

//Change case

val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName.indexOf("i");

//charAt()

val = firstName.charAt("2");
val = firstName.substring(0,3);

val = firstName.slice(-3)

val = str.split(" ");

//replace

val = str.replace("luis", "Gerardo");

console.log(val);