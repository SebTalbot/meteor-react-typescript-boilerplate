import assert from 'assert';
import { expect } from 'chai'
import 'mocha'

describe("test", function () {
  it("package.json has correct name", async function () {
    const { name } = await import("../package.json");
    assert.strictEqual(name, "test");
  });

  if (Meteor.isClient) {
    it("client is not server", function () {
      assert.strictEqual(Meteor.isServer, false);
    });
  }

  if (Meteor.isServer) {
    it("server is not client", function () {
      assert.strictEqual(Meteor.isClient, false);
    });
  }

});

describe('typescript functions', function() {
    import {incrementNumber} from '/imports/lib/number'
  it("should increment by 1 by default", function() {
    const res = incrementNumber(5)
    expect(res).to.equal(6)
  })
  it("should increment with param number", function() {
    const res = incrementNumber(5,5)
    expect(res).to.equal(10)
  })
})
