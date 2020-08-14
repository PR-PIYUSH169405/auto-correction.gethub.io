var accLeft = document.getElementsByClassName("accordion-left");
var accRight = document.getElementsByClassName("accordion-right");

var i, panel;

for (i = 0; i < accLeft.length; i++) {
	accLeft[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if(panel.style.maxHeight) {
			panel.style.maxHeight = null;
		}
		else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	})
}

for (i = 0; i < accRight.length; i++) {
	accRight[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if(panel.style.maxHeight) {
			panel.style.maxHeight = null;
		}
		else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	})
}

 
 function filterFunctionLeft() {
	 var input, filter, button, txtValue, i;
	 
	 input = document.getElementById("search-left");
	 filter = input.value.toUpperCase();
	 butt = document.getElementsByClassName("accordion-left");
	 
	 
	 
	 for (i = 0; i < butt.length; i++) {
		 txtValue = butt[i].textContent || butt[i].innerText;
		 
		 var panel = butt[i].nextElementSibling;
		 butt[i].classList.remove("active");
	 
	     panel.style.maxHeight = null;
		 
		 if (txtValue.toUpperCase().indexOf(filter) > -1) {
			 butt[i].style.display = "";
		 }
		 
		 else {
			 butt[i].style.display = "none";
		 }
	 }
 }
 
 
 function filterFunctionRight() {
	 var input, filter, button, txtValue, i;
	 
	 input = document.getElementById("search-right");
	 filter = input.value.toUpperCase();
	 butt = document.getElementsByClassName("accordion-right");
	 
	 
	 
	 for (i = 0; i < butt.length; i++) {
		 txtValue = butt[i].textContent || butt[i].innerText;
		 
		 var panel = butt[i].nextElementSibling;
		 butt[i].classList.remove("active");
	 
	     panel.style.maxHeight = null;
		 
		 if (txtValue.toUpperCase().indexOf(filter) > -1) {
			 butt[i].style.display = "";
		 }
		 
		 else {
			 butt[i].style.display = "none";
		 }
	 }
 }
 
 
 
 
 function menuFunction(x) {
	 x.classList.toggle("change");
 }