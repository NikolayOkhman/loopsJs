let array = [];
array[0] = prompt("Enter 1st word");
array[1] = prompt("Enter 2nd word");
array[2] = prompt("Enter 3rd word");
array[3] = prompt("Enter 4th word");
array[4] = prompt("Enter 5th word");
array[5] = prompt("Enter 6th word");
array[6] = prompt("Enter 7th word");
array[7] = prompt("Enter 8th word");
array[8] = prompt("Enter 9th word");
array[9] = prompt("Enter 10th word");
function displayArray(x) {
   console.log("The word is " + x);
}
array.forEach(displayArray);

for (let i = 1; i < 11; i++) {
   let b = prompt("הזן מילה " + i);
   console.log(i + " " + "word is " + b);
}
