// Utiliziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
// Utilizziamo una classe active per aiutarci a capire quale è l'immagine attuale da visualizzare nello slider
// Bonus:
//  Per scorrere le immagini permettere anche l'uso delle frecce sinistra e destra della tastiera


$( document ).ready(function() { //linea per caricare il JS dopo che il dom è caricato


var forward = $(".next i");
var back = $(".prev i");

//impostazione eventi

//click sul prev

$(".prev").click( function() {
    nextPrevImg("prev")
});

// click sul next

$(".next").click( function() {
    nextPrevImg("next")

});


}) 

// creo una funzione per navigare avanti o indietro nelle slide

function nextPrevImg(direction) {
    var activeImg = $(".images img.active"); // immagine che viene visualizzata
    var activeCircle = $(".nav i.active"); // pallino che viene visualizzato

    //tolgo la classe active per evitare di avere più elementi attivi

    activeImg.removeClass("active");
    activeCircle.removeClass("active");

    if (direction === "next") {

        if(activeImg.hasClass("last")) { //se becca l'img con classe last torna alla prima
            $(".images img.first").addClass("active");
            $(".nav i.first").addClass("active");

        }
        else {

        activeImg.next("img").addClass("active"); //trasferisco la classe 'active' all'img success 
        activeCircle.next("i").addClass("active"); //trasferisco la classe 'active' all'i success

        }
        
    }

    if (direction === "prev") {

        if(activeImg.hasClass("first")) { //se becca l'img con classe first torna all'ultima
            $(".images img.last").addClass("active");
            $(".nav i.last").addClass("active");

        }
        else {

        activeImg.prev("img").addClass("active"); //trasferisco la classe 'active' all'img success 
        activeCircle.prev("i").addClass("active"); //trasferisco la classe 'active' all'i success

        }

        
    }
}