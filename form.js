const Form = document.getElementById('booksform');
const Bookscontainer = document.querySelector('.books');
const bookname = Form['title'];
const writer = Form['name'];

let title ='' 
let nam = ''

const books = [];

function Book(title, name) {
    this.title = title;
    this.name = name;
}

const addBook = (book) => {
    books.push(book);
    createBooksElements(book)
};

bookname.addEventListener('input', () => {
    title = bookname.value
})

writer.addEventListener('input', () => {
    nam = writer.value
})


const createBooksElements = ({title , name})=> {
    const Booksdiv = document.createElement ('div');
    const BookTitle = document.createElement('p');
    const BookWritter = document.createElement('p');
    const remove = document.createElement('button')
    remove.addEventListener('click', () => {
        books.forEach(book => {
            if (book.title === title && book.name === name) {
                let i = books.indexOf(book)

                books.splice(i,1)
            }
        })
    })
    const line = document.createElement('hr')

    BookTitle.innerText = " Title: " + title;
    BookWritter.innerText = " Writer: " + name;

    Booksdiv.append(BookTitle, BookWritter);
    Bookscontainer.appendChild(Booksdiv);
    Bookscontainer.appendChild(remove)
    Bookscontainer.appendChild(line)
}

books.forEach(createBooksElements)

Form.onsubmit = (e) => {
    e.preventDefault();
    addBook(new Book(title, nam))
};
   

