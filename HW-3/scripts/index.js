
console.log('Working');
fetch('beckend.php',{method:'POST',
    headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
    },}).then(res=> {res.text().then(result => console.log(JSON.parse(result).split(' <div class="news-tidings__item news-tidings__item_1of3 news-tidings__item_condensed "')))}) ;
