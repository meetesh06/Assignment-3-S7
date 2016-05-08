var input = document.getElementById('text_input');
var view = document.getElementById('viewer');
var switcher = false; //trigger alarm, when its true
function printtext () {
	var i_val = input.value.split(''); //get the text value
	for (var i = 0; i < i_val.length; i++) { //check all the values
		switch(i_val[i]) { //if switcher finds a letter or something else, trigger's off the switcher
			case "0":
			case "1":
			case "2":
			case "3":
			case "4":
			case "5":
			case "6":
			case "7":
			case "8":
			case "9":
				break;
			default: 
				switcher = true;
				break;
		}
	} 
	if (switcher === false) { //only triggered when all the element's above are sweet
		view.innerHTML = input.value; // set the HTML
		view.style.background = "#39568D"; //default background
	} else {//when switcher is true, change the background color and set the trip alarm again
		view.style.background = "#FF4C57"; // red background
		switcher = false; // retrigger alarm
	}
}
input.addEventListener("input", printtext);


var input_1 = document.getElementById('text_input_1');
var view_1 = document.getElementById('viewer_1');
var switcher_1 = false; //trigger alarm, when its true
var good_val = [];
function printtext_1 () {
	var i_val = input_1.value.split(''); //get the text value
	for (var i = 0; i < i_val.length; i++) { //check all the values
		switch(i_val[i]) { //if switcher finds a letter or something else, trigger's off the switcher
			case "0":
			case "1":
			case "2":
			case "3":
			case "4":
			case "5":
			case "6":
			case "7":
			case "8":
			case "9":
				break;
			default: 
				switcher_1 = true;
				break;
		}
	} 
	if (switcher_1 === false) { //only triggered when all the element's above are sweet
		view_1.innerHTML = input_1.value;; // set the HTML
		good_val = input_1.value;
		view_1.style.background = "#39568D"; //default background
	} else {//when switcher is true, change the background color and set the trip alarm again
		text_input_1.value = good_val;
		view_1.style.background = "#FF4C57"; // red background
		switcher_1 = false; // retrigger alarm
	}
}
input_1.addEventListener("input", printtext_1);