function addNewElement(array, element, position) {
  if (position === "up") {
    // Gunakan unshift untuk menambah array baru
    array.unshift(element);
  } else if (position === "down") {
    // Gunakan push untuk menambah element baru di akhir array
    array.push(element);
  }

  return array;
}
//enambahkan element baru di awal atau di akhir array menggunakan unshift atau push, sesuai dengan posisi yang dipilih
const array1 = [1, 2, 3, 4, 5];
const newarray1 = addNewElement(array1, 6, "up");
console.log(newarray1);

const array2 = [1, 2, 3, 4, 5];
const newarray2 = addNewElement(array2, 6, "down");
console.log(newarray2);

const array3 = ["Edo", "Budi", "Joko", "Tono"];
const newarray3 = addNewElement(array3, "Rudi", "up");
console.log(newarray3);

const array4 = ["Edo", "Budi", "Joko", "Tono"];
const newarray4 = addNewElement(array4, "Rudi", "down");
console.log(newarray4);
