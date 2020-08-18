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
 
 var count = 0;
 
 var menuCount = (function (){
	 return function () {
		 count += 1;
		 return count;
	 }
 })();
 
 
 function menuFunction(x) {
	 var navUl, header;
	 
	 nav = document.getElementById("nav");
	 
	 
	 
	 if(menuCount() % 2 == 0) {
		 nav.style.maxHeight = null;
	 }
	 
	 else {
         nav.style.maxHeight = 	nav.scrollHeight + "px";
	 }
	 
	 
	 x.classList.toggle("change");
	 
 }
 
 
 function loginFunction() {
	 var usdId, usdPasd, loginForm, content, loginAlert, userId, userPasd;
	 usdId = document.getElementById("userid").value;
	 usdPasd = document.getElementById("user-pasd").value;
	 loginForm = document.getElementById("login-form");
	 content = document.getElementById("content");
	 loginAlert = document.getElementById("alert");
	 userId = "20bcs2445";
     userPasd = "cuchd";	 
	 
	 if(usdId === userId && usdPasd === userPasd) {
		 loginForm.style.display = "none";
		 content.style.display = "block";
	 }
	 else {
		 loginAlert.style.display = "block";
	 }
 }
 
 
 function dictationOpen() {
	 
	 var dictation = document.getElementById("dictation");
	 var content = document.getElementById("content");
	 if(content.style.display) {
		 content.style.opacity = "0";
	     dictation.style.height = "150px";
	     dictation.style.padding = "10px 16px";
	 }
	 else {
		 alert("You Are Not Login It.");
	 }
	
	 
 }
 
 function dictationClose() {
	 var dictation = document.getElementById("dictation");
	 var content = document.getElementById("content");
	 dictation.style.height = null;
	 dictation.style.padding = null;
	 content.style.opacity = "1";
 }
 
 // speech function 
 
 var voiceList = document.getElementById("voiceList");
 
 var tts = window.speechSynthesis;
 var voices = [];
 
 GetVoices();
 
 if(speechSynthesis !== undefined) {
	speechSynthesis.onvoiceschanged = GetVoices;
}

/* btnSpeak.addEventListener("click" , ()=> {
	var toSpeak = new SpeechSynthesisUtterance(txtInput.value);
	var selectedVoiceName = voiceList.selectedOptions[0].getAttribute("data-name");
	voices.forEach((voice)=> {
		if(voice.name === selectedVoiceName) {
			toSpeak.voice = voice;
		}
	});
	tts.speak(toSpeak);
}); */
 
 function GetVoices() {
	 voices = tts.getVoices();
	 voiceList.innerHTML = "";
	 voices.forEach((voice)=> {
		 var listItem = document.createElement("option");
		 listItem.textContent = voice.name;
		 listItem.setAttribute("data-lang", voice.lang);
		 listItem.setAttribute("data-name", voice.lang);
		 voiceList.appendChild(listItem);
	 });
     voiceList.selectedIndex = 0;
 }
 
 
 
 
 
 
 var speechBtn = document.querySelectorAll(".btn i");
 
 for(i = 0; i < speechBtn.length; i++) {
	 speechBtn[i].addEventListener("click", function() {
	    var mesg = this.previousElementSibling.innerHTML;
		var msg = new SpeechSynthesisUtterance();
	    var voices = window.speechSynthesis.getVoices();
	    msg.voice = voices[99];
	    msg.voiceURI = "native";
	    msg.volume = 1;
	    msg.rate = 1;
	    msg.pitch = 0;
	    msg.text = mesg;
	    msg.lang = "en-IN";
	    speechSynthesis.speak(msg);
	 } )
 } 
 
 var speechLi = document.querySelectorAll(".panel ul li i");
 
 for(i = 0; i < speechLi.length; i++) {
	 speechLi[i].addEventListener("click", function() {
		var mesg = this.previousElementSibling.innerHTML;
		var msg = new SpeechSynthesisUtterance();
	    var voices = window.speechSynthesis.getVoices();
	    msg.voice = voices[99];
	    msg.voiceURI = "native";
	    msg.volume = 1;
	    msg.rate = 1;
	    msg.pitch = 0;
	    msg.text = mesg;
	    msg.lang = "en-IN";
	    speechSynthesis.speak(msg);
	 })
 }
 
 /* speechFunction() {
	 var mesg = ;
	 var msg = new SpeechSynthesisUtterance();
	 var voices = window.speechSynthesis.getVoices();
	 msg.voice = voices[9];
	 msg.voiceURI = "native";
	 msg.volume = 1;
	 msg.rate = 0.9;
	 msg.pitch = 0;
	 msg.text = mesg;
	 msg.lang = "en-IN";
	 speechSynthesis.speak(msg);
 } */
 
var slider = document.getElementsByClassName("slider");
var output = document.getElementsByClassName("value");

for(i = 0; i < slider.length; i++) {
	output[i].innerHTML = slider[i].value;
	var x;
	slider[i].oninput = function() {
		output = this.parentNode.previousElementSibling.childNodes[1];
		
		output.innerHTML = this.value;
		
		
	}
}
  