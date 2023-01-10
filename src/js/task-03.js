const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEL = document.querySelector(".gallery");


images.map(image => (
  galleryEL.insertAdjacentHTML('afterbegin',`
    <li class="item">
      <img class="img" src="${image.url} alt="${image.alt}">
    </li>
  `)

));

const imgEl = document.querySelectorAll(".img");
const styleImg = imgEl.forEach(img =>{
  img.style.width = "400px";
})

// const itemEl = document.querySelectorAll(".item");
// const styleItem = widthEl.forEach(item =>{
//   item.style.;
// });
 


