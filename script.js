var myInput = document.getElementsByID("psw")
var number = document.getElementById("number")

//When user clicks on the psw field, show the message box
myInput.onfocus = function () {
    document.getElementById("message").style.display = "block";
}

//When user clicls outside of the psw field, hide the message box
myInput.onblur = function () {
    document.getElementById("message").style.display = "none";
}


//start to type something
myInput.onkeyup = function () {
    var numbers = /[0-9]/g;
    if (myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    if (myInput.value.length = 5) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}

function op() {
    var fieldpsw = document.getElementById("psw").value;
    if (fieldpsw === "22384") {
        document.location.href = "https://drive.google.com/drive/folders/1y-YYDZRQs_Ieys5HXOtFQHTacOhDFBcS?usp=sharing";
    } else if (fieldpsw === "25577") {
        document.location.href = "https://drive.google.com/file/d/1sG8UWpW8wgqmkVC1TyoIZNk3qHwkO-Bl/view?usp=sharing";
    } else if (fieldpsw === "11256") {
        document.location.href = "";
    } else {
        alert("invaild information")
        return false;
    } 
    return true;
}