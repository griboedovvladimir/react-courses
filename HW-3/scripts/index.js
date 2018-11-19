

document.getElementById('navigate').addEventListener('click', (e)=>{
           newsInit(e.target.id);
});

function newsInit(id){
    renderNews(id);
    navSwitcher(id);
}

async function renderNews(id){
// let response = await fetch('beckend.php',{method:'POST',
//     headers: {
//         "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
//     },}).then(res=>res.json())
    let response = await Promise.resolve('allOK');
    dataPrepere(response);

}

function navSwitcher(id){

}

function dataPrepere(response){
console.log(response);
}