const Department = require('../src/department');
const Manager = require('../src/manager');
const Developer = require('../src/developer');
const QA = require('../src/qa');

require('chai').should();

describe('department', () => {
  describe('allocation', () => {
    it('correctly totals single report with one level of reports', () => {
      const reports = [new Developer(), new QA()];

      const department = new Department(reports);

      department.getAllocation().should.equal(1500);
    });
  });

  it('correctly totals single report with two levels of reports', () => {
    const middleManagerReports = [new Developer(), new Developer()]
    const middleManager = new Manager(middleManagerReports);
    const directReports = [new Developer(), new QA(), middleManager];
    const manager = new Manager([new Developer(), new QA(), middleManager]);

    const department = new Department([manager]);

    department.getAllocation().should.equal(4100);
  });

  it('correctly totals list of reports with subreports', () => {
    const manager1 = new Manager([new Manager([new Developer(), new Developer()])]);
    const manager2 = new Manager([new Manager([new Developer(), new Developer()])]);

    const department = new Department([manager1, manager2]);

    department.getAllocation().should.equal(5200);
  });
});
