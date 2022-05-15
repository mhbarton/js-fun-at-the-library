
function createLibrary(libraryInfo) {
  return {
    name: libraryInfo,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction:[],
    }

    }

  };

  function addBook(libraryLocation, books) {
    if (books.genre == "fantasy") {
      libraryLocation.shelves.fantasy.unshift(books);
    } else if
      (books.genre == "fiction") {
        libraryLocation.shelves.fiction.unshift(books);
    } else {
        libraryLocation.shelves.nonFiction.unshift(books);
      }
    }

function checkoutBook(place, book, genre) {
  for (var i = 0; i < place.shelves[genre].length; i++) {
    if (book === place.shelves[genre][i].title) {
      place.shelves[genre].splice(i, 1);
    return `You have now checked out ${book} from the ${place.name}`;
    }
  }
  return `Sorry, there are currently no copies of ${book} available at the ${place.name}`;
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
