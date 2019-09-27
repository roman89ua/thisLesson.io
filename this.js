calculator = {
    read() {
        this.a = +prompt("Enter number values", "0");
        this.b = +prompt("Enter number values", "0");
        return {
            a: this.a,
            b: this.b
        };
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};

console.log(calculator.read());
console.log(calculator.sum());
console.log(calculator.mul());