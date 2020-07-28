"use strict";
const expect = require("chai").expect;
const index = require("../dist/index.js");

describe("getPlural function test", () => {
  it("should return Boys", () => {
    const result = index.getPlural("Boy");
    expect(result).to.equal("Boys");
  });
  it("should return Girls", () => {
    const result = index.getPlural("Girl");
    expect(result).to.equal("Girls");
  });
  it("should return Geese", () => {
    const result = index.getPlural("Goose");
    expect(result).to.equal("Geese");
  });
  it("should return Toys", () => {
    const result = index.getPlural("Toy");
    expect(result).to.equal("Toys");
  });
  it("should return Men", () => {
    const result = index.getPlural("Man");
    expect(result).to.equal("Men");
  });
});
