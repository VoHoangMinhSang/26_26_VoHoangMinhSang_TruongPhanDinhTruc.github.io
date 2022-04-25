$(document).ready(function () {
    var i = 1;

    function KiemtraTK() {
        var mau = /^\w*$/;
        if ($("#txtTK").val() == "") {
            $("#tbTK").html("* bắt buộc nhập");
            return false;
        }
        if (!mau.test($("#txtTK").val())) {
            $("#tbTK").html("* Không được có ký tự đặc biệt");
            return false;
        }
        $("#tbTK").html("*");
        return true;
    }
    $("#txtTK").blur(KiemtraTK);

    function KiemtraMK() {
        var mau = /^\w*$/;
        if ($("#txtMK").val() == "") {
            $("#tbMK").html("* bắt buộc nhập");
            return false;
        }
        if (!mau.test($("#txtMK").val())) {
            $("#tbMK").html("* Không được có ký tự đặc biệt");
            return false;
        }
        $("#tbMK").html("*");
        return true;
    }
    $("#txtMK").blur(KiemtraMK);

    function KiemtraNMK() {
        var mau = $("#txtMK").val();
        if ($("#txtNMK").val() == "") {
            $("#tbNMK").html("* bắt buộc nhập");
            return false;
        }
        if ($("#txtNMK").val() != mau) {
            $("#tbNMK").html("* Nhập lại mật khẩu sai");
            return false;
        }
        $("#tbNMK").html("*");
        return true;
    }
    $("#txtNMK").blur(KiemtraNMK);

    function KiemtraEmail() {
        var mau = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)+(\.\w{2,3})+$/;
        if ($("#txtEmail").val() == "") {
            $("#tbEmail").html("* bắt buộc nhập");
            return false;
        }
        if (!mau.test($("#txtEmail").val())) {
            $("#tbEmail").html("* Nhập định dạng Email sai");
            return false;
        }
        $("#tbEmail").html("*");
        return true;
    }
    $("#txtEmail").blur(KiemtraEmail);

    function KiemtraHT() {
        var mau = /^[A-Z][a-zA-Z]+(\s[A-Z][a-zA-Z\s]+)*$/;
        if ($("#txtHT").val() == "") {
            $("#tbHT").html("* bắt buộc nhập");
            return false;
        }
        if (!mau.test($("#txtHT").val())) {
            $("#tbHT").html("* Chữ cái đầu phải ghi hoa và không được dùng số");
            return false;
        }
        $("#tbHT").html("*");
        return true;
    }
    $("#txtHT").blur(KiemtraHT);

    function KiemtraSDT() {
        var mau = /^0\d{3}-\d{3}-\d{3}$/;
        if ($("#txtSDT").val() == "") {
            $("#tbSDT").html("* bắt buộc nhập");
            return false;
        }
        if (!mau.test($("#txtSDT").val())) {
            $("#tbSDT").html("* Phải nhập theo dạng 0xxx-xxx-xxx trong đó x là số và thêm dấu -");
            return false;
        }
        $("#tbSDT").html("*");
        return true;
    }
    $("#txtSDT").blur(KiemtraSDT);

    $("#btnDK").click(function(){
        if (!KiemtraTK() || !KiemtraMK() || !KiemtraNMK() || !KiemtraEmail() || !KiemtraHT() || !KiemtraSDT()) {
            alert("Vui lòng nhập đúng và đầy đủ thông tin");
            return false;            
        }
        else{
            alert("Đăng ký thành công");
            return true;
        }
    })
})