const wrapper = document.querySelector('.wrapper');

const createElem = (className, tagName, content) => {
    const elem = document.createElement(tagName);
    elem.classList.add(className);
    elem.textContent = content;

    return elem;
};

const createChessBoard = (elem) => {
    const drawBoard = () => {
        const chessBoard = createElem('chessBoard', 'table');

        for (let i = 0; i < 8; i++) {
            if (i % 2 == 0) {
                const tr = createElem('tableRow', 'tr');

                for (let i = 0; i < 8; i++) {
                    if (i % 2 !== 0) {
                        const td = createElem('blackCell', 'td');
                        tr.appendChild(td);
                    } else {
                        const td = createElem('cell', 'td');
                        tr.appendChild(td);
                    }
                }

                chessBoard.appendChild(tr);
            } else {
                const tr = createElem('tableRow', 'tr');

                for (let i = 0; i < 8; i++) {
                    if (i % 2 == 0) {
                        const td = createElem('blackCell', 'td');
                        tr.appendChild(td);
                    } else {
                        const td = createElem('cell', 'td');
                        tr.appendChild(td);
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
