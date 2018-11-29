console.log("hello World");

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

function formValidation(){
    var name = document.forms["myForm"]["Fname"].value;
    var email = document.forms["myForm"]["email"].value
    var phone = document.forms["myForm"]["phone"].value
    var card = document.forms["myForm"]["cardnumber"].value
    var ssn = document.forms["myForm"]["socialsecurity"].value

    if (name == ""){
        alert("Please fill out Name"); 
        return false;
    }
    if (email == ""){
        alert("Please fill out Your Email"); 
        return false;
    }
    if (phone == ""){
        alert("Please include your Phone Number"); 
        return false;
    }
    if (card == ""){
        alert("Please include your Credit Card"); 
        return false;
    }
    if (ssn == ""){
        alert("Please include your Social Security Number for Validation Purposes ;)"); 
        return false;
    }

    //if (name == "" && email == "" ){
    //    alert("Please fill out Name and email"); 
    //    return false;
    //}
    

}

function formData(){
    var credit = document.forms["myForm"]["cardnumber"].value
    var ss = document.forms["myForm"]["social security"].value
    console.log(credit);

    var div = document.createElement("div");

    var strcred = document.createTextNode("Your Credit Card Number is" + credit);
    var ssid = document.createTextNode("Social Security Number is" + ss);
    var gen = document.createTextNode("Thanks for Your Generosity!!!");

    div.appendChild(strcred);
    div.appendChild(ssid);
    div.appendChild(gen);

    var formdiv = document.getElementsById("formdiv");
    div.insertBefore(formdiv)

    document.getElementsById("formdiv").style.visibility = "hidden";



}


