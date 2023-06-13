function diLen() {
    let len = document.getElementById("VN");
    len.style.top = parseInt((len.style.top)) - 5 + "px";
}

function diXuong() {
    let xuong = document.getElementById("VN");
    xuong.style.top = parseInt((xuong.style.top)) + 5 + "px";
}

function sangTrai() {
    let sTrai = document.getElementById("VN");
    sTrai.style.left = parseInt((sTrai.style.left)) - 5 + "px";
}

function sangPhai() {
    let sPhai = document.getElementById("VN");
    sPhai.style.left = parseInt((sPhai.style.left)) + 5 + "px";
}

function toHopPhim(evt) {
    switch (evt.keyCode) {
        case 38:
            diLen();
            break;
        case 40:
            diXuong();
            break;
        case 37:
            sangTrai();
            break;
        case 39:
            sangPhai();
            break;
    }
}

function lienKetToHopPhim() {
    window.addEventListener('keydown', toHopPhim);
}