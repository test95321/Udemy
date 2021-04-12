class Human  {
    gender = 'male';

    printGender = () => {
        console.log(this.gender)
    }
}

class Person extends Human{
        name = 'Max'
        gender = "female"


    printMyName= () => {
        console.log(this.name)
    }
}

const myPerson = new Person()

myPerson.printMyName()

myPerson.printGender()

