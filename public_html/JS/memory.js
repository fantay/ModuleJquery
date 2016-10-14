/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* variable gobal */
var saisie;
var clic1;
var clic2;

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
    max = saisie / 2;
    for (i = 0; i < max; i++) {
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

//generation du tableau suite a la saisie valide
function plateau() {

    var html = "";
    valeuraleatoire();
    melange();
    html += '<tr>';
    for (i = 0; i < saisie; i++) {
        html += '<td><input id="' + i + '" type="button" attr="' + tableauDeValeur[i] + '" value=""/></td>';

        if ((i + 1) % 4 == 0) {
            html += '</tr><tr>';
        }
    }
    html += '</tr>';

    $('#tableJeu').append(html);
    $("input").click(clicCase);
    testChiffre();
}

//gestion du clic et test de la valeur des cases
function clicCase(event) {

    if (clic1 == undefined) {
        var target = event.target;
        var tempo = $(target).attr('attr');
        clic1 = $(target).attr('value', tempo);
    } else if (clic2 == undefined) {
        var target = event.target;
        var tempo = $(target).attr('attr');
        clic2 = $(target).attr('value', tempo);
    }
}

function testChiffre() {
    var test1 = $(clic1.target).attr('attr');
    var test2 = $(clic2.target).attr('attr');
    if (test1 != test2) {
        $(clic1.target).attr('value', ' ');
        $(clic2.target).attr('value', ' ');

    }
}




//lancement du jeu
function debut() {
    nbrCase();
    plateau();

}