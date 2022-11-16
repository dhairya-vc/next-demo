module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: 8, sourceType: "module" },
  ignorePatterns: ["node_modules/*"],
  extends: ["eslint:recommended", "next/core-web-vitals", "next"],
  overrides: [
    {
      files: ["**/*.js", "**/*.jsx"],
      settings: {
        react: { version: "detect" },
        "import/resolver": {},
      },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:prettier/recommended",
        // "plugin:jsx-a11y/recommended",
      ],
      rules: {
        "no-restricted-imports": [
          "error",
          {
            patterns: ["@/features/*/*"],
          },
        ],
        // "linebreak-style": ["error", "unix"],
        "linebreak-style": 0,
        "react/prop-types": "off",

        "import/order": [
          "error",
          {
            groups: [
              "builtin",
              "external",
              "internal",
              "parent",
              "sibling",
              "index",
              "object",
            ],
            "newlines-between": "always",
            alphabetize: { order: "asc", caseInsensitive: true },
          },
        ],
        "import/default": "off",
        "import/no-named-as-default-member": "off",
        "import/no-named-as-default": "off",

        "react/react-in-jsx-scope": "off",

        "jsx-a11y/anchor-is-valid": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/interactive-supports-focus": [
          0,
          {
            tabbable: ["button", "link"],
          },
        ],

        "prettier/prettier": [
          "error",
          { endOfLine: "auto" },
          { usePrettierrc: true },
        ],
      },
    },
  ],
};
