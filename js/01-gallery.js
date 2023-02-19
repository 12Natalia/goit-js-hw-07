import { galleryItems } from "./gallery-items.js";
const gallery = document.querySelector(".gallery");
const itemsArray = [];
galleryItems.forEach((element) => {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");
  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = element.original;
  const galleryImg = document.createElement("img");
  galleryImg.classList.add("gallery__image");
  galleryImg.src = element.preview;
  galleryImg.setAttribute("data-source", element.original);
  galleryImg.alt = element.description;
  galleryItem.prepend(galleryLink);
  galleryLink.prepend(galleryImg);
  itemsArray.push(galleryItem);
});
gallery.prepend(...itemsArray);
gallery.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const imgSelected = e.target.dataset.source;
  const template = basicLightbox.create(
    `
    <img src="${imgSelected}" width="800" height="600">
    `,
    {
      onShow: () => {
        document.addEventListener("keydown", closeModal);
      },
      onClose: () => {
        document.removeEventListener("keydown", closeModal);
      },
    }
  );
  template.show();
  function closeModal(e) {
    if (e.key === "Escape") {
      template.close();
    }
  }
});
