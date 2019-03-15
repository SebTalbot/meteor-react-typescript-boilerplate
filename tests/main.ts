import "mocha";
import assert from "assert";
import { Meteor } from "meteor/meteor";
import { expect } from "chai";

import { incrementNumber } from "imports/lib/number";

describe("test", function() {
  if (Meteor.isClient) {
    it("client is not server", function() {
      assert.strictEqual(Meteor.isServer, false);
    });
  }

  if (Meteor.isServer) {
    it("server is not client", function() {
      assert.strictEqual(Meteor.isClient, false);
    });
  }
});

describe("typescript functions", function() {
  it("should increment by 1 by default", function() {
    const res = incrementNumber(5);
    expect(res).to.equal(6);
  });
  it("should increment with param number", function() {
    const res = incrementNumber(5, 5);
    expect(res).to.equal(10);
  });
});
