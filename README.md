## 내용
ChatGPT API를 기반으로 원하는 답변을 얻기 위한 정해진 몇가지의 용도를 바탕으로 질문 양식을 제공합니다. (개발중)

> link: https://easy-using-open-ai.vercel.app/

### Environment
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)          

### Config
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)

### Development
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white)
![Typescript](https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=Sass&logoColor=white)
![Recoil](https://img.shields.io/badge/recoil-f26b00?style=for-the-badge&logo=white)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)

## how to use project
### Requirements
- [Node.js v18.15.0](https://nodejs.org/ca/blog/release/v18.15.0)
- [NPM v9.6.2](https://www.npmjs.com/package/npm/v/9.6.2)
- [yarn v1.22.15](https://classic.yarnpkg.com/en/docs/install#windows-stable)

### Installation
```bash
$ git clone https://github.com/oaoong/easy-using-open-ai.git
$ cd easy-using-open-ai
```
```
$ yarn install
$ yarn build
$ yarn start
```

## 이슈 및 PR 규칙
이슈 및 PR 등록 시 적용되어 있는 템플릿 양식을 준수해주세요.
main, develop branch의 경우 github actions에서 빌드 테스트 및 테스트 코드를 통한 테스트를 자동으로 진행합니다.

## API
openai에서 제공하는 API를 사용하고 있습니다. 자세한 명세에 대해서는 [링크](https://platform.openai.com/)를 참고해주세요.

## lint 규칙
``` json
{
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "jest": true
    },
    "plugins": ["prettier", "testing-library"],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:prettier/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "prettier",
        "next/core-web-vitals"
    ],
    "parser": "@typescript-eslint/parser",
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [".js", ".jsx", ".ts", ".tsx"]
            },
            "alias": {
                "map": [
                    ["@", "./"],
                    ["@src", "./src"],
                    ["@assets", "./assets"],
                    ["@components", "./src/components"],
                    ["@pages", "./pages"],
                    ["@styles", "./src/styles"],
                    ["@utils", "./src/utils"],
                    ["@types", "./src/types"]
                ],
                "extensions": [".js", ".jsx", ".ts", ".tsx"]
            }
        },
        "react": {
            "version": "detect"
        }
    },
    "rules": {
        "vars-on-top": "error",
        "block-scoped-var": "error",
        "quotes": [
            "error",
            "single",
            {
                "allowTemplateLiterals": true
            }
        ],
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "always",
                "named": "never"
            }
        ],
        "curly": ["error", "multi-line"],
        "comma-dangle": ["error", "always-multiline"],
        "max-len": [
            "error",
            {
                "code": 80,
                "tabWidth": 4,
                "ignoreUrls": true,
                "ignoreComments": true,
                "ignoreStrings": true,
                "ignoreTemplateLiterals": true,
                "ignoreRegExpLiterals": true
            }
        ],
        "import/namespace": [
            "error",
            {
                "allowComputed": true
            }
        ],
        "no-self-assign": [
            "error",
            {
                "props": false
            }
        ],
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": ["warn", { "extensions": [".tsx"] }],
        "react-hooks/rules-of-hooks": "error",
        "no-console": ["warn", { "allow": ["warn", "error"] }],
        "react/prop-types": "off",
        "@typescript-eslint/no-var-requires": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error"],
        "import/order": [
            "error",
            {
                "groups": [
                    "type",
                    "builtin",
                    "external",
                    "internal",
                    "parent",
                    "sibling",
                    "index",
                    "unknown"
                ],
                "pathGroupsExcludedImportTypes": [],
                "alphabetize": {
                    "order": "asc"
                }
            }
        ]
    },
    "ignorePatterns": [
        "node_modules/",
        "dist/",
        "build/",
        "coverage/",
        "public/",
        "assets/",
        "scripts/",
        "config/",
        ".babelrc",
        "jest.config.js",
        "tsconfig.json",
        "next.config.js"
    ],
    "overrides": [
        {
            "files": [
                "**/__tests__/**/*.[jt]s?(x)",
                "**/?(*.)+(spec|test).[jt]s?(x)"
            ],
            "extends": ["plugin:testing-library/react"]
        }
    ]
}
```

## article
[You’re Using ChatGPT Wrong! Here’s How to Be Ahead of 99% of ChatGPT Users](https://artificialcorner.com/youre-using-chatgpt-wrong-here-s-how-to-be-ahead-of-99-of-chatgpt-users-886a50dabc54)
[The Ultimate Guide to OpenAI's GPT-3 Language Model](https://www.twilio.com/blog/ultimate-guide-openai-gpt-3-language-model)
