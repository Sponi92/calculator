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
