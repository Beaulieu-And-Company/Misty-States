const simulate = require('../src/simulate');
const ball = require('../src/GatesAndParticles/Ball');
const pipe = require('../src/GatesAndParticles/Pipe');

test('simple test with not gate: white in, black out', () => {

    let white_ball_in = new ball.Ball(0, '+', 150, 30, 30);
    let white_ball_out = new ball.Ball(0, '+', 150, 150, 30);
    let pipe_gate = new pipe.Pipe(120, 60, 60, 60);

    let elements = [pipe_gate, white_ball_in];

    expect(JSON.stringify(simulate.getShapes(elements))).toStrictEqual(JSON.stringify([white_ball_out]));
});