"use strict";

const Resource = require('./resource');

module.exports = class Developer extends Resource {
  constructor() {
    super(1000);
  }
}
