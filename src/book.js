function createTitle(title1) {
  return `The ${title1}`
};

//interpolation to modify the titles
// the lefthand argument in () will then equal the right


function buildMainCharacter(name, age, pronouns) {
  return {
    name:name,
    age: age,
    pronouns: pronouns
  }

};


function saveReview(review1, reviews) {
  if(reviews.includes(review1)) {
  } else {
    reviews.push(review1)
}
}


function calculatePageCount(bookTitle) {
  //for each letter in the title, starting at the first element, it will multiply by 20
  for(var i = 0; i < bookTitle.length; i++){
    return bookTitle.length * 20
  }

};

function writeBook(bookTitle, bookCharacter, genre) {
  return {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre,
  }


};

function editBook(decreasedPageCount) {
decreasedPageCount.pageCount = decreasedPageCount.pageCount * .75
return decreasedPageCount.pageCount
 }



module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
