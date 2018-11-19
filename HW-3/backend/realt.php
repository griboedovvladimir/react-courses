<?php
$Post = $_POST["id"];

function parse($p1,$p2,$p3){
        $num1 = strpos($p1,$p2);
            if(!$num1) return 0 ;
        $num2 = substr($p1,$num1);
        return substr($num2,0,strpos($num2,$p3));
    }
        $link = file_get_contents("https://realt.onliner.by/");
    $start_teg = 'class="news-wrapper';
    $stop_teg = 'scrolling-button__container-outer'; 
   $news = parse($link,$start_teg,$stop_teg);

echo json_encode($news);