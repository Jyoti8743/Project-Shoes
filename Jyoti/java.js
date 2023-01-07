//1.Ways to print in JavaSript
//console.log("Helle world")
//alert("me")
//document-write("this is a document write")

//2.JavaSript console API
//console.log("hello world", 5+5, "Another log"); 
//console.warn("this is warning");
//console.error("an error");

//3.JavaSript Variables
//What are Variables? - Container to store data value
var number1= 55;
var number2= 45;
//console.log(number1+number2);

//4.Data Type in JavaScript
//Number
var num1=455;
var num2= 55.70;

//string
var str1= "this is a string";
var str2= "this is a seecond string";

//objects
var marks ={
    ravi: 34, subham: 70, harry:99.977
}
//console.log(marks)
//booleans
var a = true;
var b = false;
//console.log(b,a)

//var und=undefined;
/*var und;
console.log(und)*/

var n= null;
//console.log(n)

/*At a very high level, there are two types of data types in javascript
1.Primitive data types: undefined, boolean, num, string, null, symbol
2.Reference data types: Arrays and objects

*/
var arr =[1,2, 3 ,4,5]
//console.log(arr)

//Operators in JavaScript
//Arthmetic Operators
var a=100;
var b=10;
console.log("The value of a a+b is", a+b);
console.log("The value of a a-b is", a-b);
console.log("The value of a a*b is", a*b);
console.log("The value of a a/b is", a/b);

//Assignment Operators
var c =a;
//c+=2
//c/=5
console.log(c)
//comparison operators
var x = 34;
var y =55;
// console.log(x==y)
// console.log(x>=y)
// console.log(x<=y)

//Logical Operators
//Logical and
// console.log(true && true)
// console.log(false && false)
// console.log(true && false)

//Logical or
/*console.log(true  || true)
console.log(true  || false)
console.log(false || false)
console.log(false || true)*/

//Logical not
//console.log(!false);
//console.log(!true);
//Function in JavaScript
//DRY = Do not repeat yourself
// function avg(a,b){
//     return (a+b)/2;
// }
// c1= avg(4, 6);
// c2= avg(14, 16);
//console.log(c1, c2);

//console.log(8787):-this is no and no show blue
//console.log('77776'):-this is the string and this is show black

//Conditionals in JavaScript
// var age = 44;
// if (44 > 18){
    // console.log('you can drink water');
// }
//if - else statement
/*if (44 > 18){
    console.log('you can drink water');
}
else{
    console.log('you cannot drink water');
}*/
//var age= 41;
//if-else ladder
// if(age>32){
//     console.log('you are not a kid');
// }
// else if(age>26){
//     console.log('bache nhi rhe');
// }
// else if(age>22){
//     console.log('yes bache nhi rahe');
// }
// else if(age>18){
//     console.log('18 bache nhi rhe');
// }
// else{
//     console.log("bache rahe")
// }
// console.log("end of ladder");

//var arr =[1,2,3,4,5,6,7];
// console.log(arr);
//  for (var i=0; i<arr.length;i++){
//  console.log(arr[i])
//  }
//  arr.forEach(function(element){
//    console.log(element)
//  })

// var arr =[1,2,3,4,5,6,7];
// let j=0;
// while(j<arr.length){
// console.log(arr[j]);
// j++;
// }
// do{
//     console.log(arr[j]);
//     j++;
// }while(j<arr.length);

// var arr =[1,2,3,4,5,6,7];
//console.log(arr);
//  for (var i=0; i<arr.length;i++){
//  if(i==2){
//     //break;
//     continue;
//  }
// console.log(arr[i])
// }

//array method
 //let myarr=["fan", "camera",34,null,true ];
//console.log(myarr.length)
//console.log(myarr)
//myarr.pop();                                //(last element nikl jyega)
//myarr.push("Jyoti")                         //(add krne k liye otherr text)
//myarr.shift()                               //(suru ka letter nikl jyega)
//myarr.unshift("Jyoti")                       //(koi bhi ek element suru m lane k liye)
//console.log(myarr.unshift("Jyoti"))          //(isme text ki lenght add ho jyegi)
//const newlen = myarr.unshift("jyoti")         //(new arr ki length print krne k liye)
//console.log(newlen);
//console.log(myarr)

//string Method in JavaScript
//let myLovelystring = "I am  a Good Girl Good Good";
// console.log(myLovelystring.length);
// console.log(myLovelystring.indexOf("Good"))
// console.log(myLovelystring.lastIndexOf("Good"))
// console.log(myLovelystring.slice(0,7));
// d=myLovelystring.replace("Good","bad");
// console.log(d, myLovelystring);

//let myDate = new Date();
//console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
//DOM Manipulation
//let elem= document.getElementById('click');
//console.log(elem)

let elemClass= document.getElementsByClassName('container');
//console.log(elemClass)
//elemClass[0].style.background= "yellow"
elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text-success")
//console.log(elem.innerHTML)
//console.log(elem.innerTEXT)
// tn= document.getElementsByTagName('div')
// console.log(tn)
// createdElement = document.createElement('p')
// createdElement.innerText = "This is a created para"
// tn[0].appendChild(createdElement)

// createdElement2 = document.createElement('b');
// createdElement2.innerText = "This is a created bold";
// tn[0].replaceChild(createdElement2,createdElement)
//removeChild(elements); ---> removes an element

//Selecting using query
// sel = document.querySelector('.container')
// console.log(sel)

// sel = document.querySelectorAll('.container')
// console.log(sel)

// function clicked(){
//     console.log('the button alredy clicked')
// }
// window.onload =function(){
//     console.log('The button was loaded')
//  }

//Event in JavaScript
//  firstcontainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML ="<b> We Have Clicked</b>"
//   console.log("Click container")
//  })
// firstcontainer.addEventListener('mouseover', function(){
//     console.log("mouse on container")
// })

// firstcontainer.addEventListener('mouseout', function(){
//     console.log("mouse out of container")
//})
// let prevHTML= document.querySelectorAll('.container')[1].innerHTML;
// firstcontainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].prevHTML;
//     console.log("mouse up when clicked on container")
// })

// firstcontainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML ="<b> We Have Clicked</b>"
//     console.log("mouse down when clicked on container")
// })

//Arrow Function
// function summ(a,b){
//     return a+b;
// }
summ =(a, b)=>{
    return a+b;
}
logKaro =()=>{
    document.querySelectorAll('.container')[1].innerHTML ="<b> Set Interval Fired</b>"
    console.log("I am your log in")
}
//setTimeout and setInterval
// setTimeout(logKaro, 2000);
// setInterval(logKaro, 2000);                                   //(kisi kaam ko repeatedly krne k liye use krte h)
//clr = setInterval(logKaro, 2000);                                 //(stop krne k liye)













