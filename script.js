document.addEventListener('DOMContentLoaded', () => {
    console.log("Bienvenue chez Fludo !");
});

window.REQUIRED_CODE_ERROR_MESSAGE = 'Veuillez choisir un code pays';
window.LOCALE = 'fr';
window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "Les informations que vous avez fournies ne sont pas valides. Veuillez vérifier le format du champ et réessayer.";
window.REQUIRED_ERROR_MESSAGE = "Vous devez renseigner ce champ. ";
window.GENERIC_INVALID_MESSAGE = "Les informations que vous avez fournies ne sont pas valides. Veuillez vérifier le format du champ et réessayer.";
window.translation = {
    common: {
      selectedList: '{quantity} liste sélectionnée',
      selectedLists: '{quantity} listes sélectionnées'
    }
};

var AUTOHIDE = Boolean(0);

