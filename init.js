// var cvs = document.getElementById('canvas');
// var ctx  = cvs.getContext('2d');

function left_menu_appear() {
	document.getElementById("LeftMenu").style.width = "40%";
}

function left_menu_close() {
	document.getElementById("LeftMenu").style.width = "0%";
}


function start() {
	
}

function init() {
	setInterval(start , 1000.0 / 60);
}