// dom elements
const Form = document.getElementById('booksform');
const Bookscontainer = document.querySelector('.books');
const bookname = Form['title'];
const writer = Form['name'];

const books = [
   
];

let book = function Book(title, name) {
    this.title = title;
    this.name = name;
}

const addBook = (title , name) => {
    books.push({
        title,
        name,
    });

    return {title, name};
};



const createBooksElements = ({title , name})=> {
    const Booksdiv = document.createElement ('div');
    const BookTitle = document.createElement('p');
    const BookWritter = document.createElement('p');

    BookTitle.innerText = " Title: " + title;
    BookWritter.innerText = " Writer: " + name;

    Booksdiv.append(BookTitle, BookWritter);
    Bookscontainer.appendChild(Booksdiv);
}

books.forEach(createBooksElements)

Form.onsubmit = (e) => {
    e.preventDefault();
    
    // const newBook = addBook(
    //     titleInput.value,
    //     nameInput.value
    // );
    books.push('shakes','book')

//    createBooksElements('shakes','newBook') ;
//    titleInput.value = " ";
//    nameInput.value= " ";
};
   

