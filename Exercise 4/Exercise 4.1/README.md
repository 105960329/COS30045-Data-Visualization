# Exercise 4.1

## Overview

This exercise introduces the use of SVG (Scalable Vector Graphics) to create and format different graphical shapes. I created a house and garden scene using SVG primitives and then customised the drawing by changing colours, positions, strokes, and adding additional objects.

The exercise also helped me understand how SVG coordinates, grouping, and transformations work.

## Step 1: Create the SVG House

I created a house and garden scene using different SVG elements.

The SVG includes:

* `<rect>` – house, door, windows, tree trunk, ground and other rectangular objects
* `<circle>` – sun, tree leaves, flowers and door knob
* `<ellipse>` – clouds
* `<polygon>` – roof
* `<polyline>` – fence
* `<line>` – window frames and flower stems
* `<path>` – garden path
* `<text>` – house title
* `<g>` – grouped window elements

The SVG uses coordinates to control the position and size of each shape.

## Step 2: SVG Coordinates

I added an annotated screenshot to demonstrate how the SVG coordinates correspond to the objects in the drawing.

The SVG coordinate system starts at `(0, 0)` in the top-left corner.

* Increasing `x` moves an object to the right.
* Increasing `y` moves an object downward.
* `cx` and `cy` define the centre of a circle.
* `x`, `y`, `width` and `height` are used for rectangles.
* `points` are used to define the vertices of polygons and polylines.

For example, the roof uses three coordinate points to create a triangle shape.

## Step 3: Customisation

I customised the original SVG drawing by making several changes.

### Changed and Moved Shapes

I changed the position and/or size of some SVG shapes to customise the appearance of the house and garden.

### Changed Fill Colours

I changed the fill colours of different objects, including the house, roof, windows, tree, garden and other objects.

### Changed Stroke Attributes

I experimented with:

* `stroke`
* `stroke-width`

These attributes were used to change the outlines and appearance of different shapes.

### Added Additional Items

I added additional objects to the garden scene to make the SVG more detailed, including a mailbox.

These additions also provided further practice using SVG shapes and positioning.

## Step 4: Group Element

I used the SVG `<g>` element to group the two windows.

Both windows are placed inside a group so that common styling can be applied to them.

For example:

```html
<g fill="lightblue" stroke="black" stroke-width="4">
    ...
</g>
```

I also experimented with the `transform` and `translate` attributes to move the windows.


## AI Declaration

AI tools were used as a learning and development aid during this exercise.

AI was used to:

* Help understand SVG elements and their attributes.
* Explain SVG coordinate systems.
* Provide examples of SVG shapes and formatting.
* Help with the use of the `<g>` group element.
* Explain `transform` and `translate`.
* Assist with ideas for customising the house and garden.
* Help structure and improve the README documentation.

The SVG code was reviewed, tested, and customised as part of completing the exercise. I remain responsible for understanding the code and the final work submitted.
