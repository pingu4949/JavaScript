/*
function showDetail(){
	document.querySelector("#desc").style.display="block";
	document.querySelector("#open").style.display="none";
	
}

function hideDetail() {
	document.querySelector("#desc").style.display="none";
	document.querySelector("#open").style.display="block";
	
}
*/

const open1 = document.querySelector("#open");
const close1 = document.querySelector("#close");

open1.addEventListener("click", (e) => {
	document.querySelector("#desc").style.display="block";
	document.querySelector("#open").style.display="none";
});

close1.addEventListener("click", (e) => {
	document.querySelector("#desc").style.display="none";
	document.querySelector("#open").style.display="block";
});

const plus1 = document.querySelector("#btnPlus");

plus1.addEventListener("click", (e)=>{
	document.querySelector("#res").innerHTML++;
	
});

const Minus1 = document.querySelector("#btnMinus");

Minus1.addEventListener("click", (e)=>{
	document.querySelector("#res").innerHTML--;
	
});
