const positions = [0,0,0,
    0,0,0,
    0,0,0];
const lu = document.getElementById("lu");
const u = document.getElementById("u");
const ru = document.getElementById("ru");
const l = document.getElementById("l");
const m = document.getElementById("m");
const r = document.getElementById("r");
const dl = document.getElementById("dl");
const d = document.getElementById("d");
const dr = document.getElementById("dr");
const restart = document.getElementById("NG")

const divs = [lu, u, ru,
    l, m, r,
    dl, d, dr];

let gameOver = false;

function checkMoves() {
    let availableMoves = 9;
    for (let i = 0; i < 9; i++)
    {
        if (positions[i] != 0)
            availableMoves--;
    }
    if (availableMoves == 0)
    {
        alert("Gra zakończyła się remisem!");
        gameOver = true;
    }
}

function checkWin(item) {
    if ((positions[0] == item && positions[1] == item && positions[2] == item) ||
        (positions[3] == item && positions[4] == item && positions[5] == item) ||
        (positions[6] == item && positions[7] == item && positions[8] == item) ||
        (positions[0] == item && positions[3] == item && positions[6] == item) ||
        (positions[1] == item && positions[4] == item && positions[7] == item) ||
        (positions[2] == item && positions[5] == item && positions[8] == item) ||
        (positions[0] == item && positions[4] == item && positions[8] == item) ||
        (positions[2] == item && positions[4] == item && positions[6] == item))
        return true;
    return false;
}

function setTik(clickedItem, index) {
    if(!gameOver)
    {
        if (positions[index] == 0)
        {
            positions[index] = 1;
            clickedItem.classList.add("tik");
            if (checkWin(1)) {
                alert("Wygrałeś!");
                gameOver = true;
            }
            if (!gameOver)
                checkMoves();
            setTak();
        }
    }
}

function setTak() {
    if (!gameOver)
    {
        const pickedIndex = Math.floor(Math.random() * 10);
        if (positions[pickedIndex] == 0)
        {
            positions[pickedIndex] = 2;
            divs[pickedIndex].classList.add("tak");
            if (checkWin(2)) {
                alert("Komputer wygrał!");
                gameOver = true;
            }
            if (!gameOver)
                checkMoves();
        }
        else
            setTak();
    }
}

function newGame() {
    gameOver = false;
    for (let i = 0; i < 9; i++)
    {
        if (positions[i] = 1)
            divs[i].classList.remove(tik);
        else if (positions[i] = 2)
            divs[i].classList.remove(tak);
        positions[i] = 0;
    }
}

function main() {
    lu.addEventListener('click', () => setTik(lu, 0));
    u.addEventListener('click', () => setTik(u, 1));
    ru.addEventListener('click', () => setTik(ru, 2));
    l.addEventListener('click', () => setTik(l, 3));
    m.addEventListener('click', () => setTik(m, 4));
    r.addEventListener('click', () => setTik(r, 5));
    dl.addEventListener('click', () => setTik(dl, 6));
    d.addEventListener('click', () => setTik(d, 7));
    dr.addEventListener('click', () => setTik(dr, 8));
    restart.addEventListener('click', ()=>newGame());
}

main();