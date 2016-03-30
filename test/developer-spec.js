const Developer = require('../src/developer');

require('chai').should();

describe('developer', () => {
  describe('allocation', () => {
    it('totals 1000', () => {
      const developer = new Developer();
      developer.getAllocation().should.equal(1000);
    });
  });
})
