function timer() {
    var music = document.getElementsByTagName('audio')[0];
    var time = document.getElementById('timer');
    var total = Math.floor(music.duration);
    var now = Math.floor(music.currentTime);
    var dot = document.getElementById('d');
    var a = 63 - (now / total) * 115;

    var mm, ss, mmm, sss;
    mm = Math.floor(now / 60);
    ss = now - 60 * mm;
    mmm = Math.floor(total / 60);
    sss = total - 60 * mmm;
    dot.style.left = 'calc(50% - ' + a + 'px)';
    time.innerHTML = mm + ':' + ss + '/' + mmm + ':' + sss;

}

function mute() {
    var music = document.getElementsByTagName('audio')[0];
    var mute = document.getElementById('mute');
    if (!music.muted) { music.muted = true;
        mute.style.backgroundColor = 'red'; } else { music.muted = false;
        mute.style.backgroundColor = '#8060c6'; }

}

function po_lay() {
    var music = document.getElementsByTagName('audio')[0];
    var but = document.getElementsByClassName('paupay');
    if (p) { music.play();
        p = false;
        but[0].style.display = 'none';
        but[1].style.display = 'block'; } else { music.pause();
        p = true;
        but[1].style.display = 'none';
        but[0].style.display = 'block'; }
    // music.loop = true;
    setInterval(timer, 1000);

}

function ChonBai(n) {
    var song = document.getElementById('songWillPlay');
    switch (n) {
        case 1:
            song.setAttribute("src", "./Resources/COOLIN_DUB'L U.mp3");
            break;
        case 2:
            song.setAttribute("src", "./Resources/YeuSacYeu.mp3");
            break;
    }
    document.getElementsByTagName('audio')[0].load();
    p = true;
    po_lay();
}

function Tua(x) {
    var music = document.getElementsByTagName('audio')[0];
    var start = innerWidth * 0.5 - 60;
    var progess = Math.floor((x - start) / 125 * music.duration);
    music.currentTime = progess;
    timer();

}

function ChangeVolume(x) {
    var v = (x - innerWidth * 0.5 + 106) / 210;
    //Test jquery
    $('audio')[0].volume = v;
    $('#volume').width((200 * v).toString() + 'px');
    $('#v').html((Math.ceil(v * 100)).toString());
}
var w;

function Wait(x) {
    if (x) { document.getElementById('volume_bar').style.opacity = '1';
        clearTimeout(w); } else { w = setTimeout(function() { document.getElementById('volume_bar').style.opacity = '0'; }, 2000); }
}