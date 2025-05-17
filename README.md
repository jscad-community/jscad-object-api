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

For Node.js based projects, just add the approprate require statement to access the API functions.
```
const {Geom2, Geom3, Path2} = require('jscad-object-api')
```

Now the classes can be used within your JSCAD project.
```
const {Geom2} = require('jscad-object-api')

const main = (params) => {
  let obj0 = Geom2.rectangle({size: [120, 40]})

  let obj1 = obj0.rotate([0, 0, Math.PI/2]).center({center: [60.0000, -20.0000, 0]})
  obj1 = obj1.colorize([1, 0, 0, 1])

  return [obj0.geometry, obj1.geometry] // RETURN JSCAD GEOMETRIES
}

module.exports = { main }
```

Note: JSCAD geometries must be returned from main(), so don't forget.

## JSCAD Projects (Designs)

If not already, create a new folder for the project. (This example is using 'newproject' as the folder name.)

Download this package by clicking on the green 'CODE' button, and select 'Download ZIP'.
Then unzip the contents.

Copy the dist/jscad-objects.commonjs.js file into the project, i.e. the 'newproject' directory.

Inside the project folder, create a file called index.js, and add the following code.
```
const { Geom3 } = require('.jscad-objects.commonjs.js')

const main = (params) => {
  const segments = 64

  const obj1 = new Geom3.cube({ size: 300 }).subtract( Geom3.sphere({ radius: 200, segments })).colorize([1.0, 0.4, 1.0])
  const obj2 = new Geom3.sphere({ radius: 130, segments }).intersect( Geom3.cube({ size: 210 })).colorize([1.0, 1.0, 0])

  return [obj1.geometry, obj2.geometry]
}

module.exports = { main }
```

The project folder (newproject) should now have the following contents.
```
    index.js
    jscad-objects.commonjs.js
```

Done!

Now, just drag and drop the project folder onto the JSCAD design website.


## License

[The MIT License (MIT)](./LICENSE)

