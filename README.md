# doc-sec
> Avoid rewriting JSDOM

[![npm version](https://img.shields.io/npm/v/doc-sec.svg?style=flat-square)](https://www.npmjs.org/package/doc-sec) 
[![install size](https://packagephobia.com/badge?p=doc-sec)](https://packagephobia.com/result?p=doc-sec) 
[![npm downloads](https://img.shields.io/npm/dt/doc-sec.svg?style=flat-square)](http://npm-stat.com/charts.html?package=doc-sec) 

## Install
```
npm i doc-sec
```

## Usage

* Import the Functions

```Javascript
import { Select, SelectAll } from 'doc-sec'
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