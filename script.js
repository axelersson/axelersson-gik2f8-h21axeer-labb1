'use strict';

let bookList = [];

window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});

searchField.addEventListener('keyup', (e) =>
  renderBookList(
    bookList.filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  )
);

function renderBookList(bookList) {
  const existingElement = document.querySelector('.book-list');
    const root = document.getElementById('root');
  console.log(this);
  existingElement && root.removeChild(existingElement);
  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));

  const lista = document.querySelectorAll(".book-list__item");


};
let bild;
let hej;
let hejsan;

$('#root').on('mouseover', 'li', function(e){
    const root = document.getElementById('root');
    
    if (document.getElementsByClassName('book-list__picture')[0]) {
      const visadBild = document.getElementsByClassName('book-list__picture')[0];
      visadBild.remove();
      }

    const jamforBokAuth = $(this).text().split(' - ')[0].trim();
    const jamforBokTitle = $(this).text().split(' - ')[1].trim();
    let html;
    for (let index = 0; index < bookList.length; index++) {
      if (bookList[index].author == jamforBokAuth && bookList[index].title == jamforBokTitle){
          
          hej = bookList[index].id;
            
            let top = e.pageY;
            let left = e.pageX; 
          getBook(hej).then((apiBooks) => {
            hejsan = apiBooks.coverImage;
            console.log(top, left)
            root.insertAdjacentHTML('afterend', BookImgDiv(hejsan, left, top, jamforBokAuth, jamforBokTitle))
            
          });
        
       }     
        
    }
    

});
$('#root').on('mouseout', 'li', function(){
  const visadBild = document.getElementsByClassName('book-list__picture');
  if (document.getElementsByClassName('book-list__picture')[0]) {
    const visadBild = document.getElementsByClassName('book-list__picture')[0];
    visadBild.remove();
    }
});
