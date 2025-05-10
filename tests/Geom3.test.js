const test = require('ava')

const { geometries } = require('@jscad/modeling')

const { Geom3 } = require('../src/index')

test('Geom3 (constructor)', (t) => {
  let geom = new Geom3()

  t.is(geom.geometry.polygons.length, 0)

  const newgeometry = geometries.geom3.fromPoints([[[0, 0, 0], [1, 0, 0], [1, 0, 1]]])
  geom = new Geom3(newgeometry)

  t.is(geom.geometry.polygons.length, 1)
})

test('Geom3.fromPoints()', (t) => {
  const geom = Geom3.fromPoints([[[0, 0, 0], [1, 0, 0], [1, 0, 1]]])

  t.is(geom.geometry.polygons.length, 1)
})

test('Geom3 (primitives)', (t) => {
  let geom = Geom3.cube({ center: [5, 5, 5], size: 5 })

  t.is(geom.geometry.polygons.length, 6)

  geom = Geom3.cuboid({ center: [5, 5, 5], size: [3, 5, 7] })

  t.is(geom.geometry.polygons.length, 6)
})

test('Geom3 (accessors)', (t) => {
  const geom = Geom3.cube()
  const polygons = geom.toPolygons()

  t.is(polygons.length, 6)
})

test('Geom3 (measurements)', (t) => {
  const geom = Geom3.cuboid({ size: [3, 5, 7] })
  const area = geom.measureArea()

  t.is(area, 142)

  const bounds = geom.measureBoundingBox()

  t.deepEqual(bounds, [[-1.5, -2.5, -3.5], [1.5, 2.5, 3.5]])

  const epsilon = geom.measureEpsilon()

  t.is(epsilon, 0.00005)

  const volume = geom.measureVolume()

  t.is(volume, 105)
})

test('Geom3 (clone color)', (t) => {
  const geom1 = Geom3.cuboid({ size: [3, 5, 7] })

  t.is(geom1.geometry.polygons.length, 6)

  let geom2 = geom1.clone()

  t.not(geom1, geom2)
  t.is(geom2.geometry.polygons.length, 6)

  geom2 = geom1.colorize('red')

  t.not(geom1, geom2)
  t.is(geom2.geometry.polygons.length, 6)
  t.deepEqual(geom2.geometry.color, [1, 0, 0, 1])
})

test('Geom3 (boolean functions)', (t) => {
  const geom1 = Geom3.cuboid({ center: [0, 0, 0], size: [5, 5, 5] })
  let geom2 = Geom3.cuboid({ center: [2.5, 2.5, 2.5], size: [5, 5, 5] })

  let geom3 = geom1.union(geom2)

  t.not(geom1, geom3)
  t.not(geom2, geom3)

  let polygons = geom3.toPolygons()
  t.is(polygons.length, 18)

  geom3 = geom1.intersect(geom2)

  t.not(geom1, geom3)
  t.not(geom2, geom3)

  polygons = geom3.toPolygons()
  t.is(polygons.length, 6)

  geom3 = geom1.subtract(geom2)

  t.not(geom1, geom3)
  t.not(geom2, geom3)

  polygons = geom3.toPolygons()
  t.is(polygons.length, 12)

  let geometries = geom3.scission()
  t.is(geometries.length, 1)

  polygons = geometries[0].toPolygons()
  t.is(polygons.length, 12)
})

test('Geom3 (hull functions)', (t) => {
  const geom1 = Geom3.cuboid({ center: [0, 0, 0], size: [5, 5, 5] })
  const geom2 = Geom3.cuboid({ center: [25, 25, 25], size: [5, 5, 5] })
  const geom3 = Geom3.cuboid({ center: [-25, 25, 25], size: [5, 5, 5] })

  let hulled = geom1.hull(geom2, geom3)

  t.not(geom1, hulled)
  t.not(geom2, hulled)
  t.not(geom3, hulled)

  let polygons = hulled.toPolygons()
  t.is(polygons.length, 12)

  hulled = geom1.hullChain(geom2, geom3)

  t.not(geom1, hulled)
  t.not(geom2, hulled)
  t.not(geom3, hulled)

  polygons = hulled.toPolygons()
  t.is(polygons.length, 15)
})

test('Geom3 (transform functions)', (t) => {
  let geom1 = Geom3.cuboid({ center: [3, 5, 7], size: [3, 5, 7] })
  let geom2 = geom1.center()

  t.not(geom1, geom2)

  let polygons = geom2.toPolygons()
  t.is(polygons.length, 6)
  t.deepEqual(polygons[0].vertices, [[-1.5, -2.5, -3.5], [-1.5, -2.5, 3.5], [-1.5, 2.5, 3.5], [-1.5, 2.5, -3.5]])

  geom2 = geom1.invert()

  t.not(geom1, geom2)

  polygons = geom2.toPolygons()
  t.is(polygons.length, 6)
  t.deepEqual(polygons[0].vertices, [[1.5, 7.5, 3.5], [1.5, 7.5, 10.5], [1.5, 2.5, 10.5], [1.5, 2.5, 3.5]])

  geom2 = geom1.mirror({ normal: [0, 1, 0] }) // mirror Y

  t.not(geom1, geom2)

  polygons = geom2.toPolygons()
  t.is(polygons.length, 6)
  t.deepEqual(polygons[0].vertices, [[1.5, -7.5, 3.5], [1.5, -7.5, 10.5], [1.5, -2.5, 10.5], [1.5, -2.5, 3.5]])

  geom2 = geom1.rotate([0, 0, Math.PI / 2])

  t.not(geom1, geom2)

  polygons = geom2.toPolygons()
  t.is(polygons.length, 6)
  t.deepEqual(polygons[0].vertices, [[-2.5, 1.5, 3.5], [-2.5, 1.5, 10.5], [-7.5, 1.5, 10.5], [-7.5, 1.5, 3.5]])

  geom2 = geom1.scale([2, 0.5, 1])

  t.not(geom1, geom2)

  polygons = geom2.toPolygons()
  t.is(polygons.length, 6)
  t.deepEqual(polygons[0].vertices, [[3, 1.25, 3.5], [3, 1.25, 10.5], [3, 3.75, 10.5], [3, 3.75, 3.5]])

  geom2 = geom1.translate([-5, 5, -5])

  t.not(geom1, geom2)

  polygons = geom2.toPolygons()
  t.is(polygons.length, 6)
  t.deepEqual(polygons[0].vertices, [[-3.5, 7.5, -1.5], [-3.5, 7.5, 5.5], [-3.5, 12.5, 5.5], [-3.5, 12.5, -1.5]])
})

test('Geom3 (project)', (t) => {
  const geom1 = Geom3.cube({ size: 5 })
  const geom2 = geom1.project({})

  t.not(geom1, geom2)

  // test that the result is 2D
  const sides = geom2.toSides()
  t.is(sides.length, 4)
})

test('Geom3 (expand)', (t) => {
  const geom1 = Geom3.cube({ size: 5 })
  const geom2 = geom1.expand({ delta: 2 })

  t.not(geom1, geom2)

  const polygons = geom2.toPolygons()
  t.is(polygons.length, 114)
})

test('Geom3 (conversions)', (t) => {
  // const geom = Geom3.cube({ size: 5 })

  // let string = geom.toString()
  // console.log(string)

  // TODO
  t.is(true, true)
})
