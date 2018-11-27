console.log("hello World");




window.onload = () => {
    var rotate = document.getElementById("unrotate");
    
    rotate.addEventListener("mouseover", function(){
    rotate.style.opacity = 1;
    });

    var decline = document.getElementById("no");

    decline.addEventListener("mouseover", function(){
        alert("Website Machine Broke, please dial the H-E-R-C Hotline");
    });

    var COOKIE = document.getElementById("yes");

    COOKIE.addEventListener("click", function(){
        document.getElementById('backimg').src="../res/assets/cookie.jpg";
        document.getElementById('backimg').className = "cookiebg"

        document.getElementById("title").innerHTML = "All your cookie belong to Herc"
        

    });


}



$(document).ready(function(){   
    setTimeout(function () {
        $("#cookieConsent").fadeIn(200);
     }, 4000);
    $("#closeCookieConsent, .cookieConsentOK").click(function() {
        $("#cookieConsent").fadeOut(200);
    }); 
}); 