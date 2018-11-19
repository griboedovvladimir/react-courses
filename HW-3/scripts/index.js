
console.log('Working');

fetch('beckend.php',{method:'POST',
   headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
    },}).then(res=> {res.json().then(console.log)}) ;
