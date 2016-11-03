# futurify

A simple version of the future.

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]
[![conduct][conduct]][conduct-url]

[npm-image]: https://img.shields.io/npm/v/futurify.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/futurify
[travis-image]: https://img.shields.io/travis/sethvincent/futurify.svg?style=flat-square
[travis-url]: https://travis-ci.org/sethvincent/futurify
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard
[conduct]: https://img.shields.io/badge/code%20of%20conduct-contributor%20covenant-green.svg?style=flat-square
[conduct-url]: CONDUCT.md

## About

This [browserify](https://npmjs.com/browserify) transform compiles a subset of es2015 to es5.

## The future of the future

This preset will be modified as browser support changes and new versions of ecmascript are released.

## Don't depend on this in npm packages

I recommend not using this transform, or using babel at all, for packages that are released on npm. If the only thing keeping your code from running in older browsers or in older versions of node is es2015+ syntax, refactor to remove that syntax. This is easier for everybody.

I've created this specifically for use in applications where the syntax improvements are helpful for browser code.


## Install

```sh
npm install --save-dev futurify
```

## Usage

### Via `package.json` (recommended):

```json
{
  "browserify": {
    "transform": [
      "futurify"
    ]
  }
}
```

### Via CLI:

```js
$ browserify client.js -t futurify -o bundle.js
```

### Via Node API:

```js
const browserify = require('browserify')
browserify('./client.js')
  .transform('futurify')
  .bundle()
  .pipe(process.stdout)
```

## See also

- [es2020](https://npmjs.com/es2020)
- [es2040](https://npmjs.com/es2040)
- [babelify](https://npmjs.com/babelify)

## Conduct

It is important that this project contributes to a friendly, safe, and welcoming environment for all. Read this project's [code of conduct](CONDUCT.md)

## Contact

- **issues** – Please open issues in the [issues queue](https://github.com/sethvincent/futurify/issues)

## Credit

Big thanks to @zertosh for letting me use the futurify package name on npm! Looking for the previous [futurify package](https://github.com/zertosh/futurify)? 

## License

[ISC](LICENSE.md)
