$liste = document.getElementById("liste");
$prenom = document.getElementById("prenom");
$nom = document.getElementById("nom");
$portable = document.getElementById("portable");
$ajouter = document.getElementById("ajouter");

contacts = [{
    prenom: "Marco",
    nom: "Polo",
    portable: "123-456-789"
}, {
    prenom: "Jule",
    nom: "Cesar",
    portable: "987-654-321"
}];

function texteContact(contact) {
    return contact.prenom + " " + contact.nom + "(" + contact.portable + ")";
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