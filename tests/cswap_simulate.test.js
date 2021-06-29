const simulate = require('../src/simulate');
const ball = require('../src/GatesAndParticles/Ball');
const not = require('../src/GatesAndParticles/Not');
const cswap = require('../src/GatesAndParticles/CSwap');
const swap = require('../src/GatesAndParticles/Swap');


test('simple test with a cswap gate above: white/black in, black/white out', () => {

    let black_ball_in_1 = new ball.Ball(1, '+', 150, 30, 30);
    let white_ball_in = new ball.Ball(0, '+', 210, 30, 30);
    let black_ball_in_2 = new ball.Ball(1, '+', 270, 30, 30);

    let cswap_gate = new cswap.CSwap(120, 60, 180, 60);

    let black_ball_out_1 = new ball.Ball(1, '+', 150, 150, 30);
    let black_ball_out_2 = new ball.Ball(1, '+', 210, 150, 30);
    let white_ball_out = new ball.Ball(0, '+', 270, 150, 30);

    let elements = [black_ball_in_1, white_ball_in, black_ball_in_2, cswap_gate];

    expect(JSON.stringify(simulate.getShapes(elements))).toStrictEqual(JSON.stringify([black_ball_out_1, black_ball_out_2, white_ball_out]));
});

test('mediocre test with two not gates and a cswap gate below: white/black in, white/black out', () => {

    let black_ball_in_1 = new ball.Ball(1, '+', 150, 30, 30);
    let white_ball_in = new ball.Ball(0, '+', 210, 30, 30);
    let black_ball_in_2 = new ball.Ball(1, '+', 270, 30, 30);

    let not_gate_1 = new not.Not(120, 60, 60, 60);
    let not_gate_2 = new not.Not(180, 60, 60, 60);
    let not_gate_3 = new not.Not(240, 60, 60, 60);
    let cswap_gate = new cswap.CSwap(120, 120, 180, 60);

    let white_ball_out_1 = new ball.Ball(0, '+', 150, 210, 30);
    let black_ball_out = new ball.Ball(1, '+', 210, 210, 30);
    let white_ball_out_2 = new ball.Ball(0, '+', 270, 210, 30);


    let elements = [not_gate_1, not_gate_2, not_gate_3, black_ball_in_1, black_ball_in_2, cswap_gate, white_ball_in];

    expect(JSON.stringify(simulate.getShapes(elements))).toStrictEqual(JSON.stringify([white_ball_out_1, black_ball_out, white_ball_out_2]));
});

test('mediocre test with two not gates and a cswap gate above: white/black in, white/black out', () => {

    let black_ball_in_1 = new ball.Ball(1, '+', 150, 30, 30);
    let white_ball_in = new ball.Ball(0, '+', 210, 30, 30);
    let black_ball_in_2 = new ball.Ball(1, '+', 270, 30, 30);

    let cswap_gate = new cswap.CSwap(120, 60, 180, 60);
    let not_gate_1 = new not.Not(120, 120, 60, 60);
    let not_gate_2 = new not.Not(180, 120, 60, 60);
    let not_gate_3 = new not.Not(240, 120, 60, 60);

    let white_ball_out_1 = new ball.Ball(0, '+', 150, 210, 30);
    let white_ball_out_2 = new ball.Ball(0, '+', 210, 210, 30);
    let black_ball_out = new ball.Ball(1, '+', 270, 210, 30);



    let elements = [not_gate_1, not_gate_2, not_gate_3, black_ball_in_1, black_ball_in_2, cswap_gate, white_ball_in];


    expect(JSON.stringify(simulate.getShapes(elements))).toStrictEqual(JSON.stringify([white_ball_out_1, white_ball_out_2, black_ball_out]));
});

test('hard test with two not gates and a cswap gate above and below: white/black in, black/white out', () => {

    let black_ball_in_1 = new ball.Ball(1, '+', 150, 30, 30);
    let white_ball_in_1 = new ball.Ball(0, '+', 210, 30, 30);
    let black_ball_in_2 = new ball.Ball(1, '+', 270, 30, 30);
    let black_ball_in_3 = new ball.Ball(1, '+', 330, 30, 30);
    let white_ball_in_2 = new ball.Ball(0, '+', 390, 30, 30);
    let black_ball_in_4 = new ball.Ball(1, '+', 450, 30, 30);

    let cswap_gate_1 = new cswap.CSwap(120, 60, 180, 60);
    let cswap_gate_2 = new cswap.CSwap(300, 60, 180, 60);
    let not_gate = new not.Not(120, 120, 60, 60);
    let cswap_gate_3 = new cswap.CSwap(180, 120, 180, 60);
    let swap_gate = new swap.Swap(360, 120, 120, 60);
    let cswap_gate_4 = new cswap.CSwap(120, 180, 180, 60);
    let cswap_gate_5 = new cswap.CSwap(300, 180, 180, 60);

    let white_ball_out_1 = new ball.Ball(0, '+', 150, 270, 30);
    let black_ball_out_1 = new ball.Ball(1, '+', 210, 270, 30);
    let black_ball_out_2 = new ball.Ball(1, '+', 270, 270, 30);
    let white_ball_out_2 = new ball.Ball(0, '+', 330, 270, 30);
    let white_ball_out_3 = new ball.Ball(0, '+', 390, 270, 30);
    let black_ball_out_3 = new ball.Ball(1, '+', 450, 270, 30);

    let elements = [black_ball_in_1, white_ball_in_1, black_ball_in_2, black_ball_in_3, black_ball_in_4, white_ball_in_2,
                    cswap_gate_1, cswap_gate_2, cswap_gate_3, cswap_gate_4, cswap_gate_5, not_gate, swap_gate];

    expect(JSON.stringify(simulate.getShapes(elements))).toStrictEqual(JSON.stringify([white_ball_out_1, black_ball_out_1, black_ball_out_2, white_ball_out_2, white_ball_out_3, black_ball_out_3]));
});