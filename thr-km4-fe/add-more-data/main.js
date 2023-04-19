function addMoreData(object, key, value) {
  // membuat operator object baru dengan key-value yang baru
  return { ...object, [key]: value };
}
//variable
const data1 = { name: "Edo", age: 20 };
const databaru1 = addMoreData(data1, "address", "Jakarta");
//pemanggilan fungsi data
console.log(databaru1); // { name: 'Edo', age: 20, address: 'Jakarta' }

const data2 = { name: "Edo", age: 20 };
const databaru2 = addMoreData(data2, "hobbies", ["coding", "reading"]);
console.log(databaru2); // { name: 'Edo', age: 20, hobbies: ['coding', 'reading'] }

const data3 = { name: "Edo", age: 20 };
const databaru3 = addMoreData(data3, "isMarried", false);
console.log(databaru3); // { name: 'Edo', age: 20, isMarried: false }
