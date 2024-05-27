class Player {

    constructor(initial) {
        this.x = initial.x
        this.y = initial.y
        this.size = initial.size
        this.step = initial.step
        this.color = initial.color
        this.keyboard = { left: false, right: false, up: false, down: false }
        this.element = this.createElement()
        this.initEvents()
    }

    createElement() {
        const player = document.createElement('div')
        player.classList.add('player')
        player.style.width = `${this.size}px`
        player.style.height = `${this.size}px`
        player.style.backgroundColor = `${this.color}`
        return player
    }

    update() {
        this.move()
        this.collisionWall()
        this.draw()
    }

    move() {
        if (this.keyboard.right) this.x += this.step
        if (this.keyboard.left) this.x -= this.step
        if (this.keyboard.up) this.y -= this.step
        if (this.keyboard.down) this.y += this.step
    }

    collisionWall() {

        const cW = window.innerWidth
        const cH = window.innerHeight

        if (this.x < 0) this.x = 0
        if (this.y < 0) this.y = 0

        if ((this.x + this.size) > cW) this.x = cW - this.size
        if ((this.y + this.size) > cH) this.y = cH - this.size

    }

    draw() {
        this.element.style.left = `${this.x}px`
        this.element.style.top =  `${this.y}px`
    }

    initEvents() {
        const p = this;
        document.body.addEventListener('keydown', (event) => {

            const key = event.key.toLowerCase()

            if (key == 'a') { p.keyboard.left = true }
            if (key == 'd') { p.keyboard.right = true }
            if (key == 'w') { p.keyboard.up = true }
            if (key == 's') { p.keyboard.down = true }

        })

        document.body.addEventListener('keyup', (event) => {

            const key = event.key.toLowerCase()

            if (key == 'a') { p.keyboard.left = false }
            if (key == 'd') { p.keyboard.right = false }
            if (key == 'w') { p.keyboard.up = false }
            if (key == 's') { p.keyboard.down = false }

        })
    }
}