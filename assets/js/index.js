let heart = document.querySelector('.header .heart');
let menuBurger = document.querySelector('.menu_burger');
let menuBg = document.querySelector('.header .menu-bg');
let menuModal = document.querySelector('.header .menu-bg-modal');

heart.addEventListener('click', () => {
    heart.classList.toggle('addLike')
});

menuBurger.addEventListener('click', () => {
  menuBurger.classList.toggle('change');
  menuBg.classList.toggle('showMenu');
  menuModal.classList.toggle('showModal');
});


// Календарь
document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  function handleDatesRender(arg) {
      console.log('viewType:', arg.view.calendar.state.viewType);
  }
  var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'interaction', 'dayGrid', 'timeGrid', 'list'],
      defaultView: 'dayGridMonth',
      datesRender: handleDatesRender,
      firstDay: 1,
      locale: 'ru',
      defaultDate: '2021-11-06',
      header: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },
      events: [
      {
          title: '06:00-20:00',
          start: '2021-11-07',
          end: '2021-11-07'
      },
      {
          title: '06:00-20:00',
          start: '2021-11-08',
          end: '2021-11-08'
      },
      {
          title: '06:00-20:00',
          start: '2021-11-09',
          end: '2021-11-09'
      },
      {
          title: '06:00-20:00',
          start: '2021-11-10',
          end: '2021-11-10'
      },
      {
          title: '06:00-20:00',
          start: '2021-11-11',
          end: '2021-11-11'
      },
      {
          title: '06:00-20:00',
          start: '2021-11-12',
          end: '2021-11-12'
      },
      {
          title: '06:00-20:00',
          start: '2021-11-13',
          end: '2021-11-13'
      },
      {
          title: '06:00-20:00',
          start: '2021-11-14',
          end: '2021-11-14'
      },
      {
          title: '06:00-20:00',
          start: '2021-11-15',
          end: '2021-11-15'
      },
      {
          title: '06:00-20:00',
          start: '2021-11-16',
          end: '2021-11-16'
      },
      {
          title: '06:00-20:00',
          start: '2021-11-17',
          end: '2021-11-17'
      },
      {
          title: '06:00-20:00',
          start: '2021-11-18',
          end: '2021-11-18'
      },
      {
          title: '06:00-20:00',
          start: '2021-11-19',
          end: '2021-11-19'
      },
      {
          title: '06:00-20:00',
          start: '2021-11-20',
          end: '2021-11-20'
      },
      {
          title: '06:00-20:00',
          start: '2021-11-21',
          end: '2021-11-21'
      },
      {
          title: '06:00-20:00',
          start: '2021-11-22',
          end: '2021-11-22'
      },
      {
          title: '06:00-20:00',
          start: '2021-11-23',
          end: '2021-11-23'
      },
      {
          title: '06:00-20:00',
          start: '2021-11-24',
          end: '2021-11-24'
      },
      {
          title: '06:00-20:00',
          start: '2021-11-25',
          end: '2021-11-25'
      },
      {
          title: '06:00-20:00',
          start: '2021-11-26',
          end: '2021-11-26'
      },
      {
          title: '06:00-20:00',
          start: '2021-11-27',
          end: '2021-11-27'
      },
      {
          title: '06:00-20:00',
          start: '2021-11-28',
          end: '2021-11-28'
      },
      {
          title: '06:00-20:00',
          start: '2021-11-29',
          end: '2021-11-29'
      },
      {
          title: '06:00-20:00',
          start: '2021-11-30',
          end: '2021-11-30'
      },
      ]
  });

  calendar.render();
});

// Галерея тура

let galleryImgs = document.querySelectorAll('.gallery__img');
let bigPhoto = document.querySelector('.big-photo');
let bigPhotoImg = document.querySelector('.big-photo__img');
let closePhoto = document.querySelector('.close__photo');

galleryImgs.forEach(img => {
    img.addEventListener('click', () => {
        bigPhoto.classList.add('d-flex');
        bigPhotoImg.src = img.src
    })
});

closePhoto.addEventListener('click', () => {
    bigPhoto.classList.remove('d-flex')
});


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots:true,
    touchDrag: true,
    mouseDrag:true,
    responsive:{
        0:{
            items:1
        },
    }
    })
