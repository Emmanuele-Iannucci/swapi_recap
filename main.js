// URL dell'endpoint
const ApiUrl = "https://swapi.info/api/people";

// seleziono l'elemento <ul> dove mettere i personaggi
const peopleList = document.getElementById("app");

fetch(ApiUrl)
    .then(res => res.json())
    .then(people => {
        // people è un array di personaggi
        people.forEach(person => {
            // creo un elemento <li>
            const liEl = document.createElement("li");
            // ci metto dentro il nome
            liEl.innerText = person.name;

            // stampo su console per debug
            console.log(liEl);

            // aggiungo al DOM
            peopleList.appendChild(liEl);
        });
    })
    .catch(err => {
        console.error("Errore:", err.message);
    });