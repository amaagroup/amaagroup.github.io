var titl=true;
var sta=true;
function bmenu() {
	if (sta) document.getElementById('sub-bmenu').style.display = "block";
	else document.getElementById('sub-bmenu').style.display = "none";
	sta=1-sta;	
}