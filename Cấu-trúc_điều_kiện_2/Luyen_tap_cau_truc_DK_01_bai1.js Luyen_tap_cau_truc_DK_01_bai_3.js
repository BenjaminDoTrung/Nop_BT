function chek() {
    let x = parseInt(document.getElementById("Number").value);
    if (x < 0) {
        document.write("số này nhỏ hơn 0");
    } else if (x == 0) {
        document.write("Đây là số 0");
    } else
        document.write("số này lớn hơn 0");
}