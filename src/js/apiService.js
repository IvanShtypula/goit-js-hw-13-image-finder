export default {
  page: 1,
  query: '',
  API_KEY: '17132651-8b19556890f65d96e0ac05a55',
 
  fetchImages () {
    return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${this.API_KEY}`)
    .then(response => response.json())
    .then(data => {
      this.addPage();
      return data.hits;
    });      
  },
  get searchQuery(){
    return this.query;
  },
  set searchQuery(value){
    this.query = value;
  },
  addPage(){
    this.page += 1;
  },
  resetPage(){
    this.page = 1;
  }
}



// import debounce from '../../node_modules/lodash.debounce/index.js'
// import photoCard from '../templates/photoCard.hbs';

// const API_KEY = '17132651-8b19556890f65d96e0ac05a55';

// const refs ={
//   gallery: document.querySelector('.gallery'),
//   input: document.querySelector('.input'),
//   loadMoreBtn: document.querySelector('button[data-action="load-more"]')
// } 

// // console.log(refs.loadMoreBtn);

// refs.input.addEventListener('input', debounce(searchForImg, 700));
// refs.loadMoreBtn.addEventListener('click', loadMoreBtnHandler);

// function loadMoreBtnHandler(){

// };

// let page = 1;
// let request = '';
// function searchForImg (event) { 
//    request = event.target.value;
  
//   fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${request}&page=${page}&per_page=3&key=${API_KEY}`)
//     .then(response => response.json())  
//     .then((data) => {    
//       // incrementPage();
//       const cardsList = photoCard(data.hits);  
//       refs.gallery.insertAdjacentHTML('beforeend', cardsList);
//       refs.loadMoreBtn.classList.remove('button-unactive').add('button-active'); 
//     })
//   .catch(err => console.log(err))  
// }

// function incrementPage(){
//   page += 1;
// }



