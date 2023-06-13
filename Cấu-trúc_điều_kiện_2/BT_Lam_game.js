document.addEventListener('keydown',(event) => {
   switch (event.key) {
       case "2": {
           doiAnhBangBanPhimSo(2);
           break;
       }
       case "3": {
           doiAnhBangBanPhimSo(3);
           break;
       }
       case "4": {
           doiAnhBangBanPhimSo(4);
           break;
       }
       default:
   }
    // alert(event.key);
});
function doiAnhBangBanPhimSo(x) {
    let thayDoi;
    // alert(x);
    if (x === 2) thayDoi = document.getElementById("2");
    else if (x === 3) thayDoi = document.getElementById("3");
    else thayDoi = document.getElementById("4");
    if (thayDoi.src.includes("th%20(2).jpg")){
        thayDoi.src = "th%20(3).jpg";
    } else if (thayDoi.src.includes("th%20(3).jpg")) {
        thayDoi.src = "th%20(4).jpg";
    } else thayDoi.src = "th%20(2).jpg";

    hoantat();
}

function doiAnh() {
    let thayDoi = document.getElementById("2");
    if (thayDoi.src.includes("th%20(2).jpg")){
        thayDoi.src = "th%20(3).jpg";
    } else if (thayDoi.src.includes("th%20(3).jpg")) {
        thayDoi.src = "th%20(4).jpg";
    } else thayDoi.src = "th%20(2).jpg";

    hoantat();
}

function doiAnh3() {
    let thayDoi = document.getElementById("3");
    if (thayDoi.src.includes("th%20(2).jpg")){
        thayDoi.src = "th%20(3).jpg";
    } else if (thayDoi.src.includes("th%20(3).jpg")) {
        thayDoi.src = "th%20(4).jpg";
    } else thayDoi.src = "th%20(2).jpg";

    hoantat();
}

function doiAnh4() {
    let thayDoi = document.getElementById("4");
    if (thayDoi.src.includes("th%20(2).jpg")){
        thayDoi.src = "th%20(3).jpg";
    } else if (thayDoi.src.includes("th%20(3).jpg")) {
        thayDoi.src = "th%20(4).jpg";
    } else thayDoi.src = "th%20(2).jpg";

    hoantat();
}

function hoantat() {
    let anh1 = document.getElementById("2");
    let anh2 = document.getElementById("3");
    let anh3 = document.getElementById("4");

    if (anh1.src.includes("th%20(4).jpg") && anh2.src.includes("th%20(3).jpg") && anh3.src.includes("th%20(2).jpg")) {
        document.getElementById("ketthuc").innerHTML = "Hoàn thành ghép ảnh!";
    }
    else document.getElementById("ketthuc").innerHTML = "Ghép lại!";
}