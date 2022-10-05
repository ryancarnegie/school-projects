
/* tested a second JS page to see what elements could be see in the other page */

let partTwoH1 = document.getElementById('part-two');
let numberArrayUl = document.getElementById('number-array-ul');
let arraysAndNumbers = document.getElementById('Arrays-and-numbers');
let h1PartThree = document.getElementById('h1-part-three');
let h1PartOne = document.getElementById('h1-part-one');
let h2ArrayNumberId = document.getElementById('h2ArrayId');


partTwoH1.innerHTML = `<p class="part">Part Two</p>`;
arraysAndNumbers.innerHTML = `<p>Arrays and numbers!<br>List of all elements in the array:</p>`;
h1PartThree.innerHTML = `<p class="part">Part Three</p>`;
h1PartOne.innerHTML = `<p class="part">Part One</p>`;
h2ArrayNumberId.innerHTML = `<h2>An array of numbers in a list</p>`;
