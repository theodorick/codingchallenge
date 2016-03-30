"use strict";

const Resource = require ('./Resource')

module.exports = class Manager extends Resource{
  constructor(reports) {
    super(300);
    this.reports = reports || [];
  }
  getAllocation() {
    return super.getAllocation() + this.reports.reduce((total, resource) => total + resource.getAllocation(), 0)
  }
}
