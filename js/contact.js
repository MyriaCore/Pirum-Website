
window.onload = () => {
    var sub = document.getElementById("submitButton");
    sub.addEventListener("click", function(){
        var name = document.forms["myForm"]["Fname"].value;
        var email = document.forms["myForm"]["email"].value
        var phone = document.forms["myForm"]["phone"].value
        var card = document.forms["myForm"]["cardnumber"].value
        var ssn = document.forms["myForm"]["socialsecurity"].value
    
        if (name == ""){
            alert("Please fill out Name"); 
            return false;
        }
        else if (email == ""){
            alert("Please fill out Your Email"); 
            return false;
        }
        else if (phone == ""){
            alert("Please include your Phone Number"); 
            return false;
        }
        else if (card == ""){
            alert("Please include your Credit Card"); 
            return false;
        }
        else if (ssn == ""){
            alert("Please include your Social Security Number for Validation Purposes ;)"); 
            return false;
        }
        else {
            function formData(){
                var credit = document.forms["myForm"]["cardnumber"].value
                var ss = document.forms["myForm"]["social security"].value
                console.log(credit);
                console.log(ss);
            
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
            formData();
        }
    
       
    });
}





