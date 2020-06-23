
import debounce from '../../node_modules/lodash.debounce/index.js'
import photoCard from '../templates/photoCard.hbs';
import apiService from './apiService.js';

const refs ={
  gallery: document.querySelector('.gallery'),
  input: document.querySelector('.input'),
  loadMoreBtn: document.querySelector('button[data-action="load-more"]')
} 

refs.input.addEventListener('input', debounce(buildDom, 700));
refs.loadMoreBtn.addEventListener('click', loadMoreBtnHandler);

function buildDom (event){
  const inputValue = event.target.value;
  clearList();
  apiService.resetPage();
  apiService.searchQuery = inputValue;  
  apiService.fetchImages()     
  .then((hits) => {

    // console.log('HITS', hits);

    const cardsList = photoCard(hits);
    insertListItems(cardsList);    
    refs.loadMoreBtn.classList.remove('button-unactive').add('button-active'); 
  })
  .catch(err => console.log(err))
}

function insertListItems(items){
  refs.gallery.insertAdjacentHTML('beforeend', items)
}

function loadMoreBtnHandler(){
  apiService.fetchImages()
  .then((hits) => {    
    const cardsList = photoCard(hits);
    insertListItems(cardsList);
    scrollPage();       
  })  
}

function clearList (){
  refs.gallery.innerHTML = '';
}

function scrollPage(){
  window.scrollTo({
    top: refs.loadMoreBtn.offsetTop, 
    behavior: "smooth"
  })
}
