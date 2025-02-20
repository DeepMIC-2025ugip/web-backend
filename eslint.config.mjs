import js from "@eslint/js";
import typescript from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";

export default [
    js.configs.recommended,
    {
        files: ["**/*.ts"],
        languageOptions: {
            parser,
            ecmaVersion: 2021,
            sourceType: "module",
            globals: {
                global: "readonly",
                process: "readonly",
                console: "readonly",
                Buffer: "readonly",
                __dirname: "readonly",
                __filename: "readonly",
                module: "readonly",
                exports: "readonly",
                require: "readonly",

                setTimeout: "readonly",
                clearTimeout: "readonly",
                setInterval: "readonly",
                clearInterval: "readonly",
                Promise: "readonly",
                Map: "readonly",
                Set: "readonly",
                WeakMap: "readonly",
                WeakSet: "readonly",
                Symbol: "readonly",
            },
        },

        plugins: {
            "@typescript-eslint": typescript,
        },
        rules: {
            '@typescript-eslint/no-unused-vars': ['error', { "argsIgnorePattern": "^_" }],
            'no-unused-vars': 'off',
        },
    },
];
