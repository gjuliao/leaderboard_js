/* eslint-disable no-console, consistent-return */

const asyncPost = async () => {
  const urlLead = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/JYwLB3dXtGMnzCOtSjmc/scores/';
  const pName = document.getElementById('player_name').value;
  const pScore = document.getElementById('player_score').value;
  try {
    const response = await fetch(urlLead, {
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
    return data;
  } catch (error) {
    console.log(error);
  }
  document.getElementById('player_name').value = '';
  document.getElementById('player_score').value = '';
};

export default asyncPost;