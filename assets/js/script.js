let article = document.querySelector(".article");
let innerHTML = String(article.innerHTML);
let input = document.getElementById("search-input");
input.addEventListener("input", (event) => {
  let searchWord = event.target.value;
  let wordSpan = `<span class="highlight">${searchWord}</span>`;
  let newHTML = innerHTML.replaceAll(searchWord, wordSpan);

  article.innerHTML = newHTML;
});
