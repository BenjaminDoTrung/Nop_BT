function chuyendoi() {
    let c = document.getElementById("oC").value;
    let f = document.getElementById("oF").value;
    if (c== "") {
        if (f == "") {
            alert("yêu cầu nhập giá trị");
        }
        else {
            c = ((f-32)*5)/9;
            document.getElementById("oC").value = c;
        }
    }
    else {
        if (f=="") {
            f = ((c*9)/5)+32;
            document.getElementById("oF").value = f;
        }
        else {
            alert("yêu cầu chỉ nhập 1 bên")
        }
    }
}