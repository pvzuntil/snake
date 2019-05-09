const cvs = document.getElementById('snake')
const ctx = cvs.getContext('2d')


let box = 32

let bg = new Image()
bg.src = 'bg.png'

let fd = new Image()
fd.src = 'fd.png'

let sn = []
sn[0] = {
    x: 9 * box,
    y: 10 * box
}

let food = {
    x: Math.floor(Math.random() * 17 + 1) * box,
    y: Math.floor(Math.random() * 15 + 3) * box,
}

let score = 0

let d

document.addEventListener('keydown', dir)

function dir(e) {
    if(e.keyCode == 37 && d != 'r'){
        d = 'l'
    } else if (e.keyCode == 38 && d != 'd'){
        d = 'u'
    } else if (e.keyCode == 39 && d != 'l'){
        d = 'r'
    } else if (e.keyCode == 40 && d != 'u'){
        d = 'd'
    }
}

function draw() {
    ctx.drawImage(bg, 0, 0)

    for (let i = 0; i < sn.length; i++) {
        ctx.fillStyle = (i == 0) ? 'green' : 'white'
        ctx.fillRect(sn[i].x, sn[i].y, box, box)
    }

    ctx.drawImage(fd, food.x, food.y)

    ctx.fillStyle = 'white'
    ctx.font = '40px Arial'
    ctx.fillText(score, 2 * box, 1.6 * box)


    let snX = sn[0].x
    let snY = sn[0].y

    sn.pop()

    if (d == 'l') snX -= box
    if (d == 'u') snY -= box
    if (d == 'r') snX += box
    if (d == 'd') snY += box

    let nHead = {
        x: snX,
        y: snY
    }

    sn.unshift(nHead)
}

let game = setInterval(draw, 90)