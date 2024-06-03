<?php


function tamplate_header($title) {
    echo <<<EOT
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>$title</title>
            <link href="style.css" rel="stylesheet" type="text/css">
        </head>
        <body>
            <nav>
                <h1>Web Finite State Automata</h1>
                <a href="../index.php">Home</a>
                <a href= "game/game.php">Impelemtasi Game</a>
                <a href="materi/materi.html">Dokumentasi Soal</a>
            </nav>
    EOT;
}


function tamplate_footer(){
    echo <<<EOT
        <footer>
            <p>&copy; 2022 Web Finite State Automata</p>
        </footer>
    EOT;
}
