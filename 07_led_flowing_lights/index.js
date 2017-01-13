const rpio = require('rpio');
// set pins
const pins = [7, 11, 12, 15, 16]

// open all pins and set to off
Object.keys(pins).forEach(function(pinValue) {
  rpio.open(pins[pinValue], rpio.OUTPUT, rpio.HIGH);
})

// set starter index
index = 0;

// loop over things 
for (var i = 0; i < 50000; i++) {
        // set pin to on
        rpio.write(pins[index], rpio.LOW);
        rpio.msleep(1000);
        // set pin to off
        rpio.write(pins[index], rpio.HIGH);

        //move index on
        index++;
        // if current index is > number on pins reset
        if(index >= pins.length) {
            index = 0;
        }
}

// close all pins
Object.keys(pins).forEach(function(pinValue) {
  rpio.close(pins[pinValue]);
})
