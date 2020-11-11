var bt = document.getElementById('bt');
bt.addEventListener('click',function(){
	var exp = "Welcome to our page,  to know our welcome";
	var pattr1 = /to/g
	// var pattr1 = /welcome/i;
	// var pattr1 = /welcome/m;
	//here g = global search
	//i = case-insensitive
	//m = multiline matching

	var result = exp.match(pattr1);
	document.getElementById('str').innerHTML=result;
});

//brackets[]
var bt1 = document.getElementById('bt1');
bt1.addEventListener('click',function(){
	var brts = 'Hello Md. Noushedul Islam Akib 6664630';
	var pattr2 = /[Akib]/g;
	// var pattr2 = /[0-9]/g;
	// var pattr2 = /[^0]/g;
	// var pattr2 = /[^akib]/g;
	var result2 = brts.match(pattr2);
	document.getElementById('brackets').innerHTML=result2;
});

//metacharacter
//w=find only word,W=not find word,d=find only digit,D=not find digit
//s=find white space,S=not find white space
//b=find matching begining or ending any word,B=find matching but not begining and ending
//f=find form feed character
//r=find carriage return character
//v=find vartical tab character
//t=finds tab character
var bt2 = document.getElementById('bt2');
bt2.addEventListener('click',function(){
	var meta = 'akib 100% Southern University akib';
	var pattr3 = /\W/g;//we put here rendomly all value
	var result3 = meta.match(pattr3);
	document.getElementById('metaChar').innerHTML=result3;
});

//queantifiers
//n+ = string at least one time 
//n* = string contains zero or more occurrences
//n? = Zero or one occurrences of n
var bt3 = document.getElementById('bt3');
bt3.addEventListener('click',function(){
	var quent = "1234 % Bangladesh England Australia 451324213";
	// var pattr4 = /g+/g;
	// var pattr4 = /g*/g;
	// var pattr4 = /g?/g;
	// var pattr4 = /\d{1}/g;
	var pattr4 = /\d{1,2}/g;
	var result4 = quent.match(pattr4);
	document.getElementById('quantifiers').innerHTML=result4;
});