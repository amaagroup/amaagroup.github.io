// Khai báo biến
var timer = 59,
    wordIndex = 0,
    tmp, char = 0;
var start = false,
    normal = true,
    a = true;
var wordIndex, timer = 59,
    cc = 0,
    wc = 0,
    wpm = 0;
var words = document.getElementsByClassName("word");
var dictionary = ['bắt', 'đầu', 'kiểm', 'tra', 'tốc', 'độ', 'đánh', 'máy', 'của', 'bạn', 'gõ', 'phím', 'để', 'bầu', 'trời', 'trường', 'học', 'quy', 'biển', 'điện', 'tử', 'dạ', 'vâng', 'công', 'nghệ', 'gió', 'cầu', 'đường', 'xin', 'lỗi', 'cổ', 'tích', 'loài', 'vật', 'em', 'bay', 'thơ', 'cảm', 'giao', 'thông', 'mà', 'giao', 'thông', 'vui', 'vẻ', 'là', 'rán', 'cảm', 'con', 'người', 'phải', 'hay', 'khoa', 'bánh', 'trường', 'học', 'hà', 'nội', 'in', 'lang', 'dạy', 'nhung', 'chào', 'khó', 'khăn', 'phép', 'thế', 'giới', 'sống', 'hỷ', 'gì', 'bay', 'vì', 'vệ', 'sinh', 'thi', 'hành', 'trường', 'học', 'phương', 'ngày', 'tình', 'yêu', 'sơ', 'ngủ', 'cười', 'nắng', 'phần', 'tia', 'nắng', 'thi', 'hành', 'ký', 'tên', 'đơn', 'bướm', 'kĩ', 'thuật', 'đợi', 'chi', 'sung', 'sướng', 'cổ', 'tích', 'hạnh', 'phúc', 'trả', 'lời', 'phần', 'món', 'ăn', 'phố', 'xin', 'bóng', 'xã', 'hội', 'khoa', 'dạy', 'trời', 'lũ', 'mình', 'ký', 'tên', 'anh', 'hi', 'thư', 'bóng', 'viết', 'lách', 'bánh', 'lịch', 'sử', 'cuộc', 'đời', 'pháp', 'luật', 'hoàn', 'toàn', 'cô', 'tổ', 'quốc', 'hà', 'công', 'trình', 'xanh', 'nắng', 'tên', 'rán', 'chăm', 'giành', 'lành', 'bão', 'sài', 'gòn', 'kinh', 'mình', 'bếp', 'hãy', 'trả', 'lời', 'hoài', 'nhạc', 'vui', 'vẻ', 'hả', 'kĩ', 'thuật', 'thanh', 'niên', 'đinh', 'hay', 'nga', 'quảng', 'bình', 'theo', 'thành', 'ngành', 'giấy', 'tờ', 'bao', 'quát', 'nhà', 'cao', 'công', 'nghệ', 'chính', 'thay', 'mặt', 'lại', 'đi', 'phải', 'thơ', 'nhà', 'xin', 'lỗi', 'kính', 'phải', 'là', 'làm', 'viết', 'lách', 'giấy', 'tờ', 'hà', 'nội', 'xa', 'đàn', 'sáo', 'báo', 'nào', 'xanh', 'tin', 'sinh', 'khoa', 'phối', 'hợp', 'quảng', 'bình', 'theo', 'ẩm', 'thực', 'quảng', 'nam', 'hoài', 'công', 'trình', 'phép', 'đỏ', 'thanh', 'đơn', 'dũng', 'bão', 'ngữ', 'văn', 'món', 'ăn', 'bếp', 'làm', 'sinh', 'đất', 'ngoài', 'da', 'sinh', 'học', 'ngữ', 'văn', 'khỏe', 'mạnh', 'bà', 'tôi', 'vệ', 'sinh', 'lại', 'đi', 'xã', 'hội', 'phương', 'gửi', 'xa', 'hạt', 'biển', 'bao', 'quát', 'kiến', 'trúc', 'chị', 'khánh', 'cao', 'phép', 'kính', 'thanh', 'bà', 'nhân', 'dân', 'em', 'lựu', 'xây', 'dựng', 'chào', 'sợ', 'giành', 'dũng', 'phủ', 'tỉnh', 'sài', 'gòn', 'độc', 'lập', 'hãy', 'tia', 'nắng', 'ngành', 'ngoài', 'phủ', 'minh', 'chim', 'khóc', 'trong', 'chú', 'năm', 'trang', 'dễ', 'dàng', 'đỏ', 'đợi', 'chi', 'hướng', 'nga', 'dễ', 'dàng', 'quảng', 'nam', 'pháp', 'luật', 'trời', 'ba', 'lang', 'đánh', 'tỉnh', 'hả', 'thang', 'gió', 'cuộc', 'đời', 'chị', 'lành', 'cười', 'mẹ', 'sư', 'phạm', 'hướng', 'phố', 'in', 'tu'];


