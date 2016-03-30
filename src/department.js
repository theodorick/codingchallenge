"use strict";

const Resource = require('./resource');

module.exports = class Department {
  constructor(resources) {
    this.resources = resources || [];
  }
  getAllocation() {
    return this.resources.reduce((total, resource) => total + resource.getAllocation(), 0)
  }
}
