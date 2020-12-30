const serial = new WebSerial()

const connect = document.getElementById('connect');
const on = document.getElementById('ledOn');
const off = document.getElementById('ledOff');

connect.addEventListener('pointerdown', connectDevice)
on.addEventListener('pointerdown', switchOn)
off.addEventListener('pointerdown', switchOff)

function connectDevice() {
  serial.init()
}

function switchOff() {
  serial.write('-1')
}

function switchOn() {
  serial.write('1')
}