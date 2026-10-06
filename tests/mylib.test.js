// Import Chai's expect function.
const { expect } = require("chai");

// Import the functions from our arithmetic library.
const { add, subtract, multiply, divide } = require("../mylib");

describe("mylib arithmetic functions", function () {

    // Runs once before all tests.
    before(function () {
        console.log("Starting mylib tests...");
    });

    // Runs once after all tests.
    after(function () {
        console.log("Finished mylib tests.");
    });

    // Test addition.
    it("should add two numbers", function () {
        expect(add(5, 3)).to.equal(8);
    });

    // Test subtraction.
    it("should subtract two numbers", function () {
        expect(subtract(10, 4)).to.equal(6);
    });

    // Test multiplication.
    it("should multiply two numbers", function () {
        expect(multiply(6, 4)).to.equal(24);
    });

    // Test division.
    it("should divide two numbers", function () {
        expect(divide(10, 2)).to.equal(5);
    });

    // Test division by zero.
    it("should throw an error when dividing by zero", function () {
        expect(() => divide(10, 0)).to.throw("Cannot divide by zero.");
    });
});