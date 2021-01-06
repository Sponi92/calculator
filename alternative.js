function add () {
if (display1.textContent===" "){
	return;
	}
else{	input+=parseFloat(display1.textContent);
	display2.textContent=input;
	display1.textContent=" ";
	operator.textContent="+";
	console.log(input)
	addx=1;
	}
}
function subtract(){
if (display1.textContent===" "){
	return;
	}
else if(display2.textContent===" "){
	display2.textContent=display1.textContent
	operator.textContent="-";
input=parseFloat(display1.textContent);
	display1.textContent=" ";
	
	}
else{	input-=parseFloat(display1.textContent);
	display2.textContent=input;
	display1.textContent=" ";
	operator.textContent="-";
	console.log(input)
	addx=2;
	}
}
function multiply () {
if (display1.textContent===" "){
	return;
	}
	else if(display2.textContent===" "){
	input=1;
	input*=parseFloat(display1.textContent);
	display2.textContent=input;
	display1.textContent=" ";
	operator.textContent="*";
	console.log(input)
	addx=3;
	}
	else{	
	input*=parseFloat(display1.textContent);
	display2.textContent=input;
	display1.textContent=" ";
	operator.textContent="*";
	console.log(input)
	addx=3;
	}
	
}
function divide (x,y) {
	return div=x/y;
}
function equalize(){
if (addx===1){
	add();
	display2.textContent=input;
	operator.textContent="=";
	}
else if (addx===2){
	subtract();
	display2.textContent=input;
	operator.textContent="=";
	}
	else if (addx===3){
	multiply();
	display2.textContent=input;
	operator.textContent="=";
	}
}



//new try
function add(number1, number2){
	operatorSign.textContent="+";	
	if (display1.textContent===" "){
	return;
	}
	else if(display2.textContent===" "){
		display2.textContent=number1;
		display1.textContent=" ";		
		}
	else{
			solution=number1+number2;
			display2.textContent=solution;
			display1.textContent=" ";
	}
}
function subtract(number1, number2){
	operatorSign.textContent="-";
	if (display1.textContent===" "){
	return;
	}
	else if(display2.textContent===" "){
		display2.textContent=number1;
		display1.textContent=" ";		
		}
	else{	
	solution=number2-number1;
	display2.textContent=solution;
	display1.textContent=" ";
	}	
}
function multiply(number1, number2){
	operatorSign.textContent="*";
	if (display1.textContent===" "){
	return;
	}
	else if(display2.textContent===" "){
		display2.textContent=number1;
		display1.textContent=" ";		
		}
	else{	
	solution=number2*number1;
	display2.textContent=solution;
	display1.textContent=" ";
	}	
}
function divide(number1, number2){
	solution=number1/number2
	console.log(4);
}
function equalize(number1, number2){
	if(display1.textContent===" " && display2.textContent===" ") {
		return;
		}
		
	else{
	switch(operatorSign.textContent){
		case "+":
			add(number1,number2);
			break;
		case "-":
			subtract(number1,number2);
			break;
		case "*":
			multiply(number1,number2);
			break;
		case ":":
			divide();
			break;
		}
	}
operatorSign.textContent="=";
	
}

function operate(){
	number1=parseInt(display1.textContent);
	number2=parseInt(display2.textContent);
	switch (target) {
		case "+":
			add(number1,number2);
			break;
		case "-":
			subtract(number1,number2);
			break;
		case "*":
			multiply(number1,number2);
			break;
		case ":":
			divide();
			break;
		case "=":
			equalize(number1,number2);
			break;
	}

}

