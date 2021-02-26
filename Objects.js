const person = {
    firstName: "Luis",
    lastName: "Camara",
    age: 24,
    email: "Luis.Camara@TheKsquareGroup.com",
    hobbies: ["Music", "Sport"],
    address: {
        city: "Merida",
        state: "Yucatan"
    },
    getBirthYear: function(){
        return 2021 - this.age;
    } 
}

let valP;

valP = person;
valP =  person.getBirthYear();


console.log(valP);