[![Build Status](https://travis-ci.com/yurikrupnik/generator-babel.svg?branch=master)](https://travis-ci.com/yurikrupnik/generator-babel)
[![Coverage Status](https://coveralls.io/repos/github/yurikrupnik/generator-babel/badge.svg?branch=master)](https://coveralls.io/github/yurikrupnik/generator-babel?branch=master)
# generator-babel

generator-babel creates .babelrc file with support for react plugins and installs the needed packages.

## Install
```
npm install --global generator-node
```
## Usage

```
yo babel
```

## Extending generator
```
this.composeWith(require.resolve('generator-babel/app'), {
  /* options */
});
```

## Options
- destination (String, default '') destination path for .babelrc file.
- react (Boolean, default false) include react support.
