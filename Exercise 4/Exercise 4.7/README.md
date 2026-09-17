# Exercise 4.7: Adding Labels

## Introduction

This exercise builds on Exercise 4.6 by adding labels and numerical values to the D3 bar chart. The labels make the visualisation easier to understand by showing the television brand and the corresponding number of televisions sold for each bar.

## Aim

The aim of this exercise is to add labels to the bar chart.

## Purpose

A bar chart without labels can be difficult to interpret. In this exercise, text labels were added to identify each television brand and display its corresponding sales count.

A group (`<g>`) container was also introduced so that the brand label, bar, and count value could be positioned together.

## Step 1: Making Room for Labels

Space was created on the left side of the chart for the brand labels.

The x-position of the bars was changed from `0` to `100`:

```javascript id="7m1b7u"
.attr("x", 100)
```

This provides approximately 100 pixels of space for the brand names.

## Step 2: Creating a Group Container

A group container was created for each data item:

```javascript id="q0j8y2"
const barAndLabel = svg
    .selectAll("g")
    .data(data)
    .join("g")
    .attr("transform", d => `translate(0, ${yScale(d.brand)})`);
```

The `<g>` element allows the bar and its associated labels to move together according to the `yScale`.

## Step 3: Adding the Rectangles

The rectangles were added back inside each group:

```javascript id="p3s6h1"
barAndLabel
    .append("rect")
    .attr("class", "bar")
    .attr("x", 100)
    .attr("y", 0)
    .attr("width", d => xScale(d.count))
    .attr("height", yScale.bandwidth())
    .attr("fill", "steelblue");
```

The `y` value of the rectangle is set to `0` because the group itself is already positioned using the `yScale`.

## Step 4: Adding Brand Labels

Text elements were added to display the television brand names:

```javascript id="h8t4y6"
barAndLabel
    .append("text")
    .text(d => d.brand)
    .attr("x", 90)
    .attr("y", 15)
    .attr("text-anchor", "end")
    .style("font-size", "13px");
```

The `text-anchor` attribute was set to `end` so that the brand names are right-aligned near the bars.

## Step 5: Adding Count Values

The exact sales count was added at the end of each bar:

```javascript id="x0k4j9"
barAndLabel
    .append("text")
    .text(d => d.count)
    .attr("x", d => 100 + xScale(d.count) + 5)
    .attr("y", 15)
    .style("font-size", "13px");
```

The x-position is calculated using the scaled bar width so that the count appears just after the end of the corresponding bar.

## Result

The completed chart now displays:

* The television brand name.
* A horizontal bar representing the number of televisions sold.
* The exact numerical count at the end of each bar.

The use of `<g>` elements keeps each brand label, bar, and count value together. The chart also continues to use the `xScale` and `yScale` created in Exercise 4.6.

This makes the chart easier to read and provides more useful information to the user.

## Files

The main files used for this exercise are:

```text id="j8j3x0"
Exercise 4.7/
├── index.html
├── about.html
├── televisions.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── data/
    │   └── BrandCount.csv
    ├── img/
    │   └── PowerIcon.png
    └── js/
        ├── main.js
        └── script.js
```

## Conclusion

Exercise 4.7 completes the basic D3 bar chart by adding meaningful labels and values. The exercise demonstrates how SVG groups, text elements, and D3 data binding can be combined with scales to create a clearer and more informative visualisation.

The completed chart can now be integrated into a webpage and used as a starting point for creating bar charts from other datasets.

## AI Declaration

AI tools were used to support my learning and understanding during this exercise. AI assistance was used to explain how to add SVG text elements, create `<g>` group containers, position labels, and use the existing `xScale` and `yScale` from Exercise 4.6.

AI assistance was also used to help understand the purpose of attributes such as `text-anchor`, `transform`, `x`, and `y`, and how to position the brand names and count values relative to the bars.

I reviewed and tested the code myself in the browser, checked the generated SVG elements using the browser Developer Tools, and verified that the labels, bars, and numerical values were displayed correctly. I made sure that I understood the final implementation before submitting the exercise.


## Final Website
http://127.0.0.1:5500/Exercise%204/Exercise%204.7/index.html

