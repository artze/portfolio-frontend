// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential', 
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard'
    ],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    globals: {
        "p5": true
    },
    // add your custom rules here
    rules: {
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // indent with 4 spaces
        'indent': [2, 4],
        // no space between function and argument parentheses
        'space-before-function-paren': ['error', 'never'],
        // no space after keywords if, for and while
        'keyword-spacing': [
            'error', 
            { 
                'overrides': {
                    'if': { 'after': false },
                    'for': { 'after': false },
                    'while': { 'after': false }
                } 
            }
        ],
        // turn off no-useless-return rule
        'no-useless-return': 0
    }
}
