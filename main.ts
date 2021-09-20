let szám = 0
input.onGesture(Gesture.Shake, function () {
    szám = randint(0, 2)
    if (szám == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (szám == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # . . # .
            # . # . .
            # # . . .
            # . # . .
            # . . # .
            `)
    }
})
