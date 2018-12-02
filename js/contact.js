
window.onload = () => {
    var sub = document.getElementById("submitButton");
    sub.addEventListener("click", function(event){
        event.preventDefault();
        var name = document.forms["myForm"]["Fname"].value;
        var email = document.forms["myForm"]["email"].value
        var phone = document.forms["myForm"]["phone"].value
        var card = document.forms["myForm"]["cardnumber"].value
        var ssn = document.forms["myForm"]["socialsecurity"].value
    
        if (name == ""){
            alert("Please fill out Name"); 
        }
        else if (email == ""){
            alert("Please fill out Your Email"); 
        }
        else if (phone == ""){
            alert("Please include your Phone Number"); 
        }
        else if (card == ""){
            alert("Please include your Credit Card"); 
        }
        else if (ssn == ""){
            alert("Please include your Social Security Number for Validation Purposes ;)"); 
        }
        else {
            formData();
            console.log("not broke");
        }
    
       
    });
}



function formData(){
    var credit = document.forms["myForm"]["cardnumber"].value
    var ss = document.forms["myForm"]["socialsecurity"].value
    console.log(credit);
    console.log(ss);

    var strcred = ("Your Credit Card Number is " + credit);
    var ssid = ("Social Security Number is " + ss);
    var gen = document.createTextNode("Thanks for Your Generosity!!! ");
    var para = document.createElement("p");
    para.appendChild(gen);
    
    var title = document.getElementById("Conttitle");
    var form = document.getElementById("form");
    var social = document.getElementById("socS");
    
    title.innerHTML = strcred;
    form.innerHTML = "";
    social.innerHTML = ssid;
    social.appendChild(para);
    
    


}

