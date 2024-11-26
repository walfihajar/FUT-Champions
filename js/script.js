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