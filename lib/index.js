/**
 * @fileoverview This is an ESLint plugin that provides a custom rule to automatically convert dot operators (.) to optional chain operators (?.) in your code.
 * @author Torres7707
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");



