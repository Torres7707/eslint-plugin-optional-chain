/**
 * @fileoverview Automatically convert dot operators (.) to optional chain operators (?.) in your code.
 * @author Torres7707
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion", // `problem`, `suggestion`, or `layout`
		docs: {
			description:
				"Automatically convert dot operators (.) to optional chain operators (?.) in your code.",
			category: "Possible Errors",
			recommended: true,
			url: null, // URL to the documentation page for this rule
		},
		fixable: "code", // Or `code` or `whitespace`
		schema: [], // Add a schema if the rule has options
		messages: {
			unexpected: "Unexpected dot operator (.),should use optional chain (?.)",
		},
	},

	create(context) {
		const sourceCode = context.getSourceCode();
		return {
			MemberExpression(node) {
				const tokens = sourceCode.getTokens(node);
				const dotToken = tokens.at(-2);
				if (dotToken.value === "?.") {
					return;
				}
				context.report({
					node,
					loc: tokens.at(-2).loc,
					messageId: "unexpected",
					fix: (fixer) => {
						return fixer.insertTextBefore(dotToken, "?");
					},
				});
			},
		};
	},
};
