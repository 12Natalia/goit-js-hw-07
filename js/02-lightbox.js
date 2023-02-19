import { galleryItems } from "./gallery-items.js";
const gallery = document.querySelector(".gallery");
const itemsArray = [];
galleryItems.forEach((element) => {
  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = element.original;
  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = element.preview;
  galleryImage.alt = element.description;
  galleryLink.append(galleryImage);
  itemsArray.push(galleryLink);
});
gallery.prepend(...itemsArray);
new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
