var showing = false;
var help = false;
var mus = true,
    soun = true;
var t = new Array();
var color = new Array('black', '#2c218c', '#290072', 'cyan', 'black');
var point = 0;
var numbull = 0;
var numufo = 0;
var currentX = 0;
var createbull = null,
    createUFO = null;

function run() {
    if (!showing) $('#clic').show(300);
    $('#clic').hide(200).css('background', '#ffe8b0').show(200);
    showing = true;
    if (window.innerHeight < screen.height)
        document.body.requestFullscreen();
    /*$(window).on("blur focus", function (e) {
    	var prevType = $(this).data("prevType");

    	if (prevType != e.type) {
    		switch (e.type) {
    			case "blur":
    				$('.bullets').css('animation-play-state', 'paused');
    				$('.ufos').css('animation-play-state', 'paused');
    				//alert("Paused game. Click 'OK' to continue");//pause game
    				break;
    			case "focus":
    				$('.bullets').css('animation-play-state', 'running');
    				$('.ufos').css('animation-play-state', 'running'); //continue game
    				break;
    		}
    	}
    	$(this).data("prevType", e.type);
    })*/
    $('.side').delay(100).hide(200);
    $('.panel').delay(100).hide(200);
    help = false;

    startgame();
}

function startgame() {
    $('#zone').show();
    point = 0;
    var rocket = document.createElement('img');
    rocket.src = './asset/rocket.png';
    rocket.id = 'rocket';
    document.getElementById('zone').appendChild(rocket);
    $('#zone').on('mousemove', function(e) {
        currentX = e.clientX - 29.01;
        $('#rocket').css('left', currentX);
    })
    createufo();
    createbullet();
}

function createbullet() {
    createbull = setInterval(function() {
        var bullet = document.createElement('img');
        bullet.src = './asset/bullet.png';
        bullet.id = 'bull' + numbull;
        bullet.setAttribute('class', 'bullets');
        bullet.setAttribute('style', 'left: ' + (currentX + 22) + 'px');
        document.getElementById('zone').appendChild(bullet);
        numbull += 1;

        setTimeout(function(num) {
            let a = document.querySelector('#bull' + num);
            if (a != null) a.remove();
        }, 700, numbull - 1);

    }, 140);
}

function createufo() {
    createUFO = setInterval(function() {
        var ufo = document.createElement('img');
        ufo.src = './asset/ufo.png';
        ufo.id = 'ufo' + numufo;
        ufo.setAttribute('class', 'ufos');
        ufo.setAttribute('style', 'left: ' + (Math.random() * (innerWidth - 35)) + 'px');
        document.getElementById('zone').appendChild(ufo);
        collisionChecker(numufo);
        if (document.querySelectorAll('.ufos').length > 15) gameover();
        numufo += 1;
    }, 1000);

}

function collisionChecker(index) {
    var ele = document.querySelector('#ufo' + index);
    var x = parseInt(ele.style.left, 10);
    t[index % 100] = setInterval(function() {
        let bullet = document.querySelectorAll('.bullets');
        bullet.forEach(i => {
            let y = parseInt(getComputedStyle(ele).top, 10);
            let X = parseInt(i.style.left, 10);
            let Y = parseInt(getComputedStyle(i).top, 10);
            if (x <= X && x + 58 >= X && y <= Y && y + 53 >= Y) {
                if (ele != null) {
                    ele.remove();
                    x = i.id.slice(4);
                    y = document.querySelector('#bull' + x);
                    if (y != null) y.remove();
                    updatepoint();
                    clearInterval(t[index % 100]);
                }
            }
        });
    }, 15);
}

function updatepoint() {
    point += 100;
    if (point % 5000 == 0) $('#zone').css('background', color[Math.floor(Math.random() * 5)]);
    $('#count').html(point);
}

function gameover() {
    clearInterval(createbull);
    clearInterval(createUFO);
    t.forEach(i => {
        clearInterval(i);
    });
    document.querySelector('#zone').innerHTML = " ";
    $('#zone').delay(500).hide(500);
    $('.side').delay(300).show(300);
    h();
}
/**************************************************************************/

function music() {
    if (mus) document.querySelector('.set').style.background = '#ee0000';
    else document.querySelector('.set').style.background = '';
    mus = !mus;
    /*Turn on or off*/
}

function sound() {
    if (soun) document.getElementsByClassName('set')[1].style.background = '#ee0000';
    else document.getElementsByClassName('set')[1].style.background = '';
    soun = !soun;
    /*Turn on or off*/
}
/**************************************************************************/
function a() {
    if (showing) $("#clic").hide(300);
    else $("#clic").show(300);
    showing = !showing;
}

function h() {
    if (!help) {
        $('.side').css("transform", "translateX(-22rem)");
        $('#panel').delay(200).show(300);
    } else {
        $('.side').css("transform", "");
        $('#panel').hide(100);
        $('#setting').hide();
    }
    help = !help;
}

function s() {
    if (!help) h();
    $('#setting').css('display', 'flex');
}

function q() {
    window.location.reload();
}