$(document).ready(function () {
    $("#btnxacnhan").prop('disabled', true); //Không có đặt phòng thì Disable button xác nhận
    var rows = document.getElementById("table-thong-tin-dat-phong").getElementsByTagName("tbody")[0].getElementsByTagName("tr").length;

    $("#btn-chon-phong").click(function () {
        var loaiPhong = "<td>" + $("select#loaiPhong").val() + "</td>";
        var maPhong = "<td>" + $("select#maPhong").val() + "</td>";
        var ngayNhanPhong = "<td>" + $("input#ngayNhanPhong").val() + "</td>";
        var ngayTraPhong = "<td>" + $("input#ngayTraPhong").val() + "</td>";
        var xoaPhong = '<td> <a onclick="deleteRow(this)"> Xóa </a> </td>';
        $("table#table-thong-tin-dat-phong").append("<tr>" + loaiPhong + maPhong + ngayNhanPhong + ngayTraPhong + xoaPhong + "</tr>");

        rows++;
        if (rows > 0) {
            $("#btnxacnhan").prop('disabled', false); //Có đặt phòng thì Enable button xác nhận
        }
    });
});