function myFunction() {
    var x = "",
        i = 0;
    for (; i < 10; i++) {
        if (i > 7) {
            break;
        }
        x = x + i + "<br>";
    }
    document.getElementById("demo").innerHTML = x;
}