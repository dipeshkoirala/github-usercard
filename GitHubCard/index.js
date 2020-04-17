/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

function loadAxios(url) {
  let script = document.createElement("script");
  script.src = url;
  document.head.appendChild(script);
}

loadAxios("https://unpkg.com/axios/dist/axios.min.js");

let script1 = document.createElement("script");
script1.src = "./GitHubCard/index.js";
document.head.appendChild(script1);

loadJS("https://api.github.com/users/dipeshkoirala");

function loadJS(url) {
  let script2 = document.createElement("script");
  script2.src = url;
  document.body.appendChild(script2);
}
var nodeDoctype = document.implementation.createDocumentType(
  "html",
  "-//W3C//DTD XHTML 1.0 Transitional//EN",
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtdd"
);
if (document.doctype) {
  document.replaceChild(nodeDoctype, document.doctype);
} else {
  document.insertBefore(nodeDoctype, document.childNodes[0]);
}

//const axios = require("axios").default;
const cardRect = document.querySelector(".cards");

axios
  .get("https://api.github.com/users/dipeshkoirala")
  .then(map(response) => {
    
    resopnse.data.
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/
function component(obj) {
  const card = document.createElement("div");
  const data1 = document.createElement("div");
  const data2 = document.createElement("div");
  const name=docuemnt.createElement(h2);
  const uName=document.createElement('p')
  const followers=document.createElement('p')
  
}

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
