let input=0;
const display1=document.getElementById("display");
const display2=document.getElementById("display2");
const operatorSign=document.getElementById("operator");
let number1;
let number2;
const operator=document.querySelectorAll(".grid-operator");
let target;
let helpFunction;

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





function clear(){
	display1.textContent=" ";
	display2.textContent=" ";
	operatorSign.textContent=" ";
	input=0;
}


function zero(){
display1.textContent+="0";
}
function one(){
display1.textContent+="1";
}
function two(){
display1.textContent+="2";
}
function three(){
display1.textContent+="3";
}
function four(){
display1.textContent+="4";
}
function five(){
display1.textContent+="5";
}
function six(){
display1.textContent+="6";
}
function seven(){
display1.textContent+="7";
}
function eight(){
display1.textContent+="8";
}
function nine(){
display1.textContent+="9";
}

let numbers=[seven,eight,nine,four,five,six,one,two,three,zero];
const btns= document.getElementsByClassName("grid-number");
for (i=0;i<btns.length;i++){
	btns[i].addEventListener("click",numbers[i]);
	}

document.getElementById("+").addEventListener("click",event => {
target = event.target.textContent;
operate();
});
document.getElementById("-").addEventListener("click",event => {
target = event.target.textContent;
operate();
});
document.getElementById("*").addEventListener("click",event => {
target = event.target.textContent;
operate();
});
document.getElementById(":").addEventListener("click",event => {
target = event.target.textContent;
operate();
});
document.getElementById("=").addEventListener("click",event => {
target = event.target.textContent;
operate();
});
document.getElementById("Clear").addEventListener("click",clear);
