


console.log('Working');
fetch('beckend.php',{method:'POST',
    headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
    },}).then(res=> {res.text().then(result => console.log(JSON.parse(result).split(' <div class="news-tidings__item news-tidings__item_1of3 news-tidings__item_condensed "')))}) ;

document.getElementById('navigate').addEventListener('click', (e)=>{
           newsInit(e.target.id);
});

function newsInit(id){
    renderNews(id);
    navSwitcher(id);
}

async function renderNews(id){
let response = await fetch('beckend.php',{method:'POST',
    headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
    },}).then(res=>res.json())
}

function navSwitcher(id){

}

function dataPrepere(response){

}