/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Peter Zerbinos
 * Created on: Sep 2024
 * This program tells you if you are too close using sonar by sending a string
 * to a different MicroBit.
*/

//variables
let distanceToObject: number = 0

// setup
radio.setGroup(1)
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// pressing A sends too close or good to microbit depending on sonar distance
input.onButtonPressed(Button.A, function () {
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    if (distanceToObject < 10) {
        radio.sendString("Too Close.")
    } else {
        radio.sendString("Good.")
    }
})

radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    basic.showString(receivedString)
    basic.showIcon(IconNames.Happy)
})
