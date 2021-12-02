{
  root: true,
    extends: [
      '../index.js',
      'airbnb-typescript/base',
    ],
    plugins: ['@typescript-eslint/eslint-plugin'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      project: 'tsconfig.json',
      sourceType: 'module'
    },
    rules: {
      "@typescript-eslint/naming-convention": [
        "error",
        {
          "selector": "interface",
          "format": [
            "PascalCase"
          ]
        }
      ],
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "class-methods-use-this": "off",
      "@typescript-eslint/type-annotation-spacing": [
        "error",
        {
          "before": false,
          "after": true
        }
      ],
      "import/prefer-default-export": "off",
      "import/no-default-export": "error"
    }
}
