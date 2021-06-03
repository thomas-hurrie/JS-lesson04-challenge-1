//console.log("Hi!");
//var mainTitle = document.querySelector("h1");
//console.log(mainTitle);
//mainTitle.innerHTML = "Yay, JavaScript!!";

//var body = document.querySelector("body");
//body.style.backgroundColor = "#FEF2F1";

var firstListItem = document.querySelector("ul li");
//console.log(firstListItem);
firstListItem.style.textTransform = "Uppercase";

var moreReasons = document.querySelector(".more-reasons");
//console.log(moreReasons);
moreReasons.style.fontSize = "2.5em";

var whyJS = document.querySelector(".intro h3");
//console.log(whyJS);
whyJS.innerHTML = 'Why learn <span class="highlight">Javascript?</span>';

var highlight = document.querySelector(".highlight");
highlight.style.backgroundColor = "#ffff82";

var mainImage = document.querySelector("img");
mainImage.src = "img/js-code.png";
mainImage.alt = "JavaScript code example";
console.log(mainImage);
