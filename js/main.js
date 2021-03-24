/*  LISTA COGNOMI
    1. chiedi all’utente il cognome
    2. inseriscilo in un array con altri cognomi: ‘bianchi’, ‘neri’, ‘rossi’, ‘verdi’, ‘gialli’
    3. stampa la lista ordinata alfabeticamente
    4. scrivi anche la posizione "umana", 1 oppure 2 oppure 3 oppure ecc... (non 0 oppure 1 oppure 2 oppure ecc.. tipici degli array), del nuovo utente inserito sopra all'interno dell'array, dopo l'ordinamento alfabetico
*/

// Info
var cognome = prompt('Inserisci il tuo cognome');
var listaCognomi = ['bianchi','schiavone','ricciardi','tolino','palmieri','di lauri','vuotto'];
var items = ''

// Inserimento cognome utente e ordine lista
listaCognomi.push(cognome);
listaCognomi = listaCognomi.sort()

// Ciclo for and inner HTML
for (var i = 0; i < listaCognomi.length; i++) {
    
    items += '<li>' + listaCognomi[i] + '</li>';
    document.getElementById('list').innerHTML = items;
    
    if (listaCognomi[i] === cognome) {
        document.getElementById('insert').innerHTML = (i + 1);
    }
}

