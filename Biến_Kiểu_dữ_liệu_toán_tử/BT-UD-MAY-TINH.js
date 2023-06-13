function tinhToan(x) {
    let a = document.getElementById("1").value;
    let b = document.getElementById("2").value;
    if (a === "" && b !== "") {
        alert("hãy nhập lại 1");
    } else if ( a === "" && b === "") {
        alert("Hãy nhập lại 1 và 2");

    } else if ( a !== "" && b === "") {
        alert("Hãy nhập lại 2");
    } else if (a !== "" && b !== "") {
        if (x === "+") {
            document.getElementById("KQ").innerHTML = "Kết quả: " + (parseInt(a) + parseInt(b)); //parseINT(a + b)
        } else if (x === "-") {
            document.getElementById("KQ").innerHTML = "Kết quả: " + (parseInt(a) - parseInt(b));
        } else if (x === "*") {
            document.getElementById("KQ").innerHTML = "Kết quả: " + (parseInt(a) * parseInt(b));
        } else if (x === "/") {
            document.getElementById("KQ").innerHTML = "Kết quả: " + (parseInt(a) / parseInt(b));
        }
    }
    // document.getElementById("KQ").innerHTML = "Cong";
}

function reset() {
    document.getElementById("1").value="";
    document.getElementById("2").value="";
    document.getElementById("KQ").innerHTML="";
}