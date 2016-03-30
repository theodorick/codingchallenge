"use strict";

module.exports = class Resource{
  constructor(allocation){
    this.allocation = allocation;
  }
  getAllocation() {
    return this.allocation;
  }
}
