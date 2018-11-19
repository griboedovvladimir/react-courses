const preloader = new Image(200, 200);
preloader.src = 'preloader.svg';
preloader.style.cssText = 'position: absolute; top: 50%; margin: -100px 0 0 0'

function newsInit(id = 'people') {
    document.body.appendChild(preloader);
    renderNews(id).then(() => {
        preloader.remove()
    });
    navSwitcher(id);
}

async function renderNews(id) {
    let response = await fetch(`backend/${id}.php`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        },
    }).then(res => res.json());
    dataRender(dataParser(response));
}

function navSwitcher(id) {
    let navItems = document.getElementsByClassName('navigate-items');
    for (let el of navItems) {
        el.classList.contains('active') ? el.classList.remove('active') : '';
        (el.id === id) ? el.classList.add('active') : '';
    }
}

function dataParser(response) {
    let data = response.split(' class="news-tidings__item news-tidings__item_1of3 news-tidings__item_condensed "');
    data.pop();
    data.shift();
    let parsedData = data.reduce((cnt, el) => {
        let img = el.split(`<div class="news-tidings__image news-helpers_hide_mobile-small" style="background-image: url(`)[1].split(`);"></div>`)[0];
        let link = 'https://realt.onliner.by' + el.split(`<a href="`)[1].split(`" class="news-tidings__stub"></a>`)[0];
        let title = el.split(`<span class="news-helpers_hide_mobile-small">`)[1].split(`</span`)[0];
        let discription = el.split(`<div class="news-tidings__speech news-helpers_hide_mobile-small">`)[1].split(`</div>`)[0].trim();
        cnt.push({img, link, title, discription});
        return cnt;
    }, []);
    return (parsedData)
}

function dataRender(data) {
    let news = data.reduce((cnt, el) => {
        let article = `${cnt}
    <div class="news-wrapper">
    <img class = "news-img" src = "${el.img}">
    <a class = "news-title" href = "${el.link}">${el.title}</a>
    <div class = "news-discription">${el.discription}</div>
</div>
    `;
        return article;
    }, '');
    document.getElementById('newsWrapper').innerHTML = news;
}

document.getElementById('navigate').addEventListener('click', (e) => {
    if (e.target.classList.contains('navigate-items')) {
        newsInit(e.target.id);
    }
});

newsInit();