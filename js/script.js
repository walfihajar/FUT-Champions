// 1. ================ tableaux des joueurs ===================
let players = [
    {
    "name": "Lionel Messi",
    "photo": "https://cdn.sofifa.net/players/158/023/25_120.png",
    "position": "RW",
    "nationality": "Argentina",
    "flag": "https://cdn.sofifa.net/flags/ar.png",
    "club": "Inter Miami",
    "logo": "https://cdn.sofifa.net/meta/team/239235/120.png",
    "rating": 93,
    "pace": 85,
    "shooting": 92,
    "passing": 91,
    "dribbling": 95,
    "defending": 35,
    "physical": 65
    },
    {
    "name": "Cristiano Ronaldo",
    "photo": "https://cdn.sofifa.net/players/020/801/25_120.png",
    "position": "ST",
    "nationality": "Portugal",
    "flag": "https://cdn.sofifa.net/flags/pt.png",
    "club": "Al Nassr",
    "logo": "https://cdn.sofifa.net/meta/team/2506/120.png",
    "rating": 91,
    "pace": 84,
    "shooting": 94,
    "passing": 82,
    "dribbling": 87,
    "defending": 34,
    "physical": 77
    },
    {
    "name": "Kevin De Bruyne",
    "photo": "https://cdn.sofifa.net/players/192/985/25_120.png",
    "position": "CM",
    "nationality": "Belgium",
    "flag": "https://cdn.sofifa.net/flags/be.png",
    "club": "Manchester City",
    "logo": "https://cdn.sofifa.net/players/239/085/25_120.png",
    "rating": 91,
    "pace": 74,
    "shooting": 86,
    "passing": 93,
    "dribbling": 88,
    "defending": 64,
    "physical": 78
    },
    {
    "name": "Kylian Mbappé",
    "photo": "https://cdn.sofifa.net/players/231/747/25_120.png",
    "position": "ST",
    "nationality": "France",
    "flag": "https://cdn.sofifa.net/flags/fr.png",
    "club": "Real Madrid",
    "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
    "rating": 92,
    "pace": 97,
    "shooting": 89,
    "passing": 80,
    "dribbling": 92,
    "defending": 39,
    "physical": 77
    },
    {
    "name": "Virgil van Dijk",
    "photo": "https://cdn.sofifa.net/players/203/376/25_120.png",
    "position": "CB",
    "nationality": "Netherlands",
    "flag": "https://cdn.sofifa.net/flags/nl.png",
    "club": "Liverpool",
    "logo": "https://cdn.sofifa.net/meta/team/8/120.png",
    "rating": 90,
    "pace": 75,
    "shooting": 60,
    "passing": 70,
    "dribbling": 72,
    "defending": 92,
    "physical": 86
    },
    {
    "name": "Antonio Rudiger",
    "photo": "https://cdn.sofifa.net/players/205/452/25_120.png",
    "position": "CB",
    "nationality": "Germany",
    "flag": "https://cdn.sofifa.net/flags/de.png",
    "club": "Real Madrid",
    "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
    "rating": 88,
    "pace": 82,
    "shooting": 55,
    "passing": 73,
    "dribbling": 70,
    "defending": 86,
    "physical": 86
    },
    {
    "name": "Neymar Jr",
    "photo": "https://cdn.sofifa.net/players/190/871/25_120.png",
    "position": "LW",
    "nationality": "Brazil",
    "flag": "https://cdn.sofifa.net/flags/br.png",
    "club": "Al-Hilal",
    "logo": "https://cdn.sofifa.net/meta/team/7011/120.png",
    "rating": 90,
    "pace": 91,
    "shooting": 83,
    "passing": 86,
    "dribbling": 94,
    "defending": 37,
    "physical": 61
    },
    {
    "name": "Mohamed Salah",
    "photo": "https://cdn.sofifa.net/players/192/985/25_120.png",
    "position": "RW",
    "nationality": "Egypt",
    "flag": "https://cdn.sofifa.net/flags/eg.png",
    "club": "Liverpool",
    "logo": "https://cdn.sofifa.net/meta/team/8/120.png",
    "rating": 89,
    "pace": 93,
    "shooting": 87,
    "passing": 81,
    "dribbling": 90,
    "defending": 45,
    "physical": 75
    },
    {
    "name": "Joshua Kimmich",
    "photo": "https://cdn.sofifa.net/players/212/622/25_120.png",
    "position": "CM",
    "nationality": "Germany",
    "flag": "https://cdn.sofifa.net/flags/de.png",
    "club": "Bayern Munich",
    "logo": "https://cdn.sofifa.net/meta/team/503/120.png",
    "rating": 89,
    "pace": 70,
    "shooting": 75,
    "passing": 88,
    "dribbling": 84,
    "defending": 84,
    "physical": 81
    },
    {
    "name": "Jan Oblak",
    "photo": "https://cdn.sofifa.net/players/200/389/25_120.png",
    "position": "GK",
    "nationality": "Slovenia",
    "flag": "https://cdn.sofifa.net/flags/si.png",
    "club": "Atletico Madrid",
    "logo": "https://cdn.sofifa.net/meta/team/7980/120.png",
    "rating": 91,
    "pace": 89,
    "shooting": 90,
    "passing": 78,
    "dribbling": 92,
    "defending": 50,
    "physical": 88
    },
    {
    "name": "Luka Modrić",
    "photo": "https://cdn.sofifa.net/players/177/003/25_120.png",
    "position": "CM",
    "nationality": "Croatia",
    "flag": "https://cdn.sofifa.net/flags/hr.png",
    "club": "Real Madrid",
    "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
    "rating": 88,
    "pace": 74,
    "shooting": 78,
    "passing": 89,
    "dribbling": 90,
    "defending": 72,
    "physical": 65
    },
    {
    "name": "Vinicius Junior",
    "photo": "https://cdn.sofifa.net/players/238/794/25_120.png",
    "position": "LW",
    "nationality": "Brazil",
    "flag": "https://cdn.sofifa.net/flags/br.png",
    "club": "Real Madrid",
    "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
    "rating": 89,
    "pace": 91,
    "shooting": 88,
    "passing": 85,
    "dribbling": 94,
    "defending": 39,
    "physical": 61
    },
    {
    "name": "Brahim Diáz",
    "photo": "https://cdn.sofifa.net/players/231/410/25_120.png",
    "position": "LW",
    "nationality": "Morocco",
    "flag": "https://cdn.sofifa.net/flags/ma.png",
    "club": "Real Madrid",
    "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
    "rating": 82,
    "pace": 85,
    "shooting": 74,
    "passing": 78,
    "dribbling": 85,
    "defending": 31,
    "physical": 56
    },
    {
    "name": "Karim Benzema",
    "photo": "https://cdn.sofifa.net/players/165/153/25_120.png",
    "position": "ST",
    "nationality": "France",
    "flag": "https://cdn.sofifa.net/flags/fr.png",
    "club": "Al-Ittihad",
    "logo" :"https://cdn.sofifa.net/meta/team/476/120.png",
    "rating": 90,
    "pace": 77,
    "shooting": 90,
    "passing": 83,
    "dribbling": 88,
    "defending": 40,
    "physical": 78
    },
    {
    "name": "Erling Haaland",
    "photo": "https://cdn.sofifa.net/players/239/085/25_120.png",
    "position": "ST",
    "nationality": "Norway",
    "flag": "https://cdn.sofifa.net/flags/no.png",
    "club": "Manchester City",
    "logo": "https://cdn.sofifa.net/players/239/085/25_120.png",
    "rating": 91,
    "pace": 89,
    "shooting": 94,
    "passing": 65,
    "dribbling": 80,
    "defending": 45,
    "physical": 88
    },
    {
    "name": "N'Golo Kanté",
    "photo": "https://cdn.sofifa.net/players/215/914/25_120.png",
    "position": "CDM",
    "nationality": "France",
    "flag": "https://cdn.sofifa.net/flags/fr.png",
    "club": "Al-Ittihad",
    "logo": "https://cdn.sofifa.net/meta/team/476/120.png",
    "rating": 87,
    "pace": 77,
    "shooting": 66,
    "passing": 75,
    "dribbling": 82,
    "defending": 88,
    "physical": 82
    },
    {
    "name": "Alphonso Davies",
    "photo": "https://cdn.sofifa.net/players/234/396/25_120.png",
    "position": "LB",
    "nationality": "Canada",
    "flag": "https://cdn.sofifa.net/flags/ca.png",
    "club": "Bayern Munich",
    "logo": "https://cdn.sofifa.net/meta/team/503/120.png",
    "rating": 84,
    "pace": 96,
    "shooting": 68,
    "passing": 77,
    "dribbling": 82,
    "defending": 76,
    "physical": 77
    },
    {
    "name": "Yassine Bounou",
    "photo": "https://cdn.sofifa.net/players/209/981/25_120.png",
    "position": "GK",
    "nationality": "Morocco",
    "flag": "https://cdn.sofifa.net/flags/ma.png",
    "club": "Al-Hilal",
    "logo": "https://cdn.sofifa.net/meta/team/7011/120.png",
    "rating": 84,
    "pace": 81,
    "shooting": 82,
    "passing": 77,
    "dribbling": 86,
    "defending": 38,
    "physical": 83
    },
    {
    "name": "Bruno Fernandes",
    "photo": "https://cdn.sofifa.net/players/212/198/25_120.png",
    "position": "CM",
    "nationality": "Portugal",
    "flag": "https://cdn.sofifa.net/flags/pt.png",
    "club": "Manchester United",
    "logo": "https://cdn.sofifa.net/meta/team/14/120.png",
    "rating": 88,
    "pace": 75,
    "shooting": 85,
    "passing": 89,
    "dribbling": 84,
    "defending": 69,
    "physical": 77
    },
    {
    "name": "Jadon Sancho",
    "photo": "https://cdn.sofifa.net/players/233/049/25_120.png",
    "position": "LW",
    "nationality": "England",
    "flag": "https://cdn.sofifa.net/flags/gb-eng.png",
    "club": "Manchester United",
    "logo": "https://cdn.sofifa.net/meta/team/14/120.png",
    "rating": 84,
    "pace": 85,
    "shooting": 74,
    "passing": 78,
    "dribbling": 88,
    "defending": 34,
    "physical": 63
    },
    {
    "name": "Trent Alexander-Arnold",
    "photo": "https://cdn.sofifa.net/players/231/281/25_120.png",
    "position": "RB",
    "nationality": "England",
    "flag": "https://cdn.sofifa.net/flags/gb-eng.png",
    "club": "Liverpool",
    "rating": 87,
    "pace": 76,
    "shooting": 66,
    "passing": 89,
    "dribbling": 80,
    "defending": 79,
    "physical": 71
    },
    {
    "name": "Achraf Hakimi",
    "photo": "https://cdn.sofifa.net/players/235/212/25_120.png",
    "position": "RB",
    "nationality": "Morocco",
    "flag": "https://cdn.sofifa.net/flags/ma.png",
    "club": "Paris Saint-Germain",
    "logo": "https://cdn.sofifa.net/meta/team/591/120.png",
    "rating": 84,
    "pace": 91,
    "shooting": 76,
    "passing": 80,
    "dribbling": 80,
    "defending": 75,
    "physical": 78
    },
    {
    "name": "Youssef En-Nesyri",
    "photo": "https://cdn.sofifa.net/players/235/410/25_120.png",
    "position": "ST",
    "nationality": "Morocco",
    "flag": "https://cdn.sofifa.net/flags/ma.png",
    "club": "Fenerbahçe",
    "logo": "https://cdn.sofifa.net/meta/team/88/120.png",
    "rating": 83,
    "pace": 82,
    "shooting": 82,
    "passing": 63,
    "dribbling": 77,
    "defending": 36,
    "physical": 80
    },
    {
    "name": "Noussair Mazraoui",
    "photo": "https://cdn.sofifa.net/players/236/401/25_120.png",
    "position": "LB",
    "nationality": "Morocco",
    "flag": "https://cdn.sofifa.net/flags/ma.png",
    "club": "Manchester United",
    "logo": "https://cdn.sofifa.net/meta/team/14/120.png",
    "rating": 81,
    "pace": 78,
    "shooting": 66,
    "passing": 77,
    "dribbling": 83,
    "defending": 77,
    "physical": 71
    },
    {
    "name": "Ismael Saibari",
    "photo": "https://cdn.sofifa.net/players/259/480/25_120.png",
    "position": "CM",
    "nationality": "Morocco",
    "flag": "https://cdn.sofifa.net/flags/ma.png",
    "club": "PSV",
    "logo": "https://cdn.sofifa.net/meta/team/682/120.png",
    "rating": 83,
    "pace": 89,
    "shooting": 78,
    "passing": 80,
    "dribbling": 86,
    "defending": 55,
    "physical": 84
    },
    {
    "name": "Gianluigi Donnarumma",
    "photo": "https://cdn.sofifa.net/players/230/621/25_120.png",
    "position": "GK",
    "nationality": "Italy",
    "flag": "https://cdn.sofifa.net/flags/it.png",
    "club": "Paris Saint-Germain",
    "logo": "https://cdn.sofifa.net/meta/team/591/120.png",
    "rating": 89,
    "pace": 88,
    "shooting": 84,
    "passing": 75,
    "dribbling": 90,
    "defending": 50,
    "physical": 85
    }
]
// 1. ================ tableaux des joueurs ===================
afficher();

