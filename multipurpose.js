var n1=document.getElementById('num1');
var n2=document.getElementById('num2');
var n3=document.getElementById('num3');
var n4=document.getElementById('num4');
var n5=document.getElementById('num5');



function biggestnumber(){
  if( n1.value>n2.value){
      alert(n1.value+" "+"is the biggest number")
  }else{
      alert(n2.value+""+"is the bigger number")
  }

}
function evenodd(){
  if (n1.value%2===0){
    alert(n1.value+""+ "is the even number")
  }else{
    alert(n1.value+""+ "is the odd number")

  }
 
  if (n2.value%2===0){
    alert(n2.value+"  "+ "is the even number")
  }else{
    alert(n2.value+"  "+ "is the odd number")

  }
  if (n3.value%2===0){
    alert(n3.value+"  "+ "is the even number")
  }else{
    alert(n3.value+"  "+ "is the odd number")

  }
}
function positive_negative(){
  if (n1.value>=0){
    alert(n1.value+"  "+ "is the positive number")
  }else{
    alert(n1.value+"  "+ "is the negative number")

  }
}
function div_by_3or5(){
  if (n1.value%3===0||n1.value%5===0){
    alert(n1.value+"  "+ "is the divisible number")
  }else{
    alert(n1.value+"  "+ "is not the divisible number")

  }
}
function absolute(){
 
  let a= n1.value
  let b =Math.abs(a)
  alert(b+"  "+ "is the absolute value"+" "+"of"+" "+a) 
}
function ternery_use(x,y,z){
  var x=n1.value, y=n2.value, z=n3.value,max
  max = (x > y) ?
      (x > z ? x : z) :
      (y > z ? y : z);
  alert("Largest number among "
  + x + ", " + y + " and "
  + z + " is " + max + "." )

}
function second_smallest(){
  var arr = [ 6, 3, 5, 2, 9 ];
		var smallest = arr[0]; 
		var secondSmallest = arr[1]; 

		for(var i = 0; i < arr.length; i++) { 
			if(arr[i] < smallest) {  
				smallest = arr[i];  
			}  

			if(arr[i] > smallest && arr[i] < secondSmallest ) { 
				secondSmallest = arr[i]; 
			} 
		} 
    console.log(secondSmallest+' '+ " is the 2nd smallest");
}
function triangle(){
  let a=parseInt(n1.value)
  let b=parseInt(n2.value)
  let c=parseInt(n3.value)
  let tri=a+b+c;
  if(tri===180){
    alert("Hurray!! its a triangle")

  }else{
    alert("OH!! its not a triangle ")
  }
  console.log(tri)

}
function triangle_side(){
  let a=parseInt(n1.value)
  let b=parseInt(n2.value)
  let c=parseInt(n3.value) 
  let tri_side=(a+b)>c
  if (tri_side===true){
  let equi=(a===b&&a===c&&b===c)
  if (equi===true){
  alert("its a VAlid Triangle AND a EQUIlateral triangle")
  }
  let scalen=(a!==b&&a!==c&&b!==c)
  if (scalen===true){
    alert("Its a valid triangle AND a Scalen triangle")
  }
  
  let iso=(a===b&&a!==c)
  if (iso===true){
    alert("its a VAlid Triangle AND a Isoceles Triangle")
  }
  }else{
    alert("its not a valid triangle")
  }
}
function Leapyear(){
  if (n1.value%4===0){
    alert(n1.value+" "+"is a Leap year")
  }else{
    alert(n1.value+" "+"is not a Leap year")
    
  }
}
function palindrome(){
  let value =String(n1.value) 
  var rev = value.split("").reverse().join(""); 
  if (value===rev){
    alert(value+" "+" is a palidrome")
  }else{
    alert(value+" "+" is not a palidrome")

  }
}
function weekdays(){
  let n =Number (n1.value)
  switch (n) {
    case 1: 
       alert("Its monday")
       break;
    case 2: 
         alert("Its tuesday")      
          break;
    case 3: 
       alert("Its wednesday")
       break;
    case 4: 
       alert("Its thursday")
       break;
    case 5: 
       alert("Its friday")
       break;
    case 6: 
       alert("Its saturday")
       break;
    case 0: 
    alert("Hurray its sunday")
  }
  
}
function average(){
  let subject1=Number( n1.value)
  let subject2=Number( n2.value)
  let subject3=Number( n3.value)
  let subject4=Number( n4.value)
  let subject5=Number( n5.value)
  var avg=((subject1+subject2+subject3+subject4+subject5)/500)*100
  alert("Your Average marks are"+" "+avg+"%")
  if (avg>=90){
    alert ("Your got a A grade")
  }else if(avg>=80&&avg<90){
    alert ("Your got a B grade")
  }else if(avg>=70&&avg<80){
    alert ("Your got a c grade")
  }else {
    aler("Your grades are low")
  }
}

function electricityBill(){
    let unit=Number(n1.value)

if(unit<=50){
 alert(unit)
}
else if(unit <=150){
  
  let ans=50*1+(unit-50)*2
  alert("Electricity bill:"+ans)
  alert("without surcharge")
  
}
else if(unit <=250){
  let calc = 50*1+100*2+(unit-150)*3
  console.log("Electricity bill:",calc)
  surcharge= calc*.2
  console.log("surcharge:",surcharge)
  ans=calc+surcharge
  alert("Total bill:"+ans)
}
else if(unit > 250){
  calc = 50*1+100*2+100*3+(unit-250)*4
  console.log("Electricity bill:",calc)
  surcharge = calc*.2
  console.log("surcharge:",surcharge)
  ans=calc+surcharge
  alert("Total bill:"+ans)
} 
}
 
function helloworld(){
  for( var i=1;i<=100;i++){
    if(i%3==0){
      console.log("hello")
    }if(i%5==0){
      console.log("world")
    }if(i%15==0){
      console.log("hello World")
    }
    console.log(i)
  }
  
}

function Switch_evenodd(){
      let num=Number(n1.value)
       num1=Boolean(num%2===0)
      console.log(num1)
      switch(num1){
        case true:
          alert (num+" "+"is a even number")
          case false:
          alert(num+" "+"is an odd number")
      }
}
  
 


