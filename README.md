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

- [Usage](#usage)
- [License](#license)

## Usage

First, obtain a copy of these 'user' objects. You can download the files, or obtain through git.

Second, add these objects to the contents of your JSCAD project. You can copy the files into a project.

Third, use these objects as part of your JSCAD project.

```
const Geom2 = require('./Geom2')

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

[The MIT License (MIT)](https://github.com/jscad/jscad-object-api/blob/master/LICENSE)

