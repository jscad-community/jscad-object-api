// the REAL application interface
import { path2, flatten, colorNameToRgb } from '@jscad/modeling'
import { arc, line, extrudeLinear } from '@jscad/modeling'
import { center, colorize, hull, mirror, offset, rotate, scale, snap, translate, transform } from '@jscad/modeling'
import { measureBoundingBox, measureBoundingSphere, measureCenter, measureCenterOfMass, measureDimensions, measureEpsilon } from '@jscad/modeling'

import { Geom2 } from './Geom2.js'
import { Geom3 } from './Geom3.js'

/**
 * Class Path2
 * Holds a JSCAD path geometry consisting of a set of points.
 * A path can be open or closed, i.e. the start and end are the same.
 * @constructor
 * @param {path2} [geometry] a provided geometry
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
export class Path2 {
  constructor (geometry) {
    if (geometry === undefined) {
      this.geometry = path2.create()
    } else {
      this.geometry = geometry
    }
  }

  static fromPoints (points, closed) {
    const newpath = path2.fromPoints({ closed: closed }, points)
    return new Path2(newpath)
  }

  static arc (options) {
    const newpath = arc(options)
    return new Path2(newpath)
  }

  static line (options) {
    const newpath = line(options)
    return new Path2(newpath)
  }

  //
  // accessor methods
  //
  isClosed () {
    return this.geometry.isClosed
  }

  // DO NOT MODIFY THE POINTS!
  toPoints () {
    return path2.toPoints(this.geometry)
  }

  //
  // measurements
  //
  measureArea () {
    return 0 // none
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
    return 0 // none
  }

  //
  // producer methods, i.e. methods that produce new Path2 instances
  //
  appendArc (options) {
    const newpath = path2.appendArc(options, this.geometry)
    return new Path2(newpath)
  }

  appendBezier (options) {
    const newpath = path2.appendBezier(options, this.geometry)
    return new Path2(newpath)
  }

  appendPoint (point) {
    return this.appendPoints([point])
  }

  appendPoints (points) {
    const newpath = path2.appendPoints(points, this.geometry)
    return new Path2(newpath)
  }

  center (options) {
    const newgeom = center(options, this.geometry)
    return new Path2(newgeom)
  }

  clone () {
    const newpath = path2.clone(this.geometry)
    return new Path2(newpath)
  }

  close () {
    const newpath = path2.close(this.geometry)
    return new Path2(newpath)
  }

  colorize (colorspec) {
    if (!Array.isArray(colorspec)) colorspec = colorNameToRgb(colorspec)
    const newpath = colorize(colorspec, this.geometry)
    return new Path2(newpath)
  }

  concat (otherpath) {
    const newpath = path2.concat(this.geometry, otherpath.geometry)
    return new Path2(newpath)
  }

  mirror (options) {
    const newgeom = mirror(options, this.geometry)
    return new Path2(newgeom)
  }

  offset (options) {
    // NOTE: offset returns geom2
    const newgeom = offset(options, this.geometry)
    return new Geom2(newgeom)
  }

  reverse () {
    const newgeom = path2.reverse(this.geometry)
    return new Path2(newgeom)
  }

  rotate (angles) {
    const newgeom = rotate(angles, this.geometry)
    return new Path2(newgeom)
  }

  scale (factors) {
    const newgeom = scale(factors, this.geometry)
    return new Path2(newgeom)
  }

  snap () {
    const newgeometry = snap(this.geometry)
    return new Path2(newgeometry)
  }

  transform (matrix) {
    const newpath = transform(matrix, this.geometry)
    return new Path2(newpath)
  }

  translate (offsets) {
    const newgeom = translate(offsets, this.geometry)
    return new Path2(newgeom)
  }

  // TODO
  // align (...objects) {
  //   const newgeom = align(options, this.geometry)
  //   return new Path2(newgeom)
  // }

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
    return new Path2(result)
  }

  //
  // conversion methods
  //
  toString () {
    return `Path2: ${path2.toString(this.geometry)}`
  }

  //
  // extrusion methods
  //
  extrudeLinear (options) {
    const newgeometry = extrudeLinear(options, this.geometry)
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
