const GreeterContract = artifacts.require("Greeter");

contract("Greeter", () => {  // like a describe block
  it("has been deployed successfully", async () => {
    const greeter = await GreeterContract.deployed(); // every blockchain interaction will be async
    assert(greeter, "contract was not deployed")
  })
})

describe("greet()", () => {
  it("returns 'Hello, World!'", async () => {
    const greeter = await GreeterContract.deployed();
    const expected = 'Hello, World!';
    const actual = await greeter.greet();

    assert.equal(actual, expected, "Greeted with 'Hello, World!'");
  })
})