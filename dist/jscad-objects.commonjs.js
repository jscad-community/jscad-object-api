var exports = module.exports
'use strict';

var require$$0 = require('@jscad/modeling');

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var Geom3_1;
var hasRequiredGeom3;

function requireGeom3 () {
	if (hasRequiredGeom3) return Geom3_1;
	hasRequiredGeom3 = 1;
	// the REAL application interface
	const jscad = require$$0;

	/**
	 * Class Geom3
	 * Holds a JSCAD 3D geometry consisting of a set of polygons.
	 * @constructor
	 * @param {jscad.geometries.geom3} [geometry] a provided geometry
	 *
	 * @example
	 */
	const Geom3 = function (geometry) {
	  if (geometry === undefined) {
	    this.geometry = jscad.geometries.geom3.create();
	  } else {
	    this.geometry = geometry;
	  }
	};

	Geom3.fromPoints = function (points) {
	  const newgeom = jscad.geometries.geom3.fromPoints(points);
	  return new Geom3(newgeom)
	};

	Geom3.cube = function (options) {
	  const newgeom = jscad.primitives.cube(options);
	  return new Geom3(newgeom)
	};

	Geom3.cuboid = function (options) {
	  const newgeom = jscad.primitives.cuboid(options);
	  return new Geom3(newgeom)
	};

	Geom3.cylinder = function (options) {
	  const newgeom = jscad.primitives.cylinder(options);
	  return new Geom3(newgeom)
	};

	Geom3.cylinderElliptic = function (options) {
	  const newgeom = jscad.primitives.cylinderElliptic(options);
	  return new Geom3(newgeom)
	};

	Geom3.ellipsoid = function (options) {
	  const newgeom = jscad.primitives.ellipsoid(options);
	  return new Geom3(newgeom)
	};

	Geom3.geodesicSphere = function (options) {
	  const newgeom = jscad.primitives.geodesicSphere(options);
	  return new Geom3(newgeom)
	};

	Geom3.polyhedron = function (options) {
	  const newgeom = jscad.primitives.polyhedron(options);
	  return new Geom3(newgeom)
	};

	Geom3.roundedCuboid = function (options) {
	  const newgeom = jscad.primitives.roundedCuboid(options);
	  return new Geom3(newgeom)
	};

	Geom3.roundedCylinder = function (options) {
	  const newgeom = jscad.primitives.roundedCylinder(options);
	  return new Geom3(newgeom)
	};

	Geom3.sphere = function (options) {
	  const newgeom = jscad.primitives.sphere(options);
	  return new Geom3(newgeom)
	};

	Geom3.torus = function (options) {
	  const newgeom = jscad.primitives.torus(options);
	  return new Geom3(newgeom)
	};

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

	  measureBoundingBox: function () {
	    return jscad.measurements.measureBoundingBox(this.geometry)
	  },

	  measureBoundingSphere: function () {
	    return jscad.measurements.measureBoundingSphere(this.geometry)
	  },

	  measureCenter: function () {
	    return jscad.measurements.measureCenter(this.geometry)
	  },

	  measureCenterOfMass: function () {
	    return jscad.measurements.measureCenterOfMass(this.geometry)
	  },

	  measureDimensions: function () {
	    return jscad.measurements.measureDimensions(this.geometry)
	  },

	  measureEpsilon: function () {
	    return jscad.measurements.measureEpsilon(this.geometry)
	  },

	  measureVolume: function () {
	    return jscad.measurements.measureVolume(this.geometry)
	  },

	  //
	  // producer methods, i.e. methods that produce new Geom3 instances
	  //
	  align: function (options) {
	    const newgeometry = jscad.transforms.align(options, this.geometry);
	    return new Geom3(newgeometry)
	  },

	  center: function (options) {
	    const newgeometry = jscad.transforms.center(options, this.geometry);
	    return new Geom3(newgeometry)
	  },

	  clone: function () {
	    const newgeometry = jscad.geometries.geom3.clone(this.geometry);
	    return new Geom3(newgeometry)
	  },

	  colorize: function (colorspec) {
	    if (!Array.isArray(colorspec)) colorspec = jscad.colors.colorNameToRgb(colorspec);
	    const newgeometry = jscad.colors.colorize(colorspec, this.geometry);
	    return new Geom3(newgeometry)
	  },

	  expand: function (options) {
	    const newgeometry = jscad.expansions.expand(options, this.geometry);
	    return new Geom3(newgeometry)
	  },

	  // TODO generalize

	  invert: function () {
	    const newgeometry = jscad.geometries.geom3.invert(this.geometry);
	    return new Geom3(newgeometry)
	  },

	  mirror: function (options) {
	    const newgeometry = jscad.transforms.mirror(options, this.geometry);
	    return new Geom3(newgeometry)
	  },

	  rotate: function (angles) {
	    const newgeometry = jscad.transforms.rotate(angles, this.geometry);
	    return new Geom3(newgeometry)
	  },

	  snap: function () {
	    const newgeometry = jscad.modifiers.snap(this.geometry);
	    return new Geom3(newgeometry)
	  },

	  scale: function (factors) {
	    const newgeometry = jscad.transforms.scale(factors, this.geometry);
	    return new Geom3(newgeometry)
	  },

	  scission: function () {
	    const newgeometries = jscad.booleans.scission(this.geometry).map((newgeometry) => new Geom3(newgeometry));
	    return newgeometries
	  },

	  transform: function (matrix) {
	    const newgeometry = jscad.geometries.geom3.transform(matrix, this.geometry);
	    return new Geom3(newgeometry)
	  },

	  translate: function (offsets) {
	    const newgeometry = jscad.transforms.translate(offsets, this.geometry);
	    return new Geom3(newgeometry)
	  },

	  //
	  // boolean methods
	  //
	  intersect: function (...objects) {
	    objects = jscad.utils.flatten(objects);
	    const geometries = [this.geometry];
	    objects.forEach((object) => {
	      geometries.push(object.geometry);
	    });
	    const result = jscad.booleans.intersect(geometries);
	    return new Geom3(result)
	  },

	  subtract: function (...objects) {
	    objects = jscad.utils.flatten(objects);
	    const geometries = [this.geometry];
	    objects.forEach((object) => {
	      geometries.push(object.geometry);
	    });
	    const result = jscad.booleans.subtract(geometries);
	    return new Geom3(result)
	  },

	  union: function (...objects) {
	    objects = jscad.utils.flatten(objects);
	    const geometries = objects.map((object) => object.geometry);
	    geometries.push(this.geometry);

	    const newgeometry = jscad.booleans.union(geometries);
	    return new Geom3(newgeometry)
	  },

	  //
	  // extrusion methods
	  //
	  project: function (options) {
	    const newgeometry = jscad.extrusions.project(options, this.geometry);
	    const Geom2 = requireGeom2();
	    return new Geom2(newgeometry) // 2D PROJECTION
	  },

	  //
	  // hull methods
	  //
	  hull: function (...objects) {
	    objects = jscad.utils.flatten(objects);
	    const geometries = [this.geometry];
	    objects.forEach((object) => {
	      geometries.push(object.geometry);
	    });
	    const result = jscad.hulls.hull(geometries);
	    return new Geom3(result)
	  },
	  hullChain: function (...objects) {
	    objects = jscad.utils.flatten(objects);
	    const geometries = [this.geometry];
	    objects.forEach((object) => {
	      geometries.push(object.geometry);
	    });
	    const result = jscad.hulls.hullChain(geometries);
	    return new Geom3(result)
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
	};

	Geom3_1 = Geom3;
	return Geom3_1;
}

