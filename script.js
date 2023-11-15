$(document).ready(function() {
    // Smooth scroll
    $('nav a').on('click', function(e) {
        e.preventDefault();
        const targetSection = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: targetSection.offset().top
        }, 1000);
    });
});
