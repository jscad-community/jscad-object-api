// the REAL application interface
import { geom2, circle, ellipse, polygon, rectangle, roundedRectangle, square, star } from '@jscad/modeling'
import { flatten, center, colorNameToRgb, colorize, extrudeHelical, extrudeLinear, extrudeRotate, hull, hullChain, intersect, mirror, offset, rotate, scale, snap, subtract, translate, transform, union } from '@jscad/modeling'
import { measureArea, measureBoundingBox, measureBoundingSphere, measureCenter, measureCenterOfMass, measureDimensions, measureEpsilon } from '@jscad/modeling'

import { Geom3 } from './Geom3.js'

/**
 * Class Geom2
 *
 * Holds a JSCAD 2D geometry consisting of a number of sides.
 * Each side is a line segment as defined by two points.
 * @constructor
 * @param {geom2} [geometry] a provided geometry
 *
 * @example
 */
export class Geom2 {
  constructor (geometry) {
    if (geometry === undefined) {
      this.geometry = geom2.create()
    } else {
      this.geometry = geometry
    }
  }

  static fromPoints (points) {
    const newgeom = geom2.create([points])
    return new Geom2(newgeom)
  }

  static circle (options) {
    const newgeom = circle(options)
    return new Geom2(newgeom)
  }

  static ellipse (options) {
    const newgeom = ellipse(options)
    return new Geom2(newgeom)
  }

  static polygon (options) {
    const newgeom = polygon(options)
    return new Geom2(newgeom)
  }

  static rectangle (options) {
    const newgeom = rectangle(options)
    return new Geom2(newgeom)
  }

  static roundedRectangle (options) {
    const newgeom = roundedRectangle(options)
    return new Geom2(newgeom)
  }

  static square (options) {
    const newgeom = square(options)
    return new Geom2(newgeom)
  }

  static star (options) {
    const newgeom = star(options)
    return new Geom2(newgeom)
  }

  //
  // accessors
  //
  toSides () {
    return geom2.toSides(this.geometry)
  }

  //
  // measurement methods
  //
  measureArea () {
    return measureArea(this.geometry)
  }

  measureBoundingBox () {
    return measureBoundingBox(this.geometry)
  }

  measureBoundingSphere () {
    return measureBoundingSphere(this.geometry)
  }

  measureCenter () {
    return measureCenter(this.geometry)
  }

  measureCenterOfMass () {
    return measureCenterOfMass(this.geometry)
  }

  measureDimensions () {
    return measureDimensions(this.geometry)
  }

  measureEpsilon () {
    return measureEpsilon(this.geometry)
  }

  measureVolume () {
    return 0
  }

  //
  // producer methods, i.e. methods that produce new Geom2 instances
  //
  center (options) {
    const newgeom = center(options, this.geometry)
    return new Geom2(newgeom)
  }

  clone () {
    const newgeom = geom2.clone(this.geometry)
    return new Geom2(newgeom)
  }

  colorize (colorspec) {
    if (!Array.isArray(colorspec)) colorspec = colorNameToRgb(colorspec)
    const newgeom = colorize(colorspec, this.geometry)
    return new Geom2(newgeom)
  }

  mirror (options) {
    const newgeom = mirror(options, this.geometry)
    return new Geom2(newgeom)
  }

  offset (options) {
    const newgeom = offset(options, this.geometry)
    return new Geom2(newgeom)
  }

  rotate (angles) {
    const newgeom = rotate(angles, this.geometry)
    return new Geom2(newgeom)
  }

  scale (factors) {
    const newgeom = scale(factors, this.geometry)
    return new Geom2(newgeom)
  }

  snap () {
    const newgeom = snap(this.geometry)
    return new Geom2(newgeom)
  }

  reverse () {
    const newgeometry = geom2.reverse(this.geometry)
    return new Geom2(newgeometry)
  }

  transform (matrix) {
    const newgeometry = transform(matrix, this.geometry)
    return new Geom2(newgeometry)
  }

  translate (offsets) {
    const newgeom = translate(offsets, this.geometry)
    return new Geom2(newgeom)
  }

  // TODO
  // align (...objects) {
  //   const newgeom = align(options, this.geometry)
  //   return new Geom2(newgeom)
  // }

  //
  // boolean methods
  //
  union (...objects) {
    objects = flatten(objects)
    const geometries = [this.geometry]
    objects.forEach((object) => {
      geometries.push(object.geometry)
    })
    const result = union(geometries)
    return new Geom2(result)
  }

  intersect (...objects) {
    objects = flatten(objects)
    const geometries = [this.geometry]
    objects.forEach((object) => {
      geometries.push(object.geometry)
    })
    const result = intersect(geometries)
    return new Geom2(result)
  }

  subtract (...objects) {
    objects = flatten(objects)
    const geometries = [this.geometry]
    objects.forEach((object) => {
      geometries.push(object.geometry)
    })
    const result = subtract(geometries)
    return new Geom2(result)
  }

  //
  // hull methods
  //
  hull (...objects) {
    objects = flatten(objects)
    const geometries = [this.geometry]
    objects.forEach((object) => {
      geometries.push(object.geometry)
    })
    const result = hull(geometries)
    return new Geom2(result)
  }

  hullChain (...objects) {
    objects = flatten(objects)
    const geometries = [this.geometry]
    objects.forEach((object) => {
      geometries.push(object.geometry)
    })
    const result = hullChain(geometries)
    return new Geom2(result)
  }

  //
  // conversion methods
  //
  toString () {
    return `Geom2: ${geom2.toString(this.geometry)}`
  }

  toOutlines () {
    return geom2.toOutlines(this.geometry)
  }

  toPoints () {
    return geom2.toPoints(this.geometry)
  }

  //
  // extrusion methods
  //
  extrudeHelical (options) {
    const newgeometry = extrudeHelical(options, this.geometry)
    return new Geom3(newgeometry)
  }

  extrudeLinear (options) {
    const newgeometry = extrudeLinear(options, this.geometry)
    return new Geom3(newgeometry)
  }

  extrudeRotate (options) {
    const newgeometry = extrudeRotate(options, this.geometry)
    return new Geom3(newgeometry)
  }

  //
  // helper methods
  //
  centerX () {
    return this.center({ axes: [true, false, false] })
  }

  centerY () {
    return this.center({ axes: [false, true, false] })
  }

  centerZ () {
    return this.center({ axes: [false, false, true] })
  }

  mirrorX () {
    return this.mirror({ normal: [1, 0, 0] })
  }

  mirrorY () {
    return this.mirror({ normal: [0, 1, 0] })
  }

  mirrorZ () {
    return this.mirror({ normal: [0, 0, 1] })
  }

  rotateX (angle) {
    return this.rotate([angle, 0, 0])
  }

  rotateY (angle) {
    return this.rotate([0, angle, 0])
  }

  rotateZ (angle) {
    return this.rotate([0, 0, angle])
  }

  scaleX (factor) {
    return this.scale([factor, 1, 1])
  }

  scaleY (factor) {
    return this.scale([1, factor, 1])
  }

  scaleZ (factor) {
    return this.scale([1, 1, factor])
  }

  translateX (offset) {
    return this.translate([offset, 0, 0])
  }

  translateY (offset) {
    return this.translate([0, offset, 0])
  }

  translateZ (offset) {
    return this.translate([0, 0, offset])
  }
}
