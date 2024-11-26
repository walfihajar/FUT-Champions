//Start Modal Manipulation//////////////////////////////////////////////////////////////////
const add = document.getElementById("new"); 
const modal = document.getElementById("modal");
const cancel = document.getElementById("cancel");
const save = document.getElementById("save");
const form = document.getElementById("form");
   
add.addEventListener("click", () => {
   modal.classList.remove('hidden');
});
       
   
cancel.addEventListener("click", () => {
    modal.classList.add('hidden');
});
   
save.addEventListener("click", (event) => {
   event.preventDefault();
});
//End Modal Manipulation//////////////////////////////////////////////////////////////////


//Start Data Recuperation//////////////////////////////////////////////////////////////////
const nom = document.getElementById("nom").value.trim();
const position = document.getElementById("position").value;
const note = document.getElementById("note").value;
const pac = document.getElementById("pac").value;
const sho = document.getElementById("sho").value;
const pas = document.getElementById("pas").value;
const dri = document.getElementById("dri").value;
const def = document.getElementById("def").value;
const phy = document.getElementById("phy").value;
const nationalite = document.getElementById("nationalite").value;
//End Data Recuperation//////////////////////////////////////////////////////////////////

//Validation des champs//////////////////////////////////////////////////////////////////
let error = '';
if (nom === '') {
 error = 'Veuillez entrer le nom du joueur';
} else if (note === '' || note>100 || note<0) {
 error = 'Veuillez entrer une note valide (note entre 0 et 100)';
} else if (pac === '' || pac>100 || pac<0 ) {
 error ='Veuillez entrer une vitesse valide (PAC entre 0 et 100)';
} else if (sho === '' || sho>100 || sho<0) {
    error ='Veuillez entrer une précision de tir valide (SHO entre 0 et 100)';
} else if (pas === '' || pas>100 || pas<0) {
    error ='Veuillez entrer une passe valide (PAS entre 0 et 100)';
} else if (dri === '' || dri>100 || dri<0) {
    error ='Veuillez entrer un un dribble valide (DRI entre 0 et 100)';
} else if (def === '' || def>100 || def<0) {
    error ='Veuillez entrer une défense valide  (DEF entre 0 et 100)';
} else if (phy === '' || phy>100 || phy<0) {
    error ='Veuillez entrer une force physique (PHY entre 0 et 100)';
}
if (error) {
alert(error); 
}
//Validation des champs//////////////////////////////////////////////////////////////////


