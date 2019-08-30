
var values= [];
var state= [];

function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
console.log(username,password);
if ( username == "user@gmail.com" && password == "123456"){

}
}


function Register(){
var password = document.getElementById("Password").value;
var confirmpassword = document.getElementById("ConfirmPassword").value;
if ( password !== confirmpassword){
alert ("Password Not Match");

var number = document.getElementById("mobilenumber").value;

if(!(/^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/.test(number)))
{
	alert("invalid mobile number");
}
}
}


function person(id,name,email,Class,year,city,country){
this.id=id;
this.name=name;
this.email=email;
this.Class=Class;
this.year=year;
this.city=city;
this.country=country;
}

function addItem()
{

	var numbers=[]; 
	let id = parseInt(document.querySelector(".id").value); 
	let name = document.querySelector(".name").value; 
	let email = document.querySelector(".email").value; 
	let Class = parseInt(document.querySelector(".class").value); 
	let year = parseInt(document.querySelector(".year").value); 
	let city = document.querySelector(".city").value; 
	let country = document.querySelector(".country").value; 


	for(i=0;i<values.length;i++)
	{
		numbers.push(values[i].id);
	}

	primary=id;
	var answer = verify(numbers,primary);
	var p= answer[1];

	if(answer[0] === 'match')
	{
			values[p].id = parseInt(document.querySelector(".id").value); 
			values[p].name = document.querySelector(".name").value; 
			values[p].email = document.querySelector(".email").value; 
			values[p].Class = parseInt(document.querySelector(".class").value); 
			values[p].year = parseInt(document.querySelector(".year").value); 
			values[p].city = document.querySelector(".city").value; 
			values[p].country = document.querySelector(".country").value;


			var init = document.querySelectorAll(".part");
			console.log(init);
			console.log(init[p].cells[0].innerHTML);
			init[p].cells[0].innerHTML=values[p].id;
			init[p].cells[1].innerHTML=values[p].name; 
			init[p].cells[2].innerHTML=values[p].email;
			init[p].cells[3].innerHTML=values[p].Class; 
			init[p].cells[4].innerHTML=values[p].year;
			init[p].cells[5].innerHTML=values[p].city; 
			init[p].cells[6].innerHTML=values[p].country;


			console.log('No need for another Variable');

	}

	else if(answer[0] === 'notmatch')
	{
	var html,newHtml;
	let temp= new person(id,name,email,Class,year,city,country);
	console.log(temp);
	values.push(temp);
	html = ' <tr class="part" > <td class="idvalues">%id%</td>  <td class="tname">%name%</td>   <td class="temail">%email%</td>  <td class="tclass">%Class%</td>  <td class="tyear">%Year%</td>  <td class="tcity">%City%</td>    <td class="tcountry">%Country%</td>  <td><input type="button" value="Edit" onclick="editValue()"><input type="button" value="Delete" onclick="deleteValue()"></td></tr>' ;
	newHtml = html.replace('%id%', temp.id);
	newHtml = newHtml.replace('%name%', temp.name);
	newHtml = newHtml.replace('%email%', temp.email);
	newHtml = newHtml.replace('%Class%', temp.Class);
	newHtml = newHtml.replace('%Year%', temp.year);
	newHtml = newHtml.replace('%City%', temp.city);
	newHtml = newHtml.replace('%Country%', temp.country);



	
	document.querySelector(".table").insertAdjacentHTML('beforeend', newHtml);

	}
	}


	function verify(arr,key)
	{
	for(i=0;i<arr.length;i++)
	{
		if(key === arr[i])
		{
			state= ['match',i];
			return state;
			break;
		}

	}
	state=['notmatch',0];
	return state;
	}
	

function clearField()
{
    document.querySelector(".id").value=''; 
	document.querySelector(".name").value=''; 
	document.querySelector(".email").value=''; 
	document.querySelector(".class").value=''; 
	document.querySelector(".year").value=''; 
	document.querySelector(".city").value=''; 
	document.querySelector(".country").value=''; 

	}


	function deleteValue()
	{

		var result1=[],result2=[];
		var val1 = document.querySelectorAll(".idvalues");
		var i=0;
		
		for(i=0;i<val1.length;i++)
		{
		result1.push(parseInt(val1[i].innerHTML));
		}
		console.log(result1);
		var ins = event.target.parentNode.parentNode;
		ins.parentNode.removeChild(ins);
		var result2=[];
		var val2 = document.querySelectorAll(".idvalues");
		
		for(i=0;i<val2.length;i++)
		{
		result2.push(parseInt(val2[i].innerHTML));
	}
	console.log(result2);

		for(i=0;i<result1.length;i++)
		{
		if(result1[i]===result2[i])
		{
			console.log('result'+i+'match');

		}
		else
		{
			console.log(i);
			values.splice(i, 1);
			break;
		}
		}


		}
	


	function editValue()
	{
		var insta = event.target.parentNode.parentNode;
		console.log(insta);
	    var pri= parseInt(insta.childNodes[1].innerHTML);
	    console.log(pri);
	    for(i=0;i<values.length;i++)
	    {
	    	if(values[i].id === pri)
	    	{
	    	document.querySelector(".id").value=values[i].id; 
			document.querySelector(".name").value=values[i].name; 
			document.querySelector(".email").value=values[i].email; 
			document.querySelector(".class").value=values[i].Class; 
			document.querySelector(".year").value=values[i].year; 
			document.querySelector(".city").value=values[i].city; 
			document.querySelector(".country").value=values[i].country; 

	    	}
	    }


	}

