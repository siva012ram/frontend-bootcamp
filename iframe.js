
var iframe = document.createElement('iframe');
var div = document.createElement("div");
div.classList.add("chat-frame");
div.appendChild(iframe);
iframe.src = "index.html"
document.body.appendChild(div);
window.addEventListener("message",function(event){
	if(event.data == "change"){
	document.getElementsByClassName("chat-frame")[0].style.width = "350px";
	document.getElementsByClassName("chat-frame")[0].style.height = "550px";
	}
	else{
		document.getElementsByClassName("chat-frame")[0].removeAttribute("style");
	}
})
