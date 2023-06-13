function kiemTra() {
    let kg = parseInt(document.getElementById("Kg").value);
    let m = parseInt(document.getElementById("M").value);
    let bMI = kg / m;
    if (bMI < 18.5) {
        document.write("underweight");
    } else if (bMI < 25) {
        document.write("normal");
    } else if (bMI < 30) {
                document.write("overweight");
    } else document.write("Obese");
}