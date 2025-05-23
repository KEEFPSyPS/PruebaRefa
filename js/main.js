(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });


    // Related carousel
    $('.related-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });


    // Product Quantity
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });
    
})(jQuery);



// prueba me gusta
// function like() 
// {
//     var button = document.getElementById('likeButton');
//     button.style.color = 'red'; // Cambia el color del texto a rojo cuando se hace clic en el botón
//     button.innerHTML = " " + count; // Cambia el texto del botón a "Te gusta"
// }


// menú pegajoso
$(document).ready(function()
{
	var altura = $('#pegajoso').offset().top;
	
	$(window).on('scroll', function()
	{
		if ( $(window).scrollTop() > altura )
		{
			$('#pegajoso').addClass('menu-fixed');
		} 
		
		
		
		
		else
		{
			$('#pegajoso').removeClass('menu-fixed');
		}
	});

});
// fin menú pegajoso


document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelectorAll('video');

    videos.forEach(video => {
        video.pause(); // Pausa el video inicialmente

        video.addEventListener('mouseenter', () => {
            video.muted = true; // Asegurar que está silenciado
            video.play().catch(error => console.error("Error al reproducir el video:", error));
        }); 

        video.addEventListener('mouseleave', () => {
            console.log('Mouse salió del video');
            video.pause(); // Pausa el video al retirar el mouse
        });
    });
});