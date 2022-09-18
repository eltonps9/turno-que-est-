function onload() {
    var data = new Date();
    var hora = data.getHours();
    var segundos = data.getSeconds();
    var minutos = data.getMinutes();
    var day = data.getDay();

    var horas = document.querySelector(".horas");
    var img = document.querySelector(".img");
    var turno = document.querySelector(".turnos");
    var dia = document.querySelector(".dia");

    horas.innerHTML = `${ hora } : ${minutos} : ${segundos}`;

    if (hora >= 0 && hora < 6) {
        turno.innerHTML = "Madrugada";
        img.src = "./madrugada.jpg";
    } else if (hora >= 6 && hora <= 12) {

        if (hora == 12) {
            img.src = "./almoço.jpg";
            turno.innerHTML = "Meio dia, está na hora do almoço";
        } else {
            turno.innerHTML = "Manhã";
            img.src = "./manhã.jpg";
        }

    } else if (hora > 12 && hora <= 18) {
        turno.innerHTML = "Tarde";
        img.src = "./tarde.jpg";

    } else {
        turno.innerHTML = "Noite";
        img.src = "./noite.jpg";

    }

    switch (day) {
        case 0:
            dia.innerHTML = "Domingo";
            break;
        case 1:
            dia.innerHTML = "Segunda-feira";
            break;
        case 2:
            dia.innerHTML = "Terça-feira";
            break;
        case 3:
            dia.innerHTML = "Quarta-feira";
            break;
        case 4:
            dia.innerHTML = "Quinta-feira";
            break;
        case 5:
            dia.innerHTML = "Sexta-feira";
            break;
        case 6:
            dia.innerHTML = "Sábado";
            break;
    }

}

setInterval(onload, 1000);