$(document).ready(function() {
    $('#testbox').keyup(function() {
        if (start) check();
        else {
            start = true;
            count();
        }
    });
    $('#testbox').focus();
});

// Tạo mới văn bản
function createnew() {
    var x;
    for (var i = 0; i < words.length; i++) {
        x = Math.floor(Math.random() * (dictionary.length - 1));
        document.getElementById('word' + i).innerHTML = dictionary[x];
        document.getElementById('word' + i).style.color = '#000000';
    }
    tmp = document.getElementById('word0').innerHTML;
}
// Tô từ cần gõ
function activeword() {
    var i;
    for (i = 0; i < words.length; i++) {
        words[i].className = words[i].className.replace(" active", "");
    }
    words[wordIndex].className += " active";
    tmp = words[wordIndex].innerHTML;
    if (wordIndex == 0) createnew();
    wordIndex++;

    if (wordIndex > words.length - 1) {
        wordIndex = 0;
    }
}
// Đồng hồ đếm ngược
function count() {
    if (timer >= 10) document.getElementById('timer').innerHTML = '0:' + timer;
    if (timer < 10) document.getElementById('timer').innerHTML = '0:0' + timer;
    timer -= 1;
    if (timer >= 0 && start) setTimeout(count, 1000);
    else { result(); }
}
// Kiểm tra gõ
function check() {
    var text = document.getElementById('testbox').value;
    var last = text.trim();
    if (last != text && last != "" && text[text.length - 1] == " ") {
        var x = wordIndex - 1;
        if (x == -1) x = words.length - 1;
        if (last == tmp) {
            document.getElementById('word' + x).style.color = 'var(--whitemilk)';
            wc++;
            for (var i = 0; i < tmp.length; i++) {
                if (tmp[i] == 'ă' || tmp[i] == 'â' || tmp[i] == 'đ' || tmp[i] == 'ê' || tmp[i] == 'ô' || tmp[i] == 'ơ' || tmp[i] == 'ư' || tmp[i] == 'á' || tmp[i] == 'à' || tmp[i] == 'ả' || tmp[i] == 'ã' || tmp[i] == 'ạ' || tmp[i] == 'é' || tmp[i] == 'è' || tmp[i] == 'ẻ' || tmp[i] == 'ẽ' || tmp[i] == 'ẹ' || tmp[i] == 'í' || tmp[i] == 'ì' || tmp[i] == 'ỉ' || tmp[i] == 'ĩ' || tmp[i] == 'ị' || tmp[i] == 'ó' || tmp[i] == 'ò' || tmp[i] == 'ỏ' || tmp[i] == 'õ' || tmp[i] == 'ọ' || tmp[i] == 'ú' || tmp[i] == 'ù' || tmp[i] == 'ủ' || tmp[i] == 'ũ' || tmp[i] == 'ụ' || tmp[i] == 'ý' || tmp[i] == 'ỳ' || tmp[i] == 'ỷ' || tmp[i] == 'ỹ' || tmp[i] == 'ỵ') { char += 2; } else if (tmp[i] == 'a' || tmp[i] == 'b' || tmp[i] == 'c' || tmp[i] == 'd' || tmp[i] == 'e' || tmp[i] == 'g' || tmp[i] == 'h' || tmp[i] == 'i' || tmp[i] == 'k' || tmp[i] == 'l' || tmp[i] == 'm' || tmp[i] == 'n' || tmp[i] == 'o' || tmp[i] == 'p' || tmp[i] == 'q' || tmp[i] == 'r' || tmp[i] == 's' || tmp[i] == 't' || tmp[i] == 'u' || tmp[i] == 'v' || tmp[i] == 'x' || tmp[i] == 'y') { char += 1; } else char += 3;
            }
            cc += char + 1;
            char = 0;
        } else document.getElementById('word' + x).style.color = '#dd0000';
        document.getElementById('testbox').value = '';
        activeword();
    }
    if (text[0] == " ") document.getElementById('testbox').value = '';
}
// Hiện kết quả và hiệu ứng
function result() {
    wpm = cc / 5;
    timer = 0;
    document.getElementById('dot').style.animationPlayState = 'paused';
    document.getElementById('result').style.display = 'grid';
    $('#testbox').hide(500);
    $('#result').show(1000);
    $('#box').hide(300);
    $('#wpm').html(wpm.toString() + ' WPM');
    $('#cc').html(cc);
    $('#wc').html(wc);
}

activeword();