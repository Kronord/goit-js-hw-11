// const textFromInput = event.target.elements.searchQuery;
    // GetFetchApi(textFromInput.value).then( async function (val) {
    //     if (val.data.hits.length === 0) { 
    //         Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
    //     } else { 
    //         const galleryCard = val.data.hits.map(el => {
    //             return `<a href=${el.largeImageURL}><div class="photo-card">
    //             <img src="${el.webformatURL}" alt="${el.tags}" loading="lazy" />
    //             <div class="info">
    //                 <p class="info-item">
    //                 <b>Likes</b>
    //                 <span>${el.likes}</span>
    //                 </p>
    //                 <p class="info-item">
    //                 <b>Views</b>
    //                 <span>${el.views}</span>
    //                 </p>
    //                 <p class="info-item">
    //                 <b>Comments</b>
    //                 <span>${el.comments}</span>
    //                 </p>
    //                 <p class="info-item">
    //                 <b>Downloads</b>
    //                 <span>${el.downloads}</span>
    //                 </p>
    //             </div>
    //             </div></a>
    //             `}).join('');
    //         refs.galleryDiv.insertAdjacentHTML('afterbegin', galleryCard);
    //         await lightbox.refresh();
    //     };
    // });
    // 