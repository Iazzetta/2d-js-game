const player = new Player({
    x: 0,
    y: 0,
    size: 100,
    step: 10,
    color: 'red'
})

const game = new Game()

game.add(player)

requestAnimationFrame((t) => game.update(game))