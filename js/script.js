// $(function() {
//     $('#formBTN').click(function() {
//
//             if ($('#nom').val() == '') {
//                 alert('Empty!!!');
//             }
//         });
//     });

function empty() {

    // y = document.getElementById("prenom").value;
    // if (y == "") {
    //     document.getElementById("pasprenom").innerHTML = "Entrer votre prenom !";
    //     document.getElementById("prenom").style.borderBottomColor = "#880000";
    // } else {
    //     document.getElementById('pasprenom').innerHTML = "";
    //     document.getElementById('prenom').style.borderBottomColor = "rgb(82, 144, 249)"
    // }

    a = document.getElementById("telephone").value;
    if (a == "") {
        document.getElementById("pasnum").innerHTML = "Entrer votre n° de telephone !";
        document.getElementById("telephone").style.borderBottomColor = "#880000";
    } else {
        document.getElementById('pasnum').innerHTML = "";
        document.getElementById('telephone').style.borderBottomColor = "rgb(82, 144, 249)"
    }


    b = document.getElementById("mail").value;
    if (b == "") {
        document.getElementById("pasmail").innerHTML = "Entrer votre adresse mail !";
        document.getElementById("mail").style.borderBottomColor = "#880000";
    } else {
        document.getElementById('pasmail').innerHTML = "";
        document.getElementById('mail').style.borderBottomColor = "rgb(82, 144, 249)"
    }

    c = document.getElementById("message").value;
    if (c == "") {
        document.getElementById("pasmsg").innerHTML = "Entrer votre message !";
        document.getElementById("message").style.borderBottomColor = "#880000";
    } else {
        document.getElementById('pasmsg').innerHTML = "";
        document.getElementById("message").style.borderBottomColor = "rgb(82, 144, 249)"
    }
}

function checkEmail() {
    var status = false;
    var emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (document.getElementById("mail").value.search(emailRegEx) == -1) {
        document.getElementById("pasmail").innerHTML = "Entrer une adresse mail valide.";
        document.getElementById("mail").style.borderBottomColor = "#880000";
    } else {
        status = true;
        document.getElementById("pasmail").innerHTML = "";
        document.getElementById("mail").style.borderBottomColor = "rgb(82, 144, 249)";

    }
    return status;
}

function checkName() {

    var str = $('#nom').val();
    if (/^[a-zA-Z0-9- ]*$/.test(str) == false ) {
        document.getElementById("pasnom").innerHTML = "Caractère incorecte dans votre nom.";
        document.getElementById("nom").style.borderBottomColor = "#880000";
    }
    else if (str == "") {
      document.getElementById("pasnom").innerHTML = "Entrez votre nom !.";
      document.getElementById("nom").style.borderBottomColor = "#880000";
    }
    else {
      document.getElementById('pasnom').innerHTML = "";
      document.getElementById('nom').style.borderBottomColor = "rgb(82, 144, 249)"
    }

    var fstr = $('#prenom').val();
    if (/^[a-zA-Z0-9- ]*$/.test(fstr) == false ) {
        document.getElementById("pasprenom").innerHTML = "Caractère incorecte dans votre prénom.";
        document.getElementById("prenom").style.borderBottomColor = "#880000";
    }
    else if (fstr == "") {
      document.getElementById("pasprenom").innerHTML = "Entrez votre nom !.";
      document.getElementById("prenom").style.borderBottomColor = "#880000";
    }
    else {
      document.getElementById('pasprenom').innerHTML = "";
      document.getElementById('prenom').style.borderBottomColor = "rgb(82, 144, 249)"
    }
}
