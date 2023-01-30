basic.forever(function () {
    if (input.compassHeading() > 159 || input.compassHeading() < 30) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
