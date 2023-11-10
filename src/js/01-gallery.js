import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';

const divRef = document.querySelector('.gallery');

function createGalleryMarkup(items) {
  return items
    .map(
      (item) => `<div class="gallery__item">
                  <a class="gallery__link" href="${item.original}">
                    <img
                      class="gallery__image"
                      src="${item.preview}" 
                      data-source="${item.original}" 
                      alt="${item.description}"
                    />
                  </a>
                </div>`
    )
    .join("");
}

const galleryMarkup = createGalleryMarkup(galleryItems);
divRef.innerHTML = galleryMarkup;

divRef.addEventListener("click", onImageClick);

function onImageClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const galleryItem = evt.target.closest('.gallery__item');
  const galleryItems = Array.from(divRef.querySelectorAll('.gallery__item'));

  const lightbox = new SimpleLightbox({ elements: galleryItems });
  lightbox.on('show.simplelightbox', () => {
    lightbox.slide(galleryItems.indexOf(galleryItem) + 1);
  });

  lightbox.on('close.simplelightbox', () => {
    divRef.removeEventListener("keydown", onKeyPress);
  });

  function onKeyPress(evt) {
    if (evt.key === "Escape") {
      lightbox.close();
    }
  }

  lightbox.show();
  divRef.addEventListener("keydown", onKeyPress);
}