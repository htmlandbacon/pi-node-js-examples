const rpio = require('rpio');
// set pins based on circuit
const pins = [11,12,13,15,16,18,22,7];

// list of 0-9 A-F
const data = [0x3f,0x06,0x5b,0x4f,0x66,0x6d,0x7d,0x07,0x7f,0x6f,0x77,0x7c,0x39,0x5e,0x79,0x71,0x80]

function writeOneByte(val) {
    rpio.write(11, val & (0x01 << 0))  
	rpio.write(12, val & (0x01 << 1))  
	rpio.write(13, val & (0x01 << 2))  
	rpio.write(15, val & (0x01 << 3))  
	rpio.write(16, val & (0x01 << 4))  
	rpio.write(18, val & (0x01 << 5))  
	rpio.write(22, val & (0x01 << 6))  
	rpio.write(7,  val & (0x01 << 7)) 
}

// open all pins and set to off
Object.keys(pins).forEach(function(pinValue) {
  rpio.open(pins[pinValue], rpio.OUTPUT, rpio.HIGH);
});

// loop over values
data.forEach(function(value) {
    writeOneByte(value);
    rpio.msleep(1000);
});

// close all pins
Object.keys(pins).forEach(function(pinValue) {
  rpio.close(pins[pinValue]);
});