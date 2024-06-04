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
            </nav>
    EOT;
}


function tamplate_footer(){
    echo <<<EOT
        <footer style="
        background-color: #333333;
        ">
            <p style="
            padding: 3rem;
            color: #ffffff;">&copy; Imam Ariadi & M Niko baihaqi</p>
        </footer>
    EOT;
}
