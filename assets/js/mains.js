$(document).ready(function(){
    $('.your-class').slick({
        arrows: true,
        //autoplay: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});

$(document).ready(function(){
    $('.other-class').slick({
        arrows: true,
        //autoplay: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});   

$(document).ready(function(){
    $('.home-class').slick({
        arrows: true,
        //autoplay: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});   


/* Theme Page Routes */
$('#themepage').click(function(){      
    window.location='pages/themepage.html';
});

$('#samethemepage').click(function(){      
    window.location='themepage.html';
});

/* Home Page Routes */
$('#homepage').click(function(){      
    window.location='index.html';
});

$('#backtohomepage').click(function(){      
    window.location='../index.html';
});

/* Apps Page Routes*/
$('#appspage').click(function(){      
    window.location='pages/apps.html';
});

$('#sameappspage').click(function(){      
    window.location='apps.html';
});

/* Wallpaper Page */
$('#wallpaperpage').click(function(){      
    window.location='pages/wallpapers.html';
});

$('#samewallpaperpage').click(function(){      
    window.location='wallpapers.html';
});

/* Art Gallery Page */
$('#artpage').click(function(){      
    window.location='pages/art.html';
});

$('#sameartpage').click(function(){      
    window.location='art.html';
});


/* Switcher */
$("#hellow").click(function(){  
    $("#togglediv").toggleClass("displayclassshown");  
});  


$(".fa-chevron-down").click(function(){  
    $("#chevron").toggleClass("rotatechevron");  
}); 
