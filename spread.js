const numbers = [1,2,3,4,5]
const newNumbers =[...numbers, 6,7,8,9,10]
console.log(newNumbers);

const person = {
    name: "Max"
}
const newPerson = {
    ...person,
    age: 28,
}

console.log(newPerson);



const filter =  (...args) => {
    return args
}

console.log(filter(numbers, newNumbers));
