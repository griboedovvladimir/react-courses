<?php
$arrPost = [$_POST['token'], $_POST['value']];

$content = file_get_contents('https://tech.onliner.by/');

function parse($p1,$p2,$p3){
        $num1 = strpos($p1,$p2);
            if(!$num1) return 0 ;
        $num2 = substr($p1,$num1);
        return substr($num2,0,strpos($num2,$p3));
    }
        $link = file_get_contents("https://tech.onliner.by/");
    $start_teg = '   <div class="news-tidings__item news-tidings__item_1of3" data-post-date="1542603613">'; // Начало тегов от которых парсить
    $stop_teg = ' <div class="news-more news-more_visible">'; //До кудо парсить теги
   $news = parse($link,$start_teg,$stop_teg);

echo json_encode($news);