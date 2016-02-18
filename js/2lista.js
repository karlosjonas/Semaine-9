$liste = document.getElementById("liste");
$prenom = document.getElementById("prenom");
$nom = document.getElementById("nom");
$portable = document.getElementById("portable");
$ajouter = document.getElementById("ajouter");

contacts = [{
    prenom: "Marco",
    nom: "Polo",
    portable: "0123456789"
}, {
    prenom: "Jule",
    nom: "Cesar",
    portable: "0123456789"
}];

function texteContact(contact) {
    return contact.prenom + " " + contact.nom + " (" + contact.portable + ")";
}

function afficherListe() {
    elements = "";
    for (i = 0; i < contacts.length; i++) {
        elements += "<li>" + texteContact(contacts[i]) + "</li>";
    }
    $liste.innerHTML = elements;
}

function ajouter() {
    contacts.push({
        prenom: $prenom.value,
        nom: $nom.value,
        portable: $portable.value
    });
    afficherListe();
}

$ajouter.onclick = ajouter;
afficherListe();