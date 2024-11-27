// Start Modal Manipulation
const add = document.getElementById("new");
const modal = document.getElementById("modal");
const cancel = document.getElementById("cancel");
const save = document.getElementById("save");
const form = document.getElementById("form");

add.addEventListener("click", () => {
    modal.classList.remove('hidden');
    save.setAttribute('value', 'add');
    save.textContent = "Add Player";
});

cancel.addEventListener("click", () => {
    modal.classList.add('hidden');
});

// End Modal Manipulation

// Start Saving Player to Chosen section
save.addEventListener("click", (event) => {
    event.preventDefault();

    // Start Data retrieving//////////////////////////////////////////////////////////////////////////////////////////////////
    const nom = document.getElementById("nom").value.trim();
    const position = document.getElementById("position").value;
    const note = document.getElementById("note").value;
    const pac = document.getElementById("pac").value;
    const sho = document.getElementById("sho").value;
    const pas = document.getElementById("pas").value;
    const dri = document.getElementById("dri").value;
    const def = document.getElementById("def").value;
    const phy = document.getElementById("phy").value;

    // End Data retrieving/////////////////////////////////////////////////////////////////////////////////////////////////

    // Start Error checking
    let error = '';
    if (nom == '') {
        error = 'Veuillez entrer le nom du joueur';
    } else if (note == '' || note > 100 || note < 0) {
        error = 'Veuillez entrer une note valide (note entre 0 et 100)';
    } else if (pac == '' || pac > 100 || pac < 0) {
        error = 'Veuillez entrer une vitesse valide (PAC entre 0 et 100)';
    } else if (sho == '' || sho > 100 || sho < 0) {
        error = 'Veuillez entrer une précision de tir valide (SHO entre 0 et 100)';
    } else if (pas == '' || pas > 100 || pas < 0) {
        error = 'Veuillez entrer une passe valide (PAS entre 0 et 100)';
    } else if (dri == '' || dri > 100 || dri < 0) {
        error = 'Veuillez entrer un dribble valide (DRI entre 0 et 100)';
    } else if (def == '' || def > 100 || def < 0) {
        error = 'Veuillez entrer une défense valide (DEF entre 0 et 100)';
    } else if (phy == '' || phy > 100 || phy < 0) {
        error = 'Veuillez entrer une force physique valide (PHY entre 0 et 100)';
    }

    if (error) {
        alert(error);
        return;
    }
    // End Error checking

    // Start Putting the chosen players in the corresponded section by creating element div
    const chosen = document.getElementById("chosen");

    if (save.value === "add") {
        const chosenPlayer = document.createElement("div");
        const playerId = Date.now(); // Use timestamp as a unique ID
        chosenPlayer.setAttribute('data-id', playerId); // Set unique ID
        chosenPlayer.className = "bg-red-400 w-full p-1";
        chosenPlayer.innerHTML = `
            <div class="grid grid-cols-2 border border-dashed border-red-500 flex items-center">
                <div class="flex justify-center">
                    <img src="https://cdn.sofifa.net/players/020/801/25_120.png" alt="${nom}">
                </div>
                <div class="text-center">
                    <p class="name">${nom}</p>
                    <p class="position">${position}</p>
                </div>
            </div>
            <div class="flex justify-around w-full buttons"></div>
        `;
        chosen.appendChild(chosenPlayer);

        // Add delete and edit buttons
        addButtonsToPlayer(chosenPlayer);
    } else if (save.value === "edit") {
        const playerId = modal.getAttribute('data-id'); // Get player ID from the modal
        const playerToEdit = document.querySelector(`[data-id="${playerId}"]`);
        
        playerToEdit.querySelector(".name").textContent = nom;
        playerToEdit.querySelector(".position").textContent = position;
    }


    form.reset();
    modal.classList.add('hidden');
});

function addButtonsToPlayer(playerElement) {
    const deleteBtn = document.createElement("button");
    const buttons = playerElement.querySelector(".buttons");
    deleteBtn.className = "mt-2 bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
        playerElement.remove();
    });
    buttons.appendChild(deleteBtn);

    const editBtn = document.createElement("button");
    editBtn.className = "mt-2 bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600";
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => {
        const playerId = playerElement.getAttribute('data-id');
        
        
        document.getElementById("nom").value = playerElement.querySelector(".name").textContent;
        document.getElementById("position").value = playerElement.querySelector(".position").textContent;
        
        modal.classList.remove('hidden');
        save.setAttribute('value', 'edit');
        save.textContent = "Edit Player";
        
        modal.setAttribute('data-id', playerId); 
    });
    buttons.appendChild(editBtn);
}
// End Saving Player to Chosen section
