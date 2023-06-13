function nhapvaogiatri_a_va_b() {
    var a = parseInt(prompt('nhập vào 2 giá trị a', ''));
    var b = parseInt(prompt('nhập vào 2 giá trị b', ''));
    if (a%b==0) {
        alert('a là bội của b');
    } else {
        alert('a không là bội của b');
    }

}