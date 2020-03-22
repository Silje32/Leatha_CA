//Use RegEx to validate form

//Validating that "full name" input are not empty.
function validateFullName(name) {
	 var firstNameError = document.querySelector("#nameError");

	 if (name.length === 0) {
			 firstNameError.style.display = "block";
	 }
	 else {
			 firstNameError.style.display = "none";
	 }
 }


//Validating that the address input is not empty.
function validateAddress(address) {
  var addressError = document.querySelector("#addressError");

  if (address.length === 0) {
      addressError.style.display = "block";
  }
  else {
      addressError.style.display = "none";
  }
}


//Validating that the postal code input is not empty.
function validatePostalCode(postalcode) {
   var postalError = document.querySelector("#postalError");
   var postalCodePattern = /^\d{4}$/;

/* The exclamation mark checks if the pattern doesn't match so if it doesn't
   match display the error otherwise hide the error */
   if (!postalcode.match(myPostalCode)) {
      postalError.style.display = "block";
   }
   else {
      phoneError.style.display ="none";
   }
}


//Validating that the phone number is correct.
 function validatePhone(phone) {
	var phoneError = document.querySelector("#phoneError");
	var phonePattern = /^\d{3}\ \d{3}\ \d{4}$/;

/* The exclamation mark checks if the pattern doesn't match so if it doesn't
   match display the error otherwise hide the error */
	if (!phone.match(phonePattern)) {
		phoneError.style.display = "block";
	}
	else {
		phoneError.style.display = "none";
	}
}


//Validating that the e-mail adress is correct.
function validateEmail(email) {
  var emailError = document.querySelector("#emailError");
  var emailPattern = /\S+@\S+.\S+/;

/* The exclamation mark checks if the pattern doesn't match so if it doesn't
  match display the error otherwise hide the error */
  if (!email.match(emailPattern)) {
    emailError.style.display = "block";
  }
  else {
    emailError.style.display = "none";
  }
}



//The function will be called inside the form's eventListener
var form = document.querySelector('form');

form.addEventListener('submit', function(event) {

  event.preventDefault();

  validateFullName(this.name.value);
  validateAddress(this.address.value);
  validatePostalCode(this.postalcode.value);
  validatePhone(this.phone.value);
  validateEmail(this.email.value);
});



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
