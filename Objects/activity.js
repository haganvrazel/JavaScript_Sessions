var number = 100;

function MyFunc() {
    this.number = 200;
    console.log(number); // local variable: 200
    console.log(this.number); // undefined
}

var obj = new MyFunc();
console.log(obj.number);