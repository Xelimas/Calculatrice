document.getElementById("affichage2").value = 0;

function afficher(val) {
  document.getElementById("affichage").value += val;
}

function effacer() {
  document.getElementById("affichage").value = "";
  document.getElementById("affichage2").value = 0;
}

function calculer() {
  var calculAffiche = document.getElementById("affichage").value;
  var résultatAffichage = eval(calculAffiche);

  document.getElementById("affichage2").value = résultatAffichage;
  overflow(résultatAffichage);
}

function overflow(résultatAffichage) {
  if (résultatAffichage > 999999999) {
    document.getElementById("affichage2").value = "overflow";
  }
}
