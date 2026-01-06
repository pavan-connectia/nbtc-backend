"use strict";

var compression = require("compression");
var shouldCompress = function shouldCompress(req, res) {
  if (req.headers["x-no-compression"]) {
    return false;
  }
  return compression.filter(req, res);
};
module.exports = shouldCompress;