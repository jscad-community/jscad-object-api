## jscad-object-api

## Object API for JSCAD

> This project contains a set of objects that wrap the JSCAD API.

## Overview

The JSCAD API provides as set of geometries, and functions that operate on those geometries.

This project wraps the JSCAD geometries with an object prototype, providing object specific methods.
This allows designs to be written using Javascript object nomenclature.

- Geom2 : wrapper for JSCAD geom2, primitives that produce geom2, and associated operations
- Geom3 : wrapper for JSCAD geom3, primitives that produce geom3, and associated operations
- Path2 : wrapper for JSCAD path2, primitives that produce path2, and associated operations

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

For Node.js based projects, this package can be installed using NPM.
```
npm install jscad-object-api
```

For standalone projects, this package can be downloaded and included as a component.
- Download the package from GitHub
- Unzip the contents, which will produce a directory called 'jscad-object-api'
- Copy the 'jscad-object-api' directory into the larger project

## Usage

Depending on the installation above, the useage is slightly different.

For Node.js based projects, just add the approprate require statement to access the API functions.
```
const {Geom2, Geom3, Path2} = require('jscad-object-api')
```

For standalone projects, the require statement must access the 'jscad-object-api' directory.
```
const {Geom2, Geom3, Path2} = require('./libraries/jscad-object-api')
```

Now the classes can be used within your JSCAD project.
```
const {Geom2} = require('./jscad-object-api')

const main = (params) => {
  let obj2 = Geom2.rectangle({size: [120, 40]})

  let obj1 = obj2.rotate([0, 0, Math.PI/2]).center({center: [60.0000, -20.0000, 0]})
  obj1 = obj1.color([1, 0, 0, 1])

  return [obj1.geometry, obj2.geometry] // RETURN JSCAD GEOMETRIES
}

module.exports = { main }
```

Note: JSCAD geometries must be returned from main(), so don't forget.

## License

[The MIT License (MIT)](./LICENSE)

