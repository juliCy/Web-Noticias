var dataLoad = 0;
var dataName = ["data1.json", "data2.json"];
var alturaJumbo;

//Al cargar la página
$(document).ready(function () {

    //Al refrescar hace scroll hacia arriba
    $('html, body').animate({scrollTop: 0});

    //Botón cargar
    $("#cargar").click(function () {
        cargarNoticias();
    });

    alturaJumbo = $('#jumbo').outerHeight();

    //Al hacer scroll
    $(window).scroll(function () {
        console.log("window.scrollTop() " + $(window).scrollTop());
        console.log("window.height() " + $(window).height());
        console.log("document.height() " + $(document).height());

        if ($(window).scrollTop() + $(window).height() >= $(document).height() - 0.5) {
            cargarNoticias();
        }
        if ($(window).scrollTop() > alturaJumbo && $(window).width() > 769) {
            $('#navfixed').addClass('navbar-fixed');
            $('#not1').css('margin-top', '80px');
            $('#publi').css('margin-top', '80px');
        }
        if ($(window).scrollTop() < alturaJumbo && $(window).width() > 769) {
            $('#navfixed').removeClass('navbar-fixed');
            $('#not1').css('margin-top', '0');
            $('#publi').css('margin-top', '0');
        }
        //Ipad
        if ($(window).width() == 768 && $(window).scrollTop() > alturaJumbo) {
            $('#navfixed').addClass('navbar-fixed');
            $('#not1').css('margin-top', '208px');
            $('#publi').css('margin-top', '77px');
        }
        if ($(window).width() == 768 && $(window).scrollTop() < alturaJumbo) {
            $('#navfixed').removeClass('navbar-fixed');
            $('#not1').css('margin-top', '150px');
            $('#publi').css('margin-top', '0');
        }
        //Demás dispositivos móviles
        if ($(window).width() < 415 && $(window).scrollTop() < alturaJumbo && $(window).width() < 415 && $(window).scrollTop() > alturaJumbo) {
            $('#navfixed').removeClass('navbar-fixed');
            $('#not1').css('margin-top', '150px');
            $('#publi').css('margin-top', '0');
        }
    });
});

function cargarNoticias() {
    if ((dataLoad < dataName.length) && (cargarData(dataName[dataLoad].toString()))) {
        dataLoad++;
    } else {
        $("#cargar").html("No hay más noticias");
    }
}

function cargarData(nombreData) {

    var path = "data/" + nombreData;

    //Cargar json
    $.getJSON(path, function (jsonObject) {
        crearNoticia(jsonObject, nombreData);
    });
    return true;
}

function crearNoticia(json, nombreData) {

    var more = document.getElementById("cargarNoticias");

    $.each(json, function (i) {
        var row = document.createElement("div");
        row.className = "estilo1" + nombreData;
        row.className = "estilo1";
        $(row).hide();
        more.appendChild(row);
        $(row).fadeIn(1500);

        var a = document.createElement("a");
        a.className = "linknot";
        a.setAttribute('href', "#");
        $(a).hide();
        more.appendChild(a);
        a.appendChild(row);
        $(a).fadeIn(1500);

        var fotnot = document.createElement("div");
        fotnot.className = "minimg";
        $(fotnot).hide();
        row.appendChild(fotnot);
        $(fotnot).fadeIn(1500);

        var img = document.createElement("img");
        img.className = "img-responsive pull-left";
        if ($(window).width() > 900) {
            img.src = json[i].imgbig;
        } else {
            img.src = json[i].imgmid;
        }
        img.alt = "Imagen cargada";
        $(img).hide();
        fotnot.appendChild(img);
        $(img).fadeIn(1500);

        var titdiv = document.createElement("div");
        titdiv.className = "tit";
        $(titdiv).hide();
        row.appendChild(titdiv);
        $(titdiv).fadeIn(1500);

        var h1 = document.createElement("h1");
        h1.className = "title";
        h1.textContent = json[i].title;
        $(h1).hide();
        titdiv.appendChild(h1);
        $(h1).fadeIn(1500);

        var h5 = document.createElement("h5");
        h5.className = "date";
        h5.textContent = json[i].date;
        $(h5).hide();
        titdiv.appendChild(h5);
        $(h5).fadeIn(1500);

        var descr = document.createElement("p");
        descr.className = "text";
        descr.textContent = json[i].desc;
        $(descr).hide();
        titdiv.appendChild(descr);
        $(descr).fadeIn(1500);
    });
}