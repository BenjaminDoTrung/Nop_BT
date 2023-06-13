function tinh() {
    let r = document.getElementById("Dk").value;
    if (r == "") {
        alert("Hãy nhập giá trị R");
        return;
    }
    let dienTich = 3.14 * (r*r);
    let chuVi = 2 * r * 3.14;
    document.getElementById("DT").innerHTML = "Diện tích hình tròn là:" + dienTich;
    document.getElementById("CV").innerHTML = "Chu vi hình tròn là:" + chuVi;
}

function reset() {
    document.getElementById("Dk").value = "";
    document.getElementById("DT").innerHTML = "";
    document.getElementById("CV").innerHTML = "";
}