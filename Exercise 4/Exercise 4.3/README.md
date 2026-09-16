# Exercise 4.3

## Aim

The aim of this exercise is to use D3.js to create an SVG canvas within the Energy Consumption website. This exercise prepares the website for creating a data visualisation using data from a CSV file in the following exercises.

## What I Did

For this exercise, I continued using my existing Energy Consumption website and added D3.js functionality.

I completed the following steps:

1. Added the D3.js library to `index.html`.
2. Created and linked a separate JavaScript file, `main.js`, for the D3 code.
3. Added a `<div>` with the class `responsive-svg-container` to contain the SVG visualisation.
4. Added CSS to make the SVG container responsive to different screen sizes.
5. Used D3 to append an SVG element inside the container.
6. Added a `viewBox` attribute to the SVG to support responsive scaling.
7. Added a border around the SVG canvas for testing purposes.
8. Used D3 to append a blue rectangle to the SVG canvas.
9. Tested the website using Live Server in VS Code.
10. Confirmed that the D3 code successfully created the SVG and rectangle on the webpage.

## Files Used

### `index.html`

### `style.css`

The following CSS was added to create a responsive SVG container:

```css
.responsive-svg-container {
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    max-width: 1200px;
}
```

### `js/main.js`

D3 was used to create an SVG element and append a rectangle:

```javascript
const svg = d3.select(".responsive-svg-container")
    .append("svg")
    .attr("viewBox", "0 0 1200 1600")
    .style("border", "1px solid black");

svg
    .append("rect")
    .attr("x", 10)
    .attr("y", 10)
    .attr("width", 414)
    .attr("height", 16)
    .attr("fill", "blue");
```

## Result

The webpage now contains an SVG canvas generated using D3.js. A blue rectangle is displayed at the top of the SVG canvas.

The SVG container responds to changes in the browser window size. This setup will be used in the following exercises to create a bar chart using data from a CSV file.

## Technologies Used

* HTML
* CSS
* JavaScript
* D3.js Version 7
* Visual Studio Code
* Live Server

## AI Declaration

AI was used as a learning support tool during this exercise. I used ChatGPT to help me understand the Exercise 4.3 instructions, explain how D3.js creates SVG elements, and assist with troubleshooting when my initial D3 code did not produce any visible changes on the webpage.

The exercise was completed by me. I applied the required code to my existing Energy Consumption website, tested the changes using Live Server, checked that the SVG and rectangle appeared correctly, and made the necessary corrections to my project files.

AI assistance was used to support my understanding and troubleshooting process. The final implementation was reviewed and tested by me.
