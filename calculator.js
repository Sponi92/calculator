let sum;
let sub;
let mult;
let div;
let input=0;
let addx;

function add () {
if (document.getElementById("display").textContent===" "){
	noInput();
	}
else{	input+=parseFloat(document.getElementById("display").textContent);
	document.getElementById("display2").textContent=input;
	document.getElementById("display").textContent=" ";
	document.getElementById("operator").textContent="+";
	console.log(input)
	addx=1;
	}
}
function subtract(){
if (document.getElementById("display").textContent===" "){
	noInput();
	}
else if(input===0){
	document.getElementById("display2").textContent=
	document.getElementById("display").textContent
	document.getElementById("operator").textContent="-";
input=parseFloat(document.getElementById("display").textContent);
	document.getElementById("display").textContent=" ";
	
	}
else{	input-=parseFloat(document.getElementById("display").textContent);
	document.getElementById("display2").textContent=input;
	document.getElementById("display").textContent=" ";
	document.getElementById("operator").textContent="-";
	console.log(input)
	addx=2;
	}
}
function multiply (x,y) {
	return mult=x*y;
}
function divide (x,y) {
	return div=x/y;
}
function operate (number1, number2, operator){
	operator(number1, number2);
}
function equalize(){
if (addx===1){
	add();
	document.getElementById("display2").textContent=input;
	document.getElementById("operator").textContent="=";
	}
else if (addx===2){
	subtract();
	document.getElementById("display2").textContent=input;
	document.getElementById("operator").textContent="=";
	}
}

function clear(){
	document.getElementById("display").textContent=" ";
	document.getElementById("display2").textContent=" ";
	document.getElementById("operator").textContent=" ";
	input=0;
}

function noInput(){
	document.getElementById("display").textContent=" ";
	document.getElementById("operator").textContent=" ";
}


function zero(){
document.getElementById("display").textContent+="0";
}
function one(){
document.getElementById("display").textContent+="1";
}
function two(){
document.getElementById("display").textContent+="2";
}
function three(){
document.getElementById("display").textContent+="3";
}
function four(){
document.getElementById("display").textContent+="4";
}
function five(){
document.getElementById("display").textContent+="5";
}
function six(){
document.getElementById("display").textContent+="6";
}
function seven(){
document.getElementById("display").textContent+="7";
}
function eight(){
document.getElementById("display").textContent+="8";
}
function nine(){
document.getElementById("display").textContent+="9";
}

let numbers=[seven,eight,nine,four,five,six,one,two,three,zero];
const btns= document.getElementsByClassName("grid-number");
for (i=0;i<btns.length;i++){
	btns[i].addEventListener("click",numbers[i]);
	}

document.getElementById("+").addEventListener("click",add);
document.getElementById("=").addEventListener("click",equalize);
document.getElementById("-").addEventListener("click",subtract);
document.getElementById("Clear").addEventListener("click",clear);


