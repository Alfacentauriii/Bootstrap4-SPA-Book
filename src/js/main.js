// ===== Smooth Scrolling - Animación al cambiar de secciones =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});

// ===== Scroll to Top FLECHA para volver al inicio ====
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#return-to-top').fadeIn(200);
    } else {
      $('#return-to-top').fadeOut(200);
    }
  });

  $('#return-to-top').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 500);
  });
