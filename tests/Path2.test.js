const test = require('ava')

const { geometry } = require('@jscad/modeling')

const { Path2 } = require('../src/index')

test('Path2 (constructor)', t => {
  let path = new Path2()

  t.is(path.geometry.points.length, 0)
  t.is(path.geometry.isClosed, false)

  const newgeometry = geometry.path2.fromPoints({ closed: true }, [[0, 0], [1, 1], [0, 1]])
  path = new Path2(newgeometry)

  t.is(path.geometry.points.length, 3)
  t.is(path.geometry.isClosed, true)
})

test('Path2.fromPoints()', t => {
  let path = Path2.fromPoints([[0, 0], [1, 1], [0, 1]])

  t.is(path.geometry.points.length, 3)
  t.is(path.geometry.isClosed, false)

  path = Path2.fromPoints([[0, 0], [1, 1], [0, 1]], true)

  t.is(path.geometry.points.length, 3)
  t.is(path.geometry.isClosed, true)
})

test('Path2 (primitives)', t => {
  let path = Path2.arc()

  t.is(path.geometry.points.length, 33)
  t.is(path.geometry.isClosed, true)

  path = Path2.arc({ endAngle: Math.PI }) // 180 degrees

  t.is(path.geometry.points.length, 18)
  t.is(path.geometry.isClosed, false)

  path = Path2.line([[0, 0], [1, 1], [0, 1]])

  t.is(path.geometry.points.length, 3)
  t.is(path.geometry.isClosed, false)
})

test('Path2 (accessors)', t => {
  const path = Path2.arc()

  t.is(path.isClosed(), true)

  const points = path.toPoints()
  t.is(points.length, 33)
})

test('Path2 (measurements)', t => {
  const path = Path2.arc({ endAngle: Math.PI }) // 180 degrees
  const area = path.measureArea()

  t.is(area, 0)

  const bounds = path.measureBounds()

  t.deepEqual(bounds, [[-1, 0, 0], [1, 0.9957341762950346, 0]])

  const volume = path.measureVolume()

  t.is(volume, 0)
})

test('Path2 (close clone color concat functions)', t => {
  const path1 = Path2.fromPoints([[0, 0], [1, 1], [0, 1]])

  t.is(path1.geometry.points.length, 3)
  t.is(path1.isClosed(), false)

  let path2 = path1.close()

  t.not(path1, path2)

  t.is(path2.isClosed(), true)

  path2 = path1.colorize('red')

  t.not(path1, path2)
  t.is(path2.geometry.points.length, 3)
  t.is(path2.isClosed(), false)
  t.deepEqual(path2.geometry.color, [1, 0, 0, 1])

  path2 = path1.clone()

  t.not(path1, path2)

  t.is(path2.geometry.points.length, 3)
  t.is(path2.isClosed(), false)

  const path3 = Path2.fromPoints([[-1, -1], [0, 0]])
  path2 = path1.concat(path3)

  t.not(path1, path2)
  t.not(path2, path3)
  t.not(path3, path1)

  t.is(path2.geometry.points.length, 4)
  t.is(path2.isClosed(), true)
})

test('Path2 (append functions)', t => {
  let path1 = Path2.fromPoints([[27, -22], [27, -3]])
  let path2 = path1.appendArc({ endpoint: [12, -22], radius: [15, -20] })

  t.not(path1, path2)

  let points = path2.toPoints()
  t.is(points.length, 7)

  path1 = Path2.fromPoints([[10, -20]])
  path2 = path1.appendBezier({ controlPoints: [[10, -10], [25, -10], [25, -20]], segments: 16 })

  t.not(path1, path2)

  points = path2.toPoints()
  t.is(points.length, 11)

  path1 = Path2.fromPoints([[1, 1]]).appendPoint([2, 2])
  path2 = path1.appendPoints([[3, 3], [4, 4]])

  t.not(path1, path2)

  points = path2.toPoints()
  t.is(points.length, 4)
})

test('Path2 (transform functions)', t => {
  const path1 = Path2.fromPoints([[27, -22], [27, -3]])
  let path2 = path1.center()

  t.not(path1, path2)

  let points = path2.toPoints()
  t.is(points.length, 2)
  t.deepEqual(points[0], [0, -9.5])
  t.deepEqual(points[1], [0, 9.5])

  path2 = path1.mirror({ normal: [0, 1, 0] }) // mirror Y

  t.not(path1, path2)

  points = path2.toPoints()
  t.is(points.length, 2)
  t.deepEqual(points[0], [27, 22])
  t.deepEqual(points[1], [27, 3])

  path2 = path1.reverse()

  t.not(path1, path2)

  points = path2.toPoints()
  t.is(points.length, 2)
  t.deepEqual(points[0], [27, -3])
  t.deepEqual(points[1], [27, -22])

  path2 = path1.rotate([0, 0, Math.PI / 2])

  t.not(path1, path2)

  points = path2.toPoints()
  t.is(points.length, 2)
  t.deepEqual(points[0], [22, 27])
  t.deepEqual(points[1], [3.0000000000000018, 27])

  path2 = path1.scale([2, 0.5, 1])

  t.not(path1, path2)

  points = path2.toPoints()
  t.is(points.length, 2)
  t.deepEqual(points[0], [54, -11])
  t.deepEqual(points[1], [54, -1.5])

  path2 = path1.translate([-5, 5, 0])

  t.not(path1, path2)

  points = path2.toPoints()
  t.is(points.length, 2)
  t.deepEqual(points[0], [22, -17])
  t.deepEqual(points[1], [22, 2])
})

test('Path2 (offset)', t => {
  const path1 = Path2.fromPoints([[0, 0], [10, 10], [0, 10]])
  const path2 = path1.offset({ delta: 2 })

  t.not(path1, path2)

  const points = path2.toPoints()
  t.is(points.length, 5)
  t.deepEqual(points[0], [1.414213562373095, -1.414213562373095])
  t.deepEqual(points[1], [11.414213562373096, 8.585786437626904])
  t.deepEqual(points[2], [14.82842712474619, 12])
  t.deepEqual(points[3], [10, 12])
  t.deepEqual(points[4], [1.2246467991473532e-16, 12])
})

test('Path2 (conversions)', t => {
  const path1 = Path2.fromPoints([[0, 0], [10, 10], [0, 10]])

  // const string = path1.toString()
  // console.log(string)

  let geom = path1.expand({ delta: 2 })

  const sides = geom.toSides()
  t.is(sides.length, 8)

  geom = path1.extrudeRectangular({ size: 2, height: 10 })
  const polygons = geom.toPolygons()
  t.is(polygons.length, 22)
})
