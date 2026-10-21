const nom = 'Awa'; // Type : string
const budget = 30000; // Type : number ; unité : FCFA
const transportTexte = '12500'; // Type : string ; unité : FCFA
const alimentationTexte = '18300'; // Type : string ; unité : FCFA
const loisirsTexte = '7500'; // Type : string ; unité : FCFA

// TODO : convertissez les trois dépenses en nombres.
const transport = Number (transportTexte); // Type : number ; unité : FCFA
const alimentation = Number (alimentationTexte);// Type : number ; unité : FCFA
const loisirs = Number (loisirsTexte); // Type : number ; unité : FCFA
// TODO : calculez le total, le budget restant et budgetRespected.
const total = transport + alimentation + loisirs;// Type : number ; unité : FCFA
const budgetRestant = budget - total;// Type : number ; unité : FCFA
const budgetRespected = budgetRestant >= 0;// Type : boolean
// TODO : affichez le rapport uniquement avec des littéraux de gabarit.
console.log(`Rapport de dépenses à compléter pour ${nom}.`);
console.log(`budget : ${budget} FCFA`);
console.log(`transport : ${transport} FCFA`);
console.log(`alimentation : ${alimentation} FCFA`);
console.log(`loisirs : ${loisirs} FCFA`);
console.log(`total : ${total} FCFA`);
console.log(`budget restant : ${budgetRestant} FCFA`);
console.log(`budget respecté : ${budgetRespected ? 'true' : 'false'}`);