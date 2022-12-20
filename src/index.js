/* eslint-disable no-console */
import './style.css';

const form = document.querySelector('#add_score');
const scoreListing = document.querySelector('#score_listing');

const asyncPost = async () => {
    const pName = document.getElementById('player_name').value;
    const pScore = document.getElementById('player_score').value;
    console.log(pName, pScore);
    try {
        const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/53JtqdHuzGVKECuyF7mz/scores/', {
            method: 'POST',
            body: JSON.stringify({
                user: pName,
                score: pScore,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
};



// const displayData = async () => {
//     data.forEach(el => {
//         scoreListing.innerHTML += `
//         <li>${el.user}, ${el.score}</li>
//         `;
//     });
// }

const fetchData = async () => {
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/53JtqdHuzGVKECuyF7mz/scores/')
  .then(response => response.json())
  .then(data => console.log(data, 'inside fetchData'));
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    asyncPost();
    fetchData();
  });


