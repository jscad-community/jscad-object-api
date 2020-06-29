// the REAL application interface
const jscad = require('@jscad/modeling')

/**
 * Class Geom2
 * Holds a JSCAD 2D geometry consisting of a number of sides.
 * Each side is a line segment as defined by two points.
 * @constructor
 */
const Geom2 = function (geometry) {
  if (geometry === undefined) {
    this.geometry = jscad.geometry.geom2.create()
  } else {
    this.geometry = geometry
  }
}

Geom2.fromPoints = function (points) {
  const newgeom = jscad.geometry.geom2.fromPoints(points)
  return new Geom2(newgeom)
}

Geom2.circle = function (options) {
  const newgeom = jscad.primitives.circle(options)
  return new Geom2(newgeom)
}

Geom2.ellipse = function (options) {
  const newgeom = jscad.primitives.ellipse(options)
  return new Geom2(newgeom)
}

Geom2.polygon = function (options) {
  const newgeom = jscad.primitives.polygon(options)
  return new Geom2(newgeom)
}

Geom2.rectangle = function (options) {
  const newgeom = jscad.primitives.rectangle(options)
  return new Geom2(newgeom)
}

Geom2.roundedRectangle = function (options) {
  const newgeom = jscad.primitives.roundedRectangle(options)
  return new Geom2(newgeom)
}

Geom2.square = function (options) {
  const newgeom = jscad.primitives.square(options)
  return new Geom2(newgeom)
}

Geom2.star = function (options) {
  const newgeom = jscad.primitives.star(options)
  return new Geom2(newgeom)
}

Geom2.prototype = {
  //
  // accessors
  //
  toSides: function () {
    return jscad.geometry.geom2.toSides(this.geometry)
  },

  //
  // measurement methods
  //
  measureArea: function () {
    return jscad.measurements.measureArea(this.geometry)
  },

  measureBounds: function () {
    return jscad.measurements.measureBounds(this.geometry)
  },

  measureVolume: function () {
    return 0
  },

  //
  // producer methods, i.e. methods that produce new Geom2 instances
  //
  center: function (options) {
    const newgeom = jscad.transforms.center(options, this.geometry)
    return new Geom2(newgeom)
  },

  clone: function () {
    const newgeom = jscad.geometry.geom2.clone(this.geometry)
    return new Geom2(newgeom)
  },

  colorize: function (colorspec) {
    if (!Array.isArray(colorspec)) colorspec = jscad.colors.colorNameToRgb(colorspec)
    const newgeom = jscad.colors.colorize(colorspec, this.geometry)
    return new Geom2(newgeom)
  },

  expand: function (options) {
    const newgeom = jscad.expansions.expand(options, this.geometry)
    return new Geom2(newgeom)
  },

  mirror: function (options) {
    const newgeom = jscad.transforms.mirror(options, this.geometry)
    return new Geom2(newgeom)
  },

  offset: function (options) {
    const newgeom = jscad.expansions.offset(options, this.geometry)
    return new Geom2(newgeom)
  },

  rotate: function (angles) {
    const newgeom = jscad.transforms.rotate(angles, this.geometry)
    return new Geom2(newgeom)
  },

  scale: function (factors) {
    const newgeom = jscad.transforms.scale(factors, this.geometry)
    return new Geom2(newgeom)
  },

  reverse: function () {
    const newgeometry = jscad.geometry.geom2.reverse(this.geometry)
    return new Geom2(newgeometry)
  },

  transform: function (matrix) {
    const newgeometry = jscad.geometry.geom2.transform(matrix, this.geometry)
    return new Geom2(newgeometry)
  },

  translate: function (offsets) {
    const newgeom = jscad.transforms.translate(offsets, this.geometry)
    return new Geom2(newgeom)
  },

  //
  // boolean methods
  //
  union: function (...objects) {
    objects = jscad.utils.flatten(objects)
    const geometries = [this.geometry]
    objects.forEach((object) => {
      geometries.push(object.geometry)
    })
    const result = jscad.booleans.union(geometries)
    return new Geom2(result)
  },

  intersect: function (...objects) {
    objects = jscad.utils.flatten(objects)
    const geometries = [this.geometry]
    objects.forEach((object) => {
      geometries.push(object.geometry)
    })
    const result = jscad.booleans.intersect(geometries)
    return new Geom2(result)
  },

  subtract: function (...objects) {
    objects = jscad.utils.flatten(objects)
    const geometries = [this.geometry]
    objects.forEach((object) => {
      geometries.push(object.geometry)
    })
    const result = jscad.booleans.subtract(geometries)
    return new Geom2(result)
  },

  //
  // conversion methods
  //
  toString: function () {
    return `Geom2: ${jscad.geometry.geom2.toString(this.geometry)}`
  },

  toOutlines: function () {
    return jscad.geometry.geom2.toOutlines(this.geometry)
  },

  extrudeLinear: function (options) {
    const newgeometry = jscad.extrusions.extrudeLinear(options, this.geometry)
    const Geom3 = require('./Geom3')
    return new Geom3(newgeometry)
  },

  extrudeRotate: function (options) {
    const newgeometry = jscad.extrusions.extrudeRotate(options, this.geometry)
    const Geom3 = require('./Geom3')
    return new Geom3(newgeometry)
  },

  //
  // helper methods
  //
  centerX: function () {
    return this.center({ axes: [true, false, false] })
  },
  centerY: function () {
    return this.center({ axes: [false, true, false] })
  },
  centerZ: function () {
    return this.center({ axes: [false, false, true] })
  },

  mirrorX: function () {
    return this.mirror({ normal: [1, 0, 0] })
  },
  mirrorY: function () {
    return this.mirror({ normal: [0, 1, 0] })
  },
  mirrorZ: function () {
    return this.mirror({ normal: [0, 0, 1] })
  },

  rotateX: function (angle) {
    return this.rotate([angle, 0, 0])
  },
  rotateY: function (angle) {
    return this.rotate([0, angle, 0])
  },
  rotateZ: function (angle) {
    return this.rotate([0, 0, angle])
  },

  scaleX: function (factor) {
    return this.scale([factor, 1, 1])
  },
  scaleY: function (factor) {
    return this.scale([1, factor, 1])
  },
  scaleZ: function (factor) {
    return this.scale([1, 1, factor])
  },

  translateX: function (offset) {
    return this.translate([offset, 0, 0])
  },
  translateY: function (offset) {
    return this.translate([0, offset, 0])
  },
  translateZ: function (offset) {
    return this.translate([0, 0, offset])
  }
}

module.exports = Geom2
