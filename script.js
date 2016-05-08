var input = document.getElementById('text_input');
var view = document.getElementById('viewer');
var switcher = false;
function printtext () {
	var i_val = input.value.split('');
	console.log(i_val);
	for (var i = 0; i < i_val.length; i++) {
		switch(i_val[i]) {
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
				console.log("RJ was a number here");
				switcher = false;
				break;
			default: 
				console.log("NON NUMBER");
				switcher = true;
				break;

		}
	}
	if (switcher === false) {
		view.innerHTML = input.value;
		view.style.background = "#39568D";
	} else {
		view.style.background = "red";
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