# doxec
> Avoid rewriting JSDOM

[![npm version](https://img.shields.io/npm/v/doxec.svg?style=flat-square)](https://www.npmjs.org/package/doxec) 
[![install size](https://packagephobia.com/badge?p=doxec)](https://packagephobia.com/result?p=doxec) 
[![npm downloads](https://img.shields.io/npm/dt/doxec.svg?style=flat-square)](http://npm-stat.com/charts.html?package=doxec) 

## Install
```
npm i doxec
```

## Usage

* Import the Functions

```Javascript
import { Select, SelectAll } from 'doxec'
```

* Write like this

```Javascript
const [a, b, c] = Select(['div', '.aClass', '#anID'])

const [x, y, z] = SelectAll(['div', '.aClass', '#anID'])
```

* Don't Write like this

```Javascript
const a = document.querySelector('div')
const b = document.querySelector('.aClass')
const c = document.querySelector('#anID')

const x = document.querySelectorAll('div')
const y = document.querySelectorAll('.aClass')
const z = document.querySelectorAll('#anID')
```

## License

> MIT License

...