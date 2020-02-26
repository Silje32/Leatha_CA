//Use RegEx to validate form

//Select the form:
const form = document.querySelector("form");

// Submit event
function validateForm(event) {
  alert ("The form was submitted");
}

form.addEventListener("submit", validateForm);



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
   var myPostalCode = //;
   if (postalcode.match(myPostalCode)) {
      return true;
   }  else {
      alert( "The postal code entered is invalid" );
      return false;
   }
}



//Validating that the phone and e-mail adress are correct.
function checkPhone(phone) {
  var myPhone = /^d\d\d\d\d\d\d\d$/;
  if (phone.match(myPhone)) {
     return true;
  }  else {
     alert( "The phone number entered is invalid!" );
     return false;
  }
}

function checkEmail(email) {
  var myEmail = /\w+\.\w+\/;
  if (email.match(myEmail)) {
     return true;
  }) else {
     alert( "The e-mail number entered is invalid!" );
     return false;
  }
}


//Function to check the submit button.
function checkSubmitBtn (submit) {
  var mySubmitBtn = testInfo(document.getElementById('submit'));
  if (submit === true) {
     console.log("True");
}    else {
     console.log("False");
  }
}
checkSubmitBtn();



// Checkout button

//Click event
var myBtn = document.querySelector('button');

function myAlert () {
     alert("You will now proceed to checkout");
}

myBtn.addEventListener('click', myAlert);



// Nav-bar

/* When the user clicks on the button, toggle between hiding
and showing the dropdown content  */

function myFunction ()  {
     document.getElementById ("myDropdown").classList.toggle("show");
}


// Close the dropdown if the user clicks outside of it.
window.onclick = function (e) {
	if (!e.target.matches('.dropbtn')) {
		var myDropdown = document.getElementById("myDropdown");
		if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
	}
}
