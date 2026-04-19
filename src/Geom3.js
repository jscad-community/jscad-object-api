// the REAL application interface
import { geom3, cylinder, cylinderElliptic, cube, cuboid, ellipsoid, geodesicSphere, polyhedron, roundedCuboid, roundedCylinder, sphere, torus } from '@jscad/modeling'
import { center, hull, hullChain, intersect, mirror, offset, project, rotate, scale, scission, snap, subtract, translate, union } from '@jscad/modeling'
import { colorize, colorNameToRgb, measureArea, measureBoundingBox, measureBoundingSphere, measureCenter, measureCenterOfMass, measureDimensions, measureEpsilon, measureVolume, flatten } from '@jscad/modeling'

import { Geom2 } from './Geom2.js'

/**
 * Class Geom3
 *
 * Holds a JSCAD 3D geometry consisting of a set of polygons.
 * @constructor
 * @param {geom3} [geometry] a provided geometry
 *
 * @example
 * const ashape = Geom3.cylinder()
 * const bshape = Geom3.cylinder({height: 2, radius: 10})
 * const cshare = bshape.translate([3, 2, 1])
 */
export class Geom3 {
  constructor (geometry) {
    if (geometry === undefined) {
      this.geometry = geom3.create()
    } else {
      this.geometry = geometry
    }
  }

  static fromVertices (vertices) {
    const newgeom = geom3.fromVertices(vertices)
    return new Geom3(newgeom)
  }

  static cube (options) {
    const newgeom = cube(options)
    return new Geom3(newgeom)
  }

  static cuboid (options) {
    const newgeom = cuboid(options)
    return new Geom3(newgeom)
  }

  static cylinder (options) {
    const newgeom = cylinder(options)
    return new Geom3(newgeom)
  }

  static cylinderElliptic (options) {
    const newgeom = cylinderElliptic(options)
    return new Geom3(newgeom)
  }

  static ellipsoid (options) {
    const newgeom = ellipsoid(options)
    return new Geom3(newgeom)
  }

  static geodesicSphere (options) {
    const newgeom = geodesicSphere(options)
    return new Geom3(newgeom)
  }

  static polyhedron (options) {
    const newgeom = polyhedron(options)
    return new Geom3(newgeom)
  }

  static roundedCuboid (options) {
    const newgeom = roundedCuboid(options)
    return new Geom3(newgeom)
  }

  static roundedCylinder (options) {
    const newgeom = roundedCylinder(options)
    return new Geom3(newgeom)
  }

  static sphere (options) {
    const newgeom = sphere(options)
    return new Geom3(newgeom)
  }

  static torus (options) {
    const newgeom = torus(options)
    return new Geom3(newgeom)
  }

  //
  // accessors
  //
  toPolygons () {
    return geom3.toPolygons(this.geometry)
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
    return measureVolume(this.geometry)
  }

  //
  // producer methods, i.e. methods that produce new Geom3 instances
  //
  center (options) {
    const newgeometry = center(options, this.geometry)
    return new Geom3(newgeometry)
  }

  clone () {
    const newgeometry = geom3.clone(this.geometry)
    return new Geom3(newgeometry)
  }

  colorize (colorspec) {
    if (!Array.isArray(colorspec)) colorspec = colorNameToRgb(colorspec)
    const newgeometry = colorize(colorspec, this.geometry)
    return new Geom3(newgeometry)
  }

  // TODO generalize

  invert () {
    const newgeometry = geom3.invert(this.geometry)
    return new Geom3(newgeometry)
  }

  mirror (options) {
    const newgeometry = mirror(options, this.geometry)
    return new Geom3(newgeometry)
  }

  offset (options) {
    const newgeometry = offset(options, this.geometry)
    return new Geom3(newgeometry)
  }

  rotate (angles) {
    const newgeometry = rotate(angles, this.geometry)
    return new Geom3(newgeometry)
  }

  snap () {
    const newgeometry = snap(this.geometry)
    return new Geom3(newgeometry)
  }

  scale (factors) {
    const newgeometry = scale(factors, this.geometry)
    return new Geom3(newgeometry)
  }

  scission () {
    const newgeometries = scission(this.geometry).map((newgeometry) => new Geom3(newgeometry))
    return newgeometries
  }

  transform (matrix) {
    const newgeometry = geom3.transform(matrix, this.geometry)
    return new Geom3(newgeometry)
  }

  translate (offsets) {
    const newgeometry = translate(offsets, this.geometry)
    return new Geom3(newgeometry)
  }

  // TODO
  // align (...objects) {
  //   const newgeometry = align(options, this.geometry)
  //   return new Geom3(newgeometry)
  // }

  //
  // boolean methods
  //
  intersect (...objects) {
    objects = flatten(objects)
    const geometries = [this.geometry]
    objects.forEach((object) => {
      geometries.push(object.geometry)
    })
    const result = intersect(geometries)
    return new Geom3(result)
  }

  subtract (...objects) {
    objects = flatten(objects)
    const geometries = [this.geometry]
    objects.forEach((object) => {
      geometries.push(object.geometry)
    })
    const result = subtract(geometries)
    return new Geom3(result)
  }

  union (...objects) {
    objects = flatten(objects)
    const geometries = objects.map((object) => object.geometry)
    geometries.push(this.geometry)

    const newgeometry = union(geometries)
    return new Geom3(newgeometry)
  }

  //
  // extrusion methods
  //
  project (options) {
    const newgeometry = project(options, this.geometry)
    return new Geom2(newgeometry) // 2D PROJECTION
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
    return new Geom3(result)
  }

  hullChain (...objects) {
    objects = flatten(objects)
    const geometries = [this.geometry]
    objects.forEach((object) => {
      geometries.push(object.geometry)
    })
    const result = hullChain(geometries)
    return new Geom3(result)
  }

  //
  // conversion methods
  //
  toString () {
    return `Geom3: ${geom3.toString(this.geometry)}`
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
