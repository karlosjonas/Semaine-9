contacts = [{
    
    prenom: "Pedro",
    nom: "López",
    numero: "888-888-888"
}, {
    prenom: "Jose",
    nom: "Gracia",
    numero: "777-777-777"

}];

function texteContact(contact) {
    return contact.prenom + " " + contact.nom + "(" + contact.numero + ")";
}

alert(texteContact(contacts[0]));
    