// 2. ================ Start Manipulation de Modal ==================
const add = document.getElementById("new");
const modal = document.getElementById("modal");
const cancel = document.getElementById("cancel");
const save = document.getElementById("save");
const form = document.getElementById("form");
let currentIndex = null;

add.addEventListener("click", () => {
    form.reset();
    modal.classList.remove('hidden');
});
cancel.addEventListener("click", () => {
    modal.classList.add('hidden');
});
save.addEventListener("click", (e) => {
    e.preventDefault();

    const nom = document.getElementById("nom").value.trim();
    const position = document.getElementById("position").value;
    const note = document.getElementById("note").value.trim();
    const pac = document.getElementById("pac").value.trim();
    const sho = document.getElementById("sho").value.trim();
    const pas = document.getElementById("pas").value.trim();
    const dri = document.getElementById("dri").value.trim();
    const def = document.getElementById("def").value.trim();
    const phy = document.getElementById("phy").value.trim();
    const nationalite = document.getElementById("nationalite").value.trim();
    const photo = document.getElementById("photo").value.trim();
    const flag = document.getElementById("flag").value.trim();
    const logo = document.getElementById("logo").value.trim();
    const club = document.getElementById("club").value.trim();
    
    // 3. ================ Verification des champs ==================
    let error = '';
    if (nom == '') {
        error = 'Veuillez entrer le nom du joueur';
    } else if (note == '' || isNaN(note) || note > 100 || note < 0) {
        error = 'Veuillez entrer une note valide (note entre 0 et 100)';
    } else if (pac == ''|| isNaN(pac) || pac > 100 || pac < 0) {
        error = 'Veuillez entrer un nombre valide (entre 0 et 100)';
    } else if (sho == '' || isNaN(sho) || sho > 100 || sho < 0) {
        error = 'Veuillez entrer un nombre valide (entre 0 et 100)';
    } else if (pas == '' || isNaN(pas) || pas > 100 || pas < 0) {
        error = 'Veuillez entrer un nombre valide (entre 0 et 100)';
    } else if (dri == '' || isNaN(dri) || dri > 100 || dri < 0) {
        error = 'Veuillez entrer un nombre valide (entre 0 et 100)';
    } else if (def == '' || isNaN(def) || def > 100 || def < 0) {
        error = 'Veuillez entrer un nombre valide (entre 0 et 100)';
    }else if (photo == '' || flag == '' || club == '') {
        error = "Veuillez entrer une URL de photo valide";
    }

    if (error) {
        alert(error);
        return;
    }
    // 3. ================ end Verification des champs ==================

    // 4. ================ Ajouter un joueur a la liste des reserve ==================

    let anotherPlayer ={ name: nom, photo:photo , position: position, nationality: nationalite , flag : flag , club : club , logo : logo , rating:note, pace:pac, shooting:sho, passing:pas , dribbling:dri , defending:def , physical:phy}; 
    if (currentIndex === null){
        players.push(anotherPlayer);
        alert("Le joueur est ajouté avec succès !");
    }else {
        players[currentIndex] = anotherPlayer;
        alert("Le joueur a été modifié avec succès !");
    }
    form.reset();
    modal.classList.add("hidden");
    console.log(players); 
    currentIndex = null;
    afficher();
    // 4. ================ End Ajouter un joueur a la liste des reserve ==================

});


