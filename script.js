// inizializzo una variabile con il coefficiente
// da applicare ai km per determinare il prezzo base
let priceCoeff = 0.21;
console.log('Coefficiente prezzo base:', priceCoeff);

// inizializzo le variabili per calcolare lo sconto
let underCoeff = 0.80;
let overCoeff = 0.60;
console.log('Coefficiente prezzo under:', underCoeff, 'Coefficiente prezzo over:', overCoeff);

// specifico i cutoff per le età
let under = 18;
let over = 65;
console.log('Cutoff under:', under, 'Cutoff over:', over);

// chiedo all'utente i km da percorrere
// e inizializzo una variabile con l'input dell'utente
let userDistance = parseInt(prompt('Inserire i km da percorrere'));
console.log('Distanza utente:', userDistance);

// determino il prezzo del biglietto in base ai km
let price = priceCoeff * userDistance;
console.log('Prezzo base:', price);

// chiedo all'utente l'età per determinare lo sconto
// e la salvo in una variabile
let userAge = prompt('Inserire età');
console.log('Età utente:', userAge);