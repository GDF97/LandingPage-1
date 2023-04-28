const btnLinks = document.querySelectorAll('#menu');

function getDistanceFromTheTop(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
  }

function scrollToSection(event) {
    event.preventDefault();
    const distanceFromTheTop = getDistanceFromTheTop(event.target);
    smoothScrollTo(0, distanceFromTheTop);
}


btnLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });

  function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== "undefined" ? duration : 400;
  
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1)
        return (distance / 2) * time * time * time * time + from;
      return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60);
  }

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}


const btnMountain = document.getElementById('btnMountain');
const btnRiver = document.getElementById('btnRiver');
const btnFauna = document.getElementById('btnFauna');

const modalMountain = document.getElementById('mountain');
const modalRiver = document.getElementById('river');
const modalFauna = document.getElementById('fauna')

const btnOverview = document.getElementById('btnOverview');
const btnGallery = document.getElementById('btnGallery');
const btnMaps = document.getElementById('btnMaps');

const textOverviewMountain = document.getElementById('overviewMountain');
const textGalleryMountain = document.getElementById('galleryMountain');
const textMapsMountain = document.getElementById('mapsMountain');

const textOverviewRiver = document.getElementById('overviewRiver');
const textGalleryRiver = document.getElementById('galleryRiver');
const textMapsRiver = document.getElementById('mapsRiver');

const textOverviewFauna = document.getElementById('overviewFauna');
const textGalleryFauna = document.getElementById('galleryFauna');
const textMapsFauna = document.getElementById('mapsFauna');


btnMountain.addEventListener('click', ()=>{
    modalMountain.classList.replace('inactive', 'active');
    modalRiver.classList.replace('active', 'inactive');
    modalFauna.classList.replace('active', 'inactive');
})

btnRiver.addEventListener('click', ()=>{
    modalRiver.classList.replace('inactive', 'active');
    modalMountain.classList.replace('active', 'inactive');
    modalFauna.classList.replace('active', 'inactive');
})

btnFauna.addEventListener('click', ()=>{
    modalFauna.classList.replace('inactive', 'active');
    modalRiver.classList.replace('active', 'inactive');
    modalMountain.classList.replace('active', 'inactive');
})

btnOverview.addEventListener('click', ()=>{
    if(modalMountain.classList.contains('active')){
        textOverviewMountain.classList.replace('inactive', 'active');
        textGalleryMountain.classList.replace('active', 'inactive');
        textMapsMountain.classList.replace('active', 'inactive');
    }
    else if(modalRiver.classList.contains('active')){
        textOverviewRiver.classList.replace('inactive', 'active');
        textGalleryRiver.classList.replace('active', 'inactive');
        textMapsRiver.classList.replace('active', 'inactive');
    }
    else if(modalFauna.classList.contains('active')){
        textOverviewFauna.classList.replace('inactive', 'active');
        textGalleryFauna.classList.replace('active', 'inactive');
        textMapsFauna.classList.replace('active', 'inactive');
    }
    console.log('overview');
})

btnGallery.addEventListener('click', ()=>{
    if(modalMountain.classList.contains('active')){
        textGalleryMountain.classList.replace('inactive', 'active');
        textOverviewMountain.classList.replace('active', 'inactive');
        textMapsMountain.classList.replace('active', 'inactive');
    }
    else if(modalRiver.classList.contains('active')){
        textGalleryRiver.classList.replace('inactive', 'active');
        textOverviewRiver.classList.replace('active', 'inactive');
        textMapsRiver.classList.replace('active', 'inactive');
    }
    else if(modalFauna.classList.contains('active')){
        textGalleryFauna.classList.replace('inactive', 'active');
        textOverviewFauna.classList.replace('active', 'inactive');
        textMapsFauna.classList.replace('active', 'inactive');
    }
    console.log('gallery');
})

btnMaps.addEventListener('click', ()=>{
    if(modalMountain.classList.contains('active')){
        textMapsMountain.classList.replace('inactive', 'active');
        textOverviewMountain.classList.replace('active', 'inactive');
        textGalleryMountain.classList.replace('active', 'inactive');
    }
    else if(modalRiver.classList.contains('active')){
        textMapsRiver.classList.replace('inactive', 'active');
        textOverviewRiver.classList.replace('active', 'inactive');
        textGalleryRiver.classList.replace('active', 'inactive');
    }
    else if(modalFauna.classList.contains('active')){
        textMapsFauna.classList.replace('inactive', 'active');
        textOverviewFauna.classList.replace('active', 'inactive');
        textGalleryFauna.classList.replace('active', 'inactive');
    }
    console.log('maps')
})
