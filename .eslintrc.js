module.exports = {
    // "extends": "airbnb",
    "plugins": ["prettier"],
    "rules": {
        "prettier/prettier": "error"
    },
    "env": {
        "browser": true,
        "node": true
	},
	"parser": "babel-eslint",
	"parserOptions": {
		"ecmaVersion": 6,
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true,
			"modules": true,
			"experimentalObjectRestSpread": true
		}
	}
};