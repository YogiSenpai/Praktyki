var jest=0;

$(document).ready(function(){
    var scroll=$(window).scrollTop();

    $('#ikona-lupa').click(function(){
            $("#zapytanie").animate({
                opacity: "toggle"
              });
    })
    $('#strzalka-menu').click(function(){
        $(".menu").css({"display":"none"});
        $("#strzalka-zwrotna-menu").css({"display":"block"});
    });
    $('#strzalka-zwrotna-menu').click(function(){
        $(".menu").css({"display":"block"});
        $("#strzalka-zwrotna-menu").css({"display":"none"});
    });

    $(window).scroll(function (event) {
        scroll = $(window).scrollTop();
            if(scroll>30){
                $(".do-rozwiniecia").css({"padding-top":"20%"});
                $(".menu ul").css({"margin-top":"60%"});
                $("#strzalka-menu").css({"top":"42%"});
            }
            else if(scroll<=30){
                $(".do-rozwiniecia").css({"padding-top":"32%"});
                $(".menu ul").css({"margin-top":"80%"});
                $("#strzalka-menu").css({"top":"50%"});
            }
    });

});

document.addEventListener("DOMContentLoaded", function() {

    const pierwszy = document.getElementById("pierwszy");
    const drugi = document.getElementById("drugi");
    const trzeci = document.getElementById("trzeci");
    const czwarty = document.getElementById("czwarty");

    const pierwszyTekst = document.getElementById("pierwszy-tekst");
    const drugiTekst = document.getElementById("drugi-tekst");
    const trzeciTekst = document.getElementById("trzeci-tekst");
    const czwartyTekst = document.getElementById("czwarty-tekst");

    const pierwszyPrzycisk = document.getElementById("pierwszy-przycisk");
    const drugiPrzycisk = document.getElementById("drugi-przycisk");
    const trzeciPrzycisk = document.getElementById("trzeci-przycisk");
    const czwartyPrzycisk = document.getElementById("czwarty-przycisk");

    let numer = 1;

    $("#pierwszy-przycisk").click(function(){
        pierwszy.style.opacity = "1";
        drugi.style.opacity = "0";
        trzeci.style.opacity = "0";
        czwarty.style.opacity = "0";
        pierwszyTekst.style.opacity = "1";
        drugiTekst.style.opacity = "0";
        trzeciTekst.style.opacity = "0";
        czwartyTekst.style.opacity = "0";
        pierwszyPrzycisk.style.backgroundColor = "#013C5E";
        drugiPrzycisk.style.backgroundColor = "white";
        trzeciPrzycisk.style.backgroundColor = "white";
        czwartyPrzycisk.style.backgroundColor = "white";
        numer=1;
    });

    $("#drugi-przycisk").click(function(){
        pierwszy.style.opacity = "0";
        drugi.style.opacity = "1";
        trzeci.style.opacity = "0";
        czwarty.style.opacity = "0";
        pierwszyTekst.style.opacity = "0";
        drugiTekst.style.opacity = "1";
        trzeciTekst.style.opacity = "0";
        czwartyTekst.style.opacity = "0";
        pierwszyPrzycisk.style.backgroundColor = "white";
        drugiPrzycisk.style.backgroundColor = "#013C5E";
        trzeciPrzycisk.style.backgroundColor = "white";
        czwartyPrzycisk.style.backgroundColor = "white";
        numer=2;
    });

    $("#trzeci-przycisk").click(function(){
        pierwszy.style.opacity = "0";
        drugi.style.opacity = "0";
        trzeci.style.opacity = "1";
        czwarty.style.opacity = "0";
        pierwszyTekst.style.opacity = "0";
        drugiTekst.style.opacity = "0";
        trzeciTekst.style.opacity = "1";
        czwartyTekst.style.opacity = "0";
        pierwszyPrzycisk.style.backgroundColor = "white";
        drugiPrzycisk.style.backgroundColor = "white";
        trzeciPrzycisk.style.backgroundColor = "#013C5E";
        czwartyPrzycisk.style.backgroundColor = "white";
        numer=3;
    });

    $("#czwarty-przycisk").click(function(){
        pierwszy.style.opacity = "0";
        drugi.style.opacity = "0";
        trzeci.style.opacity = "0";
        czwarty.style.opacity = "1";
        pierwszyTekst.style.opacity = "0";
        drugiTekst.style.opacity = "0";
        trzeciTekst.style.opacity = "0";
        czwartyTekst.style.opacity = "1";
        pierwszyPrzycisk.style.backgroundColor = "white";
        drugiPrzycisk.style.backgroundColor = "white";
        trzeciPrzycisk.style.backgroundColor = "white";
        czwartyPrzycisk.style.backgroundColor = "#013C5E";
        numer=4;
    });

    const time = setInterval(function() {
        if(numer===4){
            czwarty.style.opacity = "0";
            pierwszy.style.opacity = "1";
            czwartyTekst.style.opacity = "0";
            pierwszyTekst.style.opacity = "1";
            czwartyPrzycisk.style.backgroundColor = "white";
            pierwszyPrzycisk.style.backgroundColor = "#013C5E";
            numer=1;
        }
        else if(numer===1){
            pierwszy.style.opacity = "0";
            drugi.style.opacity = "1";
            pierwszyTekst.style.opacity = "0";
            drugiTekst.style.opacity = "1";
            pierwszyPrzycisk.style.backgroundColor = "white";
            drugiPrzycisk.style.backgroundColor = "#013C5E"
            numer=2;
        }
        else if(numer===2){
            drugi.style.opacity = "0";
            trzeci.style.opacity = "1";
            drugiTekst.style.opacity = "0";
            trzeciTekst.style.opacity = "1";
            drugiPrzycisk.style.backgroundColor = "white";
            trzeciPrzycisk.style.backgroundColor = "#013C5E"
            numer=3;
        }
        else if(numer===3){
            trzeci.style.opacity = "0";
            czwarty.style.opacity = "1";
            trzeciTekst.style.opacity = "0";
            czwartyTekst.style.opacity = "1";
            trzeciPrzycisk.style.backgroundColor = "white";
            czwartyPrzycisk.style.backgroundColor = "#013C5E"
            numer=4;
        }
    }, 20000);
    });