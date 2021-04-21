// Visualizziamo soltanto l'immagine con classe active

// Al cliccare della freccia next dobbiamo attivare una funzione che mandi avanti l'active all'immagine successiva, e anche il pallino
// Al contrario su prev

//Dobbiamo puntare gli html contenente le frecce ed assegnargli la funzione da compiere
//Devo localizzare la mia immagine attiva, perchè devo disattivarla e aggiungere la classe active a quella successiva
// Creo una variabile per la mia immagina attiva dandogli come valore la localizzazione
//La seleziono e gli rimuovo la classe .active con removeClass
//Di seguito devo aggiungere la classe .active all'immagine successiva con .next().addClass che gli farà assumere la classe .active
// Creo la condizione per cui se L'elemento ha la classe last devo attivare l'elemento first altrimenti se non è l'elemento con classe last aggiungo active semplicemente al successivo
// Creo la variabile per identificare il pallino e faccio lo stesso ragionamento che ho fatto per l'immagine




$(function(){

  $('.next').click(nextImage);
  $('.prev').click(prevImage);
   

  //Funzione per andare avanti con le immagini
  function nextImage(){
    
    var activeImg = $('.images img.active');
    var activeCircle = $('nav i.active');

    activeImg.removeClass('active');
    activeCircle.removeClass('active');

    if(activeImg.hasClass('last')){
      $('.images img.first').addClass('active');
      $('nav i.first').addClass('active');
    }else{
      activeImg.next('img').addClass('active');
      activeCircle.next('i').addClass('active');
    }

  }

  //Funzione per tornare indietro con le immagini
  function prevImage(){

    var activeImg = $('.images img.active');
    var activeCircle = $('nav i.active');

    activeImg.removeClass('active');
    activeCircle.removeClass('active');


    //qui faccio il procedimento inverso, quindi se l'elemento ha classe first attivo l'elemento con classe last
    if(activeImg.hasClass('first')){
      $('.images img.last').addClass('active');
      $('nav i.last').addClass('active');
    }else{ //se non è ancora elemento last aggiungo active all'elemento precedente
      activeImg.prev('img').addClass('active');
      activeCircle.prev('i').addClass('active');
    }
  }



});



  

    // ALTRA SOLUZIONE
    //SE L'ELEMENTO SUCCESSIVO HA LENGTH 0 VUOL DIRE CHE NON ESISTE E QUINDI AGGIUNGO ACTIVE AL PRIMO ELEMENTO e VICEVERSA

   /*  if(activeImg.next('img').length === 0){
      $('.images img').first().addClass('active');
      $('nav i').first().addClass('active');
    }else{
      activeImg.next('img').addClass('active');
      activeCircle.next('i').addClass('active');
    }

    if(activeImg.prev('img').length === 0){
      $('.images img').last().addClass('active');
      $('nav i').last().addClass('active');
    }else{
      activeImg.prev('img').addClass('active');
      activeCircle.prev('i').addClass('active');
    } */