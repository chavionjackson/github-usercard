//Used second option to import data
import axios from 'axios';
//Grabbed .cards class from HTML
const card = document.querySelector('.cards');

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
//Grabbed data from URL using axios
axios.get('https://api.github.com/users/chavionjackson')
  .then(res => {
    //Created variable to grab data
    const info = res.data;
    //Created variable to grab the function containing users profiles and data
    const create = newCards(info);
    //Attached the created varibale to the DOM 
    card.appendChild(create);
  })

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/
//Created array containing all of the user profiles
const followersArray = [
  'https://api.github.com/users/tetondan',
  'https://api.github.com/users/dustinmyers',
  'https://api.github.com/users/justsml',
  'https://api.github.com/users/luishrd',
  'https://api.github.com/users/bigknell'
]

//Looped through the created array to create a new card for each user
followersArray.forEach(user => {
  //Used axios to grab the data from the profiles
  axios.get(`${user}`)
    .then(res => {
      //Created variable for each card created containing the data
      const others = newCards(res.data);
      //Attached the created variable to the DOM
      card.appendChild(others);
    });
});

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
//Created a function to create all elements, classes and content in order
const newCards = (object) => {
  const div = document.createElement('div');
  div.classList.add('card');

  const img = document.createElement('img');
  img.src = object.avatar_url;

  const div2 = document.createElement('div');
  div2.classList.add('card-info');

  const h3 = document.createElement('h3');
  h3.classList.add('name');
  h3.textContent = object.name;

  const p1 = document.createElement('p');
  p1.classList.add('username');
  p1.textContent = object.login;

  const p2 = document.createElement('p');
  p2.textContent = `Location: ${object.location}`;

  const p3 = document.createElement('p');
  p3.textContent = `Profile: ${object.url}`;

  const a = document.createElement('a');
  a.href = `${object.url}`; 

  const p4 = document.createElement('p');
  p4.textContent = `Followers: ${object.followers}`;

  const p5 = document.createElement('p');
  p5.textContent = `Following: ${object.following}`;

  const p6 = document.createElement('p');
  p6.textContent = `Bio: ${object.bio}`;

  //Attached all elements to the DOM
  div.appendChild(img);
  div.appendChild(div2);
  div2.appendChild(h3);
  div2.appendChild(p1);
  div2.appendChild(p2);
  div2.appendChild(p3);  
  p3.appendChild(a);
  div2.appendChild(p4);
  div2.appendChild(p5);
  div2.appendChild(p6);

  return div;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
