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


    <div class="relative flex justify-center items-center text-black">

                    <img src="img/yellow-card.png" class="object-contain" height="170" width="120" alt="">
                    <div class="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                        <img src="${player.photo}" class="object-contain mb-4" height="60" width="60">
                        <div class="absolute left-[16.3%] top-[20%] text-center">
                            <div class="font-bold text-xs">${player.rating}</div>
                            <div class="font-semibold text-[0.5rem]">${player.position}</div>
                        </div>
                        <div class="absolute top-[66%] text-center">
                            <div class="font-bold text-[0.5rem]">${player.name}</div>
                            <div class="flex font-semibold text-[0.3rem] justify-around gap-[2px]">
                                <div class="flex flex-col">
                                    <span>PAC</span>
                                    <span>${player.pace}</span>
                                </div>
                                <div class="flex flex-col">
                                    <span>SHO</span>
                                    <span>${player.shooting}</span>
                                </div>
                                <div class="flex flex-col">
                                    <span>PAS</span>
                                    <span>${player.passing}</span>
                                </div>
                                <div class="flex flex-col">
                                    <span>DRI</span>
                                    <span>${player.dribbling}</span>
                                </div>
                                <div class="flex flex-col">
                                    <span>DEF</span>
                                    <span>${player.defending}</span>
                                </div>
                                <div class="flex flex-col">
                                    <span>PHY</span>
                                    <span>${player.physical}</span>
                                </div>
                            </div>

                            <div class="absolute flex gap-1 top-[46%] left-[22%]  mt-1 items-center">
                                <div ><img src="${player.flag}" class="object-contain" width="10" height="10" alt=""></div>
                                <div><img src="${player.club}" class="object-contain" width="10" height="10" alt=""></div>
                                <div><img src="${player.logo}" class="object-contain" width="10" height="10" alt=""></div>
                            </div>
                        </div>
                    </div>
                </div>