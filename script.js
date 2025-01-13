// Získání cviku z localStorage
function getWorkouts() {
    return JSON.parse(localStorage.getItem('workouts')) || []; // Vrátí prázdné pole, pokud nejsou žádná cvičení
}

// Uložení cvičení
function logExercise(name, sets, reps) {
    let workout = {
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        name,
        sets: `${sets} x ${reps}` 
    }; // Spojení sets a reps
    let workouts = getWorkouts(); // Získání existujících cvičení
    workouts.push(workout); // Přidání nového cvičení
    localStorage.setItem('workouts', JSON.stringify(workouts)); // Uložení cvičení jako JSON

    // Informovat uživatele o úspěšném uložení
    alert("Exercise logged!");

    // Přidání cvičení do tabulky progress
    addToProgressTable(workout);
}


// Přidání události pro odeslání formuláře na exercises.html
if (document.getElementById("logButton")) {
    document.getElementById("logButton").addEventListener("click", function(event) {
        
        // Získání hodnot z inputu
        const exerciseName = document.getElementById("exerciseName").value;
        const sets = document.getElementById("sets").value;
        const reps = document.getElementById("reps").value;

        // Kontrola, zda jsou sets a reps vyplněny
        if (exerciseName && sets && reps) {
            // Logování cvičení
            logExercise(exerciseName, sets, reps);
        } else {
            alert("Please fill in all fields!");
        }
    });
}

// Funkce pro načtení cvičení a zobrazení v tabulce na progress.html
function loadWorkouts() {
    let workouts = getWorkouts(); // Získání cvičení z localStorage
    let table = document.getElementById('workoutTable');

    // Smaže existující řádky (stará data)
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    workouts.forEach((workout) => {
        let row = table.insertRow(); // Vytvoření nového řádku
        row.innerHTML = `
            <td>${workout.date}</td>
            <td>${workout.name}</td>
            <td>${workout.sets}</td>`; // Vložení dat do řádku
        
        // Vytvořit a přidat tlačítko pro odstranění
        let deleteCell = row.insertCell(3); // Buňka pro tlačítko delete
        let deleteButton = document.createElement('img'); // Vytvoření tlačítka (img) delete
        deleteButton.src = "./img/Trash bin.jpg"; // Cesta k obrázku
        deleteButton.id = "delete"; // Popis pro přístupnost

        deleteButton.addEventListener("click", function() { // Kliknutím na tlačítko se smaže cvik
            deleteWorkout(workout); // Zavolat deleteWorkout s cvičením
        });
        deleteCell.appendChild(deleteButton); // Přidat tlačítko do buňky
    });
}

// Funkce pro odstranění cvičení
function deleteWorkout(workoutToDelete) {
    let workouts = getWorkouts(); // Získání existujících cvičení
    workouts = workouts.filter(workout => workout.id !== workoutToDelete.id || workout.date !== workoutToDelete.date || workout.name !== workoutToDelete.name || workout.sets !== workoutToDelete.sets); // Odebrání cvičení
    localStorage.setItem('workouts', JSON.stringify(workouts)); // Uložení aktualizovaného pole
    loadWorkouts(); // Obnovit tabulku pro zobrazení aktualizovaných dat
}

// Zavolat loadWorkouts při načtení stránky
document.addEventListener("DOMContentLoaded", function() {
    if ($('#workoutTable')) {
        loadWorkouts(); // Načíst cvičení při načtení stránky
    }
});