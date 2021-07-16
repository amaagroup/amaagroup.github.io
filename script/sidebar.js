$(document).ready(function() {
    document.querySelector('#nav_container').innerHTML =
        '<div class="logo_container"><div class="logo"><i class="bx bx-terminal"></i><div class="logo_name">AMAAGROUP</div></div><i class="bx bx-menu" id="btn"></i></div><div class="nav_list"><ul><li><a href="#"><i class="bx bx-search" ></i><input type="text" placeholder="Tìm kiếm..."></a><span class="alt_name">Tìm kiếm</span></li><li><a href="/"><i class="bx bx-home" ></i><span class="links_name">Trang chủ</span></a><span class="alt_name">Trang chủ</span></li><li><a href="#"><i class="bx bxs-contact"></i><span class="links_name">Liên hệ</span></a><span class="alt_name">Liên hệ</span></li><li><a href="/typing-test/"><i class="bx bxs-keyboard" ></i><span class="links_name">Typing-test</span></a><span class="alt_name">Typing-test</span></li><li><a href="/game/"><i class="bx bx-game" ></i><span class="links_name">Game</span></a><span class="alt_name">Game</span></li><li><a href="#"><i class="bx bx-donate-heart" ></i><span class="links_name">Ủng hộ</span></a><span class="alt_name">Ủng hộ</span></li><li><a href="#"><i class="bx bx-help-circle" ></i><span class="links_name">Trợ giúp</span></a><span class="alt_name">Trợ giúp</span></li></ul></div><div class="credit"><p>2021 AMAA</p></div>';
    let _btn = document.querySelector("#btn");
    let _sidebar = document.querySelector("#nav_container");
    let _searchBtn = document.querySelector(".bx-search");
    _btn.onclick = function() {
        _sidebar.classList.toggle("active");
    }
    _searchBtn.onclick = function() {
        _sidebar.classList.toggle("active");
    }
});