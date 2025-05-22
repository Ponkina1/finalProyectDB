////////////////////////////////////////////////////////////////////
//guardado en players coleccion 

import { FirestoreService } from '../nosql/firestore_service.js';

const firestore = new FirestoreService("players");

document.getElementById("submitPlayer").addEventListener("click", async (event) => {
    event.preventDefault();
    alert("Button clicked");

    const idPlayer = document.getElementById("idPlayer").value;
    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;

    const data = {
        idPlayer: idPlayer,
        name: name,
        username: username,
    };

    try {
        await firestore.PostDocument(idPlayer, data);
        alert("Player registered successfully.");
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while registering the player.");
    }
});

//////////////////////////////////////////////////////////////////////
//guardado en matches coleccion 

import { FirestoreService } from '../nosql/firestore_service.js';

const firestoreMatches = new FirestoreService("matches");

document.getElementById("submitMatch").addEventListener("click", async (event) => {
    event.preventDefault();
    alert("Button clicked");

    const idMatches = document.getElementById("idMatches").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const score = parseFloat(document.getElementById("score").value);
    const levelName = document.getElementById("LevelName").value;
    const levelId = parseInt(document.getElementById("levelId").value);
    const difficultyName = document.getElementById("difficultyName").value;
    const difficultyId = parseInt(document.getElementById("difficultyId").value);

    const data = {
        idMatches: idMatches,
        date: date,
        time: time,
        score: score,
        level: {
            name: levelName,
            id: levelId
        },
        difficulty: {
            name: difficultyName,
            id: difficultyId
        }
    };

    try {
        await firestoreMatches.PostDocument(idMatches, data);
        alert("Match registered successfully.");
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while registering the match.");
    }
});
