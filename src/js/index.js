import ApiSettings from './fetchAPI';
import Notiflix from 'notiflix';

import 'simplelightbox/dist/simple-lightbox.min.css';
import simpleLightbox from 'simplelightbox';

const refs = { 
    searchForm: document.querySelector('.search-form'),
    galleryDiv: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('.load-more'),
};

const pixabayApi = new ApiSettings;

refs.loadMoreBtn.style.display = 'none';
refs.searchForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    pixabayApi.inputValue = event.target.elements.searchQuery.value;
    pixabayApi.resetPage();
    pixabayApi.resetHits();
    if (event.target.elements.searchQuery.value.trim() !== '') { 
        pixabayApi.GetFetchApi().then(async function (val) {
            if (val.data.hits.length === 0) {
                Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
            } else {
                renderCardAfter(addCardOnDom(val));
                await lightbox.refresh();
                pixabayApi.totalHits(val.data.hits.length);
                pixabayApi.nextPage();
                refs.loadMoreBtn.style.display = 'block';
            };
        });
        if (refs.galleryDiv.children !== null) { 
            refs.galleryDiv.innerHTML = '';
            refs.loadMoreBtn.style.display = 'none';
        };
    };
};

function addCardOnDom(val) { 
                return val.data.hits.map(el => {
                return `<a href=${el.largeImageURL}><div class="photo-card">
                <img src="${el.webformatURL}" alt="${el.tags}" loading="lazy" />
                <div class="info">
                    <p class="info-item">
                    <b>Likes</b>
                    <span>${el.likes}</span>
                    </p>
                    <p class="info-item">
                    <b>Views</b>
                    <span>${el.views}</span>
                    </p>
                    <p class="info-item">
                    <b>Comments</b>
                    <span>${el.comments}</span>
                    </p>
                    <p class="info-item">
                    <b>Downloads</b>
                    <span>${el.downloads}</span>
                    </p>
                </div>
                </div></a>
                `}).join('');
};

const renderCardAfter = card => refs.galleryDiv.insertAdjacentHTML('afterbegin', card);
const renderCardBefore = card => refs.galleryDiv.insertAdjacentHTML('beforeend', card);

refs.loadMoreBtn.addEventListener('click', handleClick);

function handleClick() { 
    pixabayApi.GetFetchApi().then(async function (val) {
        renderCardBefore(addCardOnDom(val));
        await lightbox.refresh();
        pixabayApi.totalHits(val.data.hits.length);
        if (pixabayApi.valueHits >= val.data.totalHits) { 
            refs.loadMoreBtn.style.display = 'none';
            Notiflix.Notify.warning("We're sorry, but you've reached the end of search results.");
        };
        pixabayApi.nextPage();
        
    });
};

const lightbox = new simpleLightbox('.gallery a');
