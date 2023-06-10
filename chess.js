const wrapper = document.querySelector('.wrapper');

const figures = {
    p: {
        name: 'pawn',
        model: './images/figures/black_pawn.svg',

        check() {},
        move() {},
    },
    k: {
        name: 'king',
        model: './images/figures/black_king.svg',

        check() {},
        move() {},
    },
    q: {
        name: 'queen',
        model: './images/figures/black_queen.svg',

        check() {},
        move() {},
    },
    b: {
        name: 'bishop',
        model: './images/figures/black_bishop.svg',

        check() {},
        move() {},
    },
    n: {
        name: 'knight',
        model: './images/figures/black_unicorn.svg',

        check() {},
        move() {},
    },
    r: {
        name: 'rook',
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

const posibleMoves = [];

const allCell = [];

let pickedFigure = '';

const currPos = { ...initPos };

const clearPosibleMoves = () => {
    posibleMoves.forEach((item) => {
        const a = document.querySelector(`[cell=${item}]`);
        // console.log(a);

        if (a.classList.contains('targetCell')) a.classList.remove('targetCell');
    });

    posibleMoves.length = 0;
};

const pawnCheck = (currCell, figureData) => {
    const cell = currCell.getAttribute('cell').split('');
    const hasFirstMove = figureData[1];
    const colorFigure = figureData[0][2];

    if (colorFigure === 'w') {
        if (hasFirstMove) {
            posibleMoves.push(cell[0] + (+cell[1] + 1));
            posibleMoves.push(cell[0] + (+cell[1] + 2));
        } else {
            posibleMoves.push(cell[0] + (+cell[1] + 1));
        }
    } else {
        if (hasFirstMove) {
            posibleMoves.push(cell[0] + (+cell[1] - 1));
            posibleMoves.push(cell[0] + (+cell[1] - 2));
        } else {
            posibleMoves.push(cell[0] + (+cell[1] - 1));
        }
    }

    posibleMoves.forEach((item) => {
        const a = document.querySelector(`[cell=${item}]`);
        a.classList.toggle('targetCell');
    });
    // console.log(posibleMoves);
};

const knightCheck = (currCell) => {
    const cell = currCell.getAttribute('cell').split('');
    const buf = [];

    buf.push(String.fromCharCode(cell[0].charCodeAt(0) + 1) + (+cell[1] + 2));
    buf.push(String.fromCharCode(cell[0].charCodeAt(0) + 1) + (+cell[1] - 2));
    buf.push(String.fromCharCode(cell[0].charCodeAt(0) - 1) + (+cell[1] + 2));
    buf.push(String.fromCharCode(cell[0].charCodeAt(0) - 1) + (+cell[1] - 2));
    buf.push(String.fromCharCode(cell[0].charCodeAt(0) + 2) + (+cell[1] + 1));
    buf.push(String.fromCharCode(cell[0].charCodeAt(0) + 2) + (+cell[1] - 1));
    buf.push(String.fromCharCode(cell[0].charCodeAt(0) - 2) + (+cell[1] + 1));
    buf.push(String.fromCharCode(cell[0].charCodeAt(0) - 2) + (+cell[1] - 1));

    for (let i = 0; i < 8; i++) if (allCell.includes(buf[i]) && !currPos[buf[i]]) posibleMoves.push(buf[i]);

    posibleMoves.forEach((item) => {
        const a = document.querySelector(`[cell=${item}]`);

        if (allCell.includes(item)) a.classList.toggle('targetCell');
    });
};

const rookCheck = (currCell) => {
    const buf = [];

    let cell1 = currCell.getAttribute('cell');
    while (allCell.includes(cell1)) {
        cell1 = cell1.split('');
        cell1[1] = +cell1[1] + 1;
        cell1 = cell1.join('');

        if (cell1 in currPos) break;

        buf.push(cell1[0] + cell1[1]);
    }

    let cell2 = currCell.getAttribute('cell');
    while (allCell.includes(cell2)) {
        cell2 = cell2.split('');
        cell2[1] = +cell2[1] - 1;
        cell2 = cell2.join('');

        if (cell2 in currPos) break;

        buf.push(cell2[0] + cell2[1]);
    }

    let cell3 = currCell.getAttribute('cell');
    while (allCell.includes(cell3)) {
        cell3 = cell3.split('');
        cell3[0] = String.fromCharCode(cell3[0].charCodeAt(0) + 1);
        cell3 = cell3.join('');

        if (cell3 in currPos) break;

        buf.push(cell3[0] + cell3[1]);
    }

    let cell4 = currCell.getAttribute('cell');
    while (allCell.includes(cell4)) {
        cell4 = cell4.split('');
        cell4[0] = String.fromCharCode(cell4[0].charCodeAt(0) - 1);
        cell4 = cell4.join('');

        if (cell4 in currPos) break;

        buf.push(cell4[0] + cell4[1]);
    }

    for (let i = 0; i < buf.length; i++) {
        if (allCell.includes(buf[i])) posibleMoves.push(buf[i]);
    }

    posibleMoves.forEach((item) => {
        const a = document.querySelector(`[cell=${item}]`);

        if (allCell.includes(item)) a.classList.toggle('targetCell');
    });
};

const bishopCheck = (currCell) => {
    const buf = [];

    let cell1 = currCell.getAttribute('cell');
    while (allCell.includes(cell1)) {
        cell1 = cell1.split('');
        cell1[1] = +cell1[1] + 1;
        cell1[0] = String.fromCharCode(cell1[0].charCodeAt(0) + 1);
        cell1 = cell1.join('');

        if (cell1 in currPos) break;

        buf.push(cell1[0] + cell1[1]);
    }

    let cell2 = currCell.getAttribute('cell');
    while (allCell.includes(cell2)) {
        cell2 = cell2.split('');
        cell2[1] = +cell2[1] + 1;
        cell2[0] = String.fromCharCode(cell2[0].charCodeAt(0) - 1);
        cell2 = cell2.join('');

        if (cell2 in currPos) break;

        buf.push(cell2[0] + cell2[1]);
    }

    let cell3 = currCell.getAttribute('cell');
    while (allCell.includes(cell3)) {
        cell3 = cell3.split('');
        cell3[0] = String.fromCharCode(cell3[0].charCodeAt(0) + 1);
        cell3[1] = +cell3[1] - 1;
        cell3 = cell3.join('');

        if (cell3 in currPos) break;

        buf.push(cell3[0] + cell3[1]);
    }

    let cell4 = currCell.getAttribute('cell');
    while (allCell.includes(cell4)) {
        cell4 = cell4.split('');
        cell4[0] = String.fromCharCode(cell4[0].charCodeAt(0) - 1);
        cell4[1] = +cell4[1] - 1;
        cell4 = cell4.join('');

        if (cell4 in currPos) break;

        buf.push(cell4[0] + cell4[1]);
    }

    for (let i = 0; i < buf.length; i++) if (allCell.includes(buf[i])) posibleMoves.push(buf[i]);

    posibleMoves.forEach((item) => {
        const a = document.querySelector(`[cell=${item}]`);

        if (allCell.includes(item)) a.classList.toggle('targetCell');
    });
};

const queenCheck = (currCell) => {
    const buf = [];

    let cell1 = currCell.getAttribute('cell');
    while (allCell.includes(cell1)) {
        cell1 = cell1.split('');
        cell1[1] = +cell1[1] + 1;
        cell1 = cell1.join('');

        if (cell1 in currPos) break;

        buf.push(cell1[0] + cell1[1]);
    }

    let cell2 = currCell.getAttribute('cell');
    while (allCell.includes(cell2)) {
        cell2 = cell2.split('');
        cell2[1] = +cell2[1] - 1;
        cell2 = cell2.join('');

        if (cell2 in currPos) break;

        buf.push(cell2[0] + cell2[1]);
    }

    let cell3 = currCell.getAttribute('cell');
    while (allCell.includes(cell3)) {
        cell3 = cell3.split('');
        cell3[0] = String.fromCharCode(cell3[0].charCodeAt(0) + 1);
        cell3 = cell3.join('');

        if (cell3 in currPos) break;

        buf.push(cell3[0] + cell3[1]);
    }

    let cell4 = currCell.getAttribute('cell');
    while (allCell.includes(cell4)) {
        cell4 = cell4.split('');
        cell4[0] = String.fromCharCode(cell4[0].charCodeAt(0) - 1);
        cell4 = cell4.join('');

        if (cell4 in currPos) break;

        buf.push(cell4[0] + cell4[1]);
    }

    let cell5 = currCell.getAttribute('cell');
    while (allCell.includes(cell5)) {
        cell5 = cell5.split('');
        cell5[1] = +cell5[1] + 1;
        cell5[0] = String.fromCharCode(cell5[0].charCodeAt(0) + 1);
        cell5 = cell5.join('');

        if (cell5 in currPos) break;

        buf.push(cell5[0] + cell5[1]);
    }

    let cell6 = currCell.getAttribute('cell');
    while (allCell.includes(cell6)) {
        cell6 = cell6.split('');
        cell6[1] = +cell6[1] + 1;
        cell6[0] = String.fromCharCode(cell6[0].charCodeAt(0) - 1);
        cell6 = cell6.join('');

        if (cell6 in currPos) break;

        buf.push(cell6[0] + cell6[1]);
    }

    let cell7 = currCell.getAttribute('cell');
    while (allCell.includes(cell7)) {
        cell7 = cell7.split('');
        cell7[0] = String.fromCharCode(cell7[0].charCodeAt(0) + 1);
        cell7[1] = +cell7[1] - 1;
        cell7 = cell7.join('');

        if (cell7 in currPos) break;

        buf.push(cell7[0] + cell7[1]);
    }

    let cell8 = currCell.getAttribute('cell');
    while (allCell.includes(cell8)) {
        cell8 = cell8.split('');
        cell8[0] = String.fromCharCode(cell8[0].charCodeAt(0) - 1);
        cell8[1] = +cell8[1] - 1;
        cell8 = cell8.join('');

        if (cell8 in currPos) break;

        buf.push(cell8[0] + cell8[1]);
    }

    for (let i = 0; i < buf.length; i++) if (allCell.includes(buf[i])) posibleMoves.push(buf[i]);

    posibleMoves.forEach((item) => {
        const a = document.querySelector(`[cell=${item}]`);

        if (allCell.includes(item)) a.classList.toggle('targetCell');
    });
};

const kingCheck = (currCell) => {};

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
                const td = createElem(`cell ${i % 2 == j % 2 ? '' : 'blackCell'}`, 'div', '', {
                    cell: String.fromCharCode(65 + j) + i,
                    piece: '',
                });
                const figure = initPos[String.fromCharCode(65 + j) + i];
                allCell.push(String.fromCharCode(65 + j) + i);

                if (figure) {
                    const img = new Image();
                    td.setAttribute('piece', figures[figure[0][0]].name);
                    img.src = figures[figure[0][0]].model;
                    if (figure[0][2] === 'w') img.style = 'filter: invert(100%)';
                    td.appendChild(img);
                }

                tr.appendChild(td);
            }
            chessBoard.appendChild(tr);
        }

        chessBoard.addEventListener('click', (event) => {
            // const targetFigure = chessBoard.querySelector('.targetFigure');
            // if (targetFigure) targetFigure.classList.remove('targetFigure');

            // const cell = event.target.closest('.cell');

            // if (posibleMoves.length && !posibleMoves.includes(cell.getAttribute('cell'))) clearPosibleMoves();

            // if (cell.hasChildNodes()) {
            //     cell.classList.toggle('targetFigure');
            //     pawnCheck(cell, currPos[cell.getAttribute('cell')]);
            // }
            const cell = event.target.closest('.cell');
            if (!pickedFigure) {
                //добавить проверку чей ход
                if (cell.hasChildNodes()) {
                    cell.classList.add('targetFigure');
                    pickedFigure = cell.getAttribute('cell');

                    switch (cell.getAttribute('piece')) {
                        case 'pawn':
                            pawnCheck(cell, currPos[cell.getAttribute('cell')]);
                            break;
                        case 'knight':
                            knightCheck(cell);
                            break;
                        case 'rook':
                            rookCheck(cell);
                            break;
                        case 'bishop':
                            bishopCheck(cell);
                            break;
                        case 'queen':
                            queenCheck(cell);
                            break;
                    }
                    // pawnCheck(cell, currPos[cell.getAttribute('cell')]);
                    // knightCheck(cell);
                }
            } else {
                // if (posibleMoves.includes(cell.getAttribute('cell'))) {}
                const targetFigure = chessBoard.querySelector('.targetFigure');
                if (targetFigure) targetFigure.classList.remove('targetFigure');

                if (posibleMoves.length && !posibleMoves.includes(cell.getAttribute('cell'))) clearPosibleMoves();
                pickedFigure = '';
            }
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
