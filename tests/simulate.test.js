const simulate = require('../src/simulate');
const ball = require('../src/GatesAndParticles/Ball');
const not = require('../src/GatesAndParticles/Not');

test('simple simulate test with not gate: white in, black out', () => {

    let white_ball = new ball.Ball(0, '+', 15, 15, 5);
    let black_ball = new ball.Ball(1, '+', 15, 35, 5);
    let not_gate = new not.Not(10, 20, 10, 10);

    let elements = [not_gate, white_ball];

    expect(JSON.stringify(simulate.getShapes(elements))).toStrictEqual(JSON.stringify([black_ball]));
});

test('simple simulate test with not gate: black in, white out', () => {
    let white_ball = new ball.Ball(0, '+', 15, 35, 5);
    let black_ball = new ball.Ball(1, '+', 15, 15, 5);
    let not_gate = new not.Not(10, 20, 10, 10);

    let elements = [not_gate, black_ball];

    expect(JSON.stringify(simulate.getShapes(elements))).toStrictEqual(JSON.stringify([white_ball]));
});

test('simple simulate test with two consecutive not gates: white in, white out', () => {

    let white_ball_in = new ball.Ball(0, '+', 15, 15, 5);
    let white_ball_out = new ball.Ball(0, '+', 15, 45, 5);
    let not_gate_1 = new not.Not(10, 20, 10, 10);
    let not_gate_2 = new not.Not(10, 35, 10, 10);

    let elements = [not_gate_1, not_gate_2, particles];

    expect(JSON.stringify(simulate.getShapes(elements))).toStrictEqual(JSON.stringify([white_ball_out]));
});