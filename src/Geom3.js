// the REAL application interface
const jscad = require('@jscad/modeling')

/**
 * Class Geom3
 * Holds a JSCAD 3D geometry consisting of a set of polygons.
 * @constructor
 */
const Geom3 = function (geometry) {
  if (geometry === undefined) {
    this.geometry = jscad.geometries.geom3.create()
  } else {
    this.geometry = geometry
  }
}

Geom3.fromPoints = function (points) {
  const newgeom = jscad.geometries.geom3.fromPoints(points)
  return new Geom3(newgeom)
}

Geom3.cube = function (options) {
  const newgeom = jscad.primitives.cube(options)
  return new Geom3(newgeom)
}

Geom3.cuboid = function (options) {
  const newgeom = jscad.primitives.cuboid(options)
  return new Geom3(newgeom)
}

Geom3.cylinder = function (options) {
  const newgeom = jscad.primitives.cylinder(options)
  return new Geom3(newgeom)
}

Geom3.cylinderElliptic = function (options) {
  const newgeom = jscad.primitives.cylinderElliptic(options)
  return new Geom3(newgeom)
}

Geom3.ellipsoid = function (options) {
  const newgeom = jscad.primitives.ellipsoid(options)
  return new Geom3(newgeom)
}

Geom3.geodesicSphere = function (options) {
  const newgeom = jscad.primitives.geodesicSphere(options)
  return new Geom3(newgeom)
}

Geom3.polyhedron = function (options) {
  const newgeom = jscad.primitives.polyhedron(options)
  return new Geom3(newgeom)
}

Geom3.roundedCuboid = function (options) {
  const newgeom = jscad.primitives.roundedCuboid(options)
  return new Geom3(newgeom)
}

Geom3.roundedCylinder = function (options) {
  const newgeom = jscad.primitives.roundedCylinder(options)
  return new Geom3(newgeom)
}

Geom3.sphere = function (options) {
  const newgeom = jscad.primitives.sphere(options)
  return new Geom3(newgeom)
}

Geom3.torus = function (options) {
  const newgeom = jscad.primitives.torus(options)
  return new Geom3(newgeom)
}

Geom3.prototype = {
  //
  // accessors
  //
  toPolygons: function () {
    return jscad.geometries.geom3.toPolygons(this.geometry)
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
    return jscad.measurements.measureVolume(this.geometry)
  },

  //
  // producer methods, i.e. methods that produce new Geom3 instances
  //
  center: function (options) {
    const newgeometry = jscad.transforms.center(options, this.geometry)
    return new Geom3(newgeometry)
  },

  clone: function () {
    const newgeometry = jscad.geometries.geom3.clone(this.geometry)
    return new Geom3(newgeometry)
  },

  colorize: function (colorspec) {
    if (!Array.isArray(colorspec)) colorspec = jscad.colors.colorNameToRgb(colorspec)
    const newgeometry = jscad.colors.colorize(colorspec, this.geometry)
    return new Geom3(newgeometry)
  },

  expand: function (options) {
    const newgeometry = jscad.expansions.expand(options, this.geometry)
    return new Geom3(newgeometry)
  },

  invert: function () {
    const newgeometry = jscad.geometries.geom3.invert(this.geometry)
    return new Geom3(newgeometry)
  },

  mirror: function (options) {
    const newgeometry = jscad.transforms.mirror(options, this.geometry)
    return new Geom3(newgeometry)
  },

  rotate: function (angles) {
    const newgeometry = jscad.transforms.rotate(angles, this.geometry)
    return new Geom3(newgeometry)
  },

  scale: function (factors) {
    const newgeometry = jscad.transforms.scale(factors, this.geometry)
    return new Geom3(newgeometry)
  },

  transform: function (matrix) {
    const newgeometry = jscad.geometries.geom3.transform(matrix, this.geometry)
    return new Geom3(newgeometry)
  },

  translate: function (offsets) {
    const newgeometry = jscad.transforms.translate(offsets, this.geometry)
    return new Geom3(newgeometry)
  },

  //
  // boolean methods
  //
  intersect: function (...objects) {
    objects = jscad.utils.flatten(objects)
    const geometries = [this.geometry]
    objects.forEach((object) => {
      geometries.push(object.geometry)
    })
    const result = jscad.booleans.intersect(geometries)
    return new Geom3(result)
  },

  subtract: function (...objects) {
    objects = jscad.utils.flatten(objects)
    const geometries = [this.geometry]
    objects.forEach((object) => {
      geometries.push(object.geometry)
    })
    const result = jscad.booleans.subtract(geometries)
    return new Geom3(result)
  },

  union: function (...objects) {
    objects = jscad.utils.flatten(objects)
    const geometries = objects.map((object) => object.geometry)
    geometries.push(this.geometry)

    const newgeometry = jscad.booleans.union(geometries)
    return new Geom3(newgeometry)
  },

  //
  // conversion methods
  //
  toString: function () {
    return `Geom3: ${jscad.geometries.geom3.toString(this.geometry)}`
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

module.exports = Geom3
