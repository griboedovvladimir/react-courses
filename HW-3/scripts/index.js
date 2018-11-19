const preloader = new Image(200, 200);
preloader.src = 'preloader.svg';
preloader.style.cssText = 'position: absolute; top: 50%; left: 50%; margin: -100px 0 0 -100px';

function newsInit(id) {
    document.body.appendChild(preloader);
    renderNews(id);
    navSwitcher(id);
}

async function renderNews(id) {
// let response = await fetch('beckend.php',{
//     method:'POST',
//     headers: {
//         "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
//     },}).then(res=>res.json())
    let response = await Promise.resolve('allOK');
    dataPrepare(response);
}

function navSwitcher(id) {
    let navItems = document.getElementsByClassName('navigate-items');
    for (el of navItems) {
        el.classList.contains('active') ? el.classList.remove('active') : '';
        (el.id === id) ? el.classList.add('active') : '';
    }
}

function dataPrepare(response) {
    console.log(response);
}

document.getElementById('navigate').addEventListener('click', (e) => {
    if (e.target.classList.contains('navigate-items')) {
        newsInit(e.target.id);
    }
});

newsInit('people');