const mydata = {
  name: "ajit",
  age: 23,
  city: "bhadaura",
  hobbies: {
    first: "cricket",
    second: "hockey",
  },
};
let { name, age, city, hobbies } = mydata;
console.log(`my name is ${name} and ${hobbies.second}`);
