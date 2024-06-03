class FiniteAutomata {
    constructor(states, alphabet, transitionFunction, startState, acceptStates) {
        this.states = states;
        this.alphabet = alphabet;
        this.transitionFunction = transitionFunction;
        this.startState = startState;
        this.acceptStates = acceptStates;
    }

    validateString(input) {
        let currentState = this.startState;

        for (const symbol of input) {
            if (!this.alphabet.includes(symbol)) {
                return { valid: false, error: `Invalid symbol: ${symbol}` };
            }
            currentState = this.transitionFunction[currentState][symbol];
        }

        return { valid: this.acceptStates.includes(currentState), error: null };
    }
}

const exampleAutomata = {
    example1: new FiniteAutomata(
        ['q0', 'q1', 'q2'],
        ['0', '1'],
        {
            'q0': { '0': 'q1', '1': 'q0' },
            'q1': { '0': 'q2', '1': 'q0' },
            'q2': { '0': 'q2', '1': 'q2' }
        },
        'q0',
        ['q2']
    ),
    example2: new FiniteAutomata(
        ['q0', 'q1'],
        ['a', 'b'],
        {
            'q0': { 'a': 'q1', 'b': 'q0' },
            'q1': { 'a': 'q0', 'b': 'q1' }
        },
        'q0',
        ['q1']
    )
};

let currentAutomata = exampleAutomata.example1;

document.getElementById('automata-select').addEventListener('change', function(event) {
    const selection = event.target.value;
    if (selection === 'custom') {
        document.getElementById('custom-automata-form').style.display = 'block';
        currentAutomata = null;
    } else {
        document.getElementById('custom-automata-form').style.display = 'none';
        currentAutomata = exampleAutomata[selection];
        drawAutomata(currentAutomata);
    }
});

document.getElementById('create-automata-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const states = document.getElementById('states').value.split(',').map(s => s.trim());
    const alphabet = document.getElementById('alphabet').value.split(',').map(s => s.trim());
    const transitions = document.getElementById('transitions').value.split(';').map(t => t.trim());
    const startState = document.getElementById('start-state').value.trim();
    const acceptStates = document.getElementById('accept-states').value.split(',').map(s => s.trim());

    const transitionFunction = {};
    states.forEach(state => {
        transitionFunction[state] = {};
    });
    transitions.forEach(transition => {
        const [fromState, symbol, toState] = transition.split(',').map(t => t.trim());
        transitionFunction[fromState][symbol] = toState;
    });

    currentAutomata = new FiniteAutomata(states, alphabet, transitionFunction, startState, acceptStates);
    drawAutomata(currentAutomata);
});

document.getElementById('input-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const inputString = document.getElementById('input-string').value.trim();
    const resultDiv = document.getElementById('result');

    if (!currentAutomata) {
        resultDiv.innerText = 'Error: Please select or create an automata first.';
        resultDiv.style.color = 'red';
        return;
    }

    if (inputString === '') {
        resultDiv.innerText = 'Error: Input string cannot be empty.';
        resultDiv.style.color = 'red';
        return;
    }

    const result = currentAutomata.validateString(inputString);
    if (result.error) {
        resultDiv.innerText = `Error: ${result.error}`;
        resultDiv.style.color = 'red';
    } else {
        resultDiv.innerText = result.valid ? 'Accepted' : 'Rejected';
        resultDiv.style.color = result.valid ? 'green' : 'red';
    }
});

function drawAutomata(automata) {
    const container = d3.select('#automata-container');
    container.selectAll('*').remove();

    const width = 600;
    const height = 400;

    const svg = container.append('svg')
        .attr('width', width)
        .attr('height', height);

    const statePositions = {};
    const stateRadius = 30;
    const centerX = width / 2;
    const centerY = height / 2;

    automata.states.forEach((state, index) => {
        const angle = 2 * Math.PI * (index / automata.states.length);
        const x = centerX + 150 * Math.cos(angle);
        const y = centerY + 150 * Math.sin(angle);
        statePositions[state] = { x, y };
        svg.append('circle')
            .attr('cx', x)
            .attr('cy', y)
            .attr('r', stateRadius)
            .attr('fill', 'white')
            .attr('stroke', 'black');
        svg.append('text')
            .attr('x', x)
            .attr('y', y + 5)
            .attr('text-anchor', 'middle')
            .text(state);
        if (automata.acceptStates.includes(state)) {
            svg.append('circle')
                .attr('cx', x)
                .attr('cy', y)
                .attr('r', stateRadius - 5)
                .attr('fill', 'none')
                .attr('stroke', 'black');
        }
    });

    Object.entries(automata.transitionFunction).forEach(([fromState, transitions]) => {
        Object.entries(transitions).forEach(([symbol, toState]) => {
            const fromPos = statePositions[fromState];
            const toPos = statePositions[toState];
            const dx = toPos.x - fromPos.x;
            const dy = toPos.y - fromPos.y;
            const angle = Math.atan2(dy, dx);
            const offsetX = Math.cos(angle) * stateRadius;
            const offsetY = Math.sin(angle) * stateRadius;

            svg.append('line')
                .attr('x1', fromPos.x + offsetX)
                .attr('y1', fromPos.y + offsetY)
                .attr('x2', toPos.x - offsetX)
                .attr('y2', toPos.y - offsetY)
                .attr('stroke', 'black');
            svg.append('text')
                .attr('x', (fromPos.x + toPos.x) / 2)
                .attr('y', (fromPos.y + toPos.y) / 2 - 10)
                .attr('text-anchor', 'middle')
                .text(symbol);
        });
    });
}

// Initialize with example automata
drawAutomata(currentAutomata);
