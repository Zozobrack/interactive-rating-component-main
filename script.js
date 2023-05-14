// Attendez que la page soit chargée avant d'exécuter le code JavaScript
document.addEventListener("DOMContentLoaded", function() {
  // Sélectionnez tous les boutons
  var buttons = document.querySelectorAll(".button-containeur div");

  // Ajoutez un gestionnaire d'événement click à chaque bouton
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      // Réinitialisez la couleur d'arrière-plan et la couleur de texte de tous les boutons
      buttons.forEach(function(btn) {
        btn.style.backgroundColor = "";
        btn.style.color = "";
      });

      // Changez la couleur d'arrière-plan et la couleur de texte du bouton cliqué
      this.style.backgroundColor = "grey";
      this.style.color = "white";
    });
  });

  // Sélectionnez le bouton Soumettre
  var submitButton = document.querySelector(".submitButton-containeur");

  // Ajoutez un gestionnaire d'événement click au bouton Soumettre
  submitButton.addEventListener("click", function() {
    // Vérifiez si un bouton a été cliqué
    var selectedButton = document.querySelector(".button-containeur div[style='background-color: grey; color: white;']");

    if (selectedButton) {
      // Affichez la div2 et masquez la div1
      document.querySelector(".div1").style.display = "none";
      document.querySelector(".div2").style.display = "block";
    }
  });
});










