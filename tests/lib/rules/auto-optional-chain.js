/**
 * @fileoverview Automatically convert dot operators (.) to optional chain operators (?.) in your code.
 * @author Torres7707
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/auto-optional-chain");
const RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run("auto-optional-chain", rule, {
	valid: [
		// Provide valid code examples that shouldn't trigger any warnings
		{
			code: "const foo = 'bar';",
			parserOptions: { ecmaVersion: 2021 },
		},
		{
			code: "const obj = { prop: 'value' };",
			parserOptions: { ecmaVersion: 2021 },
		},
		{
			code: "const result = obj?.prop;",
			parserOptions: { ecmaVersion: 2021 },
		},
		// Add more valid test cases here
	],

	invalid: [
		{
			code: "const value = obj.prop;", // Invalid code with a ?. operator as a string
			errors: [{ messageId: "unexpected", type: "MemberExpression" }],
			output: "const value = obj?.prop;",
			parserOptions: { ecmaVersion: 2021 },
		},
		{
			code: "const otherValue = object.prop;", // Invalid code with a ?. operator as a string
			errors: [{ messageId: "unexpected", type: "MemberExpression" }],
			output: "const otherValue = object?.prop;",
			parserOptions: { ecmaVersion: 2021 },
		},
		// Add more invalid test cases here
	],
});
