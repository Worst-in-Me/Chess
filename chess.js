const wrapper = document.querySelector('.wrapper');

const createElem = (className, tagName, content, attrs = {}) => {
    const elem = document.createElement(tagName);
    elem.classList.add(className);
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
                if (i % 2 == j % 2) {
                    const td = createElem('cell', 'div');
                    td.classList.add(String.fromCharCode(65 + j) + i);
                    tr.appendChild(td);
                } else {
                    const td = createElem('blackCell', 'div');
                    td.classList.add(String.fromCharCode(65 + j) + i);
                    tr.appendChild(td);
                }
            }
            chessBoard.appendChild(tr);
        }

        const chessContainer = createElem('chessContainer', 'div');
        chessContainer.append(drawNumbers(), chessBoard, drawNumbers());

        return chessContainer;
    };

    const board = drawBoard();
    container.append(drawLetters(), board, drawLetters());
    elem.appendChild(container);
};

createChessBoard(wrapper);
