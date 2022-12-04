import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

gallery.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

function createGalleryMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `;
    })
    .join('');
}

var lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  captionClass: 'img__caption-align',
});
