/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* variable gobal */
var saisie;
var nbrCaseJeu;
var testfin = 0;
var nbrEssais = 0;
var nbrClic = 0;


var avantDernierBoutonCliquer = undefined;

/* fonction */


//saisie du chiffre et analyse de la pariter ok
function nbrCase() {

    do {
        saisie = prompt('Entrez un nombre de case paire : ');
    } while (saisie % 2 != 0 || saisie < 1)

}


//variable tableau en fonction de la saisie
var tableauDeValeur = [];


//calcule des valeurs du plateau
function valeuraleatoire() {
    nbrCaseJeu = saisie / 2;
    for (i = 0; i < nbrCaseJeu; i++) {
        tableauDeValeur.push(i + 1);
        tableauDeValeur.push(i + 1);
    }
}


//melange des valeurs du tableau
function melange() {
    var j = 0;
    var valI = '';
    var valJ = valI;
    var l = tableauDeValeur.length - 1;
    while (l > -1)
    {
        j = Math.floor(Math.random() * l);
        valI = tableauDeValeur[l];
        valJ = tableauDeValeur[j];
        tableauDeValeur[l] = valJ;
        tableauDeValeur[j] = valI;
        l = l - 1;
    }
}


//gestion du clic et test de la valeur des cases
function clicCase(event) {

    // recupere le bouton cliquer
    var boutonCliquer = event.target;

    //test si le bouton a deja etait cliquer
    if ($(boutonCliquer).attr('value') != '') {
        alert('bouton deja choisie');
        return;
    }

    //retourne la case cliquer
    $(boutonCliquer).attr('value', $(boutonCliquer).attr('nbrCacher'));

    //si premier clic initialise avantDernier et quitte
    if (avantDernierBoutonCliquer == undefined) {
        avantDernierBoutonCliquer = boutonCliquer;
        boutonCliquer = undefined;
        return;
    }
    //deuxieme clic
    // si identiques desactive les cases et reset avantDernier
    if ($(avantDernierBoutonCliquer).attr('nbrCacher') == $(boutonCliquer).attr('nbrCacher')) {
        $(avantDernierBoutonCliquer).css('visibility', 'hidden');
        $(boutonCliquer).css('visibility', 'hidden');
        avantDernierBoutonCliquer = undefined;
        testfin++;
        nbrEssais++;
    }
    //pas identique efface les valeurs et reset avantDernier  
    else if ($(avantDernierBoutonCliquer).attr('nbrCacher') != $(boutonCliquer).attr('nbrCacher')) {
            $(avantDernierBoutonCliquer).attr('value', '');
            $(boutonCliquer).attr('value', '');
            avantDernierBoutonCliquer = undefined;
            nbrEssais++;

    }

    //test si il reste des cases disponibles
    if (nbrCaseJeu == testfin) {
        alert('jeu finit en ' + nbrEssais + ' essais.');
    }

}


//generation du tableau suite a la saisie valide
function plateau() {

    var html = "";
    valeuraleatoire();
    melange();

    html += '<tr>';
    for (i = 0; i < saisie; i++) {
        html += '<td><input id="' + i + '" type="button" nbrCacher="' + tableauDeValeur[i] + '" value=""/></td>';

        if ((i + 1) % 4 == 0) {
            html += '</tr><tr>';
        }
    }
    html += '</tr>';

    $('#tableJeu').append(html);

    $("input").click(clicCase);

}


//lancement du jeu
function debut() {
    nbrCase();
    plateau();

}