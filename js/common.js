document.addEventListener("DOMContentLoaded", initJs)

function initJs() {
	const d = document;
    const w = window;
    const gallery = d.querySelector('.gallery');
    


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



}

function autoHeight(el) {
	el.style.height = (el.scrollHeight) + "px";
}