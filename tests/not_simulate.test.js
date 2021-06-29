const simulate = require('../src/simulate');
const ball = require('../src/GatesAndParticles/Ball');
const not = require('../src/GatesAndParticles/Not');
const swap = require('../src/GatesAndParticles/Swap');

test('simple test with not gate: white in, black out', () => {

    let white_ball = new ball.Ball(0, '+', 150, 30, 30);
    let black_ball = new ball.Ball(1, '+', 150, 150, 30);
    let not_gate = new not.Not(120, 60, 60, 60);

    let elements = [not_gate, white_ball];

    expect(JSON.stringify(simulate.getShapes(elements))).toStrictEqual(JSON.stringify([black_ball]));
});

test('simple test with not gate: black in, white out', () => {
    let white_ball = new ball.Ball(0, '+', 150, 150, 30);
    let black_ball = new ball.Ball(1, '+', 150, 30, 30);
    let not_gate = new not.Not(120, 60, 60, 60);

    let elements = [not_gate, black_ball];

    expect(JSON.stringify(simulate.getShapes(elements))).toStrictEqual(JSON.stringify([white_ball]));
});

test('simple test with two consecutive not gates: white in, white out', () => {

    let white_ball_in = new ball.Ball(0, '+', 150, 30, 30);
    let white_ball_out = new ball.Ball(0, '+', 150, 210, 30);
    let not_gate_1 = new not.Not(120, 60, 60, 60);
    let not_gate_2 = new not.Not(120, 120, 60, 60);

    let elements = [not_gate_1, not_gate_2, white_ball_in];

    expect(JSON.stringify(simulate.getShapes(elements))).toStrictEqual(JSON.stringify([white_ball_out]));
});