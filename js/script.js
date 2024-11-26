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
const nom = document.getElementById("nom").value;
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