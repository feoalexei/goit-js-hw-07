import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

gallery.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

gallery.addEventListener('click', onImageClick);

function createGalleryMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
            <div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
            </a>
            </div>
            `;
    })
    .join('');
}

function onImageClick(e) {
  e.preventDefault();

  if (!e.target.classList.contains('gallery__image')) {
    return;
  }

  var a = 'str';
  var instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  e.currentTarget.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') instance.close();
  });
  // e.currentTarget.addEventListener('keydown', onEscKeyClose);
}

// function onEscKeyClose(e) {
//   console.log(instance);
//   if (e.code === 'Escape') instance.close();
// }
