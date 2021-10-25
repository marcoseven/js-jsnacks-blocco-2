/* 
Descizione:
Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

// Array di oggetti
const bicycle = [
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

for (let key in bicycle) {
	console.log(bicycle[key]);
}


