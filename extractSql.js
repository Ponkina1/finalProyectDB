import { FirestoreService } from '../nosql/firestore_service.js';

const firestorePlayers = new FirestoreService("players");

document.getElementById("loadBtn").addEventListener("click", async (event) => {
    event.preventDefault();
    const cargaDiv = document.getElementById("playersContainer");
    cargaDiv.innerHTML = ""; // Limpia el contenido anterior

    const documents = await firestorePlayers.getAllDocuments();

    if (documents.length === 0) {
        cargaDiv.innerHTML = "<p class='text-muted'>No players found.</p>";
        return;
    }

    documents.forEach((doc) => {
        const card = document.createElement("div");
        card.className = "card mb-3";
        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${doc.name}</h5>
                <p class="card-text"><strong>ID:</strong> ${doc.idPlayer}</p>
                <p class="card-text"><strong>Username:</strong> @${doc.username}</p>
            </div>
        `;
        cargaDiv.appendChild(card);
    });
});


import { FirestoreService } from '../nosql/firestore_service.js';

const firestoreMatches = new FirestoreService("matches");

document.getElementById("loadBtn").addEventListener("click", async (event) => {
    event.preventDefault();
    const cargaDiv = document.getElementById("matchesContainer");
    cargaDiv.innerHTML = ""; // Limpia el contenido anterior

    const documents = await firestoreMatches.getAllDocuments();

    if (documents.length === 0) {
        cargaDiv.innerHTML = "<p class='text-muted'>No matches found.</p>";
        return;
    }

    documents.forEach((doc) => {
        const card = document.createElement("div");
        card.className = "card mb-3";
        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">Match ID: ${doc.idMatches}</h5>
                <p class="card-text"><strong>Date:</strong> ${doc.date}</p>
                <p class="card-text"><strong>Time:</strong> ${doc.time}</p>
                <p class="card-text"><strong>Score:</strong> ${doc.score}</p>
                <p class="card-text"><strong>Level:</strong> ${doc.level.name} (ID: ${doc.level.id})</p>
                <p class="card-text"><strong>Difficulty:</strong> ${doc.difficulty.name} (ID: ${doc.difficulty.id})</p>
            </div>
        `;
        cargaDiv.appendChild(card);
    });
});
