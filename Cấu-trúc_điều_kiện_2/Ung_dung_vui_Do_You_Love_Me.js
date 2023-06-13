function yes(){
    alert('Bạn chọn đúng rồi đấy, i l')
}
function clickv() {
    let x = Math.random()*innerWidth;
    let y = Math.random()*innerHeight;
    let run = document.getElementById('1').style;
    run.position = "absolute";
    document.getElementById('1').style.left = x + 'px';
    document.getElementById('1').style.top = y + 'px';
}