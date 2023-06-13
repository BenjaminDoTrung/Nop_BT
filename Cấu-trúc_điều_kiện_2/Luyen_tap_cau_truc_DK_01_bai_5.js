function phanLoai() {
    let a = parseInt(document.getElementById("BaiKiemTra").value);
    let b = parseInt(document.getElementById("BaiGiuaKy").value);
    let c = parseInt(document.getElementById("BaiCuoiKy").value);
    let diemTB = (a + (b * 2) + (c*3))/6
    if (diemTB < 4) {
        document.write("Học lực kém");
    } else if (diemTB < 7) {
            document.write("Học lực trung bình");
    } else if (diemTB < 9) {
                document.write("Học lực khá");
    } else if (diemTB < 10) {
        document.write("Học lực giỏi");
    } else alert("Mời bạn nhập lại")
}