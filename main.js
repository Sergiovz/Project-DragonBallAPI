const txtCharacter = document.getElementById('txtCharacter');
const containerCards = document.getElementById('containerCards');
const URL1 = 'https://dragonball-api.com/api/Characters';


const getApi = async (URL) => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    return data.items;
};

const createCards = ( character ) => {
    const card = document.createElement('div');
    card.classList.add('card-character');

    const imgCard = document.createElement('img');
    imgCard.src = character.image;
    imgCard.alt = character.name;

    const containerDescription = document.createElement('div');
    containerDescription.classList.add('description-card');

    const nameCharacter = document.createElement('h2');
    nameCharacter.textContent = character.name;
    
    const genderCharacter = document.createElement('p');
    genderCharacter.textContent = `Gender: ${character.gender}`
    
    containerDescription.appendChild(nameCharacter);
    containerDescription.appendChild(genderCharacter);

    card.appendChild(imgCard);
    card.appendChild(containerDescription);

    containerCards.appendChild(card);
};

const generateAllCharacters = async () => {
    const dataItems = await getApi(URL1);
    dataItems.map((character) => createCards(character));
};

window.addEventListener('DOMContentLoaded', generateAllCharacters);
