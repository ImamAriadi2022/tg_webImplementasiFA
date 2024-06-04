<?php

include 'tamplate.php';
?>

<?=tamplate_header('Home')?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Finite Automata Simulator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 20px;
        }
        canvas {
            border: 1px solid black;
            margin-top: 20px;
        }
        #automata-container {
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <h1>Finite Automata Simulator</h1>

    <div>
        <label for="automata-select">Choose Automata:</label>
        <select id="automata-select">
            <option value="example1">Example 1</option>
            <option value="example2">Example 2</option>
            <option value="custom">Custom</option>
        </select>
    </div>

    <div id="custom-automata-form" style="display: none;">
        <h2>Create Custom Automata</h2>
        <form id="create-automata-form">
            <label for="states">States (comma separated):</label>
            <input type="text" id="states" required>
            <br>
            <label for="alphabet">Alphabet (comma separated):</label>
            <input type="text" id="alphabet" required>
            <br>
            <label for="transitions">Transitions (e.g., q0,0,q1; q1,1,q2):</label>
            <input type="text" id="transitions" required>
            <br>
            <label for="start-state">Start State:</label>
            <input type="text" id="start-state" required>
            <br>
            <label for="accept-states">Accept States (comma separated):</label>
            <input type="text" id="accept-states" required>
            <br>
            <button type="submit">Create Automata</button>
        </form>
    </div>

    <form id="input-form">
        <label for="input-string">Input String:</label>
        <input type="text" id="input-string" required>
        <button type="submit">Validate</button>
    </form>
    <div id="result"></div>
    <div id="automata-container"></div>

    <?=tamplate_footer()?>

    <script src="https://d3js.org/d3.v6.min.js"></script>
    <script src="automata.js"></script>
</body>
</html>

