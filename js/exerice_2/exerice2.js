$liste = document.getElementById("liste");
$texte = document.getElementById("texte");
$ajouter = document.getElementById("ajouter")
$effacer = document.getElementById("effacer")

array = ["Tony", "Paco", "Pedro"];

function afficherListe() {
    elements = "";
    for (i = 0; i < array.length; i++) {
        elements += "<li>" + array[i] + "</li>";
        }
        $liste.innerHTML = elements;
}


function ajouter() {
    array.push($texte.value);
    afficherListe();
}

   
$ajouter.onclick = ajouter;
afficherListe();

function effacerListe() {
    elements = "";
    for (i = 0; i < array.length; i++) {
        elements += "<li>" + array[i] + "</li>";
        }
        $liste.innerHTML = elements;
}


function effacer() {
    array.pop($texte.value);
    effacerListe();
}

   
$effacer.onclick = effacer;
effacerListe;