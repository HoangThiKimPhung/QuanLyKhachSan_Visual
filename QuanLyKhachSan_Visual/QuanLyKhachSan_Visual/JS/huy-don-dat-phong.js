$(document).ready(function () {
    $("#btn-tra-cuu-khach-dat").click(function (e) {
        e.preventDefault();
        var maKD = $("#maKhachDat").val();
        if (maKD == "KD1") {
            $(".co-ket-qua").css("display", "block");
            $(".khong-co-ket-qua").css("display", "none");
        }
        if (maKD != "KD1") {
            $(".khong-co-ket-qua").css("display", "block");
            $(".co-ket-qua").css("display", "none");
        }
    });
});