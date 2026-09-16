# Exercise 4.4

## Aim

The aim of this exercise is to learn how to load data from a CSV file and format it so that it is ready to be used for data visualisation with D3.js.

## Purpose

In previous exercises, data was processed using KNIME to create summary tables that could be visualised. In this exercise, the processed data is exported from KNIME as a CSV file and loaded into D3.js.

The CSV data is then converted into appropriate JavaScript data types and prepared for use in the following bar chart exercises.

## What I Did

### 1. Prepared the Data

I used the provided KNIME workflow to process the TV dataset and exported the required data as a CSV file.

The CSV file was then added to a `data` folder in the repository.

### 2. Loaded the CSV Data with D3.js

I used the `d3.csv()` function to load the CSV file.

### 3. Converted Data Types

The numerical values imported from the CSV were initially interpreted as strings.

I used the unary `+` operator to convert the relevant count values into numbers.

For example:

```javascript
count: +d.count
```

This ensures that D3.js can correctly perform numerical operations on the data.

### 4. Examined the Dataset

I used the browser console to inspect the loaded dataset and find basic information about it, including:

* The complete dataset
* The number of records using `data.length`
* The maximum count using `d3.max()`
* The minimum count using `d3.min()`
* The minimum and maximum values using `d3.extent()`

### 5. Sorted the Data

I used JavaScript's `sort()` method to organise the data so that it can be interpreted more easily when it is used for the visualisation.

### 6. Prepared the Data for the Bar Chart

After loading, formatting, examining, and sorting the data, I passed the dataset to the `drawBarChart()` function:

```javascript
drawBarChart(data);
```

This function is called inside the `.then()` promise after the CSV data has successfully loaded.

The actual bar chart visualisation will be developed in the following exercise.

## Result

The CSV data was successfully loaded into D3.js and converted into JavaScript objects.

The numerical count values were converted from strings into numbers, allowing D3.js to perform numerical calculations such as finding the minimum, maximum, and extent of the dataset.

The processed data is now ready to be used to create the bar chart in the next exercise.

## Files

The exercise contains:

* `main.js` – JavaScript code used to load, format, inspect, and prepare the CSV data.
* `data/` – Folder containing the CSV dataset.
* `index.html` – HTML file used to run the D3.js visualisation.

## AI Declaration

AI tools were used to support my learning during this exercise.

AI assistance was used to help understand the requirements of Exercise 4.4, explain D3.js functions such as `d3.csv()`, `d3.max()`, `d3.min()`, and `d3.extent()`, and assist with understanding JavaScript data type conversion and sorting.

The final code was reviewed and tested by me, and I made sure that I understood how the code loads and formats the CSV data before submitting the exercise.
