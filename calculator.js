let input=0;
let addx;
const display1=document.getElementById("display");
const display2=document.getElementById("display2");
const operator=document.getElementById("operator");

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

function clear(){
	display1.textContent=" ";
	display2.textContent=" ";
	operator.textContent=" ";
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

document.getElementById("+").addEventListener("click",add);
document.getElementById("=").addEventListener("click",equalize);
document.getElementById("-").addEventListener("click",subtract);
document.getElementById("Clear").addEventListener("click",clear);
document.getElementById("*").addEventListener("click",multiply);