// 2. ================ End Manipulation de Modal ==================


// 5. ================ selon la position, on doit changer les labels des statisti des joueurs ==================

const positionSelect = document.getElementById("position");
const Labels = {
    pac: document.querySelector('label[for="pac"]'),
    sho: document.querySelector('label[for="sho"]'),
    pas: document.querySelector('label[for="pas"]'),
    dri: document.querySelector('label[for="dri"]'),
    def: document.querySelector('label[for="def"]'),
    phy: document.querySelector('label[for="phy"]'),
};
function changerStatistiques(position) {
    if (position === "GK") { 
        Labels.pac.textContent = "DIV"; 
        Labels.sho.textContent = "HAN"; 
        Labels.pas.textContent = "KIC"; 
        Labels.dri.textContent = "REF"; 
        Labels.def.textContent = "SPD"; 
        Labels.phy.textContent = "POS"; 
    } else { 
        Labels.pac.textContent = "PAC"; 
        Labels.sho.textContent = "SHO"; 
        Labels.pas.textContent = "PAS";
        Labels.dri.textContent = "DRI";
        Labels.def.textContent = "DEF"; 
        Labels.phy.textContent = "PHY";
    }
}
changerStatistiques(positionSelect.value);
positionSelect.addEventListener("change", (event) => {
    const selectedPosition = event.target.value;
    changerStatistiques(selectedPosition);
});


