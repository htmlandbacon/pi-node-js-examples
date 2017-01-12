const rpio = require('rpio');
// set pins
const pins = {'R': 11, 'G': 12, 'B': 13};
// set default colour - use COLOUR=(R|G|B) node index to change
const colour = process.env.COLOUR || 'R';
const pin = pins[colour];

// print out color and pin
console.log('using colour ', colour, ' on pin ', pins[colour]);

// open all pins and set to off
Object.keys(pins).forEach(function(pinValue) {
  rpio.open(pins[pinValue], rpio.OUTPUT, rpio.HIGH);
})

// for 5 loops turn on colour and then turn off
for (var i = 0; i < 5; i++) {
        rpio.write(pin, rpio.LOW);
        console.log(colour, ' - on ');
        rpio.msleep(1500);

        rpio.write(pin, rpio.HIGH);
        console.log(colour, ' - off');
        rpio.msleep(1500);
}

// close all pins
Object.keys(pins).forEach(function(pinValue) {
  rpio.close(pins[pinValue]);
})