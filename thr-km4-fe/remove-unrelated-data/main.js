function removeUnrelated(object, key) {
  key.forEach((key) => {
    delete object[key];
  });
  return object;
}

const object1 = {
  name: "Edo",
  age: 20,
  address: "Jakarta",
  hobbies: ["coding", "reading"],
};

const keys1 = ["address"];
console.log(removeUnrelated(object1, keys1));
// Output: { name: 'Edo', age: 20, hobbies: [ 'coding', 'reading' ] }

const object2 = {
  name: "Edo",
  age: 20,
  address: "Jakarta",
  hobbies: ["coding", "reading"],
};

const keys2 = ["hobbies"];
console.log(removeUnrelated(object2, keys2));
// Output: { name: 'Edo', age: 20, address: 'Jakarta' }

const object3 = {
  name: "Edo",
  age: 20,
  address: "Jakarta",
  hobbies: ["coding", "reading"],
};

const keys3 = ["name"];
console.log(removeUnrelated(object3, keys3));
// Output: { age: 20, address: 'Jakarta', hobbies: [ 'coding', 'reading' ] }
