var jest=0;

$(document).ready(function(){
    $('#ikona-lupa').click(function(){
            $("#zapytanie").animate({
                opacity: "toggle"
              });
    })
});

document.addEventListener("DOMContentLoaded", function() {

    const pierwszy = document.getElementById("pierwszy");
    const drugi = document.getElementById("drugi");
    const trzeci = document.getElementById("trzeci");
    const czwarty = document.getElementById("czwarty");

    let numer = 4;

    const time = setInterval(function() {
        if(numer===4){
            czwarty.style.opacity = "0";
            pierwszy.style.opacity = "1";
            numer=1;
        }
        else if(numer===1){
            pierwszy.style.opacity = "0";
            drugi.style.opacity = "1";
            numer=2;
        }
        else if(numer===2){
            drugi.style.opacity = "0";
            trzeci.style.opacity = "1";
            numer=3;
        }
        else if(numer===3){
            trzeci.style.opacity = "0";
            czwarty.style.opacity = "1";
            numer=4;
        }
    }, 5000);
    });