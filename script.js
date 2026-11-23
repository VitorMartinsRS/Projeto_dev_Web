import { images } from "./dados.js";

const galleryContainer = document.querySelector('#gallery-container');
const loadMoreButton = document.querySelector('#load-more');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

const imagesPerPage = 6;
let currentImageIndex = 0;

if (navToggle) {
    navToggle.addEventListener('click', () => {
        const open = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', String(!open));
        navLinks.classList.toggle('open');
    });
}

function loadImages() {
    const pageImages = images.slice(currentImageIndex, currentImageIndex + imagesPerPage);
    currentImageIndex += imagesPerPage;

    pageImages.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.tabIndex = 0;

        const imgItem = document.createElement('img');
        imgItem.src = image.src;
        imgItem.alt = image.alt || 'Imagem da galeria';
        imgItem.loading = 'lazy';

        galleryItem.appendChild(imgItem);
        galleryContainer.appendChild(galleryItem);
    });

    if (currentImageIndex >= images.length) {
        loadMoreButton.hidden = true;
    }
}

loadImages();
loadMoreButton.addEventListener('click', loadImages);

function imprime() {

    document.getElementById('imprime').innerHTML = `
    <textarea rows="6" placeholder="De seu Feedback sobre o Site"
                         id="cor" onkeyup="mudaCorFonte()" ></textarea>
    `

}

function mudaCorFonte() {
    let r = Math.random() * 255
    let g = Math.random() * 255
    let b = Math.random() * 255
    document.getElementById('cor').style.color = `
    rgb(${r},${g},${b})
    `
}