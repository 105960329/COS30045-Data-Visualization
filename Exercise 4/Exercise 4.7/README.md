# Exercise 4.6

## Introduction

This exercise builds on Exercise 4.5 by using D3 scales to make the bar chart adaptable to the available SVG size. Instead of using the raw data values directly as pixel dimensions, linear and band scales are used to calculate the size and position of the bars.

## Aim

The aim of this exercise is to make the chart adaptable to different SVG sizes.

## Purpose

In Exercise 4.5, the `count` value was directly used to determine the width of each bar. This could cause bars to extend beyond the available SVG width when the data values were larger than the SVG dimensions.

D3 scales were introduced to convert the data values into suitable positions and dimensions within the SVG.

Two types of scales were used:

* `d3.scaleLinear()` for the numerical TV sales count.
* `d3.scaleBand()` for the categorical television brand data.

## Step 1: Linear Scale

A linear scale was created for the TV count data:

```javascript
const xScale = d3.scaleLinear()
    .domain([0, 1200])
    .range([0, 400]);
```

The domain represents the range of the original count values, while the range represents the available pixel width for the bars.

The bar width was then changed from using the raw count:

```javascript
.attr("width", d => d.count)
```

to using the linear scale:

```javascript
.attr("width", d => xScale(d.count))
```

This allows the bars to fit within the available SVG width.

## Step 2: Band Scale

A band scale was created for the television brand categories:

```javascript
const yScale = d3.scaleBand()
    .domain(data.map(d => d.brand))
    .range([0, 1600])
    .padding(0.1);
```

The `domain` contains the television brand names from the dataset, while the `range` determines the available vertical space.

The band scale was used to calculate the vertical position of each bar:

```javascript
.attr("y", d => yScale(d.brand))
```

The height of each bar was also calculated using:

```javascript
.attr("height", yScale.bandwidth())
```

The `padding(0.1)` adds spacing between the bars.

## Result

The chart now uses scales to adapt the bar widths, positions, and heights to the SVG dimensions.

The `xScale` ensures that the numerical count values are converted into suitable bar widths, while the `yScale` distributes the television brands vertically and provides appropriate spacing between the bars.

The chart is now more adaptable than the chart created in Exercise 4.5.

Labels have not yet been added because they are introduced in the following exercise.

## Files

The main files used for this exercise are:

```text
Exercise 4.6/
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
## AI Declaration

AI tools were used to support my learning and understanding during this exercise. AI assistance was used to explain D3 scaling concepts, including `d3.scaleLinear()`, `d3.scaleBand()`, domains, ranges, bandwidth, and padding.

AI assistance was also used to help understand how to modify the bar chart from Exercise 4.5 so that the bar widths, positions, and heights were calculated using D3 scales.

I reviewed and tested the code myself in the browser, checked the generated SVG elements using the browser Developer Tools, and verified that the chart and data were displayed correctly. I made sure that I understood the final implementation before submitting the exercise.
