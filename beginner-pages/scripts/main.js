var monBouton = document.querySelector('button');
var monTitre = document.querySelector('h1');
monBouton.onclick = function () {
	definirNomUtilisateur();
}
if (!localStorage.getItem('nom')) {
	definirNomUtilisateur();
} 	else {
	var nomEnregistré = localStorage.getItem('nom');
	monTitre.textContent = 'Mozilla est cool, ' + nomEnregistré;

}
function definirNomUtilisateur(){
	var monNom = prompt('Veuillez saisir votre nom.');
	localStorage.setItem('nom',monNom);
	monTitre.textContent = 'Mozilla est cool, ' + monNom;
}

/*var monImage = document.querySelector('img');
monImage.onclick = function(){
	var maSrc = monImage.getAttribute('src');
	if (maSrc === "images/image1.jpg") {

		monImage.setAttribute('src','images/image2.jpg');

	}
	else {
		monImage.setAttribute ('src','images/image1.jpg');
	}
} */