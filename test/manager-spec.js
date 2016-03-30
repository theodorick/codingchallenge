const Manager = require('../src/manager');
const Developer = require('../src/developer');
const QA = require('../src/qa');

require('chai').should();

describe('manager', () => {
  describe('allocation', () => {
    it('totals 300 when he has no reports', () => {
      const manager = new Manager();
      manager.getAllocation().should.equal(300);
    });

    it('correctly totals one level of reports', () => {
      const reports = [new Developer(), new QA()];

      const manager = new Manager(reports);
      manager.getAllocation().should.equal(1800);
    });

    it('correctly totals two levels of reports', () => {
      const middleManagerReports = [new Developer(), new Developer()]
      const middleManager = new Manager(middleManagerReports);
      const directReports = [new Developer(), new QA(), middleManager];

      const manager = new Manager(directReports);
      manager.getAllocation().should.equal(4100);
    });

    it('correctly estimates cost for scenario', () => {
      const middleManagerReports = [new Developer(), new QA()]
      const middleManager = new Manager(middleManagerReports);
      const directReports = [middleManager];

      const manager = new Manager(directReports);
      manager.getAllocation().should.equal(2100);
    });
  });
})
