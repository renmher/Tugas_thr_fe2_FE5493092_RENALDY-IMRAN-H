function removeLeftRight(arr, left, right) {
  if (left === "left") {
    arr.shift(); // hapus elemen di awal array
  } else if (right === "right") {
    arr.pop(); // hapus elemen di akhir array
  }

  return arr;
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["Edo", "Budi", "Joko", "Tono"];

console.log(removeLeftRight(arr1, `left`)); // output: [2, 3, 4, 5]
console.log(removeLeftRight(arr1, `right`)); // output: [1, 2, 3, 4]
console.log(removeLeftRight(arr2, `left`)); // output: ["Budi", "Joko", "Tono"]
console.log(removeLeftRight(arr2, `right`)); // output: ["Edo", "Budi", "Joko"]
