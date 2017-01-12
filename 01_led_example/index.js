const rpio = require('rpio');
const pin = 11

// open pin 11
rpio.open(pin, rpio.OUTPUT, rpio.HIGH);

// for 5 loops turn on colour and then turn off
for (var i = 0; i < 5; i++) {
        // turn on
        rpio.write(pin, rpio.LOW);
        console.log('on');
        rpio.msleep(1500);

        // turn off
        rpio.write(pin, rpio.HIGH);
        console.log('off');
        rpio.msleep(1500);
}

// close pin 11
rpio.close(pin);
