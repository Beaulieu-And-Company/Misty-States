const simulate = require('../src/simulate');
const ball = require('../src/GatesAndParticles/Ball');
const not = require('../src/GatesAndParticles/Not');
const cswap = require('../src/GatesAndParticles/CSwap');
const ccswap = require('../src/GatesAndParticles/CCSwap');
const swap = require('../src/GatesAndParticles/Swap');


test('simple test with a cswap gate above: white/black in, black/white out', () => {

    let black_ball_in_1 = new ball.Ball(1, '+', 150, 30, 30);
    let black_ball_in_2 = new ball.Ball(1, '+', 210, 30, 30);
    let white_ball_in = new ball.Ball(0, '+', 270, 30, 30);
    let black_ball_in_3 = new ball.Ball(1, '+', 330, 30, 30);

    let ccswap_gate = new ccswap.CCSwap(120, 60, 240, 60);

    let black_ball_out_1 = new ball.Ball(1, '+', 150, 150, 30);
    let black_ball_out_2 = new ball.Ball(1, '+', 210, 150, 30);
    let black_ball_out_3 = new ball.Ball(1, '+', 270, 150, 30);
    let white_ball_out = new ball.Ball(0, '+', 330, 150, 30);

    let elements = [black_ball_in_1, white_ball_in, black_ball_in_2, black_ball_in_3, ccswap_gate];

    expect(JSON.stringify(simulate.getShapes(elements))).toStrictEqual(JSON.stringify([black_ball_out_1, black_ball_out_2, black_ball_out_3, white_ball_out]));
});

test('mediocre test with two not gates and a cswap gate below: white/black in, white/black out', () => {

    let black_ball_in_1 = new ball.Ball(1, '+', 150, 30, 30);
    let black_ball_in_2 = new ball.Ball(1, '+', 210, 30, 30);
    let white_ball_in = new ball.Ball(0, '+', 270, 30, 30);
    let black_ball_in_3 = new ball.Ball(1, '+', 330, 30, 30);

    let not_gate_1 = new not.Not(120, 60, 60, 60);
    let not_gate_2 = new not.Not(180, 60, 60, 60);
    let not_gate_3 = new not.Not(240, 60, 60, 60);
    let not_gate_4 = new not.Not(300, 60, 60, 60);
    let ccswap_gate = new ccswap.CCSwap(120, 120, 240, 60);

    let white_ball_out_1 = new ball.Ball(0, '+', 150, 210, 30);
    let white_ball_out_2 = new ball.Ball(0, '+', 210, 210, 30);
    let black_ball_out = new ball.Ball(1, '+', 270, 210, 30);
    let white_ball_out_3 = new ball.Ball(0, '+', 330, 210, 30);

    let elements = [not_gate_1, not_gate_2, not_gate_3, not_gate_4, black_ball_in_1, black_ball_in_2, ccswap_gate, white_ball_in, black_ball_in_3];

    expect(JSON.stringify(simulate.getShapes(elements))).toStrictEqual(JSON.stringify([white_ball_out_1, white_ball_out_2, black_ball_out, white_ball_out_3]));
});

test('mediocre test with two not gates and a cswap gate above: white/black in, white/black out', () => {

    let black_ball_in_1 = new ball.Ball(1, '+', 150, 30, 30);
    let black_ball_in_2 = new ball.Ball(1, '+', 210, 30, 30);
    let white_ball_in = new ball.Ball(0, '+', 270, 30, 30);
    let black_ball_in_3 = new ball.Ball(1, '+', 330, 30, 30);

    let ccswap_gate = new ccswap.CCSwap(120, 60, 240, 60);
    let not_gate_1 = new not.Not(120, 120, 60, 60);
    let not_gate_2 = new not.Not(180, 120, 60, 60);
    let not_gate_3 = new not.Not(240, 120, 60, 60);
    let not_gate_4 = new not.Not(300, 120, 60, 60);

    let white_ball_out_1 = new ball.Ball(0, '+', 150, 210, 30);
    let white_ball_out_2 = new ball.Ball(0, '+', 210, 210, 30);
    let white_ball_out_3 = new ball.Ball(0, '+', 270, 210, 30);
    let black_ball_out = new ball.Ball(1, '+', 330, 210, 30);


    let elements = [not_gate_1, not_gate_2, not_gate_3, not_gate_4, black_ball_in_1, black_ball_in_2, ccswap_gate, white_ball_in, black_ball_in_3];

    expect(JSON.stringify(simulate.getShapes(elements))).toStrictEqual(JSON.stringify([white_ball_out_1, white_ball_out_2, white_ball_out_3, black_ball_out]));
});

test('hard test with two not gates and a cswap gate above and below: white/black in, black/white out', () => {

    let black_ball_in_1 = new ball.Ball(1, '+', 150, 30, 30);
    let black_ball_in_2 = new ball.Ball(1, '+', 210, 30, 30);
    let black_ball_in_3 = new ball.Ball(1, '+', 270, 30, 30);
    let white_ball_in_1 = new ball.Ball(0, '+', 330, 30, 30);
    let black_ball_in_4 = new ball.Ball(1, '+', 390, 30, 30);
    let black_ball_in_5 = new ball.Ball(1, '+', 450, 30, 30);
    let white_ball_in_2 = new ball.Ball(0, '+', 510, 30, 30);
    let black_ball_in_6 = new ball.Ball(1, '+', 570, 30, 30);

    let ccswap_gate_1 = new ccswap.CCSwap(120, 60, 240, 60);
    let ccswap_gate_2 = new ccswap.CCSwap(360, 60, 240, 60);

    let not_gate = new not.Not(120, 120, 60, 60);
    let ccswap_gate_3 = new ccswap.CCSwap(180, 120, 240, 60);
    let cswap_gate = new cswap.CSwap(420, 120, 180, 60);

    let ccswap_gate_4 = new ccswap.CCSwap(120, 180, 240, 60);
    let ccswap_gate_5 = new ccswap.CCSwap(360, 180, 240, 60);

    let white_ball_out_1 = new ball.Ball(0, '+', 150, 270, 30);
    let black_ball_out_1 = new ball.Ball(1, '+', 210, 270, 30);
    let white_ball_out_2 = new ball.Ball(0, '+', 270, 270, 30);
    let black_ball_out_2 = new ball.Ball(1, '+', 330, 270, 30);

    let black_ball_out_3 = new ball.Ball(1, '+', 390, 270, 30);
    let black_ball_out_4 = new ball.Ball(1, '+', 450, 270, 30);
    let black_ball_out_5 = new ball.Ball(1, '+', 510, 270, 30);
    let white_ball_out_3 = new ball.Ball(0, '+', 570, 270, 30);

    let elements = [black_ball_in_1, black_ball_in_2, black_ball_in_3, white_ball_in_1, black_ball_in_4, black_ball_in_5, white_ball_in_2, black_ball_in_6,
        ccswap_gate_1, ccswap_gate_2, ccswap_gate_3, ccswap_gate_4, ccswap_gate_5, not_gate, cswap_gate];

    expect(JSON.stringify(simulate.getShapes(elements))).toStrictEqual(JSON.stringify([white_ball_out_1, black_ball_out_1, white_ball_out_2, black_ball_out_2, black_ball_out_3, black_ball_out_4, black_ball_out_5, white_ball_out_3]));
});