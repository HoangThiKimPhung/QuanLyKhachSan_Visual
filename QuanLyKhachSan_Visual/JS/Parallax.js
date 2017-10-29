$('#video1').backgroundVideo({
    $videoWrap: $('#home'),
      $outerWrap: $(window),
      $window: $(window),
      minimumVideoWidth: 400,
      parallax: true,
      parallaxOptions: {
        effect: 1.5
      },
      pauseVideoOnViewLoss: false
    });
    
function appendText() {
    text = '<br><br><br><br><br><br><div class="w3-row-padding w3-center" style="padding: 0 75px"><div class="w3-col m4 showimg"><img src="Images/pic7.jpg" style="width:100%; margin-bottom: -100px" class="w3-hover-opacity" alt="Gym"><div class="overlay"><div class="text"><h2>Gym</h2><p>Th�n h�nh quy?n ru san ch?c hay ch? don gi?n l� ch?y b? t?p th? d?c</p></div></div></div>'
        + '<div class="w3-col m4 showimg"><img src="Images/pic8.jpg" style="width:100%; margin-bottom: -100px" class="w3-hover-opacity" alt="Bar"><div class="overlay"><div class="text"><h2>Bar</h2><p>L?c lu theo nh?ng di?u nh?c s�i d?ng c�ng thu?ng th?c ly Whisky tuy?t v?i</p></div></div></div>'
        + '<div class="w3-col m4 showimg"><img src="Images/pic9.jpg" style="width:100%; margin-bottom: -100px" class="w3-hover-opacity" alt="Sea"><div class="overlay"><div class="text"><h2>L?n bi?n</h2><p>Nh?ng r?n san h� tuy?t d?p c�ng nhi?u lo�i c� d? m�u s?c s? khi?n b?n m� say</p></div></div></div></div><br><br><br><br><br>';

    $("#portfolio").append(text);
    $("#loadbtn").hide();
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// Change style of navbar on scroll
window.onscroll = function () { myFunction() };
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card-2" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card-2 w3-animate-top w3-white", "");
    }
}