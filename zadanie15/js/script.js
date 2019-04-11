document.querySelector("#form1").addEventListener("submit", function(e) {
    e.preventDefault();
    let b = parseInt(document.querySelector("#b").value);
    let a = parseInt(document.querySelector("#a").value);

    code = "<table>";
    for(a;a<=b;a++)
        code += "<tr><td>" + a + "</td><td>" + a*a + "</td></tr>";
    code += "</table>";

    document.querySelector(".result").innerHTML = code;
});