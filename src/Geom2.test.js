const test = require('ava')

const {geometry} = require('@jscad/modeling')

const {Geom2} = require('./index')

test('Geom2 (constructor)', t => {
  let geom = new Geom2()

  t.is(geom.geometry.sides.length, 0)

  let newgeometry = geometry.geom2.fromPoints([[0, 0], [1, 1], [0, 1]])
  geom = new Geom2(newgeometry)

  t.is(geom.geometry.sides.length, 3)
})

test('Geom2.fromPoints()', t => {
  let geom = Geom2.fromPoints([[0, 0], [1, 1], [0, 1]])

  t.is(geom.geometry.sides.length, 3)
})

test('Geom2 (primitives)', t => {
  let geom = Geom2.circle({center: [5, 5], radius: 5})

  t.is(geom.geometry.sides.length, 16)

  geom = Geom2.ellipse({center: [5, 5], radius: [3, 5]})

  t.is(geom.geometry.sides.length, 16)

  geom = Geom2.rectangle({center: [5, 5], size: [5, 5]})

  t.is(geom.geometry.sides.length, 4)

  geom = Geom2.roundedRectangle({center: [5, 5], size: [5, 5]})

  t.is(geom.geometry.sides.length, 20)

  geom = Geom2.square()

  t.is(geom.geometry.sides.length, 4)

  geom = Geom2.star()

  t.is(geom.geometry.sides.length, 10)
})

test('Geom2 (accessors)', t => {
  let geom = Geom2.square()
  let sides = geom.toSides()

  t.is(sides.length, 4)
})

test('Geom2 (measurements)', t => {
  let geom = Geom2.square({size: 5})
  let area = geom.measureArea()

  t.is(area, 25)

  let bounds = geom.measureBounds()

  t.deepEqual(bounds, [[-2.5, -2.5, 0], [2.5, 2.5, 0]])

  let volume = geom.measureVolume()

  t.is(volume, 0)
})

test('Geom2 (clone color reverse)', t => {
  let geom1 = Geom2.fromPoints([[0, 0], [1, 1], [0, 1]])

  t.is(geom1.geometry.sides.length, 3)

  let geom2 = geom1.clone()

  t.not(geom1, geom2)

  t.is(geom2.geometry.sides.length, 3)

  geom2 = geom1.color('red')

  t.not(geom1, geom2)
  t.is(geom2.geometry.sides.length, 3)
  t.deepEqual(geom2.geometry.color, [ 1, 0, 0, 1 ])

  geom2 = geom1.reverse()

  t.not(geom1, geom2)

  t.is(geom2.geometry.sides.length, 3)
})

test('Geom2 (boolean functions)', t => {
  let geom1 = Geom2.rectangle({center: [0, 0], size: [5, 5]})
  let geom2 = Geom2.rectangle({center: [2.5, 2.5], size: [5, 5]})
  geom2 = geom2.center({center: [2.5, 2.5, 0]})

  let geom3 = geom1.union(geom2)

  t.not(geom1, geom3)
  t.not(geom2, geom3)

  let sides = geom3.toSides()
  t.is(sides.length, 8)

  geom3 = geom1.intersect(geom2)

  t.not(geom1, geom3)
  t.not(geom2, geom3)

  sides = geom3.toSides()
  t.is(sides.length, 4)

  geom3 = geom1.subtract(geom2)

  t.not(geom1, geom3)
  t.not(geom2, geom3)

  sides = geom3.toSides()
  t.is(sides.length, 6)
})

test('Geom2 (transform functions)', t => {
  let geom1 = Geom2.fromPoints([[0, 0], [5, 0], [5, 5]])
  let geom2 = geom1.center()

  t.not(geom1, geom2)

  let sides = geom2.toSides()
  t.is(sides.length, 3)
  t.deepEqual(sides[0], [[2.5, 2.5], [-2.5, -2.5]])
  t.deepEqual(sides[1], [[-2.5, -2.5], [2.5, -2.5]])
  t.deepEqual(sides[2], [[2.5, -2.5], [2.5, 2.5]])

  geom2 = geom1.mirror({normal: [0, 1, 0]}) // mirror Y

  t.not(geom1, geom2)

  sides = geom2.toSides()
  t.is(sides.length, 3)
  t.deepEqual(sides[0], [[5, -5], [0, 0]])
  t.deepEqual(sides[1], [[0, 0], [5, 0]])
  t.deepEqual(sides[2], [[5, 0], [5, -5]])

  geom2 = geom1.rotate([0, 0, Math.PI / 2])

  t.not(geom1, geom2)

  sides = geom2.toSides()
  t.is(sides.length, 3)
  t.deepEqual(sides[0], [[-5, 5], [0, 0]])
  t.deepEqual(sides[1], [[0, 0], [3.061616997868383e-16, 5]])
  t.deepEqual(sides[2], [[3.061616997868383e-16, 5], [-5, 5]])

  geom2 = geom1.scale([2, 0.5, 1])

  t.not(geom1, geom2)

  sides = geom2.toSides()
  t.is(sides.length, 3)
  t.deepEqual(sides[0], [[10, 2.5], [0, 0]])
  t.deepEqual(sides[1], [[0, 0], [10, 0]])
  t.deepEqual(sides[2], [[10, 0], [10, 2.5]])

  geom2 = geom1.translate([-5, 5, 0])

  t.not(geom1, geom2)

  sides = geom2.toSides()
  t.is(sides.length, 3)
  t.deepEqual(sides[0], [[0, 10], [-5, 5]])
  t.deepEqual(sides[1], [[-5, 5], [0, 5]])
  t.deepEqual(sides[2], [[0, 5], [0, 10]])
})

test('Geom2 (expand offset)', t => {
  let geom1 = Geom2.square({size: 5})
  let geom2 = geom1.offset({delta: 2})

  t.not(geom1, geom2)

  let sides = geom2.toSides()
  t.is(sides.length, 12)
  t.deepEqual(sides[0], [[-4.5, -2.5], [-4.5, -4.5]])
  t.deepEqual(sides[4], [[4.5, -4.5], [4.5, -2.5]])

  geom2 = geom1.expand({delta: -1}) // contract

  t.not(geom1, geom2)

  sides = geom2.toSides()
  t.is(sides.length, 4)
  t.deepEqual(sides[0], [[-1.5, 1.5], [-1.5, -1.5]])
  t.deepEqual(sides[1], [[-1.5, -1.5], [1.5, -1.5]])
  t.deepEqual(sides[2], [[1.5, -1.5], [1.5, 1.5]])
  t.deepEqual(sides[3], [[1.5, 1.5], [-1.5, 1.5]])
})

test('Geom2 (conversions)', t => {
  let geom = Geom2.square({center: [10, 0], size: 5})

  let string = geom.toString()
  // console.log(string)

  let outlines = geom.toOutlines()

  t.is(outlines.length, 1)

  let geom2 = geom.extrudeLinear()
  let polygons = geom2.toPolygons()

  t.is(polygons.length, 10)

  geom2 = geom.extrudeRotate()
  polygons = geom2.toPolygons()

  t.is(polygons.length, 96)
})
