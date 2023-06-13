function tinhDiem() {

    let diemLy = parseInt(document.getElementById("ly").value);//parseInt(prompt('nhập vào điểm lý:', ''));
    let diemHoa = parseInt(document.getElementById("Hoa").value); //parseInt(prompt('nhập vào điểm Hóa:', ''));
    let diemSinh = parseInt(document.getElementById("sinh").value);//parseInt(prompt('nhập vào điểm sinh học:', ''));
    let diemtrungbinh = (diemLy + diemHoa + diemSinh)/3;
    let diemtong = diemLy + diemHoa + diemSinh;
    document.getElementById("trungbinh").innerHTML = "Tổng điểm trung bình: " + diemtrungbinh;
    document.getElementById("trungbinh").innerHTML += "<br>" + "Tổng điểm: " + diemtong;
    // let diemly = parseInt(prompt("nhap diem ly:", ""));
    // let diemhoa = parseInt(prompt("nhap diem hoa:", ""));
    // let diemsinh = parseInt(prompt("nhap diem sinh:", ""));
    // let diemtrungbinh = (diemly + diemhoa + diemsinh)/3;
    // document.write("Tổng điểm trung bình: " + diemtrungbinh);
}