// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

function myCard(info) {
  const newCard = document.createElement("div");
  const newHeadline = document.createElement("div");
  const newAuthor = document.createElement("div");
  const newImageContainer = document.createElement("div");
  const newImg = document.createElement("img");
  const authorName = document.createElement("span");

  // classes
  newCard.classList.add("card");
  newHeadline.classList.add("headline");
  newAuthor.classList.add("author");
  newImageContainer.classList.add("img-container");

  //structure
  newCard.appendChild(newHeadline);
  newCard.appendChild(newAuthor);
  newAuthor.appendChild(newImageContainer);
  newImageContainer.appendChild(newImg);
  newAuthor.appendChild(authorName);

  //content
  newHeadline.textContent = info.headline;
  newImg.src = info.authorPhoto;
  authorName.textContent = info.authorName;
  // console.log(newCard);

  return newCard;
}

const cardContainer = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then((response) => {
    const article = response.data.articles;
    console.log("article", article);

    article.javascript.forEach((e) => {
      cardContainer.appendChild(myCard(e));
    });
    article.bootstrap.forEach((e) => {
      cardContainer.appendChild(myCard(e));
    });
    article.technology.forEach((e) => {
      cardContainer.appendChild(myCard(e));
    });
    article.jquery.forEach((e) => {
      cardContainer.appendChild(myCard(e));
    });
    article.node.forEach((e) => {
      cardContainer.appendChild(myCard(e));
    });
  })

  .catch((error) => {
    console.log("Oops!  We can't find the data", error);
  });
