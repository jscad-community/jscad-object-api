import test from 'ava'

import { geom2, geom3, path2, mat4 } from '@jscad/modeling'

import { Geom2, Geom3, Path2 } from '../dist/jscad-object-api.js'

test('Geom2 (constructor)', (t) => {
  let geom = new Geom2()

  t.is(geom.geometry.outlines.length, 0)

  const newgeometry = geom2.create([[[0, 0], [1, 1], [0, 1]]])
  geom = new Geom2(newgeometry)

  t.is(geom.geometry.outlines.length, 1)
  t.is(geom.geometry.outlines[0].length, 3)
})

test('Geom3 (constructor)', (t) => {
  let geom = new Geom3()

  t.is(geom.geometry.polygons.length, 0)

  const newgeometry = geom3.fromVertices([[[0, 0, 0], [1, 0, 0], [1, 0, 1]]])
  geom = new Geom3(newgeometry)

  t.is(geom.geometry.polygons.length, 1)
})

test('Path2 (constructor)', (t) => {
  let path = new Path2()

  t.is(path.geometry.points.length, 0)
  t.is(path.geometry.isClosed, false)

  const newgeometry = path2.fromPoints({ closed: true }, [[0, 0], [1, 1], [0, 1]])
  path = new Path2(newgeometry)

  t.is(path.geometry.points.length, 3)
  t.is(path.geometry.isClosed, true)
})
