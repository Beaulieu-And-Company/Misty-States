const simulate = require('../src/simulate');
const ball = require('../src/GatesAndParticles/Ball');
const not = require('../src/GatesAndParticles/Not');
const cnot = require('../src/GatesAndParticles/CNot');

test('simple test with a cnot gate: white/black in, black/white out', () => {

    let white_ball_in = new ball.Ball(0, '+', 150, 30, 30);
    let black_ball_in = new ball.Ball(1, '+', 210, 30, 30);
    let white_ball_out = new ball.Ball(0, '+', 150, 150, 30);
    let black_ball_out = new ball.Ball(1, '+', 210, 150, 30);
    let cnot_gate = new cnot.CNot(120, 60, 120, 60);

    let elements = [white_ball_in, black_ball_in, cnot_gate];

    expect(JSON.stringify(simulate.getShapes(elements))).toStrictEqual(JSON.stringify([white_ball_out, black_ball_out]));
});

test('simple test with a cnot gate: black/white in, black/black out', () => {

    let white_ball_in = new ball.Ball(0, '+', 210, 30, 30);
    let black_ball_in = new ball.Ball(1, '+', 150, 30, 30);
    let black_ball_out_1 = new ball.Ball(1, '+', 150, 150, 30);
    let black_ball_out_2 = new ball.Ball(1, '+', 210, 150, 30);
    let cnot_gate = new cnot.CNot(120, 60, 120, 60);

    let elements = [white_ball_in, black_ball_in, cnot_gate];

    expect(JSON.stringify(simulate.getShapes(elements))).toStrictEqual(JSON.stringify([black_ball_out_1, black_ball_out_2]));
});

test('mediocre test with two not gates and a swap gate below: white/black in, white/black out', () => {

    let white_ball_in = new ball.Ball(0, '+', 150, 30, 30);
    let black_ball_in = new ball.Ball(1, '+', 210, 30, 30);
    let black_ball_out_1 = new ball.Ball(1, '+', 150, 210, 30);
    let black_ball_out_2 = new ball.Ball(1, '+', 210, 210, 30);
    let cnot_gate = new cnot.CNot(120, 120, 120, 60);
    let not_gate_1 = new not.Not(120, 60, 60, 60);
    let not_gate_2 = new not.Not(180, 60, 60, 60);

    let elements = [not_gate_1, not_gate_2, white_ball_in, black_ball_in, cnot_gate];

    expect(JSON.stringify(simulate.getShapes(elements))).toStrictEqual(JSON.stringify([black_ball_out_1, black_ball_out_2]));
});

test('mediocre test with two not gates and a swap gate above: white/black in, white/black out', () => {

    let white_ball_in = new ball.Ball(0, '+', 150, 30, 30);
    let black_ball_in = new ball.Ball(1, '+', 210, 30, 30);
    let white_ball_out = new ball.Ball(0, '+', 210, 210, 30);
    let black_ball_out = new ball.Ball(1, '+', 150, 210, 30);
    let cnot_gate = new cnot.CNot(120, 60, 120, 60);
    let not_gate_1 = new not.Not(120, 120, 60, 60);
    let not_gate_2 = new not.Not(180, 120, 60, 60);

    let elements = [not_gate_1, not_gate_2, white_ball_in, black_ball_in, cnot_gate];

    expect(JSON.stringify(simulate.getShapes(elements))).toStrictEqual(JSON.stringify([black_ball_out, white_ball_out]));
});

test('mediocre test with two not gates and a swap gate above and below: white/black in, black/white out', () => {

    let white_ball_in = new ball.Ball(0, '+', 150, 30, 30);
    let black_ball_in = new ball.Ball(1, '+', 210, 30, 30);
    let black_ball_out_1 = new ball.Ball(1, '+', 150, 270, 30);
    let black_ball_out_2 = new ball.Ball(1, '+', 210, 270, 30);
    let cnot_gate_1 = new cnot.CNot(120, 60, 120, 60);
    let not_gate_1 = new not.Not(120, 120, 60, 60);
    let not_gate_2 = new not.Not(180, 120, 60, 60);
    let cnot_gate_2 = new cnot.CNot(120, 180, 120, 60);

    let elements = [not_gate_1, not_gate_2, white_ball_in, black_ball_in, cnot_gate_1, cnot_gate_2];

    expect(JSON.stringify(simulate.getShapes(elements))).toStrictEqual(JSON.stringify([black_ball_out_1, black_ball_out_2]));
});

test('hard test with two not gates and a swap gate above and below: white/black in, black/white out', () => {

    let white_ball_in_1 = new ball.Ball(0, '+', 150, 30, 30);
    let black_ball_in_2 = new ball.Ball(1, '+', 210, 30, 30);
    let white_ball_in_3 = new ball.Ball(0, '+', 270, 30, 30);
    let black_ball_in_4 = new ball.Ball(1, '+', 330, 30, 30);

    let black_ball_out_1 = new ball.Ball(1, '+', 150, 270, 30);
    let white_ball_out = new ball.Ball(0, '+', 210, 270, 30);
    let black_ball_out_2 = new ball.Ball(1, '+', 270, 270, 30);
    let black_ball_out_3 = new ball.Ball(1, '+', 330, 270, 30);

    let cnot_gate_1 = new cnot.CNot(120, 60, 120, 60);
    let cnot_gate_2 = new cnot.CNot(240, 60, 120, 60);
    let cnot_gate_3 = new cnot.CNot(180, 120, 120, 60);
    let cnot_gate_4 = new cnot.CNot(120, 180, 120, 60);
    let cnot_gate_5 = new cnot.CNot(240, 180, 120, 60);
    let not_gate_1 = new not.Not(120, 120, 60, 60);
    let not_gate_2 = new not.Not(300, 120, 60, 60);


    let elements = [white_ball_in_1, black_ball_in_2, white_ball_in_3, black_ball_in_4,
        cnot_gate_1, cnot_gate_2, cnot_gate_3, cnot_gate_4, cnot_gate_5, not_gate_1, not_gate_2];

    expect(JSON.stringify(simulate.getShapes(elements))).toStrictEqual(JSON.stringify([black_ball_out_1, white_ball_out, black_ball_out_2, black_ball_out_3]));
});