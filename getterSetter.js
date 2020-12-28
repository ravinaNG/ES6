class Book {
    constructor(author) {
      this._author = author;
    }
    // getter
    get writer() {
      return this._author;
    }
    /*Getter functions are meant to simply return (get) the value 
    of an object's private variable to the user without the user 
    directly accessing the private variable.*/

    // setter
    set writer(updatedAuthor) {
      this._author = updatedAuthor;
    }
    /*Setter functions are meant to modify (set) the value of an 
    object's private variable based on the value passed into the 
    setter function. This change could involve calculations, or even 
    overwriting the previous value completely.*/
  }
  const novel = new Book('anonymous');
  console.log(novel.writer);  // anonymous, it will just give the return value
  novel.writer = 'newAuthor';
  console.log(novel.writer);  // newAuthor, this will update the variable
  novel.writer = 'secondAuthor';
  console.log(novel.writer);