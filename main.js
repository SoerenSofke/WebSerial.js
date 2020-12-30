const serial = new WebSerial()
serial.init()

const off = document.getElementById('ledOff');
const on = document.getElementById('ledOn');

off.addEventListener('pointerdown', switchOff)
on.addEventListener('pointerdown', switchOn)

function switchOff() {
  serial.write('-1')
}

function switchOn() {
  serial.write('1')
}