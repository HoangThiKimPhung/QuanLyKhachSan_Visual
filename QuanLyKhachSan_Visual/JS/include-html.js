$(document).ready(function () {    
    //Sự kiện add header, menu-left và footer vào page
    $.get('header-NV.html', function (res) {
        $('#header').html(res);
    });
    $.get('menu-NV.html', function (res) {
        $('#menu').html(res); 
        
        //Sự kiện khi click vào các sub-menu
        $("li#submenu3").click(function () {
            $("ul#sub-menu3").toggle();
        });
        $("li#submenu4").click(function () {
            $("ul#sub-menu4").toggle();
        });
        $("li#submenu5").click(function () {
            $("ul#sub-menu5").toggle();
        });
        $("li#submenu6").click(function () {
            $("ul#sub-menu6").toggle();
        });
        $("li#submenu7").click(function () {
            $("ul#sub-menu7").toggle();
        });
        $("li#submenu8").click(function () {
            $("ul#sub-menu8").toggle();
        });
        $("li#submenu9").click(function () {
            $("ul#sub-menu9").toggle();

        });

        //Sự kiện active menu
        var path = document.location.pathname;
        var namepage = '';
        var namefile = '';
        if (path.lastIndexOf('nhan-vien.html') >= 0) {
            namepage = 'TRANG CỦA BẠN';
            namefile = 'nhan-vien.html';
            $("li#submenu1").css("background-color", "#0d875c");
            $("li#submenu1 a:first").attr("style", "color: white !important");
        }
        if (path.lastIndexOf('tim-phong.html') >= 0) {
            namepage = 'TÌM PHÒNG';
            namefile = 'tim-phong.html';
            $("li#submenu2").css("background-color", "#0d875c");
            $("li#submenu2 a:first").attr("style", "color: white !important");
        }
        else if (path.lastIndexOf('tra-cuu-khach-dat.html') >= 0) {
            namepage = 'TRA CỨU > TRA CỨU KHÁCH ĐẶT';
            namefile = 'tra-cuu-khach-dat.html';
            $("li#submenu3").css("background-color", "#0d875c");
            $("li#submenu3 a:first").attr("style", "color: white !important");
        }
        else if (path.lastIndexOf('tra-cuu-khach-hang.html') >= 0) {
            namepage = 'TRA CỨU > TRA CỨU KHÁCH HÀNG';
            namefile = 'tra-cuu-khach-hang.html';
            $("li#submenu3").css("background-color", "#0d875c");
            $("li#submenu3 a:first").attr("style", "color: white !important");
        }
        else if (path.lastIndexOf('tra-cuu-phong.html') >= 0) {
            namepage = 'TRA CỨU > TRA CỨU PHÒNG';
            namefile = 'tra-cuu-phong.html';
            $("li#submenu3").css("background-color", "#0d875c");
            $("li#submenu3 a:first").attr("style", "color: white !important");
        }
        else if (path.lastIndexOf('tra-cuu-dich-vu.html') >= 0) {
            namepage = 'TRA CỨU > TRA CỨU DỊCH VỤ';
            namefile = 'tra-cuu-dich-vu.html';
            $("li#submenu3").css("background-color", "#0d875c");
            $("li#submenu3 a:first").attr("style", "color: white !important");
        }
        else if (path.lastIndexOf('tra-cuu-dich-vu-KH-da-su-dung.html') >= 0) {
            namepage = 'TRA CỨU > TRA CỨU DỊCH VỤ KHÁCH HÀNG ĐÃ SỬ DỤNG';
            namefile = 'tra-cuu-dich-vu-KH-da-su-dung.html';
            $("li#submenu3").css("background-color", "#0d875c");
            $("li#submenu3 a:first").attr("style", "color: white !important");
        }
        else if (path.lastIndexOf('them-don-thue-phong.html') >= 0) {
            namepage = 'QUẢN LÝ THUÊ PHÒNG > THÊM ĐƠN THUÊ PHÒNG';
            namefile = 'them-don-thue-phong.html';
            $("li#submenu5").css("background-color", "#0d875c");
            $("li#submenu5 a:first").attr("style", "color: white !important");
        }
        else if (path.lastIndexOf('chinh-sua-don-thue-phong.html') >= 0) {
            namepage = 'QUẢN LÝ THUÊ PHÒNG > CHỈNH SỬA ĐƠN THUÊ PHÒNG';
            namefile = 'chinh-sua-don-thue-phong.html';
            $("li#submenu5").css("background-color", "#0d875c");
            $("li#submenu5 a:first").attr("style", "color: white !important");
        }
        else if (path.lastIndexOf('thong-ke-don-thue-phong.html') >= 0) {
            namepage = 'QUẢN LÝ THUÊ PHÒNG > THỐNG KÊ ĐƠN THUÊ PHÒNG';
            namefile = 'thong-ke-don-thue-phong.html';
            $("li#submenu5").css("background-color", "#0d875c");
            $("li#submenu5 a:first").attr("style", "color: white !important");
        }
        else if (path.lastIndexOf('chi-tiet-thong-ke-thue-phong.html') >= 0) {
            namepage = 'QUẢN LÝ THUÊ PHÒNG > THỐNG KÊ ĐƠN THUÊ PHÒNG > CHI TIẾT';
            namefile = 'chi-tiet-thong-ke-thue-phong.html';
            $("li#submenu5").css("background-color", "#0d875c");
            $("li#submenu5 a:first").attr("style", "color: white !important");
        }

        $('#page-trich-dan').attr("href", namefile);
        $('#page-trich-dan').text(namepage);
    });
});