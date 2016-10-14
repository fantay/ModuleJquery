/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* variable */
var saisie;

/* fonction */

//analyse de la saisie ok
function pair(chiffre) {
    chiffre = parseInt(chiffre);
    return ((chiffre & 1) == '0') ? true : false;
}

//saisie du chiffre et analyse de la pariter ok
function nbrCase() {

    do {
        saisie = prompt('Entrez un nombre de case paire : ');
    } while (pair(saisie) != true)

}

//generation du tableau suite a la saisie valide








//lancement du jeu
function debut(){
    nbrCase();
}