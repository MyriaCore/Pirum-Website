
window.onload = () => {

    var decline = document.getElementById("no");

    decline.addEventListener("mouseover", function(){
        alert("Website Machine Broke, please dial the 1-800-HERC Hotline");
    });
    
    var COOKIE = document.getElementById("yes");
    COOKIE.addEventListener("click", function(){
        document.getElementById('backimg').src="../res/assets/cookie.jpg";
        document.getElementById('backimg').className = "cookiebg";
        document.getElementById("title").innerHTML = "All your cookie belong to Herc";
        popup.style.display = "none";
        document.getElementById("center").id = "left";
        var element = document.getElementbyId("title");
        element.classList.remove("animate");
    });

    var popup = document.getElementById("footer")
    setTimeout(function(){
        popup.style.display = "block";
    },2400);

}