function afficher() {
    const chosen = document.getElementById("chosen");
    chosen.innerHTML = '';
    players.forEach((player, index) => {
        
        const playerCard = document.createElement('div');
        playerCard.classList.add('w-full');
        playerCard.innerHTML = `<div class="informations grid grid-cols-2 items-center h-[70px] justify-center">
                                    <div class="flex justify-center">
                                       <img  src="${player.photo}" alt="Photo de ${player.name}  height="80" width="70">
                                    </div>
                                    <div class="text-center text-xs p-1">
                                       <p>${player.name}</p>
                                       <p class="text-[#c9a04a] font-bold">${player.position}</p>
                                    </div>
                                </div>
                                
                                <div class="flex justify-around gap-1 p-2">
                                    <button class="delete w-full bg-red-500 text-white text-xs px-2 py-1 rounded" data-index="${index}">Supprimer</button>
                                    <button class="edit   w-full bg-blue-500 text-white text-xs px-2 py-1 rounded" data-index="${index}">Modifier</button>
                                </div>
                                `;
        chosen.appendChild(playerCard);
    });
    modifier();
    supprimer();
};


function modifier() {
    const editBtn = document.querySelectorAll('.edit');
    editBtn.forEach((button) => {
        button.addEventListener('click',() => {
            const index = button.getAttribute('data-index');
            const player = players[index];

            document.getElementById("nom").value = player.name;
            document.getElementById("position").value = player.position;
            document.getElementById("note").value = player.rating;
            document.getElementById("pac").value = player.pace;
            document.getElementById("sho").value = player.shooting;
            document.getElementById("pas").value = player.passing;
            document.getElementById("dri").value = player.dribbling;
            document.getElementById("def").value = player.defending;
            document.getElementById("phy").value = player.physical;
            document.getElementById("nationalite").value = player.nationality;
            document.getElementById("photo").value = player.photo;
            document.getElementById("flag").value = player.flag;
            document.getElementById("logo").value = player.logo;
            document.getElementById("club").value = player.club;

            currentIndex = index;
            modal.classList.remove('hidden');
        });
    });
}

