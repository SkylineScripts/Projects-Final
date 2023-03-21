//Clear Function

function Clear(){
  const input = document.getElementById('bottom');
  const firstnum = document.getElementById('i');
  const top = document.getElementById('top');
  top.value = '';
  firstnum.value = '';
  input.value = '';
  
}
//Clear Function
function ClearRange() {
  const range1 = document.getElementById('range1')
  const range2 = document.getElementById('range2')
  const result = document.getElementById('result')
  range1.value = '';
  range2.value = '';
  result.value = '';
}
//Factor Calculator
function getFactors(num) {
  const factors = [];
  for (let i = 1; i <= Math.abs(num); i++) {
    const possibleFactor = num / i;
    if (Math.trunc(possibleFactor) === possibleFactor) {
      factors.push(possibleFactor);
      factors.push(-possibleFactor);
    }
  }
  return factors;
}

function ab() {
  const num1 = document.getElementById('bottom').value;
  const findI = document.getElementById('i');
  const top = document.getElementById('top').value;
   const factors = getFactors(top);
   // [1,2,3,6]
  // // f1 = 3, f2 = 1
   for (let factor1 of factors) {
     for (let factor2 of factors) {
       if (factor1 + factor2 == num1 && factor1 * factor2 == top) {
         return findI.value = "i = " + factor1 + ";" + " y = " + factor2 + ";";
       }
     }
   }
   return findI.value = "Cannot Factor";
}

// New Problem: Generate a random number that is in between the number range of top and bottom
  // With that random number, if it is even, then print yes, else no
  // Number Generator
function Range() {
  const range1 = document.getElementById('range1').value;
  const result = document.getElementById('result');
  const range2 = document.getElementById('range2').value;
  for (let i = parseInt(range1); i < parseInt(range2); i++) {
    let PosOrNeg = Math.random() < 0.5 ? -1 : 1;
    let random = Math.floor(Math.random() * i) * PosOrNeg
    if (random % 2 == 0) {
      if (random > parseInt(range1) && random < parseInt(range2)) {
        return result.value = "Random Number = " + random +  " :Yes";
      }
    } 
    if (random % 2 !== 0) {
      if (random > parseInt(range1) && random < parseInt(range2)) {
        return result.value = "Random Number = " + random + " :No";
      }
    }
  }
}

//Counter
let count = 0;
let total = 0;

document.querySelectorAll('.btn').forEach(item => {
  const value = document.getElementById('value');
  const totalClicks = document.getElementById('total');
  const AutoValue = document.getElementById('Autoclick');
  item.addEventListener('click', event => {
    if (item.classList.contains('increase')) {
      value.innerHTML = count++;
      value.textContent = count
      totalClicks.innerHTML = total++;
      totalClicks.textContent = total;
    }
    else if (item.classList.contains('reset')) {
      count = 0;
      value.textContent = count;
      total = 0;
      totalClicks.textContent = total;
    }
    else if (item.classList.contains('decrease')) {
      value.innerHTML = count--;
      value.textContent = count
      totalClicks.innerHTML = total++;
      totalClicks.textContent = total;
    }
    else if (item.classList.contains("interval")) {
      AutoValue.innerHTML = "Stop Autoclick";
      AutoValue.textContent = "Stop Autoclick";
      let Autoclick = setInterval((event) => {
        value.innerHTML = count++;
        value.textContent = count
      }, 1000)
      totalClicks.innerHTML = total++;
      totalClicks.textContent = total;
    }
    })
  })




//Tabcontents
function openTab(evt, MathJs) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(MathJs).style.display = "block";
  evt.currentTarget.className += " active";

  let Logo = document.getElementById('LogoHeader')
  if (MathJs == 'FactorJs') {
    Logo.textContent = "Factor"
  }
  if (MathJs == 'DefaultJs') {
    Logo.textContent = "Projects"
  }
  if (MathJs == 'RangeJs') {
    Logo.textContent = "Range"
  }
  if (MathJs == 'CounterJs') {
    Logo.textContent = "Counter"
  }
  if (MathJs == 'TestJs') {
    Logo.textContent = "Test"
  }
  if (MathJs == 'SearchJs') {
    Logo.textContent = "Search"
  }
}

document.getElementById("Do").click();

//Disable 
function myFunction() {
  let prefix = "Disable"
  let input;
  for (let i = 0; input = document.getElementById(prefix + i); i++) {
    input.disabled = true;
  }
}

//Enter Key
let prefix = "Row"
let input;
for (let i = 0; input = document.getElementsByClassName.classList.contains(prefix + i); i++) {
  input.disabled = true;
}
document.addEventListener("keyup", function(event) {
  if (event.key === 'Enter') {
      alert('Enter is pressed!');
  }
});

//SearchBar
function SearchKey() {
  let search = document.getElementById('SearchContent')
  if (search.value == 'Factor') {
    document.getElementById('Page1').click();
    search.value = "";
  }
  if (search.value == 'Range') {
    const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);

    search.value = "";
  }
  if (search.value == 'Counter') {
    document.getElementById('Page3').click();
    search.value = "";
  }
  if (search.value == 'Test') {
    document.getElementById('Page4').click();
    search.value = "";
  }
  
}

