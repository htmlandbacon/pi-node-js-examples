const rpio = require('rpio');

const ledPin = 11;
const btnPin = 12;

// open pin out for LED
rpio.open(ledPin, rpio.OUTPUT, rpio.HIGH);

// open button with pull
rpio.open(btnPin, rpio.INPUT, rpio.PULL_UP);


// infinity loop
i = 0;
while (i === 0) {
        if ( rpio.read(btnPin) ) {
            rpio.write(ledPin, rpio.HIGH);
        } else {
            console.log('button is being pressed');
            rpio.write(ledPin, rpio.LOW);
        }
};


// close pins
rpio.close(ledPin);
rpio.close(btnPin);