//Burger bar toggle

document.addEventListener('DOMContentLoaded', nav)
function nav(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.main-nav');
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('show')
    })
};


//Parallax effect - background

document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();

    let backgroundzoom = new TimelineMax();
    backgroundzoom
    .to('#heroskyer', {
      y: 300
  })
  
    
    let scene = new ScrollMagic.Scene({
        triggerElement: '.background',
        duration: '100%',
        triggerHook: 0
    })
    .setTween(backgroundzoom)
    .addTo(controller)
});


//Log in fucntion

  function TheLogin() {
    var password = 'test';
    var brugernavn = 'test';	
    if (this.document.login.pass.value == password && this.document.login.name.value == brugernavn)
    {
      top.location.href="login.html";
    }
    else
    {
      if (this.document.login.pass.value != password && this.document.login.name.value != brugernavn)
        window.alert("Kodeord er forkert og Navn er ukendt");
      else if (this.document.login.pass.value != password)
        window.alert("Navn er kendt men Kodeord er forkert");
      else if (this.document.login.name.value != brugernavn)
        window.alert("Navn er ukendt men kodeordet er rigtigt");	  		
      }
    };



//Calendar

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth'
  });
  calendar.render();
});


document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    initialDate: '2021-04-07',
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek'
    },
    events: [
      {
        title: 'Fællesspisning',
        start: '2021-04-01T18:00:00',
      },
      {
        title: 'Bordtennistunering',
        start: '2021-04-07',

      },
      {
        title: 'Cykeltur',
        start: '2021-04-09T16:00:00'
      },
      {
        title: 'Indvielse af ny grill',
        start: '2021-04-16T16:00:00'
      },
      {
        title: 'Filmaften',
        start: '2021-04-11',
        end: '2021-04-11'
      },
      {
        title: 'Harry Potter',
        start: '2021-04-11T19:00:00'
      },
      {
        title: 'Hobitten',
        start: '2021-04-11T22:00:00'
      },
      {
        title: 'Tacotirsdag',
        start: '2021-04-13',
        end: '2021-04-13'
      },
      {
        title: 'Fællespisning',
        start: '2021-04-13T18:00:00',

      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2021-04-28'
      }
    ]
  });

  calendar.render();
});



//Slideshow

var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}


//Tubular

    setTimeout(function () {
        location.href = "login.html";
    }, 10000);

    $('document').ready(function() {
	var options = { videoId: 'SS_UNYY7pyI', start: 0 };
	$('#wrapper').tubular(options);
});