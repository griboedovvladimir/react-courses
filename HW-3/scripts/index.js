newsInit('people');

document.getElementById('navigate').addEventListener('click', (e) => {
    if (e.target.classList.contains('navigate-items')){
        newsInit(e.target.id);
    }
});

function newsInit(id) {
    renderNews(id);
    navSwitcher(id);
}

async function renderNews(id) {
// let response = await fetch('beckend.php',{method:'POST',
//     headers: {
//         "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
//     },}).then(res=>res.json())
    let response = await Promise.resolve('allOK');
    dataPrepere(response);
}

function navSwitcher(id) {
    let navItems = document.getElementsByClassName('navigate-items');
    for (el of navItems) {
        if (el.classList.contains('active')) {
            el.classList.remove('active')
        }
        if(el.id ===id){
            el.classList.add('active');
        }
    }
}

function dataPrepere(response) {
    console.log(response);
}