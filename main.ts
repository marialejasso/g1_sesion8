input.onButtonPressed(Button.A, function () {
    basic.showNumber(NUMERO)
    NUMERO += 1
})
input.onButtonPressed(Button.AB, function () {
    TEXTO = "ADIOS"
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(NUMERO)
    NUMERO += -1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString(TEXTO)
})
let TEXTO = ""
let NUMERO = 0
NUMERO = 0
TEXTO = "HOLIS"
