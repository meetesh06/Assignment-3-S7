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
// var input = document.getElementById('text_input');
// var view = document.getElementById('viewer');
// function switcher (a) {
// 	for (var i = 0; i  {< a.length; i++) {
// 		if (a[i] == 0) {
			
// 		}
// 	}
// }
// function changes (a) {
// 	if (switcher(a)) {
// 		console.log("switcher returned true");
// 	} else {
// 		console.log("switcher returned false");
// 	}
// 	console.log(a);
// 	a = [];
	
// }

// input.addEventListener("input", function () {
// 	changes(input.value.split(''));
// });