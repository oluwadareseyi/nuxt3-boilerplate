module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser",
    },
    extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"],
    plugins: [],
    rules: {},
    overrides: [
        {
            files: ["*.vue"],
            rules: {
                "vue/no-multiple-template-root": "off",
                "vue/no-setup-props-destructure": "off",
                "vue/no-v-html": "off",
                "vue/multi-word-component-names": "off",
                "no-new": "off",
                "array-callback-return": "off",
            },
        },
        {
            files: ["*.ts"],
            rules: {
                "@typescript-eslint/no-unused-vars": "off",
            },
        },
        {
            files: ["*.js"],
            rules: {
                "no-useless-return": "off",
                "no-new": "off",
                "@typescript-eslint/no-unused-vars": "off",
                "import/named": "off",
            },
        },
    ],
};
