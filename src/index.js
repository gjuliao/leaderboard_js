/* eslint-disable no-console */
import './style.css';

const form = document.querySelector('#add_score');
const refresh = document.querySelector('#btnRefresh');

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
  } catch (error) {
    console.log(error);
  }
};

const fetchData = async () => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/53JtqdHuzGVKECuyF7mz/scores/')
    .then((response) => response.json())
    .then((data) => {
      console.log(data.result);
      let output = '';
      data.result.forEach((el) => {
        output += `
        <li>name: ${el.user}, score: ${el.score}</li>
        `;
      });
      document.querySelector('#score_listing').innerHTML = output;
    });
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  asyncPost();
});

refresh.addEventListener('click', () => {
  fetchData();
});

document.addEventListener('DOMContentLoaded', fetchData());