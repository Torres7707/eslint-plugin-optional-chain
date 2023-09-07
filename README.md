# eslint-plugin-optional-chain

This is an ESLint plugin that provides a custom rule to automatically convert dot operators (.) to optional chain operators (?.) in your code.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-optional-chain`:

```sh
npm install eslint-plugin-optional-chain --save-dev
```

## Usage

Add `optional-chain` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
	"plugins": ["optional-chain"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
	"rules": {
		"optional-chain/auto-optional-chain": 2
	}
}
```

## Rules

<!-- begin auto-generated rules list -->

🔧 Automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/user-guide/command-line-interface#--fix).

| Name                                                     | Description                                                                            | 🔧 |
| :------------------------------------------------------- | :------------------------------------------------------------------------------------- | :- |
| [auto-optional-chain](docs/rules/auto-optional-chain.md) | Automatically convert dot operators (.) to optional chain operators (?.) in your code. | 🔧 |

<!-- end auto-generated rules list -->
