// [YOUR NAME HERE]
var firstName, lastName, nameLength;
// addNumbers()
function addNumbers() {
  var sum = 5 + 325;
  printOutput(sum);
}

// getLength()
function getLength() {
  getName();
  nameLength = firstName.length + lastName.length;
  printOutput(nameLength);
}

// getName()
function getName() {
  firstName = document.getElementById('fname').value;
  lastName = document.getElementById('lname').value;
}

// printOutput()
function printOutput(printThis) {
  document.getElementsByClassName('output')[0].innerHTML = printThis;
}
// addNumbers()

// getName()

// getLength()

// printOutput()
