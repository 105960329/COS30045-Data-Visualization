# Exercise 5 – D3 Data Visualisation

## COS30045 – Data Visualisation

This exercise explores different chart types using D3.js. The visualisations are added to the Energy Consumption website developed in the earlier exercises.

The exercise includes three different visualisations:

- Exercise 5.1 – Vertical Bar Chart
- Exercise 5.2 – Scatter Plot and Line Chart
- Exercise 5.3 – Donut Chart


## Exercise 5.1 – Vertical Bar Chart

A vertical bar chart was created to compare the average energy consumption of different TV screen technologies for 55-inch televisions.

The chart includes:

- A categorical x-axis for TV screen types
- A numerical y-axis for average energy consumption (kWh/year)
- Scaled x and y axes
- Axis labels
- Sorted bars from highest to lowest energy consumption
- Value labels above each bar

The chart uses `d3.scaleBand()` for the categorical x-axis and `d3.scaleLinear()` for the numerical y-axis.


## Exercise 5.2 – Scatter Plot and Line Chart

A scatter plot and line chart were created to show changes in the average Australian electricity spot price between 1998 and 2024.

The chart includes:

- Year on the x-axis
- Average electricity spot price on the y-axis
- Scatter plot points for each year
- A line connecting the data points
- X and y-axis labels

Both axes use `d3.scaleLinear()` because year and electricity price are continuous numerical values.

`d3.extent()` is used to determine the minimum and maximum years in the dataset automatically.

A D3 line generator (`d3.line()`) is used to generate the path connecting the data points.


## Exercise 5.3 – Donut Chart

A donut chart was created to display the proportion of small, medium, and large TV models in the dataset.

The chart uses:

- `d3.scaleOrdinal()` to assign colours to the TV size categories
- `d3.pie()` to calculate the angles of each segment based on the TV count
- `d3.arc()` to generate the donut segments
- An inner radius to create the donut shape
- Labels positioned using `arcGenerator.centroid()`

Padding and rounded corners were also applied to visually separate the donut segments.

## Mercury Link
https://mercury.swin.edu.au/cos30045/s105960329/Exercise%205/index.html


## Project Structure

```text
Exercise 5/
│
├── index.html
├── televisions.html
├── about.html
├── README.md
│
└── assets/
    ├── css/
    │   └── style.css
    │
    ├── data/
    │   ├── Data_exercise 5.1.csv
    │   ├── ARE_Spot_Prices.csv
    │   └── Data_exercise 5.3.csv
    │
    ├── img/
    │   └── PowerIcon.png
    │
    └── js/
        ├── script.js
        ├── bar-chart.js
        ├── line-chart.js
        └── donut-chart.js

Technologies Used
HTML5
CSS3
JavaScript
D3.js
Visual Studio Code
Live Server
AI Declaration

Generative AI (ChatGPT) was used as a learning and development aid for this exercise.

AI assistance was used to:

Explain D3.js concepts and syntax
Explain the use of scales, axes, d3.extent(), d3.line(), d3.pie(), and d3.arc()
Provide guidance on structuring the JavaScript code for the visualisations
Assist with debugging and checking the implementation against the exercise requirements
Suggest code improvements and styling for the charts

The exercise requirements, datasets, and overall implementation were based on the COS30045 Exercise 5 materials. The generated suggestions were reviewed, tested, and adapted during development, and I verified the visualisations by running them locally.



