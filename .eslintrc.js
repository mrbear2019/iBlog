module.exports = {
    extends: ['@nuxtjs/eslint-config-typescript'],
    rules: {
        semi: 'off',
        '@typescript-eslint/semi': ['error', 'always'],
        'arrow-parens': ['warn', 'as-needed'],
        'no-console': 'off',
        'import/order': 'off',
        indent: 'off',
        'space-unary-ops': 'off',
        'space-before-function-paren': 'off',
        'no-multiple-empty-lines': 'off',
        'no-tabs': 'off',
        'no-trailing-spaces': 'off'
    }
};
