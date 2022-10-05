
const userName = "Ryan";
const studentArray = ["Fish", "Peter", "John", "Jill", "Salmon"];


/** target name to be changed      */
let targetName = 'ryAN';
/* target name can be changed here */


/* user chooses number to count to zero */
let targetNumber = 7;



let fakeTargetName = 'potato';
const welcomeName = 'Jeff';
const arrayOfNumbers = [4, 0, -4, 13, -2];
const arrayOfNumbers2 = [4, 25, -5, 8, 55, 39, 23, 26, 46, -50, 86];
const minimumStringLength = 3;
let errorsDiscovered = true;




const nameList = document.getElementById('names');
const nextNameList = document.getElementById('bames');
let h1LandingText = document.getElementById('h1-landing');
let forEStudent = document.getElementById('forEachStudent');
let targetNameId = document.getElementById('target-name');
let h2ofStudents = document.getElementById('h2ArrayOfStudents');
let h1LandStudents = document.getElementById('h1-landing-2');
let landingList = document.getElementById('landing-list');
let targetFound = document.getElementById('targetMatch');
let nameAddedMsg = document.getElementById('nameAddedMessage');
let nameNotFound = document.getElementById('nameNotFound');
let testy = document.getElementById('test');
let ulNumberListItem = document.getElementById('number-array-ul');
let numbersToZero = document.getElementById('countNumsToZero');
let pIdTargetNums = document.getElementById('p-id-nums-to-zero');
let pIdCountingUp = document.getElementById('p-id-counting-up');
let ulNumsCountUp = document.getElementById('countUpToZero');
let zeroToZero = document.getElementById('countZeroToZero');
let ulArrayOfNums = document.getElementById('array-of-numbers-2');
let sumOfArray = document.getElementById('sum-array');
let countDownArray = document.getElementById('count-down-array');
let h2CountDown = document.getElementById('count-down-h2');
let ifNameDetected = true;

let welcomeNameH1 = document.getElementById('welcome-name');
welcomeNameH1.innerHTML = `<h1>Welcome, ${welcomeName}!</h1>`;
targetNameId.innerHTML = `Target name: ${targetName}`;
h1LandingText.innerHTML = `Welcome to Assignment #2`;
h2ofStudents.innerHTML = `An array of students in a list:`;
pIdTargetNums.innerHTML = `Counting down from target number to 0`;
pIdCountingUp.innerHTML = `Counting up from target number to 0`;
h2CountDown.innerHTML = `<h2>Count down by 16's from the previous sum of ${sumOfArray}</h2>`;

studentArray.push('Ryan');
studentArray.push('Tony the Tiger');
studentArray.push('Sardine');
studentArray.push('Shoe');


/** li array */
let ulListItem = `<ul>`;
for (let i = 0; i < studentArray.length; i++) {
  ulListItem += `<li> ${studentArray[i]}</li>`;
}
landingList.innerHTML = ulListItem;

let nameItem = '<p>';
let nameAddMsg = '<p>';
let notFound = '<p>';
let storeNameValue;


for (let i = 0; i < studentArray.length; i++) {
  console.log(studentArray[i])
  if (targetName.toLowerCase() == studentArray[i].toLowerCase()) {
    storeNameValue = studentArray[i];
    ifNameDetected = true;
    break;
  } 
  else if (targetName.toLowerCase() != studentArray[i].toLowerCase()) {
    ifNameDetected = false;
  }
}

if (ifNameDetected) {
  nameItem += `<p class="good">${storeNameValue} has been found in the list of names</p>`;
  nameAddMsg += `<p>${targetName} was the target name, and ${storeNameValue} is the name from inside the array list. <br>The if statement lowercased the conditional expression to find a match!</p>`;
  testy.innerHTML += `<li class="good">${storeNameValue} found</li>`;
} else if (!ifNameDetected) {
  nameItem += `<p class="warning">${targetName} has not been found in the list of names</p>`;
}

targetFound.innerHTML = nameItem;
nameAddedMsg.innerHTML = nameAddMsg;
nameNotFound.innerHTML = notFound;

/** reset the ul */
ulListItem = `<ul>`;


let storeNums = document.getElementById('storeNums');
let storeEvenNums = document.getElementById('evenNumbersInArray');
let storeOddNums = document.getElementById('oddNumbersInArray');
let storeNumbers = 0;


/*                          */
/* begin array number loops */
/*                          */

for(let i = 0; i < arrayOfNumbers.length; i++) {
 ulNumberListItem.innerHTML += `<li>${arrayOfNumbers[i]}</li>`;
 storeNumbers += arrayOfNumbers[i];
}
storeNums.innerHTML = `Sum of the elements: ` + storeNumbers;


/* count even numbers in array */
storeNumbers = 0;
for (let i = 0; i <= arrayOfNumbers.length; i++) {
  if (arrayOfNumbers[i] == 0) {
    continue;
  }
  else if (arrayOfNumbers[i] % 2 == 0) {
    storeNumbers += 1;
  } 
}
storeEvenNums.innerHTML = storeNumbers + ` total even numbers in the array`;


/* count odd numbers in array */
storeNumbers = 0;
for (let i = 0; i <= arrayOfNumbers.length; i++) {
  if (arrayOfNumbers[i] == 0) {
    continue;
  }
  else if (arrayOfNumbers[i] % 2 == 1) {
    storeNumbers += 1;
  }
}
storeOddNums.innerHTML = storeNumbers + ` total odd numbers in the array`;


targetNumber = 7;
/* count numbers to zero from a positive number */

if (targetNumber == 0) {
  numbersToZero.innerHTML = `There is no counting to be done.`;
}  else if (targetNumber > 0) {
    for (let i = targetNumber; i >= 0; i--) {
      numbersToZero.innerHTML += `<p> ${i} </p><br>`;
    } 
  
  } else if (targetNumber < 0) {
      for (let i = targetNumber; i <= 0; i++) {
        numbersToZero.innerHTML += `<p> ${i} </p><br>`;
      }
  }

  /* counts to 0 from a negative number */
  let newTargetNum = -5;
 
  if (newTargetNum == 0) {
    ulNumsCountUp.innerHTML = `There is no counting to be done.`;
  }  else if (newTargetNum > 0) {
      for (let i = newTargetNum; i >= 0; i--) {
        ulNumsCountUp.innerHTML += `<p> ${i} </p><br>`;
      } 
    
    } else if (newTargetNum < 0) {
        for (let i = newTargetNum; i <= 0; i++) {
          ulNumsCountUp.innerHTML += `<p> ${i} </p><br>`;
        }
    }

  
  let sum = 0;
  /* for each loop to display an array of numbers */

  arrayOfNumbers2.forEach(function( oneNumberInArray ){
    ulArrayOfNums.innerHTML += `<li>${oneNumberInArray}</li>`;
    sum += oneNumberInArray;
  });
  sumOfArray.innerHTML = sum;

  h2CountDown.innerHTML = `<h2>Count down by 16's from the previous sum of ${sum}</h2>`;
  
  /* counting down by 16 */
  for (let i = sum; i >= 0; i-=16) {
    countDownArray.innerHTML += `<p> ${i} </p><br>`;
    console.log(i);
  }


  