## Modules

<dl>
<dt><a href="#module_geom2">geom2</a></dt>
<dd></dd>
<dt><a href="#module_geom3">geom3</a></dt>
<dd></dd>
<dt><a href="#module_path2">path2</a></dt>
<dd></dd>
</dl>

<a name="module_geom2"></a>

## geom2

* [geom2](#module_geom2)
    * [.Geom2](#module_geom2.Geom2)
        * [new exports.Geom2([geometry])](#new_module_geom2.Geom2_new)
        * _instance_
            * [.toSides()](#module_geom2.Geom2+toSides) ⇒ <code>Array</code>
            * [.measureArea()](#module_geom2.Geom2+measureArea) ⇒ <code>Float</code>
        * _static_
            * [.fromPoints()](#module_geom2.Geom2.fromPoints) ⇒ <code>Geom2</code>
            * [.circle()](#module_geom2.Geom2.circle) ⇒ <code>Geom2</code>

<a name="module_geom2.Geom2"></a>

### geom2.Geom2
Class Geom2

Holds a JSCAD 2D geometry (geom2) that
represents a 2D geometry consisting of outlines, where each outline is an ordered list of points.

**Kind**: static class of [<code>geom2</code>](#module_geom2)  

* [.Geom2](#module_geom2.Geom2)
    * [new exports.Geom2([geometry])](#new_module_geom2.Geom2_new)
    * _instance_
        * [.toSides()](#module_geom2.Geom2+toSides) ⇒ <code>Array</code>
        * [.measureArea()](#module_geom2.Geom2+measureArea) ⇒ <code>Float</code>
    * _static_
        * [.fromPoints()](#module_geom2.Geom2.fromPoints) ⇒ <code>Geom2</code>
        * [.circle()](#module_geom2.Geom2.circle) ⇒ <code>Geom2</code>

<a name="new_module_geom2.Geom2_new"></a>

#### new exports.Geom2([geometry])
Create a new Geom2 from the given geometry


| Param | Type | Description |
| --- | --- | --- |
| [geometry] | <code>geom2</code> | a JSCAD geom2 geometry |

**Example**  
```js
import { Geom2 } from "jscad-object-api"

const ashape = Geom2.square()
const bshape = Geom2.square({size: 10})
const cshape = ashape.translateY(5).extrudeLinear({height: 250})
```
<a name="module_geom2.Geom2+toSides"></a>

#### geom2.toSides() ⇒ <code>Array</code>
Return the sides

**Kind**: instance method of [<code>Geom2</code>](#module_geom2.Geom2)  
**Returns**: <code>Array</code> - list of sides  
<a name="module_geom2.Geom2+measureArea"></a>

#### geom2.measureArea() ⇒ <code>Float</code>
**Kind**: instance method of [<code>Geom2</code>](#module_geom2.Geom2)  
<a name="module_geom2.Geom2.fromPoints"></a>

#### Geom2.fromPoints() ⇒ <code>Geom2</code>
**Kind**: static method of [<code>Geom2</code>](#module_geom2.Geom2)  
**Returns**: <code>Geom2</code> - new geometry  
<a name="module_geom2.Geom2.circle"></a>

#### Geom2.circle() ⇒ <code>Geom2</code>
Create a circle using the given options.

**Kind**: static method of [<code>Geom2</code>](#module_geom2.Geom2)  
**Returns**: <code>Geom2</code> - new geometry  
<a name="module_geom3"></a>

## geom3

* [geom3](#module_geom3)
    * [.Geom3](#module_geom3.Geom3)
        * [new exports.Geom3([geometry])](#new_module_geom3.Geom3_new)
        * _instance_
            * [.toPolygons()](#module_geom3.Geom3+toPolygons) ⇒ <code>Array</code>
        * _static_
            * [.fromVertices()](#module_geom3.Geom3.fromVertices) ⇒ <code>Geom3</code>
            * [.cube()](#module_geom3.Geom3.cube) ⇒ <code>Geom3</code>
            * [.cuboid()](#module_geom3.Geom3.cuboid) ⇒ <code>Geom3</code>
            * [.cylinder()](#module_geom3.Geom3.cylinder) ⇒ <code>Geom3</code>
            * [.cylinderElliptic()](#module_geom3.Geom3.cylinderElliptic) ⇒ <code>Geom3</code>
            * [.ellipsoid()](#module_geom3.Geom3.ellipsoid) ⇒ <code>Geom3</code>
            * [.geodesicSphere()](#module_geom3.Geom3.geodesicSphere) ⇒ <code>Geom3</code>
            * [.polyhedron()](#module_geom3.Geom3.polyhedron) ⇒ <code>Geom3</code>
            * [.roundedCuboid()](#module_geom3.Geom3.roundedCuboid) ⇒ <code>Geom3</code>
            * [.roundedCylinder()](#module_geom3.Geom3.roundedCylinder) ⇒ <code>Geom3</code>
            * [.sphere()](#module_geom3.Geom3.sphere) ⇒ <code>Geom3</code>
            * [.torus()](#module_geom3.Geom3.torus) ⇒ <code>Geom3</code>

<a name="module_geom3.Geom3"></a>

### geom3.Geom3
Class Geom3

Holds a JSCAD 3D geometry consisting of a set of polygons.

**Kind**: static class of [<code>geom3</code>](#module_geom3)  

* [.Geom3](#module_geom3.Geom3)
    * [new exports.Geom3([geometry])](#new_module_geom3.Geom3_new)
    * _instance_
        * [.toPolygons()](#module_geom3.Geom3+toPolygons) ⇒ <code>Array</code>
    * _static_
        * [.fromVertices()](#module_geom3.Geom3.fromVertices) ⇒ <code>Geom3</code>
        * [.cube()](#module_geom3.Geom3.cube) ⇒ <code>Geom3</code>
        * [.cuboid()](#module_geom3.Geom3.cuboid) ⇒ <code>Geom3</code>
        * [.cylinder()](#module_geom3.Geom3.cylinder) ⇒ <code>Geom3</code>
        * [.cylinderElliptic()](#module_geom3.Geom3.cylinderElliptic) ⇒ <code>Geom3</code>
        * [.ellipsoid()](#module_geom3.Geom3.ellipsoid) ⇒ <code>Geom3</code>
        * [.geodesicSphere()](#module_geom3.Geom3.geodesicSphere) ⇒ <code>Geom3</code>
        * [.polyhedron()](#module_geom3.Geom3.polyhedron) ⇒ <code>Geom3</code>
        * [.roundedCuboid()](#module_geom3.Geom3.roundedCuboid) ⇒ <code>Geom3</code>
        * [.roundedCylinder()](#module_geom3.Geom3.roundedCylinder) ⇒ <code>Geom3</code>
        * [.sphere()](#module_geom3.Geom3.sphere) ⇒ <code>Geom3</code>
        * [.torus()](#module_geom3.Geom3.torus) ⇒ <code>Geom3</code>

<a name="new_module_geom3.Geom3_new"></a>

#### new exports.Geom3([geometry])

| Param | Type | Description |
| --- | --- | --- |
| [geometry] | <code>geom3</code> | a provided geometry |

**Example**  
```js
import { Geom3 } from "jscad-object-api"

const ashape = Geom3.cylinder()
const bshape = Geom3.cylinder({height: 2, radius: 10})
const cshare = bshape.translate([3, 2, 1])
```
<a name="module_geom3.Geom3+toPolygons"></a>

#### geom3.toPolygons() ⇒ <code>Array</code>
**Kind**: instance method of [<code>Geom3</code>](#module_geom3.Geom3)  
**Returns**: <code>Array</code> - list of polygons  
<a name="module_geom3.Geom3.fromVertices"></a>

#### Geom3.fromVertices() ⇒ <code>Geom3</code>
**Kind**: static method of [<code>Geom3</code>](#module_geom3.Geom3)  
**Returns**: <code>Geom3</code> - new geometry  
<a name="module_geom3.Geom3.cube"></a>

#### Geom3.cube() ⇒ <code>Geom3</code>
**Kind**: static method of [<code>Geom3</code>](#module_geom3.Geom3)  
**Returns**: <code>Geom3</code> - new geometry  
<a name="module_geom3.Geom3.cuboid"></a>

#### Geom3.cuboid() ⇒ <code>Geom3</code>
**Kind**: static method of [<code>Geom3</code>](#module_geom3.Geom3)  
**Returns**: <code>Geom3</code> - new geometry  
<a name="module_geom3.Geom3.cylinder"></a>

#### Geom3.cylinder() ⇒ <code>Geom3</code>
**Kind**: static method of [<code>Geom3</code>](#module_geom3.Geom3)  
**Returns**: <code>Geom3</code> - new geometry  
<a name="module_geom3.Geom3.cylinderElliptic"></a>

#### Geom3.cylinderElliptic() ⇒ <code>Geom3</code>
**Kind**: static method of [<code>Geom3</code>](#module_geom3.Geom3)  
**Returns**: <code>Geom3</code> - new geometry  
<a name="module_geom3.Geom3.ellipsoid"></a>

#### Geom3.ellipsoid() ⇒ <code>Geom3</code>
**Kind**: static method of [<code>Geom3</code>](#module_geom3.Geom3)  
**Returns**: <code>Geom3</code> - new geometry  
<a name="module_geom3.Geom3.geodesicSphere"></a>

#### Geom3.geodesicSphere() ⇒ <code>Geom3</code>
**Kind**: static method of [<code>Geom3</code>](#module_geom3.Geom3)  
**Returns**: <code>Geom3</code> - new geometry  
<a name="module_geom3.Geom3.polyhedron"></a>

#### Geom3.polyhedron() ⇒ <code>Geom3</code>
**Kind**: static method of [<code>Geom3</code>](#module_geom3.Geom3)  
**Returns**: <code>Geom3</code> - new geometry  
<a name="module_geom3.Geom3.roundedCuboid"></a>

#### Geom3.roundedCuboid() ⇒ <code>Geom3</code>
**Kind**: static method of [<code>Geom3</code>](#module_geom3.Geom3)  
**Returns**: <code>Geom3</code> - new geometry  
<a name="module_geom3.Geom3.roundedCylinder"></a>

#### Geom3.roundedCylinder() ⇒ <code>Geom3</code>
**Kind**: static method of [<code>Geom3</code>](#module_geom3.Geom3)  
**Returns**: <code>Geom3</code> - new geometry  
<a name="module_geom3.Geom3.sphere"></a>

#### Geom3.sphere() ⇒ <code>Geom3</code>
**Kind**: static method of [<code>Geom3</code>](#module_geom3.Geom3)  
**Returns**: <code>Geom3</code> - new geometry  
<a name="module_geom3.Geom3.torus"></a>

#### Geom3.torus() ⇒ <code>Geom3</code>
**Kind**: static method of [<code>Geom3</code>](#module_geom3.Geom3)  
**Returns**: <code>Geom3</code> - new geometry  
<a name="module_path2"></a>

## path2

* [path2](#module_path2)
    * [.Path2](#module_path2.Path2)
        * [new exports.Path2([geometry])](#new_module_path2.Path2_new)
        * _instance_
            * [.toPoints()](#module_path2.Path2+toPoints) ⇒ <code>Array</code>
        * _static_
            * [.fromPoints()](#module_path2.Path2.fromPoints) ⇒ <code>Path2</code>
            * [.arc()](#module_path2.Path2.arc) ⇒ <code>Path2</code>
            * [.line()](#module_path2.Path2.line) ⇒ <code>Path2</code>

<a name="module_path2.Path2"></a>

### path2.Path2
Class Path2

Holds a JSCAD path2 geometry consisting of an ordered set of points.
A path can be open or closed, i.e. the start and end are the same.

**Kind**: static class of [<code>path2</code>](#module_path2)  

* [.Path2](#module_path2.Path2)
    * [new exports.Path2([geometry])](#new_module_path2.Path2_new)
    * _instance_
        * [.toPoints()](#module_path2.Path2+toPoints) ⇒ <code>Array</code>
    * _static_
        * [.fromPoints()](#module_path2.Path2.fromPoints) ⇒ <code>Path2</code>
        * [.arc()](#module_path2.Path2.arc) ⇒ <code>Path2</code>
        * [.line()](#module_path2.Path2.line) ⇒ <code>Path2</code>

<a name="new_module_path2.Path2_new"></a>

#### new exports.Path2([geometry])

| Param | Type | Description |
| --- | --- | --- |
| [geometry] | <code>path2</code> | a provided geometry |

**Example**  
```js
import { Path2 } from "jscad-object-api"

let path1 = Path2.fromPoints([[10,10], [-10,10], [-10,-10], [10,-10]], true) // closed
let path2 = Part2.arc({
  center: [5, 5],
  radius: 10,
  startangle: 90,
  endangle: 180,
  resolution: 36,
})
let path3 = path1.concat(path2)
```
<a name="module_path2.Path2+toPoints"></a>

#### path2.toPoints() ⇒ <code>Array</code>
**Kind**: instance method of [<code>Path2</code>](#module_path2.Path2)  
**Returns**: <code>Array</code> - list of points  
<a name="module_path2.Path2.fromPoints"></a>

#### Path2.fromPoints() ⇒ <code>Path2</code>
**Kind**: static method of [<code>Path2</code>](#module_path2.Path2)  
**Returns**: <code>Path2</code> - new geometry  
<a name="module_path2.Path2.arc"></a>

#### Path2.arc() ⇒ <code>Path2</code>
**Kind**: static method of [<code>Path2</code>](#module_path2.Path2)  
**Returns**: <code>Path2</code> - new geometry  
<a name="module_path2.Path2.line"></a>

#### Path2.line() ⇒ <code>Path2</code>
**Kind**: static method of [<code>Path2</code>](#module_path2.Path2)  
**Returns**: <code>Path2</code> - new geometry  
