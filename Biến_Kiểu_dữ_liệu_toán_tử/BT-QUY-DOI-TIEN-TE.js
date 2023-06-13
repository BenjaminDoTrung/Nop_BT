function quyDoi() {
    let tien = document.getElementById( "T").value;
    let from = document.getElementById("F").value;
    let to = document.getElementById("To").value;
    if ("VietNam" === from && to === "USA") {
        tienQuyDoi = tien / 23000;
        document.getElementById("Quydoi").innerHTML = "Result: " + tienQuyDoi + " USA";
    } else if (from === "VietNam" && to === "VietNam"){
        tienQuyDoi = tien;
        document.getElementById("Quydoi").innerHTML = "Result: " + tienQuyDoi + " VND";
    }else if (from === "USA" && to === "VietNam") {
        tienQuyDoi = tien * 23000;
        document.getElementById("Quydoi").innerHTML = "Result: " + tienQuyDoi + " VND";
    }else if (from === "USA" && to === "USA") {
        tienQuyDoi = tien;
        document.getElementById("Quydoi").innerHTML = "Result: " + tienQuyDoi + " USA";
        return;
    }
}