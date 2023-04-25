class CardNews extends HTMLElement {
  constructor() {
    super();

    const shaddow = this.attachShadow({ mode: "open" });
    shaddow.appendChild(this.build());
    shaddow.appendChild(this.styles());
  }

  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card_left");

    const author = document.createElement("span");
    author.setAttribute("class", "author");
    author.textContent =
      "By " + (this.getAttribute("author") || "Unknown Author");

    const linkTitle = document.createElement("a");
    linkTitle.setAttribute("class", "title");
    linkTitle.textContent = this.getAttribute("title");
    linkTitle.href = this.getAttribute("url-link");

    const newsContent = document.createElement("p");
    newsContent.setAttribute("class", "content");
    newsContent.textContent = this.getAttribute("content");

    cardLeft.appendChild(author);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card_right");

    const newsImage = document.createElement("img");
    newsImage.setAttribute("class", "img");
    newsImage.src = this.getAttribute("img-src") || "./assets/default-pic.jpg";
    newsImage.alt = "Foto da Notícia";

    cardRight.appendChild(newsImage);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
  .card {
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 15px;
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.24);
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.24);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.24);
  }
  
  img {
    width: 20rem;
    height: 12rem;
    display: flex;
    justify-content: center;
  }
  
  .card_left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
  }
  
  .author {
    font-size: 0.825rem;
    color: lightgrey;
  }
  
  .title {
    margin-top: 0.785rem;
    margin-bottom: 0.285rem;
    font-size: 1.25rem;
    text-decoration: none;
    font-weight: bold;
    color: black;
  }
  
  .content {
    color: grey;
    font-weight: 400;
    font-size: 0.925rem;
  }
 `;
    return style;
  }
}

customElements.define("card-news", CardNews);