var Geom2_1;
var hasRequiredGeom2;

function requireGeom2 () {
	if (hasRequiredGeom2) return Geom2_1;
	hasRequiredGeom2 = 1;
	// the REAL application interface
	const jscad = require$$0;

	/**
	 * Class Geom2
	 * Holds a JSCAD 2D geometry consisting of a number of sides.
	 * Each side is a line segment as defined by two points.
	 * @constructor
	 * @param {jscad.geometries.geom2} [geometry] a provided geometry
	 *
	 * @example
	 */
	const Geom2 = function (geometry) {
	  if (geometry === undefined) {
	    this.geometry = jscad.geometries.geom2.create();
	  } else {
	    this.geometry = geometry;
	  }
	};

	Geom2.fromPoints = function (points) {
	  const newgeom = jscad.geometries.geom2.fromPoints(points);
	  return new Geom2(newgeom)
	};

	Geom2.circle = function (options) {
	  const newgeom = jscad.primitives.circle(options);
	  return new Geom2(newgeom)
	};

	Geom2.ellipse = function (options) {
	  const newgeom = jscad.primitives.ellipse(options);
	  return new Geom2(newgeom)
	};

	Geom2.polygon = function (options) {
	  const newgeom = jscad.primitives.polygon(options);
	  return new Geom2(newgeom)
	};

	Geom2.rectangle = function (options) {
	  const newgeom = jscad.primitives.rectangle(options);
	  return new Geom2(newgeom)
	};

	Geom2.roundedRectangle = function (options) {
	  const newgeom = jscad.primitives.roundedRectangle(options);
	  return new Geom2(newgeom)
	};

	Geom2.square = function (options) {
	  const newgeom = jscad.primitives.square(options);
	  return new Geom2(newgeom)
	};

	Geom2.star = function (options) {
	  const newgeom = jscad.primitives.star(options);
	  return new Geom2(newgeom)
	};

	Geom2.prototype = {
	  //
	  // accessors
	  //
	  toSides: function () {
	    return jscad.geometries.geom2.toSides(this.geometry)
	  },

	  //
	  // measurement methods
	  //
	  measureArea: function () {
	    return jscad.measurements.measureArea(this.geometry)
	  },

	  measureBoundingBox: function () {
	    return jscad.measurements.measureBoundingBox(this.geometry)
	  },

	  measureBoundingSphere: function () {
	    return jscad.measurements.measureBoundingSphere(this.geometry)
	  },

	  measureCenter: function () {
	    return jscad.measurements.measureCenter(this.geometry)
	  },

	  measureCenterOfMass: function () {
	    return jscad.measurements.measureCenterOfMass(this.geometry)
	  },

	  measureDimensions: function () {
	    return jscad.measurements.measureDimensions(this.geometry)
	  },

	  measureEpsilon: function () {
	    return jscad.measurements.measureEpsilon(this.geometry)
	  },

	  measureVolume: function () {
	    return 0
	  },

	  //
	  // producer methods, i.e. methods that produce new Geom2 instances
	  //
	  align: function (options) {
	    const newgeom = jscad.transforms.align(options, this.geometry);
	    return new Geom2(newgeom)
	  },

	  center: function (options) {
	    const newgeom = jscad.transforms.center(options, this.geometry);
	    return new Geom2(newgeom)
	  },

	  clone: function () {
	    const newgeom = jscad.geometries.geom2.clone(this.geometry);
	    return new Geom2(newgeom)
	  },

	  colorize: function (colorspec) {
	    if (!Array.isArray(colorspec)) colorspec = jscad.colors.colorNameToRgb(colorspec);
	    const newgeom = jscad.colors.colorize(colorspec, this.geometry);
	    return new Geom2(newgeom)
	  },

	  expand: function (options) {
	    const newgeom = jscad.expansions.expand(options, this.geometry);
	    return new Geom2(newgeom)
	  },

	  mirror: function (options) {
	    const newgeom = jscad.transforms.mirror(options, this.geometry);
	    return new Geom2(newgeom)
	  },

	  offset: function (options) {
	    const newgeom = jscad.expansions.offset(options, this.geometry);
	    return new Geom2(newgeom)
	  },

	  rotate: function (angles) {
	    const newgeom = jscad.transforms.rotate(angles, this.geometry);
	    return new Geom2(newgeom)
	  },

	  scale: function (factors) {
	    const newgeom = jscad.transforms.scale(factors, this.geometry);
	    return new Geom2(newgeom)
	  },

	  snap: function () {
	    const newgeom = jscad.modifiers.snap(this.geometry);
	    return new Geom2(newgeom)
	  },

	  reverse: function () {
	    const newgeometry = jscad.geometries.geom2.reverse(this.geometry);
	    return new Geom2(newgeometry)
	  },

	  transform: function (matrix) {
	    const newgeometry = jscad.geometries.geom2.transform(matrix, this.geometry);
	    return new Geom2(newgeometry)
	  },

	  translate: function (offsets) {
	    const newgeom = jscad.transforms.translate(offsets, this.geometry);
	    return new Geom2(newgeom)
	  },

	  //
	  // boolean methods
	  //
	  union: function (...objects) {
	    objects = jscad.utils.flatten(objects);
	    const geometries = [this.geometry];
	    objects.forEach((object) => {
	      geometries.push(object.geometry);
	    });
	    const result = jscad.booleans.union(geometries);
	    return new Geom2(result)
	  },

	  intersect: function (...objects) {
	    objects = jscad.utils.flatten(objects);
	    const geometries = [this.geometry];
	    objects.forEach((object) => {
	      geometries.push(object.geometry);
	    });
	    const result = jscad.booleans.intersect(geometries);
	    return new Geom2(result)
	  },

	  subtract: function (...objects) {
	    objects = jscad.utils.flatten(objects);
	    const geometries = [this.geometry];
	    objects.forEach((object) => {
	      geometries.push(object.geometry);
	    });
	    const result = jscad.booleans.subtract(geometries);
	    return new Geom2(result)
	  },

	  //
	  // hull methods
	  //
	  hull: function (...objects) {
	    objects = jscad.utils.flatten(objects);
	    const geometries = [this.geometry];
	    objects.forEach((object) => {
	      geometries.push(object.geometry);
	    });
	    const result = jscad.hulls.hull(geometries);
	    return new Geom2(result)
	  },

	  hullChain: function (...objects) {
	    objects = jscad.utils.flatten(objects);
	    const geometries = [this.geometry];
	    objects.forEach((object) => {
	      geometries.push(object.geometry);
	    });
	    const result = jscad.hulls.hullChain(geometries);
	    return new Geom2(result)
	  },

	  //
	  // conversion methods
	  //
	  toString: function () {
	    return `Geom2: ${jscad.geometries.geom2.toString(this.geometry)}`
	  },

	  toOutlines: function () {
	    return jscad.geometries.geom2.toOutlines(this.geometry)
	  },

	  extrudeHelical: function (options) {
	    const newgeometry = jscad.extrusions.extrudeHelical(options, this.geometry);
	    const Geom3 = requireGeom3();
	    return new Geom3(newgeometry)
	  },

	  extrudeLinear: function (options) {
	    const newgeometry = jscad.extrusions.extrudeLinear(options, this.geometry);
	    const Geom3 = requireGeom3();
	    return new Geom3(newgeometry)
	  },

	  extrudeRectangular: function (options) {
	    const newgeom3 = jscad.extrusions.extrudeRectangular(options, this.geometry);
	    const Geom3 = requireGeom3();
	    return new Geom3(newgeom3)
	  },

	  extrudeRotate: function (options) {
	    const newgeometry = jscad.extrusions.extrudeRotate(options, this.geometry);
	    const Geom3 = requireGeom3();
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
	};

	Geom2_1 = Geom2;
	return Geom2_1;
}

var Path2_1;
var hasRequiredPath2;

function requirePath2 () {
	if (hasRequiredPath2) return Path2_1;
	hasRequiredPath2 = 1;
	// the REAL application interface
	const jscad = require$$0;

	/**
	 * Class Path2
	 * Holds a JSCAD path geometry consisting of a set of points.
	 * A path can be open or closed, i.e. the start and end are the same.
	 * @constructor
	 * @param {jscad.geometries.path2} [geometry] a provided geometry
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
	    this.geometry = jscad.geometries.path2.create();
	  } else {
	    this.geometry = geometry;
	  }
	};

	Path2.fromPoints = function (points, closed) {
	  const newpath = jscad.geometries.path2.fromPoints({ closed: closed }, points);
	  return new Path2(newpath)
	};

	Path2.arc = function (options) {
	  const newpath = jscad.primitives.arc(options);
	  return new Path2(newpath)
	};

	Path2.line = function (options) {
	  const newpath = jscad.primitives.line(options);
	  return new Path2(newpath)
	};

	Path2.prototype = {
	  //
	  // accessor methods
	  //
	  isClosed: function () {
	    return this.geometry.isClosed
	  },

	  // DO NOT MODIFY THE POINTS!
	  toPoints: function () {
	    return jscad.geometries.path2.toPoints(this.geometry)
	  },

	  //
	  // measurements
	  //
	  measureArea: function () {
	    return 0 // none
	  },

	  measureBoundingBox: function () {
	    return jscad.measurements.measureBoundingBox(this.geometry)
	  },

	  measureBoundingSphere: function () {
	    return jscad.measurements.measureBoundingSphere(this.geometry)
	  },

	  measureCenter: function () {
	    return jscad.measurements.measureCenter(this.geometry)
	  },

	  measureCenterOfMass: function () {
	    return jscad.measurements.measureCenterOfMass(this.geometry)
	  },

	  measureDimensions: function () {
	    return jscad.measurements.measureDimensions(this.geometry)
	  },

	  measureEpsilon: function () {
	    return jscad.measurements.measureEpsilon(this.geometry)
	  },

	  measureVolume: function () {
	    return 0 // none
	  },

	  //
	  // producer methods, i.e. methods that produce new Path2 instances
	  //
	  align: function (options) {
	    const newgeom = jscad.transforms.align(options, this.geometry);
	    return new Path2(newgeom)
	  },

	  appendArc: function (options) {
	    const newpath = jscad.geometries.path2.appendArc(options, this.geometry);
	    return new Path2(newpath)
	  },

	  appendBezier: function (options) {
	    const newpath = jscad.geometries.path2.appendBezier(options, this.geometry);
	    return new Path2(newpath)
	  },

	  appendPoint: function (point) {
	    return this.appendPoints([point])
	  },

	  appendPoints: function (points) {
	    const newpath = jscad.geometries.path2.appendPoints(points, this.geometry);
	    return new Path2(newpath)
	  },

	  center: function (options) {
	    const newgeom = jscad.transforms.center(options, this.geometry);
	    return new Path2(newgeom)
	  },

	  clone: function () {
	    const newpath = jscad.geometries.path2.clone(this.geometry);
	    return new Path2(newpath)
	  },

	  close: function () {
	    const newpath = jscad.geometries.path2.close(this.geometry);
	    return new Path2(newpath)
	  },

	  colorize: function (colorspec) {
	    if (!Array.isArray(colorspec)) colorspec = jscad.colors.colorNameToRgb(colorspec);
	    const newpath = jscad.colors.colorize(colorspec, this.geometry);
	    return new Path2(newpath)
	  },

	  concat: function (otherpath) {
	    const newpath = jscad.geometries.path2.concat(this.geometry, otherpath.geometry);
	    return new Path2(newpath)
	  },

	  mirror: function (options) {
	    const newgeom = jscad.transforms.mirror(options, this.geometry);
	    return new Path2(newgeom)
	  },

	  offset: function (options) {
	    const newgeom = jscad.expansions.offset(options, this.geometry);
	    return new Path2(newgeom)
	  },

	  reverse: function () {
	    const newgeom = jscad.geometries.path2.reverse(this.geometry);
	    return new Path2(newgeom)
	  },

	  rotate: function (angles) {
	    const newgeom = jscad.transforms.rotate(angles, this.geometry);
	    return new Path2(newgeom)
	  },

	  scale: function (factors) {
	    const newgeom = jscad.transforms.scale(factors, this.geometry);
	    return new Path2(newgeom)
	  },

	  snap: function () {
	    const newgeometry = jscad.modifiers.snap(this.geometry);
	    return new Path2(newgeometry)
	  },

	  transform: function (matrix) {
	    const newpath = jscad.geometries.path2.transform(matrix, this.geometry);
	    return new Path2(newpath)
	  },

	  translate: function (offsets) {
	    const newgeom = jscad.transforms.translate(offsets, this.geometry);
	    return new Path2(newgeom)
	  },

	  //
	  // hull methods
	  //
	  hull: function (...objects) {
	    objects = jscad.utils.flatten(objects);
	    const geometries = [this.geometry];
	    objects.forEach((object) => {
	      geometries.push(object.geometry);
	    });
	    const result = jscad.hulls.hull(geometries);
	    return new Path2(result)
	  },

	  hullChain: function (...objects) {
	    objects = jscad.utils.flatten(objects);
	    const geometries = [this.geometry];
	    objects.forEach((object) => {
	      geometries.push(object.geometry);
	    });
	    const result = jscad.hulls.hullChain(geometries);
	    return new Path2(result)
	  },

	  //
	  // conversion methods
	  //
	  toString: function () {
	    return `Path2: ${jscad.geometries.path2.toString(this.geometry)}`
	  },

	  extrudeLinear: function (options) {
	    const newgeometry = jscad.extrusions.extrudeLinear(options, this.geometry);
	    const Geom3 = requireGeom3();
	    return new Geom3(newgeometry)
	  },

	  extrudeRectangular: function (options) {
	    const newgeom3 = jscad.extrusions.extrudeRectangular(options, this.geometry);
	    const Geom3 = requireGeom3();
	    return new Geom3(newgeom3)
	  },

	  expand: function (options) {
	    const newgeom2 = jscad.expansions.expand(options, this.geometry);
	    const Geom2 = requireGeom2();
	    return new Geom2(newgeom2)
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
	};

	Path2_1 = Path2;
	return Path2_1;
}

var src;
var hasRequiredSrc;

function requireSrc () {
	if (hasRequiredSrc) return src;
	hasRequiredSrc = 1;
	src = {
	  Geom2: requireGeom2(),
	  Geom3: requireGeom3(),
	  Path2: requirePath2()
	};
	return src;
}

var srcExports = requireSrc();
var index = /*@__PURE__*/getDefaultExportFromCjs(srcExports);

module.exports = index;
