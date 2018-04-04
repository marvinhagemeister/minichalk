import * as c from "./index";
// tslint:disable no-console

describe("colors", () => {
  it("should colorize text", () => {
    for (const key of Object.keys(c).filter(
      x => x !== "fn" && x !== "supportsColor",
    )) {
      console.log((c as any)[key](" Hello World "), key);
    }
  });

  it("should support mixed colors", () => {
    console.log(c.bgGreenBright(c.red(" Hello ")) + " should be white");
  });
});
