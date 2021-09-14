const GreeterContract = artifacts.require("Greeter");

contract("Greeter", () => {  // like a describe block
  it("has been deployed successfully", async () => {
    const greeter = await GreeterContract.deployed(); // every blockchain interaction will be async
    assert(greeter, "contract was not deployed")
  })
})