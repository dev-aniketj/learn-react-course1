class Human {
  gender = "female";
  printGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = "Aniket";
  gender = "male";

  printName = () => {
    console.log(this.name);
  };
}

console.log("-- PERSON --");
const person = new Person();
person.printName();
person.printGender();

console.log("-- HUMAN --");
const human = new Human();
human.printGender();
