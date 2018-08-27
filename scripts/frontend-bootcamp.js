var popChat=function(){
	// $("#chat-box").show();
	// $('#widget-icon').hide();

	Object.assign(document.getElementById("widget-icon").style,{display:"none"});
	Object.assign(document.getElementById("chat-box").style,{display:"block"});

	scrollBottom();
};
var scrollBottom = function(){
	var objDiv = document.getElementsByClassName("abc")[0];
	objDiv.scrollTop = objDiv.scrollHeight;
}
var closeWindow=function(){
	// $('#chat-box').hide();
	// $('#widget-icon').show();
	document.getElementById("chat-box").removeAttribute("style");
	document.getElementById("widget-icon").removeAttribute("style");

};
function function1() {
  var ul = document.getElementById("user-content");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(document.getElementById('user-msg').value));
  ul.appendChild(li);
  document.getElementById('user-form').reset();
};
var dynamicContent=function(){
	var ul=	document.getElementsByClassName("dynamic");
	var li= document.createElement("li");
	var div_create = document.createElement("div");
	var classadd = ul.classList.add(""); //user-chat-2 user-chat-content
}
document.getElementById("input-box").addEventListener("keydown",function(event){
	if(event.keyCode == 13){
		test();
	}
});
var headerChange=function(){
	//$('.main').hide(); 
	Object.assign(document.getElementsByClassName("main")[0].style,{display:"none"});
	//$('.alternative').show(); 
	Object.assign(document.getElementsByClassName("alternative")[0].style,{display:"block"});
	//$('.back-icon-box').css({'cursor':'default'}); 
	Object.assign(document.getElementsByClassName("back-icon-box")[1].style,{cursor:"default"});
	//$('.avatar-block2').addClass('avatar-block2-alt'); 
	document.getElementsByClassName("avatar-block2")[1].classList.add("avatar-block2-alt");
	//$('.tab-faq').css({'border-bottom':'3px solid','border-bottom-color':'#5b97e8','cursor':'default'}); 
	Object.assign(document.getElementsByClassName("tab-faq")[0].style,{borderBottom:'3px solid',borderBottomColor:'#5b97e8',cursor:'default'});
	//$('.tab-chat').css({'border-bottom':'none','cursor':'pointer'}); 
	Object.assign(document.getElementsByClassName("tab-chat")[0].style,{borderBottom:'none',cursor:'pointer'});
	//$('.message-box-padded').hide(); 
	Object.assign(document.getElementsByClassName("message-box-padded")[0].style,{display:"none"});
	//$('.faq-box').show(); 
	Object.assign(document.getElementsByClassName("faq-box")[0].style,{display:"block"});
	// $('.tab-chat').click(function(){ 
	// 	$('.main').show();
	// 	$('.alternative').hide();
	// 	$('.tab-chat').css({'border-bottom':'3px solid','border-bottom-color':'#5b97e8','cursor':'default'});
	// 	$('.tab-faq').css({'border-bottom':'none','cursor':'pointer'});
	// 	$('.avatar-block2').removeClass('avatar-block2-alt');
	// 	$('.message-box-padded').show();
	// 	$('faq-box').hide();
	// 	$('.back-icon-box').css({'cursor':'pointer'});
	// });
}
let defaultChange = function(){
	document.getElementsByClassName("main")[0].removeAttribute("style");
	document.getElementsByClassName("alternative")[0].removeAttribute("style");
	document.getElementsByClassName("tab-chat")[0].removeAttribute("style");
	document.getElementsByClassName("tab-faq")[0].removeAttribute("style");
	document.getElementsByClassName("avatar-block2")[1].classList.remove("avatar-block2-alt");
	document.getElementsByClassName("faq-box")[0].removeAttribute("style");
	document.getElementsByClassName("back-icon-box")[1].removeAttribute("style");
	document.getElementsByClassName("message-box-padded")[0].removeAttribute("style");
	scrollBottom();
};

var count = 4;
var counter = 0;
var test = function(){
	var ul = document.getElementsByClassName("dynamic");
	var li = document.createElement("li");
	var div = document.createElement("div");
	var input = document.getElementById("input-box");
	console.log(input);
	ul[0].appendChild(li);
	li.appendChild(div);
	li.classList.add("dynamic-content");
	div.classList.add("user-chat-2");
	fnTest(input,count);
	input.value = '';
	scrollBottom();
	count+= 1;

}

let fnTest = function(input,count){
	let div = document.getElementsByClassName("user-chat-2");
	let divTwo = document.createElement("div");
	div[count].appendChild(divTwo);
	divTwo.appendChild(document.createTextNode(input.value));
	divTwo.classList.add("user-chat-content");
	
}


var testTwo = function(){
	var ul = document.getElementsByClassName("dynamic");
	var li = document.createElement("li");
	var div = document.createElement("div");
	var input = document.getElementById("input-box-two");
	console.log(input.value);
	ul[0].appendChild(li);
	li.appendChild(div);
	li.classList.add("dynamic-content");
	div.classList.add("message-bubble-dynamic");
	fnTestTwo(input,counter);
	input.value = '';
	scrollBottom();
	counter+= 1;
	
}

let fnTestTwo = function(input,counter){
	let div = document.getElementsByClassName("message-bubble-dynamic");
	let divTwo = document.createElement("div");
	div[counter].appendChild(divTwo);
	divTwo.appendChild(document.createTextNode(input.value));
	divTwo.classList.add("message-dynamic");
		
}