const display1=document.getElementById("display");
const display2=document.getElementById("display2");
const operatorSign=document.getElementById("operator");
let number1;
let number2;
let neu;


function add() {
	if (display1.textContent===" " && operatorSign.textContent==="="){
		operatorSign.textContent="+";
		}
	else if (display1.textContent===" "){
		return;
	}
	else{
		if (operatorSign.textContent===" "){
			display2.textContent=parseFloat(display1.textContent);
			display1.textContent=" ";
			operatorSign.textContent="+";
		}
		else{
			operate();
			display1.textContent=" ";
			operatorSign.textContent="+";
		}
	}
}
	
function subtract(){
	if (display1.textContent===" " && operatorSign.textContent==="="){
		operatorSign.textContent="-";
		}
	else if (display1.textContent===" "){
		return;
	}
	else{
		if (operatorSign.textContent===" "){
			display2.textContent=parseFloat(display1.textContent);
			display1.textContent=" ";
			operatorSign.textContent="-";
			return;
		}
		else{
			operate();
			display1.textContent=" ";
			operatorSign.textContent="-";
		}
	}
}
	
function multiply(){
	if (display1.textContent===" " && operatorSign.textContent==="="){
		operatorSign.textContent="*";
		}
	else if (display1.textContent===" "){
		return;
	}
	else{
		if (operatorSign.textContent===" "){
			display2.textContent=parseFloat(display1.textContent);
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
	if (display1.textContent===" " && operatorSign.textContent==="="){
		operatorSign.textContent=":";
		}
	else if (display1.textContent===" "){
		return;
	}
	else{
		if (operatorSign.textContent===" "){
			display2.textContent=parseFloat(display1.textContent);
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
			display2.textContent=parseFloat(display1.textContent);
			display1.textContent=" ";
			operatorSign.textContent="=";
		}
		else{
			operate();
			display1.textContent=" ";
			operatorSign.textContent="=";
		}
	}
}
	
	
function operate(){
	number1=parseFloat(display1.textContent);
	number2=parseFloat(display2.textContent);
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
			if (solution===Infinity){
				clear();
				alert("You can't divide by 0"); 
				throw new Error("You can't divide by 0");
			}
			else{
				display2.textContent=solution;
			}
			break;	
		case "=":
			break;
	}

}

function clear(){
	display1.textContent=" ";
	display2.textContent=" ";
	operatorSign.textContent=" ";
}

function backspace(){
	neu= display1.textContent.slice(0, -1);
	display1.textContent=neu;
}

function pointNumber(){
	if(display1.textContent.includes(".")){
		return;
	}
	else{
		display1.textContent+=".";
	}
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
document.getElementById("C").addEventListener("click",backspace);
document.getElementById(".").addEventListener("click",pointNumber);

document.addEventListener ("keydown", function (event) {
	key=event.key;
	switch (key) {
		case "0":
			zero();
			break;
		
		case "1":
			one();
			break;
		
		case "2":
			two();
			break;
		
		case "3":
			three();
			break;
		
		case "4":
			four();
			break;
		
		case "5":
			five();
			break;
		
		case "6":
			six();
			break;
		
		case "7":
			seven();
			break;
		
		case "8":
			eight();
			break;
		
		case "9":
			nine();
			break;
		
		case ".":
			pointNumber();
			break;
		
		case "Backspace":
			backspace();
			break;
		
		case "+":
			add();
			break;
		
		case "-":
			subtract();
			break;
		
		case ":":
			divide();
			break;
		
		case "*":
			multiply();
			break;
		
		case "Enter":
			equalize();
			break;
	}
});
