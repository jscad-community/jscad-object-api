## jscad-object-api

## Object API for JSCAD

> This project contains a set of objects that wrap the JSCAD geometries.

## Overview

The JSCAD API provides 2D and 3D geometries as set of functions that operate on those geometries.

This project wraps the JSCAD geometries with an object prototype, providing object specific methods.
This allows designs to be written using Javascript object nomenclature.

- Geom2 : wrapper for JSCAD geom2 with associated methods, as well as static functions to create primitives
- Geom3 : wrapper for JSCAD geom3 with associated methods, as well as static functions to create primitives
- Path2 : wrapper for JSCAD path2 with associated methods, as well as static functions to create primitives

See [JSDELIVR](https://cdn.jsdelivr.net/npm/jscad-object-api/) for a list of versions.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

For Node.js based projects, this package can be installed using NPM.
```
npm install jscad-object-api
```

## Usage

The package can be used by adding the approprate import statement to access the classes.
```
import { Geom2, Geom3, Path2 } from 'jscad-object-api'
```

Now the classes can be used within your JSCAD design.
```
import { Geom2 } from 'jscad-object-api'

export const main = (params) => {
  let obj0 = Geom2.rectangle({size: [120, 40]})

  let obj1 = obj0.rotate([0, 0, Math.PI/2]).center({center: [60.0000, -20.0000, 0]})
  obj1 = obj1.colorize([1, 0, 0, 1])

  return [obj0.geometry, obj1.geometry] // RETURN JSCAD GEOMETRIES
}
```

Note: JSCAD geometries must be returned from main(), so don't forget.

## License

[The MIT License (MIT)](./LICENSE)

