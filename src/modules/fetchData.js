import 'bootstrap';

const fetchData = async () => {
  const leadUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/JYwLB3dXtGMnzCOtSjmc/scores/';
  fetch(leadUrl)
    .then((response) => response.json())
    .then((data) => {
      const sorted = data.result.sort((a, b) => b.score - a.score);
      let output = '';
      sorted.forEach((el) => {
        output += `
          <li class="p-2 d-flex justify-content-around"> <span class="font-weight-bold">Name:</span> ${el.user} <span class="font-weight-bold"> Score:</span> ${el.score}</li>
          `;
      });
      document.querySelector('#score_listing').innerHTML = output;
    });
};

export default fetchData;