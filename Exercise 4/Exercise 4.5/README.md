# Exercise 4.5

## Introduction

This exercise focuses on using D3.js to bind data from a CSV dataset to SVG elements. The data is used to create rectangles that represent bars in a basic horizontal bar chart.

## Aim

The aim of this exercise is to use data from a dataset to draw SVG elements for visualisation.


## Drawing the Bars

Each rectangle was given a class and attributes to control its position and size.

The chart uses:

* `x` to set the starting horizontal position of each bar.
* `y` to position each bar vertically.
* `width` based on the `count` value.
* `height` based on the defined `barHeight`.
* `fill` to give the bars a visible colour.

Spacing was also added between the bars using a `barSpacing` value.


## Checking the DOM

The browser Developer Tools were used to check the generated SVG elements.

The dataset contains 76 records, so D3 creates 76 `<rect>` elements in the SVG.

The Elements tab can be used to inspect the generated `<rect>` elements and confirm that the data has been successfully bound to the SVG elements.

## Result

The result is a basic horizontal bar chart where each rectangle represents a television brand and its width represents the number of televisions sold.

The data was successfully bound to the SVG rectangles, and spacing was added between the bars.

At this stage, the bars are drawn using the original `count` values. The chart does not yet use a scale to fit all values within the SVG dimensions, and labels have not been added. These improvements are addressed in later exercises.

## Files

The main files used for this exercise are:


Exercise 4.5/
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

AI tools were used to support my learning during this exercise. AI assistance was used to explain D3.js concepts such as data binding, the `.data()` and `.join()` methods, SVG rectangle attributes, and debugging the CSV data structure.

I also used AI assistance to help identify and correct the CSV field names and understand how the `brand` and `count` values were converted into JavaScript objects.

I reviewed, tested, and verified the final code myself in the browser and checked the generated data objects and SVG rectangles using the browser Developer Tools. The final implementation was understood and validated by me before submission.
