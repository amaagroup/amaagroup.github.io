// JavaScript source code

'use strict'
var current = 0,left=null;
var i;

var dots = document.getElementsByClassName("transiDot");
var lists = document.getElementsByClassName("musicList");



function po_lay() {
    var music = document.getElementsByTagName('audio')[0] ;
    music.play();
    music.loop = true;

}

function tapPlay() {

	var btn = document.getElementById('playButton');
	var msl = document.getElementById('musicListBox');
	var tbl = document.getElementById('transi_left');
	var tbr = document.getElementById('transi_right');
    
	btn.style.display = "none";
	msl.style.display = "block";
	tbl.style.display = "block";
	tbr.style.display = "block";
}

function transiPage() {
    var num_page = lists.length;
    if (left) {
        current = (current + num_page - 1) % num_page;
    }
    else {
        current = (current + num_page + 1) % num_page;
    }
    for(i=0;i<num_page;i++)
    {
        dots[i].style.opacity= '0.6';
        lists[i].style.display='none';
    }
        dots[current].style.opacity= '1.0';
        if (left) lists[current].style='display: block; animation: swipeL 0.6s 0.2s 1';
        else lists[current].style='display: block; animation: swipeR 0.6s 0.2s 1';
}