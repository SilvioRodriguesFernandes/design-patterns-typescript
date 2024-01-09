const personPrototype = {
  firstName: 'Karina',
  lastName: 'Lima',
  age: 22,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);
anotherPerson.firstName = 'Aline';

console.log(anotherPerson);
console.log(anotherPerson.firstName);
console.log(anotherPerson.fullName());
