// @flow

const expect = require('chai').expect,
  Animal = require('../src/Animal');

describe('Animal', () => {
  describe('name', () => {
    it('should set name in constructor', () => expect(new Animal(1).name()).to.equal(1));
  })
});