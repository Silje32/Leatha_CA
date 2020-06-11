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


// "Hamburger menu"
// Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu.

function myMenu() {
var menu = document.getElementById("nav-menu");
if (menu.style.display === "block") {
    menu.style.display = "none";
 } else{
   menu.style.display = "block";
 }
}
