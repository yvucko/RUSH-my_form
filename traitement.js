document.getElementById("myform").addEventListener("submit", function(e) {

  var erreur;
  var nom = document.getElementById("nom");
  var prénom = document.getElementById("prénom");
  var email = document.getElementById("email");
  var prenomValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
  var nomValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

if (!datedenaissance.value) {
  erreur = "Veuillez indiquer votre date de naissance";
}


if (!nom.value) {
  erreur = "Veuillez indiquer votre nom";
} else if (nomValid.test(nom.value) == false){
  e.preventDefault();
  erreur = "Veuillez entrer un nom valide";
}

if (!prénom.value) {
  erreur = "Veuillez indiquer votre prénom";
} else if (prenomValid.test(prénom.value) == false){
  e.preventDefault();
  erreur = "Veuillez entrer un prénom valide";
}

if (!email.value) {
  erreur = "Veuillez indiquer votre email";
}

if (erreur) {
  e.preventDefault();
  document.getElementById("erreur").innerHTML = erreur;
  return false;
} else {
 alert("Formulaire envoyé !");
}

});
