const QA = require('../src/qa');

require('chai').should();

describe('qa', () => {
  describe('allocation', () => {
    it('totals 500', () => {
      const qa = new QA();
      qa.getAllocation().should.equal(500);
    });
  });
})
