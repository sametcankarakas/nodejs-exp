const person = {
    name: 'Max',
    age: '29',
    greet() {
        console.log('Hi, I am ' + this.name)
    }    
};


//const printName = (person) => {
//    console.log(person.name);
//};

const printName = ({ name }) => {
    console.log(name);
};

printName(person);

//destructuring...
const { name , age } = person;
console.log(name, age);

//console.log(person);
//person.greet();

const hobbies = ['Sports', 'Cooking'];
const [hobyy1, hobby2] = hobbies;
console.log(hobyy1, hobby2);


//for (let hobby of hobbies) {
//    console.log(hobby)
//}

//console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
//console.log(hobbies);
//hobbies.push('Programming')
//console.log(hobbies)
//const copiedArray = hobbies.slice();
//const copiedArray = [...hobbies];
//console.log(copiedArray);

const copiedPerson = person;
console.log(person)