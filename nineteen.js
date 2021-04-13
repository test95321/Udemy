const person = {
    name: 'Max'
}



const secondPerson = {
    ...person
};
console.log(secondPerson);

person.name = "Menu"
console.log(secondPerson);


