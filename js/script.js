				/* -------- devolped by "http://kareem-shahhat.me" -------- */

window.addEventListener("scroll", function () {
  var scroll = document.querySelector(".backtop");
  var hed = document.querySelector(".links");
  var hed_m = document.querySelector(".navbar");
  scroll.classList.toggle("active", window.scrollY > 500),
    hed.classList.toggle("active_bar", window.scrollY > 300);
	hed_m.classList.toggle("active_l", window.scrollY > 300);
});

function scrolltotp() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* nav toggle btn */
const btn_tog = document.querySelector(".box_m .btn_tog");
const list = document.querySelector(".links .link");
const xxx = document.querySelector(".links");
btn_tog.onclick = function(){
	list.classList.toggle("burger_btn");
	xxx.classList.toggle("shows");
}
/* slider img portoflio */

const slideImage = document.querySelectorAll(".box_t1");
const slidesContainer = document.querySelector(".portoflio .img_box");
const nextBtn = document.querySelector(".right_btn");
const prevBtn = document.querySelector(".left_btn");

let numberOfImages = slideImage.length;
let slideWidth = slideImage[0].clientWidth;
let currentSlide = 0;
var i= 324 ;
var y= -324;
var len = 1926;
var x = 0


nextBtn.onclick = function(){
	"use strict";
	slidesContainer.style.right= i +'px';
	i= i+324;
	if (i>= len){
		i=0
	}
	console.log(i)
	x=i
}

var myfunc = function(){
	"use strict";
	slidesContainer.style.right= i +'px';
	i= i+324;
	if (i>= len){
		i=0
	}
	x=i
	setTimeout("myfunc()", 3000);
}
prevBtn.onclick = function(){
	"use strict";
	if(x < 0){
		x = len;
	}else if(x >= 0){
		x = x - 320 ;
		slidesContainer.style.right = x +'px';
	}
	console.log(x)
}
console.log(i)

// setontime(myfunc,3000);
myfunc();



