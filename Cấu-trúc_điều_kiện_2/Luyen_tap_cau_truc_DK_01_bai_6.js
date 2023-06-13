function doanhThu() {
    let a = document.getElementById("gia").value;
    let b = document.getElementById("SP").value;
    let c = document.getElementById("phanTram").value;
    let hoaHong = ((a*c)/100)*b;
    document.write(" Hoa Hồng nhận được là:" + hoaHong);

}