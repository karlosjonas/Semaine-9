$liste = document.getElementById("liste");
$effacer = document.getElementById("effacer");
$restaurer = document.getElementById("restaurer");

function select(e) {
    e.target.classList.toggle("selected");
}

function effacer() {
    for (i = 0; i < $liste.children.length; i++) {
        if ($liste.children[i].classList.contains("selected")) {
            $liste.children[i].classList.add("poubelle");
        }
    }
}

function restaurer() {
    for (i = 0; i < $liste.children.length; i++) {
        $liste.children[i].classList.remove("poubelle");
    }
}

$liste.onclick = select;
$effacer.onclick = effacer;
$restaurer.onclick = restaurer;


$liste = document.getElementById("liste");
$effacer = document.getElementById("effacer");
$restaurer = document.getElementById("restaurer");

function select(e) {
    e.target.classList.toggle("selected");
}

function effacer() {
    for (i = 0; i< $liste.children.length; i++) {
        if ($liste.children[i].classList.contains("selected")) {
            $liste.children[i].classList.add("poubelle")  
        }
    }
}

function restaurer() {
    for (i = 0; i< $liste.children.length; i++) {
        $liste.children[i].classList.remove("poubelle");
    }
        
}

$liste.onclick = select;
$effacer.onclick = effacer;
$restaurer.onclick = restaurer;