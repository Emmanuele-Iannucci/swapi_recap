// URL dell'endpoint
const ApiUrl = "https://swapi.info/api/people";

// seleziono l'elemento <ul> dove mettere i personaggi
const peopleList = document.getElementById("app");

fetch(ApiUrl)
    .then(res => res.json())
    .then(people => {
        people.forEach(person => {
            // 1. creo il contenitore della card
            const card = document.createElement("div");

            // 2. nome in evidenza
            const title = document.createElement("h2");
            title.innerText = person.name;
            card.appendChild(title);

            // 3. le altre caratteristiche in paragrafi
            const height = document.createElement("p");
            height.innerText = "Altezza: " + person.height;
            card.appendChild(height);

            const mass = document.createElement("p");
            mass.innerText = "Peso: " + person.mass;
            card.appendChild(mass);

            const hair = document.createElement("p");
            hair.innerText = "Colore capelli: " + person.hair_color;
            card.appendChild(hair);

            const eyes = document.createElement("p");
            eyes.innerText = "Colore occhi: " + person.eye_color;
            card.appendChild(eyes);

            const gender = document.createElement("p");
            gender.innerText = "Genere: " + person.gender;
            card.appendChild(gender);

            // Stampo le card in console
            console.log(card)

            // 4. appendo la card al contenitore principale
            peopleList.appendChild(card);
        });
    })
    .catch(err => console.error("Errore:", err));