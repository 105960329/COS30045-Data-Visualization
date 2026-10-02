# Exercise 6 – Interactive Data Visualisation

## COS30045 Data Visualisation

This exercise uses D3.js to create interactive visualisations based on the January 2026 television energy consumption dataset.

The exercise includes a histogram, interactive screen technology filters, a scatterplot, and tooltips.

---

## Exercise 6.1 – Histogram

A histogram was created to visualise the distribution of television energy consumption.

The television dataset is loaded using `d3.csv()`, and the `energyConsumption` values are converted into histogram bins using `d3.bin()`.

The histogram includes:

- Energy Consumption on the x-axis
- Frequency on the y-axis
- Histogram bins representing different ranges of energy consumption
- D3 linear scales for positioning the bars and axes

The histogram shows that most televisions have relatively lower energy consumption, while only a small number of models have very high energy consumption.

---

## Exercise 6.2 – Filters

Interactive buttons were added to allow users to filter the histogram according to television screen technology.

The available filters are:

- All
- LCD
- LED
- OLED

When a filter button is selected, the dataset is filtered according to `screenTech`.

The histogram bins are then recalculated using the filtered dataset and the bars are updated using a D3 transition.

The active filter button is visually highlighted so users can identify the currently selected category.

---

## Exercise 6.3 – Scatterplot

A scatterplot was created to explore the relationship between television star rating and energy consumption.

The scatterplot uses:

- Star Rating on the x-axis
- Energy Consumption on the y-axis
- Individual television models represented as circles

The circles are colour-coded according to screen technology:

- LCD
- LED
- OLED

A legend is included to explain the colour categories.

The circles use partial opacity to make overlapping observations easier to identify.

---

## Exercise 6.4 – Tooltips

Interactive tooltips were added to the scatterplot.

When the user moves the mouse over a television data point, a tooltip appears and displays the screen size of that television.

The tooltip uses the `mouseenter` and `mouseleave` events to control its visibility.

This interaction allows users to inspect individual television models without displaying additional labels permanently on the chart.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript
- D3.js v7
- CSV data

---

## Mercury Link
https://mercury.swin.edu.au/cos30045/s105960329/Exercise%206/televisions.html


## File Structure

```text
Exercise 6/
│
├── index.html
├── televisions.html
├── about.html
├── README.md
│
└── assets/
    ├── css/
    │   ├── base.css
    │   └── visualisation.css
    │
    ├── data/
    │   └── Ex6_TVdata_withStar.csv
    │
    ├── img/
    │   └── PowerIcon.png
    │
    └── js/
        ├── load-data.js
        ├── shared-constants.js
        ├── interactions.js
        ├── histogram.js
        └── scatterplot.js

Generative AI Declaration
Generative AI tools were used to assist with the development of this exercise.
AI assistance was used to:
- explain D3.js concepts and syntax;
- assist with debugging JavaScript and D3 code;
- provide guidance for implementing the histogram, filters, scatterplot, and tooltip;
- assist with organising JavaScript code into separate files;
- suggest CSS styling and webpage structure; and
- assist with preparing documentation for the exercise.
The generated suggestions were reviewed, tested, and modified during implementation to ensure that the visualisations worked correctly with the supplied dataset.


