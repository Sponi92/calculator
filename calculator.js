let input=0;
const display1=document.getElementById("display");
const display2=document.getElementById("display2");
const operatorSign=document.getElementById("operator");
let number1;
let number2;
const operator=document.querySelectorAll(".grid-operator");
let target;
let helpFunction;


function add() {
	if (display1.textContent===" "){
		return;
	}
	else{
		if (operatorSign.textContent===" "){
			display2.textContent=parseInt(display1.textContent);
			display1.textContent=" ";
			console.log(1);
			operatorSign.textContent="+";
			return;
	}
		else{
			operate();
			display1.textContent=" ";
			operatorSign.textContent="+";
	}
	}
	}
	
function subtract(){

	if (display1.textContent===" "){
		return;
	}
	else{
		if (operatorSign.textContent===" "){
			display2.textContent=parseInt(display1.textContent);
			display1.textContent=" ";
			console.log(1);
			operatorSign.textContent="-";
			return;
	}
		else{
			console.log(2);
			operate();
			display1.textContent=" ";
			operatorSign.textContent="-";
	}
	}
	}
	
function multiply(){

	if (display1.textContent===" "){
		return;
	}
	else{
		if (operatorSign.textContent===" "){
			display2.textContent=parseInt(display1.textContent);
			display1.textContent=" ";
			operatorSign.textContent="*";
			return;
	}
		else{
			operate();
			display1.textContent=" ";
			operatorSign.textContent="*";
	}
	}
	}
function divide(){

	if (display1.textContent===" "){
		return;
	}
	else{
		if (operatorSign.textContent===" "){
			display2.textContent=parseInt(display1.textContent);
			display1.textContent=" ";
			operatorSign.textContent=":";
			return;
	}
		else{
			operate();
			display1.textContent=" ";
			operatorSign.textContent=":";
	}
	}
	}
	
function equalize(){

	if (display1.textContent===" "){
		return;
	}
	else{
		if (operatorSign.textContent===" "){
			display2.textContent=parseInt(display1.textContent);
			display1.textContent=" ";
			operatorSign.textContent="=";
			return;
	}
		else{
			operate();
			display1.textContent=" ";
			operatorSign.textContent="=";
	}
	}
	}
	
	
function operate(){
	number1=parseInt(display1.textContent);
	number2=parseInt(display2.textContent);
	switch (operatorSign.textContent) {
		case "+":
			solution=number1+number2;
			display2.textContent=solution;
			break;
		case "-":
			solution=number2-number1;
			display2.textContent=solution;
			break;
		case "*":
			solution=number1*number2;
			display2.textContent=solution;
			break;
		case ":":
			solution=number2/number1;
			display2.textContent=solution;
			break;
		case "=":
			equalize();
			break;
	}

}

function clear(){
	display1.textContent=" ";
	display2.textContent=" ";
	operatorSign.textContent=" ";
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

document.getElementById("+").addEventListener("click",add);
document.getElementById("-").addEventListener("click",subtract);
document.getElementById("*").addEventListener("click",multiply);
document.getElementById(":").addEventListener("click",divide);
document.getElementById("=").addEventListener("click",equalize);
document.getElementById("Clear").addEventListener("click",clear);
