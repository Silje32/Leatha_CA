//Use RegEx to validate form

//Select the form:
const form = document.querySelector("form");



//Validating that the full name inputs are not empty.
function checkFullName(fullname) {
  var myName = /(\w+)/;
  if (fullname.match(myName)) {
     return true;
  }  else {
     alert( "Please enter your name and last name here" );
     return false;
  }
}



//Validating that the address input is not empty.
function checkAddress(address) {
  var myAddress = /(\w+)/;
  if (address.match(myAddress)) {
     return true;
  }  else {
     alert( "Please enter your address here" );
     return false;
  }
}



//Validating that the postal code input is not empty.
function checkPostalCode(postalcode) {
   var myPostalCode = /^\d{4}$/;
   if (!postalcode.match(myPostalCode)) {
      return true;
   }  else {
      alert( "The postal code entered is invalid" );
      return false;
   }
}



//Validating that the phone and e-mail adress are correct.
function checkPhone(phone) {
  var myPhone =   /^\d{8}$/;
  if (phone.match(myPhone)) {
     return true;
  }  else {
     alert( "The phone number entered is invalid!" );
     return false;
  }
}

function checkEmail(email) {
  var myEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (email.match(myEmail)) {
     return true;
  }  else {
     alert( "The e-mail number entered is invalid!" );
     return false;
  }
}


//Function to check that the submit button is working.

form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();
    alert("the form was successfully submitted");
}



// Checkout button

//Click event
var myBtn = document.querySelector('button');

function myAlert () {
     alert("You will now proceed to checkout");
}

myBtn.addEventListener('click', myAlert);
