document.getElementById('signupBtn').addEventListener('click', function() {
    let pseudo = document.getElementById('pseudo').value;
    let email = document.getElementById('email').value;
    
    if (pseudo && email) {
        // Simulation d'inscription
        document.getElementById('signup').style.display = 'none';
        document.getElementById('roomCreation').style.display = 'block';
    } else {
        alert("Veuillez remplir tous les champs.");
    }
});

document.getElementById('createRoomBtn').addEventListener('click', function() {
    let roomName = document.getElementById('roomName').value;
    
    if (roomName) {
        // Création de la room
        document.getElementById('roomCreation').style.display = 'none';
        document.getElementById('chatRoom').style.display = 'block';
        document.getElementById('roomTitle').textContent = roomName;
    } else {
        alert("Veuillez entrer un nom pour la room.");
    }
});

document.getElementById('sendMessageBtn').addEventListener('click', function() {
    let message = document.getElementById('messageInput').value;
    
    if (message) {
        let messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        document.getElementById('messages').appendChild(messageDiv);
        document.getElementById('messageInput').value = '';
    }
});

document.getElementById('generateAI').addEventListener('click', function() {
    // Simuler l'IA (remplacer par l'IA réelle plus tard)
    document.getElementById('aiResponse').textContent = "🤖 IA: Réponse générée.";
});
