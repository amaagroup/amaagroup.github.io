// JavaScript source code

'use strict'
var current = 0,left=null;
var p=true;
var i;

var dots = document.getElementsByClassName("transiDot");
var lists = document.getElementsByClassName("musicList");


function timer(){
    var music = document.getElementsByTagName('audio')[0] ;
    var time=document.getElementById('timer');
    var total = Math.floor(music.duration);
    var now = Math.floor(music.currentTime);
    var dot= document.getElementById('d');
    var a=60-(now/total)*105;

    var mm,ss,mmm,sss;
    mm=Math.floor(now/60);
    ss=now - 60*mm;
    mmm=Math.floor(total/60);
    sss=total - 60*mmm;
    dot.style.left = 'calc(50% - ' + a + 'px)';
    time.innerHTML = mm + ':' + ss + '/' + mmm + ':' + sss;
    
}
function mute()
{
    var music = document.getElementsByTagName('audio')[0] ;
    var mute=document.getElementById('mute');
    if (music.volume) {music.volume = 0;mute.style.backgroundColor= 'red';}
    else {music.volume=1;mute.style.backgroundColor= '#8060c6';}

}
function po_lay(){
    var music = document.getElementsByTagName('audio')[0] ;
    var but=document.getElementsByClassName('paupay');
   if (p) {music.play();p=false;but[0].style.display = 'none';but[1].style.display = 'block';}
   else {music.pause();p=true;but[1].style.display = 'none';but[0].style.display = 'block';}
    // music.loop = true;
    setInterval(timer,1000);

}
function ChonBai(n){
    var song=document.getElementById('songWillPlay');
    switch (n){
    case 1: song.setAttribute("src","./Resources/COOLIN_DUB'L U.mp3");break;
    case 2: song.setAttribute("src","./Resources/YeuSacYeu.mp3");break;
    }
    document.getElementsByTagName('audio')[0].load();
    p=true;
    po_lay();
}

function tapPlay() {

	var btn = document.getElementById('playButton');
	var msl = document.getElementById('musicListBox');
	var tbl = document.getElementById('transi_left');
	var tbr = document.getElementById('transi_right');
    
	btn.style.display = "none";
	msl.style.display = "block";
	if (innerWidth>=630) {
    tbl.style.display = "block";
	tbr.style.display = "block";}
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
        dots[i].style.opacity = '0.6';
        lists[i].style.display ='none';
    }
        dots[current].style.opacity = '1.0';
        if (left) lists[current].style = 'display: block; animation: swipeL 0.6s 0.2s 1';
        else lists[current].style = 'display: block; animation: swipeR 0.6s 0.2s 1';
}
function MoveToPage(n){
    if (current!=n)
    {  
        if (current>n) left=true;
        else if (current<n) left=false;
        current = (n + lists.length + left*2 - 1) % lists.length;
        transiPage();
    }
}