/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// function loadAxios(url) {
//   let script = document.createElement("script");
//   script.src = url;
//   document.head.appendChild(script);
// }

// loadAxios("https://unpkg.com/axios/dist/axios.min.js");

// let script1 = document.createElement("script");
// script1.src = "./GitHubCard/index.js";
// document.head.appendChild(script1);

// loadJS("https://api.github.com/users/dipeshkoirala");

// function loadJS(url) {
//   let script2 = document.createElement("script");
//   script2.src = url;
//   document.body.appendChild(script2);
// }
// var nodeDoctype = document.implementation.createDocumentType(
//   "html",
//   "-//W3C//DTD XHTML 1.0 Transitional//EN",
//   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtdd"
// );
// if (document.doctype) {
//   document.replaceChild(nodeDoctype, document.doctype);
// } else {
//   document.insertBefore(nodeDoctype, document.childNodes[0]);
// }

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/
function myComponent(obj) {
  //Step:1//content variables declared and assigned (created elements)
  const card = document.createElement("div"); //return card
  const mainhead = document.createElement("div"); //append to card 1
  const myImg = document.createElement("img"); // //append to card 1
  const myBlankDiv = document.createElement("div"); //enpty div to fill with color 1
  const myInfo = document.createElement("div");
  const myName = document.createElement("h3"); //append to myInfo-->card
  const myId = document.createElement("h5"); //append to myInfo
  const myUserName = document.createElement("p"); //append to my info
  const myUserType = document.createElement("p"); //append to myINfo
  const myUrl = document.createElement("p"); //append to myInfo
  const spanHolder = document.createElement("div"); //append to myInfo
  const followers = document.createElement("span"); //append to spanHolder
  const following = document.createElement("span"); //append to spanHOlder
  const bio = document.createElement("span"); //append to spanHOlder

  //Step:2 Lets define the class
  //In CSS prebuilt name of class is given as
  //.cards .card, .username, .name img and p
  //Cards class exists in our HTML
  card.classList.add("card");
  myName.classList.add("name");
  myUserName.classList.add("username");
  myInfo.classList.add("my-info");
  spanHolder.classList.add("details");

  //adding value in my props
  mainhead.textContent = "";
  mainhead.style.fontSize = "30px";
  myImg.src = obj.avatar_url;
  myName.textContent = obj.login;
  myId.textContent = obj.id;
  myUserName.textContent = obj.login;
  followers.textContent = `Followers: ${obj.followers}`;
  following.textContent = `Following: ${obj.following}`;
  bio.textContent = `Bio: ${obj.bio}`;

  //lets append the created element to HTML

  myInfo.appendChild(myName); // = document.createElement("h3"); //append to myInfo-->card
  myInfo.appendChild(myId); // = document.createElement("h5"); //append to myInfo
  myInfo.appendChild(myUserName); //= document.createElement("p"); //append to my info
  myInfo.appendChild(myUserType); //= document.createElement("p"); //append to myINfo
  myInfo.appendChild(myUrl); // = document.createElement("p"); //append to myInfo
  spanHolder.appendChild(followers); //append to spanHolder
  spanHolder.appendChild(following); //append to spanHOlder
  spanHolder.appendChild(bio); //appended to spanHOlder
  myInfo.appendChild(spanHolder); //append to myInfo

  card.appendChild(mainhead);
  card.appendChild(myImg);
  card.appendChild(myBlankDiv);
  card.appendChild(myInfo); // = document.createElement("div");

  return card;
}

//const ards = document.querySelector(".cards");
//const theContent = document.querySelector(".container");

//const axios = require("axios").default;

axios
  .get("https://api.github.com/users/dipeshkoirala")
  .then((response) => {
    const newObj = myComponent(response.data);
    console.log(newObj);
    document.querySelector(".cards").appendChild(newObj);
  })
  .catch((error) => {
    console.log("Data couldn't be returned", error);
  });
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

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
  "anunaya",
];

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
followersArray.filter((a) => {
  axios.get(`https://api.github.com/users/${a}`).then((r) => {
    const NewCard = myComponent(r.data);
    document.querySelector(".cards").appendChild(NewCard);
  });
});
