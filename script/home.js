$('.amaa').click(function() {
    $('.amaa').css({
        'top': '0%',
        'transform': 'translate(-50%,0%)'
    });
    $('.nav_card').show(300).css('display', 'flex');
});
$('.card:first-child').click(function() {
    window.location.href = '/typing-test/index.html';
});
$('.card:nth-child(2)').click(function() {
    window.location.href = '/index.html';
});
$('.card:nth-child(3)').click(function() {
    window.location.href = '/game/index.html';
});
$('.card:last-child').click(function() {
    window.location.href = '/index.html';
});