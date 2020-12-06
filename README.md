# ESLint and Prettier config

These are my configuration files for ESLint and Prettier

## Local/Project Install

1. Create a `package.json` file.

2. Install devDependencies using:

```
npx install-peerdeps --dev eslint-config-sxnaprkhr
```

3. Create a `.eslintrc` file in the root of your project's directory.

```
{
  "extends":[
    "sxnaprkhr"
  ]
}
```

4. Optional: Add these two scripts to your package.json to lint/fix using Terminal:

```
{
  "scripts":{
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```
