const currPos = {};

const figures = {
    p: {
        model: './images/figures/black_pawn.svg',

        check() {},
        move() {},
    },
    k: {
        model: './images/figures/black_king.svg',

        check() {},
        move() {},
    },
    q: {
        model: './images/figures/black_queen.svg',

        check() {},
        move() {},
    },
    b: {
        model: './images/figures/black_bishop.svg',

        check() {},
        move() {},
    },
    n: {
        model: './images/figures/black_unicorn.svg',

        check() {},
        move() {},
    },
    r: {
        model: './images/figures/black_rook.svg',

        check() {},
        move() {},
    },
};

const initPos = {
    A2: ['p1w', true],
    B2: ['p2w', true],
    C2: ['p3w', true],
    D2: ['p4w', true],
    E2: ['p5w', true],
    F2: ['p6w', true],
    G2: ['p7w', true],
    H2: ['p8w', true],

    A1: ['r1w', true],
    B1: ['n1w'],
    C1: ['b1w'],
    D1: ['q1w'],
    E1: ['k1w', true],
    F1: ['b2w'],
    G1: ['n2w'],
    H1: ['r2w', true],

    A8: ['r1b', true],
    B8: ['n1b'],
    C8: ['b1b'],
    D8: ['q1b'],
    E8: ['k1b', true],
    F8: ['b2b'],
    G8: ['n2b'],
    H8: ['r2b', true],

    A7: ['p1b', true],
    B7: ['p2b', true],
    C7: ['p3b', true],
    D7: ['p4b', true],
    E7: ['p5b', true],
    F7: ['p6b', true],
    G7: ['p7b', true],
    H7: ['p8b', true],
};
