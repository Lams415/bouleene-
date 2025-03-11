
    // Fonction pour vérifier si l'âge est valide
    function verifyAge(age) {
        return age > 13;
    }

    // Fonction pour générer un message personnalisé
    /*function genereteMessage(nom, age) {
        if (!verifyAge(age)) {
            return "Veuillez entrer un âge valide.";
        }
        return `Bonjour ${nom}, vous avez ${age} ans. Bienvenue sur notre site !`;
    }
*/
/*
function genereteMessage(nom, age) {
    if (!verifyAge(age)) {
        return "Veuillez entrer un âge valide.";
    }

    // Redirige l'utilisateur vers le site si l'âge est valide
    window.location.href = "https://voyages.arbatg.fr/";
    return `Bonjour ${nom}, vous avez ${age} ans. Vous allez être redirigé vers notre site !`;
}
*/

function genereteMessage(nom, age) {

    if (!verifyAge(age)) {
        return "Veuillez entrer un âge valide.";
    }
    // Affiche un message avant la redirection
    alert(`Bonjour ${nom}, vous avez ${age} ans. Vous allez être redirigé vers notre site !`);

    // Redirige l'utilisateur après un court délai
    setTimeout(() => {
        window.location.href = "https://voyages.arbatg.fr/";
    }, 2000); // Délai de 2 secondes

    return `Redirection en cours...`;
}



    // Fonction appelée au clic du bouton
    function showMessage() {
        let prenom = document.getElementById("prenom").value.trim();
        let age = parseInt(document.getElementById("age").value);

        if (prenom === "") {
            document.getElementById("message").innerText = "Veuillez entrer votre prénom.";
            return;
        }

        let message = genereteMessage(prenom, age);
        document.getElementById("message").innerText = message;
    }
