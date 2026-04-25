<a name="module_jscad-object-api"></a>

## jscad-object-api

* [jscad-object-api](#module_jscad-object-api)
    * [.Geom2](#module_jscad-object-api.Geom2)
        * [new exports.Geom2([geometry])](#new_module_jscad-object-api.Geom2_new)
        * [.circle()](#module_jscad-object-api.Geom2.circle) ⇒ <code>Geom2</code>
        * [.toSides()](#module_jscad-object-api.Geom2.toSides) ⇒ <code>Array</code>

<a name="module_jscad-object-api.Geom2"></a>

### jscad-object-api.Geom2
Class Geom2

Holds a JSCAD 2D geometry consisting of a number of sides.
Each side is a line segment as defined by two points.

**Kind**: static class of [<code>jscad-object-api</code>](#module_jscad-object-api)  

* [.Geom2](#module_jscad-object-api.Geom2)
    * [new exports.Geom2([geometry])](#new_module_jscad-object-api.Geom2_new)
    * [.circle()](#module_jscad-object-api.Geom2.circle) ⇒ <code>Geom2</code>
    * [.toSides()](#module_jscad-object-api.Geom2.toSides) ⇒ <code>Array</code>

<a name="new_module_jscad-object-api.Geom2_new"></a>

#### new exports.Geom2([geometry])
Create a new Geom2 from the given geometry


| Param | Type | Description |
| --- | --- | --- |
| [geometry] | <code>geom2</code> | a JSCAD geom2 geometry |

**Example**  
```js
const ashape = Geom2.square()
const bshape = Geom2.square({size: 10})
const cshape = ashape.translateY(5).extrudeLinear({height: 250})
```
<a name="module_jscad-object-api.Geom2.circle"></a>

#### Geom2.circle() ⇒ <code>Geom2</code>
Create a circle using the given options.

**Kind**: static method of [<code>Geom2</code>](#module_jscad-object-api.Geom2)  
**Returns**: <code>Geom2</code> - new geometry  
<a name="module_jscad-object-api.Geom2.toSides"></a>

#### Geom2.toSides() ⇒ <code>Array</code>
Return the sides

**Kind**: static method of [<code>Geom2</code>](#module_jscad-object-api.Geom2)  
**Returns**: <code>Array</code> - list of sides  
