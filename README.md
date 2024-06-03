# tg_webImplementasiFA
Implementasi teori bahasa dan auto mata

IMAM GANTENG

cek [pull]



tamplate eksempel

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