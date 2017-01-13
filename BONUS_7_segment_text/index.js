const rpio = require('rpio');

const pins = [11,12,13,15,16,18,22,7];

const letters = [...(process.env.TEXT || 'hello')];

const letter = {
    a: 0x77,
    b: 0x7c,
    c: 0x39,
    d: 0x5e,
    e: 0x79,
    f: 0x71,
    g: 0x3d,
    h: 0x76,
    i: 0x30,
    j: 0x1E,
    k: 0x76,
    l: 0x38,
    m: 0x15,
    n: 0x37,
    o: 0x3f,
    p: 0x73,
    q: 0x67,
    r: 0x31,
    s: 0x6d,
    t: 0x78,
    u: 0x3e,
    v: 0x1C,
    w: 0x2A,
    x: 0x76,
    y: 0x6e,
    z: 0x5b,
    end: 0x80
}

const word = [0x76, 0x79, 0x38, 0x38, 0x5c, 0x80]

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


letters.forEach(function(value) {
    if (value === ' ') {
        console.log('Printing text ','space');
        writeOneByte(0x00);
    }
    if(letter[value.toLowerCase()]) {
        console.log('Printing text ', value.toLowerCase(), letter[value.toLowerCase()])
        writeOneByte(letter[value.toLowerCase()]);
        rpio.msleep(1000);
    }
});

writeOneByte(letter['end']);
rpio.msleep(1000);

// close all pins
Object.keys(pins).forEach(function(pinValue) {
  rpio.close(pins[pinValue]);
});