let html_line;
const nameS = "Luis";
const ageS = 23;
const job =  "Robotics";
const city =  "Merida";

//Whitout template string

html_line = "<ul><li>Name " + nameS +  "</li>" + "<li>age " + ageS +  "</li>"  + "<li>Job " + job +  "</li>" + "<li>City " + city +  "</li>";

html_line = "<ul><li>Name " + nameS +  "</li>" + 
            "<li>age " + ageS +  "</li>"  + 
            "<li>Job " + job +  "</li>" + 
            "<li>City " + city +  "</li>";

html_line = `
    <ul>
        <li>Name: ${nameS}</li>
        <li>Age: ${ageS}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
    </ul>
`;


document.body.innerHTML = html_line;
