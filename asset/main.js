/* 
Descizione:
Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

// Array di oggetti
/* const bicycle = [
	{
		nome: "MERIDA",
		peso: "6.5 kg",
	},
	{
		nome: "TREK",
		peso: "7 kg",
	},
	{
		nome: "SPECIALIZED",
		peso: "8 kg",
	},
	{
		nome: "CANNONDALE",
		peso: "8.5 kg",
	},
	{
		nome: "KONA",
		peso: "9 kg",
	},
	{
		nome: "SCOTT",
		peso: "9.5 kg",
	},
];
 */
// ciclo for in
/* for (let key in bicycle) {
	console.log(bicycle[key]);
}
 */
// DOM
// const pesoBici = document.getElementById("result");

// 2° Live Coding
/*
Descrizione: 
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti e falli subiti.
Nome sarà l’unica proprietà da compilare, mentre le altre saranno tutte settate a 0. (modificato) 
*/

// Array di oggetti
const clubs = [
	{
		nome: "Inter",
		punti_fatti: 0,
		falli_subiti: 0,
	},
	{
		nome: "Milan",
		punti_fatti: 0,
		falli_subiti: 0,
	},
	{
		nome: "Juve",
		punti_fatti: 0,
		falli_subiti: 0,
	},
	{
		nome: "Roma",
		punti_fatti: 0,
		falli_subiti: 0,
	},
	{
		nome: "Lazio",
		punti_fatti: 0,
		falli_subiti: 0,
	},
];

/* 
Snack 2b blocco 2
Descrizione:
Generare numeri random al posto degli 0 nelle proprietà:
punti fatti e falli subiti
*/

for (let index = 0; index < clubs.length; index++) {
	let club = clubs[index];
	club.punti_fatti = Math.round(Math.random() * 100);
	club.falli_subiti = Math.round(Math.random() * 100);
	console.log(club);
}
