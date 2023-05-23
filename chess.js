const wrapper = document.querySelector('.wrapper');

const letters = {
    1: 'a',
    2: 'b',
    3: 'c',
    4: 'd',
    5: 'e',
    6: 'f',
    7: 'g',
    8: 'h',
};

const createElem = (className, tagName, content) => {
    const elem = document.createElement(tagName);
    elem.classList.add(className);
    elem.textContent = content;

    return elem;
};

const createChessBoard = (elem) => {
    const drawBoard = () => {
        const chessBoard = createElem('chessBoard', 'table');

        let count = 8;
        for (let i = 0; i < 8; i++) {
            if (i % 2 == 0) {
                const tr = createElem('tableRow', 'tr');

                for (let j = 0; j < 8; j++) {
                    if (j % 2 !== 0) {
                        const td = createElem('blackCell', 'td');
                        tr.appendChild(td);

                        if (j == 7) {
                            td.textContent = count;
                            count--;
                        }
                    } else {
                        const td = createElem('cell', 'td');

                        tr.appendChild(td);
                    }
                }

                chessBoard.appendChild(tr);
            } else {
                const tr = createElem('tableRow', 'tr');

                for (let j = 0; j < 8; j++) {
                    if (j % 2 == 0) {
                        const td = createElem('blackCell', 'td');
                        tr.appendChild(td);

                        if (i == 7) td.textContent = letters[j + 1];
                    } else {
                        const td = createElem('cell', 'td');
                        tr.appendChild(td);

                        if (i == 7) td.textContent = letters[j + 1];

                        if (j == 7) {
                            td.textContent = count;
                            count--;
                        }
                    }
                }

                chessBoard.appendChild(tr);
            }
        }

        return chessBoard;
    };

    const board = drawBoard();
    elem.appendChild(board);
};

createChessBoard(wrapper);
