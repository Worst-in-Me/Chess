const wrapper = document.querySelector('.wrapper');

const createElem = (className, tagName, content) => {
    const elem = document.createElement(tagName);
    elem.classList.add(className);
    elem.textContent = content;

    return elem;
};

const createChessBoard = (elem) => {
    const letters = createElem('lettersRow', 'div');
    for (let i = 0; i < 8; i++) letters.append(createElem('letter', 'div', String.fromCharCode(65 + i)));

    const drawBoard = () => {
        const chessBoard = createElem('chessBoard', 'table');

        const numbers = createElem('numbersColumn', 'div');
        for (let i = 0; i < 8; i++) numbers.append(createElem('num', 'div', i + 1));

        for (let i = 0; i < 8; i++) {
            if (i % 2 == 0) {
                const tr = createElem('tableRow', 'tr');

                for (let j = 0; j < 8; j++) {
                    if (j % 2 !== 0) {
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

                for (let j = 0; j < 8; j++) {
                    if (j % 2 == 0) {
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

        const container = createElem('container', 'div');
        container.append(chessBoard, numbers);

        return container;
    };

    const board = drawBoard();
    elem.append(board, letters);
};

createChessBoard(wrapper);
