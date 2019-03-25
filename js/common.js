document.addEventListener("DOMContentLoaded", initJs)

function initJs() {
	const d = document;
    const w = window;
    const gallery = d.querySelector('.gallery');
    const sslider = d.querySelector('.comp3--slider .comp3__items');
    const pslider = d.querySelector('.portfolio__list');
    const vslider = d.querySelectorAll('.comp6__items');


    if(gallery) {
        const filter   = [...d.querySelectorAll('.gallery__filter li')];
        const articles = [...d.querySelectorAll('.gallery__article')];
        filter.forEach(el => {
            el.addEventListener('click', e => {
                e.preventDefault();
                filter.forEach(el => el.classList.remove('active'));
                el.classList.add('active');
                const data = el.dataset.filter;
                if(data =='all') {
                    articles.forEach(el => el.style.display = 'block');
                } else {
                    const targ = d.querySelectorAll('.gallery__article[data-filter='+data+']');
                    articles.forEach(el => el.style.display = 'none');
                    targ.forEach(el => el.style.display = 'block');
                };
            });
        });
    }

    const slickObj = {
        service: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true
        },
        portfolio: {
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: true
        },
        blog: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true 
        }
    }


    $(sslider).slick(slickObj.service);
    $(pslider).slick(slickObj.portfolio);
    vslider.forEach(sl => $(sl).slick(slickObj.blog));





}

function autoHeight(el) {
	el.style.height = (el.scrollHeight) + "px";
}

function initMap() {
    const gMap = {
      Keletska: {
        position: {lat: 49.224684, lng: 28.416439},
        map() { return newMap('contacts-map', this.position) }
      }
    };
    for(let key in gMap) {
        gMarker(gMap[key].position, gMap[key].map() );
    }
    function gMarker(position, map) {
      return new google.maps.Marker({
          position,
          map
      })
    }
    function newMap(id, position) {
      return new google.maps.Map(document.getElementById(id), {zoom: 16, center: position})
    }
  }