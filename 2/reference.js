const person = {
  name: "Max",
};

const secondPerson = person;
person.name = "Aniket";

console.log(secondPerson);

const thirdPerson = {
  ...person,
};
console.log("\n");
console.log(thirdPerson);
