input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.pause(2000)
    pins.servoWritePin(AnalogPin.P2, 90)
    pins.servoWritePin(AnalogPin.P1, 90)
    Go = 1
    while (Go == 1) {
        Mag = input.magneticForce(Dimension.X)
        basic.pause(100)
        if (Mag >= 0.5) {
            pins.servoWritePin(AnalogPin.P1, 95)
            basic.showArrow(ArrowNames.West)
        } else {
            if (Mag <= -0.5) {
                pins.servoWritePin(AnalogPin.P1, 79)
                basic.showArrow(ArrowNames.East)
            } else {
                pins.servoWritePin(AnalogPin.P1, 90)
                basic.showIcon(IconNames.Yes)
            }
        }
    }
    pins.servoWritePin(AnalogPin.P1, 90)
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.B, function () {
    Go = 0
})
let Mag = 0
let Go = 0
input.calibrateCompass()
pins.analogSetPeriod(AnalogPin.P1, 20000)
pins.analogSetPeriod(AnalogPin.P2, 20000)
pins.servoWritePin(AnalogPin.P2, 90)
pins.servoWritePin(AnalogPin.P2, 90)
basic.forever(function () {
	
})
