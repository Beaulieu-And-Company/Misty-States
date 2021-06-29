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

test('simple test with a swap gate above: white/black in, black/white out', () => {

    let white_ball_in = new ball.Ball(0, '+', 150, 30, 30);
    let black_ball_in = new ball.Ball(1, '+', 210, 30, 30);
    let white_ball_out = new ball.Ball(0, '+', 210, 150, 30);
    let black_ball_out = new ball.Ball(1, '+', 150, 150, 30);
    let swap_gate = new swap.Swap(120, 60, 120, 60);

    let elements = [white_ball_in, black_ball_in, swap_gate];

    expect(JSON.stringify(simulate.getShapes(elements))).toStrictEqual(JSON.stringify([black_ball_out, white_ball_out]));
});

test('mediocre test with two not gates and a swap gate below: white/black in, white/black out', () => {

    let white_ball_in = new ball.Ball(0, '+', 150, 30, 30);
    let black_ball_in = new ball.Ball(1, '+', 210, 30, 30);
    let white_ball_out = new ball.Ball(0, '+', 150, 210, 30);
    let black_ball_out = new ball.Ball(1, '+', 210, 210, 30);
    let swap_gate = new swap.Swap(120, 120, 120, 60);
    let not_gate_1 = new not.Not(120, 60, 60, 60);
    let not_gate_2 = new not.Not(180, 60, 60, 60);

    let elements = [not_gate_1, not_gate_2, white_ball_in, black_ball_in, swap_gate];

    expect(JSON.stringify(simulate.getShapes(elements))).toStrictEqual(JSON.stringify([white_ball_out, black_ball_out]));
});

test('mediocre test with two not gates and a swap gate above: white/black in, white/black out', () => {

    let white_ball_in = new ball.Ball(0, '+', 150, 30, 30);
    let black_ball_in = new ball.Ball(1, '+', 210, 30, 30);
    let white_ball_out = new ball.Ball(0, '+', 150, 210, 30);
    let black_ball_out = new ball.Ball(1, '+', 210, 210, 30);
    let swap_gate = new swap.Swap(120, 60, 120, 60);
    let not_gate_1 = new not.Not(120, 120, 60, 60);
    let not_gate_2 = new not.Not(180, 120, 60, 60);

    let elements = [not_gate_1, not_gate_2, white_ball_in, black_ball_in, swap_gate];

    expect(JSON.stringify(simulate.getShapes(elements))).toStrictEqual(JSON.stringify([white_ball_out, black_ball_out]));
});

test('mediocre test with two not gates and a swap gate above and below: white/black in, black/white out', () => {

    let white_ball_in = new ball.Ball(0, '+', 150, 30, 30);
    let black_ball_in = new ball.Ball(1, '+', 210, 30, 30);
    let white_ball_out = new ball.Ball(0, '+', 210, 270, 30);
    let black_ball_out = new ball.Ball(1, '+', 150, 270, 30);
    let swap_gate_1 = new swap.Swap(120, 60, 120, 60);
    let not_gate_1 = new not.Not(120, 120, 60, 60);
    let not_gate_2 = new not.Not(180, 120, 60, 60);
    let swap_gate_2 = new swap.Swap(120, 180, 120, 60);

    let elements = [not_gate_1, not_gate_2, white_ball_in, black_ball_in, swap_gate_1, swap_gate_2];

    expect(JSON.stringify(simulate.getShapes(elements))).toStrictEqual(JSON.stringify([black_ball_out, white_ball_out]));
});

test('hard test with two not gates and a swap gate above and below: white/black in, black/white out', () => {

    let white_ball_in_1 = new ball.Ball(0, '+', 150, 30, 30);
    let black_ball_in_2 = new ball.Ball(1, '+', 210, 30, 30);
    let white_ball_in_3 = new ball.Ball(0, '+', 270, 30, 30);
    let black_ball_in_4 = new ball.Ball(1, '+', 330, 30, 30);

    let black_ball_out_1 = new ball.Ball(1, '+', 150, 270, 30);
    let white_ball_out_2 = new ball.Ball(0, '+', 210, 270, 30);
    let black_ball_out_3 = new ball.Ball(1, '+', 270, 270, 30);
    let white_ball_out_4 = new ball.Ball(0, '+', 330, 270, 30);

    let swap_gate_1 = new swap.Swap(120, 60, 120, 60);
    let swap_gate_2 = new swap.Swap(240, 60, 120, 60);
    let swap_gate_3 = new swap.Swap(180, 120, 120, 60);
    let swap_gate_4 = new swap.Swap(120, 180, 120, 60);
    let swap_gate_5 = new swap.Swap(240, 180, 120, 60);
    let not_gate_1 = new not.Not(120, 120, 60, 60);
    let not_gate_2 = new not.Not(300, 120, 60, 60);


    let elements = [white_ball_in_1, black_ball_in_2, white_ball_in_3, black_ball_in_4,
        swap_gate_1, swap_gate_2, swap_gate_3, swap_gate_4, swap_gate_5, not_gate_1, not_gate_2];

    expect(JSON.stringify(simulate.getShapes(elements))).toStrictEqual(JSON.stringify([black_ball_out_1, white_ball_out_2, black_ball_out_3, white_ball_out_4]));
});