const wrapper = document.querySelector('.wrapper');

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

const currPos = { ...initPos };

const createElem = (className, tagName, content, attrs = {}) => {
    const elem = document.createElement(tagName);
    elem.className = className;
    elem.textContent = content;

    if (attrs) for (const [name, value] of Object.entries(attrs)) elem.setAttribute(name, value);

    return elem;
};

const drawLetters = () => {
    const letters = createElem('lettersRow', 'div');
    for (let i = 0; i < 8; i++) letters.append(createElem('letter', 'div', String.fromCharCode(65 + i)));

    return letters;
};

const drawNumbers = () => {
    const numbers = createElem('numbersColumn', 'div');
    for (let i = 8; i != 0; i--) numbers.append(createElem('num', 'div', i));

    return numbers;
};

const createChessBoard = (elem) => {
    const container = createElem('container', 'div');

    const drawBoard = () => {
        const chessBoard = createElem('chessBoard', 'div');

        for (let i = 8; i != 0; i--) {
            const tr = createElem('tableRow', 'div');

            for (let j = 0; j < 8; j++) {
                const td = createElem(`cell ${i % 2 == j % 2 ? '' : 'blackCell'}`, 'div');
                const figure = initPos[String.fromCharCode(65 + j) + i];

                if (figure) {
                    const img = new Image();
                    img.src = figures[figure[0][0]].model;
                    if (figure[0][2] === 'w') img.style = 'filter: invert(100%)';
                    td.appendChild(img);
                }

                td.classList.add(String.fromCharCode(65 + j) + i);

                tr.appendChild(td);
            }
            chessBoard.appendChild(tr);
        }

        chessBoard.addEventListener('click', (event) => {
            if (chessBoard.querySelector('.targetCell'))
                chessBoard.querySelector('.targetCell').classList.toggle('targetCell');

            const cell = event.target.closest('.cell');
            cell.classList.toggle('targetCell');
        });

        const chessContainer = createElem('chessContainer', 'div');
        chessContainer.append(drawNumbers(), chessBoard, drawNumbers());

        return chessContainer;
    };

    const board = drawBoard();
    container.append(drawLetters(), board, drawLetters());
    elem.appendChild(container);
};

createChessBoard(wrapper);