function supprimer(){
    const deleteBtn = document.querySelectorAll('.delete');
    deleteBtn.forEach((button) => {
        button.addEventListener('click', () => {
            const index = button.getAttribute('data-index');
            players.splice(index, 1);
            afficher();
        });
    });

};

function filtrer(position){
    return players.filter(player => player.position == position);
};

document.querySelectorAll('.position-button').forEach(button => {
    button.addEventListener('click',(event) => {
        const position = button.getAttribute('data-position');
        afficherSelect(button, position);
    });
});


function afficherSelect(button, position) {
    const joueursFiltres = filtrer(position);
    const modal = document.getElementById("select-modal");
    modal.classList.remove("hidden");
    const select = document.getElementById("player-select");
    select.innerHTML = "";

    const oldSelect = button.parentElement.querySelector("select");
    if (oldSelect){
        oldSelect.remove();   
    } 

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

    const confirmButton = document.getElementById("confirm-select");
    confirmButton.onclick = () => {
        const selectedIndex = select.value;

        if (selectedIndex === "") {
            alert("Veuillez sélectionner un joueur.");
            return;
        }

        const player = joueursFiltres[selectedIndex];
        if (player) {
            getCard.innerHTML = afficherJoueurTerrain(player);
            players = players.filter((p) => p !== player);
            afficher();
            modal.classList.add("hidden");
        }
    };
}

