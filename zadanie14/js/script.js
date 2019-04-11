    code = "<table>"
    for(let i=1;i<=100;i++)
        code += "<tr><td>" + i + "</td><td>" + i*i + "</td></tr>";
    code += "</table>";

document.querySelector('.result').innerHTML = code;