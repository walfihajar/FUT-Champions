    // Validation des champs/////////////////////////////////////////////////////////////////////

//     // Start Putting the chosen players in the corresponded section by creating element div
//     const chosen = document.getElementById("chosen");

//     if (save.value === "add") {
//         const chosenPlayer = document.createElement("div");
//         const playerId = Date.now(); // Use timestamp as a unique ID
//         chosenPlayer.setAttribute('data-id', playerId); // Set unique ID
//         chosenPlayer.className = "bg-red-400 w-full p-1";
//         chosenPlayer.innerHTML = `
//             <div class="grid grid-cols-2 border border-dashed border-red-500 flex items-center">
//                 <div class="flex justify-center">
//                     <img src="https://cdn.sofifa.net/players/020/801/25_120.png" alt="${nom}">
//                 </div>
//                 <div class="text-center">
//                     <p class="name">${nom}</p>
//                     <p class="position">${position}</p>
//                 </div>
//             </div>
//             <div class="flex justify-around w-full buttons"></div>
//         `;
//         chosen.appendChild(chosenPlayer);

//         // Add delete and edit buttons
//         addButtonsToPlayer(chosenPlayer);
//     } else if (save.value === "edit") {
//         const playerId = modal.getAttribute('data-id');
//         const playerToEdit = document.querySelector(`[data-id="${playerId}"]`);
        
//         playerToEdit.querySelector(".name").textContent = nom;
//         playerToEdit.querySelector(".position").textContent = position;
//     }


//     form.reset();
//     modal.classList.add('hidden');
// });

// function addButtonsToPlayer(playerElement) {
//     const deleteBtn = document.createElement("button");
//     const buttons = playerElement.querySelector(".buttons");
//     deleteBtn.className = "mt-2 bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600";
//     deleteBtn.textContent = "Delete";
//     deleteBtn.addEventListener("click", () => {
//         playerElement.remove();
//     });
//     buttons.appendChild(deleteBtn);

//     const editBtn = document.createElement("button");
//     editBtn.className = "mt-2 bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600";
//     editBtn.textContent = "Edit";
//     editBtn.addEventListener("click", () => {
//         const playerId = playerElement.getAttribute('data-id');
        
        
//         document.getElementById("nom").value = playerElement.querySelector(".name").textContent;
//         document.getElementById("position").value = playerElement.querySelector(".position").textContent;
        
//         modal.classList.remove('hidden');
//         save.setAttribute('value', 'edit');
//         save.textContent = "Edit Player";
        
//         modal.setAttribute('data-id', playerId); 
//     });
//     buttons.appendChild(editBtn);
// }
// // End Saving Player to Chosen section




// document.addEventListener("DOMContentLoaded",()=>{


    


    function afficherSelect(button, position) {
        const joueursFiltres = filtrer(position);
    
        // Afficher le modal
        const modal = document.getElementById("select-modal");
        modal.classList.remove("hidden");
    
        // Populate the dropdown
        const select = document.getElementById("player-select");
        select.innerHTML = ""; // Clear any existing options
    
        // Supprimer l'ancien select dans la carte, si existant
        const oldSelect = button.parentElement.querySelector("select");
        if (oldSelect) oldSelect.remove();
    
        // Ajouter une option par défaut
        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.textContent = "Sélectionner un joueur";
        select.appendChild(defaultOption);
    
        joueursFiltres.forEach((player, index) => {
            const option = document.createElement("option");
            option.value = index;
            option.textContent = player.name;
            select.appendChild(option);
        });
    
        const getCard = button.parentElement;
    
        document.getElementById("cancel-select").addEventListener("click", () => {
            modal.classList.add("hidden");
        });
    
        // Bouton Confirmer
        const confirmButton = document.getElementById("confirm-select");
        confirmButton.onclick = () => {
            const selectedIndex = select.value;
    
            if (selectedIndex === "") {
                alert("Veuillez sélectionner un joueur.");
                return;
            }
    
            const player = joueursFiltres[selectedIndex];
            if (player) {
                // Afficher le joueur dans la carte
                getCard.innerHTML = afficherJoueurTerrain(player);
    
                // Retirer le joueur de la liste principale
                players = players.filter((p) => p !== player);
    
                // Mettre à jour l'affichage global
                afficher();
    
                // Cacher le modal
                modal.classList.add("hidden");
            } else {
                alert("Ce joueur n'existe pas.");
            }
        };
    }