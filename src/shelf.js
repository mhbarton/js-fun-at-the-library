
function shelfBook(books, shelf) {
 if (shelf.length < 3) {
   var shifts = shelf.unshift(books);
 return shelf
}
};

function unshelfBook(bookTitle, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookTitle) {
      return shelf.splice(i, 1);
    }
  }
};

function listTitles(titleShelf) {
var lists = ""
for (var i = 0; i < titleShelf.length; i++) {
  lists = lists + titleShelf[i].title + ", ";
} return lists.substring(0, lists.length - 2)
}

function searchShelf(titleOnShelf, title) {
var isAvailable = null;
for (var i = 0; i < titleOnShelf.length; i++) {
  if (titleOnShelf[i].title.includes(title)) {
    return isAvailable = true;
  } else {
    isAvailable = false;
  }

}
 return isAvailable
};

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
