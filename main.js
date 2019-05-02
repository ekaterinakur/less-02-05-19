'use strict';

const mainWrapper = document.querySelector('main');
const article = document.querySelector('main article');
const allArticles = document.querySelectorAll('article');

const mainWrapperWidth = mainWrapper.clientWidth - 20;   //  -paddings => 20
const allArticlesWidth = (article.clientWidth + 20) * allArticles.length;   //  +margins => 20
const articleWidth = article.clientWidth + 20;   //  +margins => 20
const numberInRow = Math.floor(mainWrapperWidth / articleWidth);
const rowWidth = numberInRow * articleWidth;
const restArticles = allArticles.length % numberInRow;

const div = document.createElement('div');
div.className = 'extra';
div.style.display = 'flex';
div.style.justifyContent = 'flex-start';
div.style.flexBasis = rowWidth + 'px';

if (restArticles > 0) {
  function justifyContent() {
    mainWrapper.appendChild(div);

    for (let i = (allArticles.length - restArticles); i < allArticles.length; i++) {
      div.appendChild(allArticles[i]);
    }
  }

  justifyContent();
}