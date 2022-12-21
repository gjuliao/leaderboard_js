import './style.css';
import fetchData from './modules/fetchData.js';
import asyncPost from './modules/asyncPost.js';

const form = document.querySelector('#add_score');
const refresh = document.querySelector('#btnRefresh');

// Submit listener to post user and score to API
form.addEventListener('submit', (e) => {
  e.preventDefault();
  asyncPost();
});

// Click listener to refresh data after new submit
refresh.addEventListener('click', () => {
  fetchData();
});

document.addEventListener('DOMContentLoaded', fetchData());