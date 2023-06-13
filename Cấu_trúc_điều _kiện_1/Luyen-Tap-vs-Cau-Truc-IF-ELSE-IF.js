function  nhap() {
    ten = document.getElementById("ten").value;
    pass = document.getElementById("password").value;
    if (ten !== "" && pass !== "") {
        alert("Đăng nhập thành công!");
    }
    else if (ten === "") {
        alert("Thiếu tài khoản!");
    }
    else if (pass === "") {
        alert("Thiếu mật khẩu!");
    }

}