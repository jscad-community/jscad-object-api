// the REAL application interface
const jscad = require('@jscad/modeling')

/**
 * Class Path2
 * Holds a JSCAD path geometry consisting of a set of points.
 * A path can be open or closed, i.e. the start and end are the same.
 * @constructor
 * @param {jscad.geometry.path2} [geometry] a provided geometry
 *
 * @example
 * let path1 = Path2.fromPoints([[10,10], [-10,10], [-10,-10], [10,-10]], true) // closed
 * let path2 = Part2.arc({
 *   center: [5, 5],
 *   radius: 10,
 *   startangle: 90,
 *   endangle: 180,
 *   resolution: 36,
 * })
 * let path3 = path1.concat(path2)
 */
const Path2 = function (geometry) {
  if (geometry === undefined) {
    this.geometry = jscad.geometry.path2.create()
  } else {
    this.geometry = geometry
  }
}

Path2.fromPoints = function (points, closed) {
  let newpath = jscad.geometry.path2.fromPoints({closed: closed}, points)
  return new Path2(newpath)
}

Path2.arc = function (options) {
  var newpath = jscad.primitives.arc(options)
  return new Path2(newpath)
}

Path2.prototype = {
  //
  // accessor methods
  //
  isClosed: function () {
    return this.geometry.isClosed
  },

  // DO NOT MODIFY THE POINTS!
  toPoints: function () {
    return jscad.geometry.path2.toPoints(this.geometry)
  },

  //
  // measurements
  //
  measureArea: function () {
    return 0 // none
  },

  measureBounds: function () {
    return jscad.measurements.measureBounds(this.geometry)
  },

  measureVolume: function () {
    return 0 // none
  },

  //
  // producer methods, i.e. methods that produce new Path2 instances
  //
  appendArc: function (options) {
    let newpath = jscad.geometry.path2.appendArc(options, this.geometry)
    return new Path2(newpath)
  },

  appendBezier: function (options) {
    let newpath = jscad.geometry.path2.appendBezier(options, this.geometry)
    return new Path2(newpath)
  },

  appendPoint: function (point) {
    return this.appendPoints([point])
  },

  appendPoints: function (points) {
    let newpath = jscad.geometry.path2.appendPoints(points, this.geometry)
    return new Path2(newpath)
  },

  center: function (options) {
    let newgeom = jscad.transforms.center(options, this.geometry)
    return new Path2(newgeom)
  },

  clone: function () {
    let newpath = jscad.geometry.path2.clone(this.geometry)
    return new Path2(newpath)
  },

  close: function () {
    let newpath = jscad.geometry.path2.close(this.geometry)
    return new Path2(newpath)
  },

  color: function (colorspec) {
    if (!Array.isArray(colorspec)) colorspec = jscad.color.colorNameToRgb(colorspec)
    let newpath = jscad.color.color(colorspec, this.geometry)
    return new Path2(newpath)
  },

  concat: function (otherpath) {
    let newpath = jscad.geometry.path2.concat(this.geometry, otherpath.geometry)
    return new Path2(newpath)
  },

  mirror: function (options) {
    let newgeom = jscad.transforms.mirror(options, this.geometry)
    return new Path2(newgeom)
  },

  offset: function (options) {
    let newgeom = jscad.expansions.offset(options, this.geometry)
    return new Path2(newgeom)
  },

  rotate: function (angles) {
    let newgeom = jscad.transforms.rotate(angles, this.geometry)
    return new Path2(newgeom)
  },

  scale: function (factors) {
    let newgeom = jscad.transforms.scale(factors, this.geometry)
    return new Path2(newgeom)
  },

  transform: function (matrix) {
    let newpath = jscad.transforms.transform(matrix, this.geometry)
    return new Path2(newpath)
  },

  translate: function (offsets) {
    let newgeom = jscad.transforms.translate(offsets, this.geometry)
    return new Path2(newgeom)
  },

  //
  // conversion methods
  //
  toString: function () {
    return `Path2: ${jscad.geometry.path2.toString(this.geometry)}`
  },

  extrudeRectangular: function (options) {
    let newgeom3 = jscad.extrusions.extrudeRectangular(options, this.geometry)
    const Geom3 = require('./Geom3')
    return new Geom3(newgeom3)
  },

  expand: function (options) {
    let newgeom2 = jscad.expansions.expand(options, this.geometry)
    const Geom2 = require('./Geom2')
    return new Geom2(newgeom2)
  },

  //
  // helper methods
  //
  centerX: function () {
    return this.center({axes: [true, false, false]})
  },
  centerY: function () {
    return this.center({axes: [false, true, false]})
  },
  centerZ: function () {
    return this.center({axes: [false, false, true]})
  },

  mirrorX: function () {
    return this.mirror({normal: [1, 0, 0]})
  },
  mirrorY: function () {
    return this.mirror({normal: [0, 1, 0]})
  },
  mirrorZ: function () {
    return this.mirror({normal: [0, 0, 1]})
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

module.exports = Path2
