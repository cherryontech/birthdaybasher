module.exports = {
  root: true,
  env: {
    node: true
  },
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#bulb-rules
    "plugin:vue/recommended",
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    "standard"
  ],
  plugins: [
    // https://github.com/dangreenisrael/eslint-plugin-jest-formatting
    "jest-formatting"
  ],
  overrides: [
    {
      files: ['**/*.unit.js', '**/tests/unit/**/*'],
      parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
      },
      env: { jest: true }
    },
    {
      files: ['**/__mocks__/*'],
      parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
      },
      env: { jest: true }
    }
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    semi: ["error", "never"],
    "indent": [2, 2, {"SwitchCase": 1}],

    // general
    "import/newline-after-import": ["error", { "count": 1 }],
    "standard/no-callback-literal": "off",

    // jest
    "jest-formatting/padding-around-test-blocks": 2,
    "jest-formatting/padding-around-describe-blocks": 2,

    // vue
    "vue/max-attributes-per-line": "off",
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        ignores: [
          "component",
          "template",
          "transition",
          "transition-group",
          "keep-alive",
          "slot"
        ]
      }
    ]
  }
};
