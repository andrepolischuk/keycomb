# keycomb [![Build Status](https://travis-ci.org/andrepolischuk/keycomb.svg?branch=master)](https://travis-ci.org/andrepolischuk/keycomb)

  > Key combinations parser

## Instalation

```sh
$ npm install --save keycomb
```

```sh
$ component install andrepolischuk/keycomb
```

## Usage

```js
var keycomb = require('keycomb');

keycomb('alt+a+m'); // {altKey: true, ctrlKey: false, shiftKey: false, keyCode: [65, 77]}
keycomb({ctrlKey: true, keyCode: 67}); // ['ctrl', 'c']
```

## API

### keycomb(string)
### keycomb(array)

  Return combination object

```js
keycomb('alt+a+m');
keycomb(['ctrl', 'c']);
```

### keycomb(object)

  Return combination array

```js
keycomb({altKey: true, keyCode: [65, 77]});
keycomb({ctrlKey: true, keyCode: 67});
```

## License

  MIT
