function checkNumber() {
    let a = prompt("Nhập số a:");
    let b = prompt("Nhập số b:");
    let c = prompt("Nhập số c:");
    if (a < b) {
        if (b < c) {
            alert("C là số lớn nhất");
        } else alert("B là số lớn nhất")
    } else if (a < c) {
        alert(" C là số lớn nhất")
        } else alert("A là số lớn nhất")
}