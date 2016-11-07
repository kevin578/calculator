window.onload = function() {

//declare variables
var number1 = 0;
var screen_number = 0;
var operator;


//display inital value of 0
render();

//sets up event listeners for all the numbers.
for (var i = 0; i < 10; i++) {
document.getElementById(i).addEventListener("click", function() {	
	var key_value = this.innerHTML;
	write_number(key_value);
});
}

//sets screen_number variable to whatever key is pressed. Conconcactates the the numbers if they are more than a single digit. 
function write_number(number) {
	if (screen_number == 0) {
		screen_number = number;
	}
	else {
		screen_number = screen_number + number;	
	}
	render();
}

//clears screen if C is pressed
document.getElementById("clear").addEventListener("click", function() {
	screen_number = 0;
	render();
});

//adds, subtracts, multiplies, or divides values when 

 document.getElementById("plus").addEventListener("click", function() {
 	setOperator(plus);
});
 document.getElementById("minus").addEventListener("click", function() {
 	setOperator(minus);
});
 document.getElementById("times").addEventListener("click", function() {
 	setOperator(times);
});
 document.getElementById("divide").addEventListener("click", function() {
 	setOperator(divide);
});


//equals buttons
document.getElementById("equals").addEventListener("click", function(){
	screen_number = operator(number1, screen_number);
	render();
});



//Functions

function setOperator(oper) {
	operator = oper;
	number1 = screen_number;
	screen_number = 0;	
}


//displays the number
function render() {
document.getElementById("screen").getElementsByTagName("p")[0].innerHTML = screen_number;
}

//operator functions

var plus = function(num1, num2) {
	result = parseInt(num1) + parseInt(num2);
	return result;
}

var minus = function(num1, num2) {
	result = parseInt(num1) - parseInt(num2);
	return result;
}

var times = function(num1, num2) {
	result = parseInt(num1) * parseInt(num2);
	return result;
}

var divide = function(num1, num2) {
	result = parseInt(num1) / parseInt(num2);
	return result;
}


}