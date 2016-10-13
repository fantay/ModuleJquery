/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function clic(Para){
    
    if(Para=="A"){
        $('.contenu').load('blocA.html');
        $('h1').css('color', 'blue');
    }else if(Para=="B"){
        $('.contenu').load('blocB.html');
        $('h1').css('color', 'green');
    }else if(Para=="C"){
        $('.contenu').load('blocC.html');
        $('h1').css('color', 'red');
    }
    
}