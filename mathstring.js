welcome.alert("Welcome to my world");

let name = window.prompt("Enter your name:");

let uppername = name.toUpperCase();
let sizename = name.length();
let squarename = Math.sqrt(25);
let powofname = Math.pow(5,2);

document.getElementById("order").innerHTML=
" Name :"+name+"<br>"+
" UpperCase :"+uppername+"<br>"+
" NameSize :"+sizename+"<br>"+
" squareof number :"+squarename+"<br>"+
" Power of number :"+powofname;