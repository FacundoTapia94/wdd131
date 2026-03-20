
let firstName = "Antonia";
let lastName = "Francesca";

//Function with name

function fullName(first, last) {
    return first + " " + last;
}

//OR

function fullName(first, last) {
  return `${first} ${last}`;   // string concatenation (first + ' ' + last) is an alternative
}




//Anonymus function

const fullName = function(fist, last) {
    return fisrt + " " + last;
};

//OR

const fullName = function (first, last) {
  return `${first} ${last}`;
}


//Arrow function 

const fullName = (first, last) => first + " " + last;

//OR

const fullName = (first, last) => `${first} ${last}`;


//Expression to call de function

document.getElementById("fullName").textContent = fullName(firstName, lastName)