function afficherJoueurTerrain(player, index) {
    let statsLabels;

    if (player.position === "GK") {
        statsLabels = { pac: "DIV", sho: "HAN", pas: "KIC", dri: "REF", def: "SPD", phy: "POS" };
    } else {
        statsLabels = { pac: "PAC", sho: "SHO", pas: "PAS", dri: "DRI", def: "DEF", phy: "PHY" };
    }

    return `
            <div class="h-[60%] w-[70%] md:h-[90%] md:w-[70%] text-black player-card">

                <!-- Player Photo and Name -->
                <div class="flex items-center justify-center">
                    <img src="${player.photo}" class="object-contain playerImage h-[30px] w-[25px]  mt-4 md:mt-0 md:h-[70px] md:w-[60px]" alt="${player.name}">
                </div>

                <p class="text-[6px] font-bold text-center md:text-xs">${player.name}</p>

                <!-- Statistiques -->
                <div class="statistique grid grid-cols-3 grid-rows-2 justify-center place-items-center h-[30%] w-full">
                    <div class="flex flex-col">
                        <h4 class="text-[4px] md:text-md">${statsLabels.pac}</h4>
                        <h4 class="text-[4px] font-bold md:text-xs">${player.pace}</h4>
                    </div>
                    <div class="flex flex-col">
                        <h4 class="text-[5px] md:text-md">${statsLabels.sho}</h4>
                        <h4 class="text-[4px] font-bold md:text-xs">${player.shooting}</h4>
                    </div>
                    <div class="flex flex-col">
                        <h4 class="text-[5px] md:text-md">${statsLabels.pas}</h4>
                        <h4 class="text-[4px] font-bold md:text-xs">${player.passing}</h4>
                    </div>
                    <div class="flex flex-col">
                        <h4 class="text-[5px] md:text-md">${statsLabels.dri}</h4>
                        <h4 class="text-[4px] font-bold md:text-xs">${player.dribbling}</h4>
                    </div>
                    <div class="flex flex-col">
                        <h4 class="text-[5px] md:text-md">${statsLabels.def}</h4>
                        <h4 class="text-[4px] font-bold md:text-xs">${player.defending}</h4>
                    </div>
                    <div class="flex flex-col">
                        <h4 class="text-[5px] md:text-md">${statsLabels.phy}</h4>
                        <h4 class="text-[4px] font-bold md:text-xs">${player.physical}</h4>
                    </div>
                </div>

                <!-- Flag / Club / Nationality -->
                <div class="flag flex justify-center gap-1 align-middle">
                    <img src="${player.flag}" class="w-[8px] md:w-[14px] md:h-[10px]" alt="nationalite">
                    <img src="${player.logo}" class="w-[8px] md:w-[14px] md:h-[12px]" alt="logo">
                </div>
            </div>
            `;
}





