$(document).ready(function () {
  $('a[href^="#"]').on('click', function (event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
          event.preventDefault();
          $('html, body').stop().animate({
              scrollTop: target.offset().top
          }, 1000);
      }
  });

  $('#contactForm').on('submit', function (event) {
      event.preventDefault();
      alert('Thank you for your message! We will get back to you shortly.');
      this.reset();
  });
});
