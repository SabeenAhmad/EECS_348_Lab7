function applyChanges() {
    var borderR = document.getElementById("borderR").value;
    var borderG = document.getElementById("borderG").value;
    var borderB = document.getElementById("borderB").value;
    var width = document.getElementById("width").value;
    var backgroundR = document.getElementById("backgroundR").value;
    var backgroundG = document.getElementById("backgroundG").value;
    var backgroundB = document.getElementById("backgroundB").value;

    var changes = document.getElementById("paragraph");
    changes.style.borderColor = `rgb(${borderR},${borderG},${borderB})`;
    changes.style.borderWidth = width+"px"
    changes.style.backgroundColor = `rgb(${backgroundR},${backgroundG},${backgroundB})`;
}

function password(){
    var password1 = document.getElementById("firstPassword").value;
    var password2 = document.getElementById("secondPassword").value;
    if (password1.length < 8) {
        alert("Password 1 is less than 8 letters")
    } else if (password2.length < 8) {
        alert("Password 2 is less than 8 letters")
    } else if (password1 != password2) {
        alert("Password 1 and Password 2 don't match")
    } else {
        alert("Passwords match")
    }
}


