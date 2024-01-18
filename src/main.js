'use strict'

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector(".search-img-form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

// Validate status of response
function fetchImages(url){
    return fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        });
};

//Create gallery markup
function galleryMarkup(images) {
    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
        `<li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
            <div class="image-info">
              <p class="likes">Likes ${likes}</p>
              <p class="views">Views ${views}</p>
              <p class="comments">Comments ${comments}</p>
              <p class="downloas">Downloas ${downloads}</p>
            </div>
          </a>
        </li>`
    ).join("");
    return markup
}; 

form.addEventListener("submit", (e) => {
    e.preventDefault();
    gallery.innerHTML = '';
    loader.classList.remove("hidden");
        
    const searchParams = new URLSearchParams({
        key: "41836139-8e3290e3b09a716b148135a6e",
        q: form.elements.search.value,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });
    
    const url = `https://pixabay.com/api/?${searchParams}`;

    fetchImages(url)
        .then((res) => {
            const resHits = res.hits;
            gallery.insertAdjacentHTML("afterbegin", galleryMarkup(resHits))
            
            lightbox.refresh();
                
            if (resHits.length === 0) {
                iziToast.error({
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: "topRight"
                })
            }
        })
        .finally(() => loader.classList.add("hidden"))
    
    form.reset();
})
