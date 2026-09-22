// Load the electricity spot price data
d3.csv("assets/data/ARE_Spot_Prices.csv", d => {

    // Convert the CSV values from strings to numbers
    return {
        year: +d.Year,
        averagePrice: +d["Average Price (notTas-Snowy)"]
    };

}).then(data => {

    // Check that the data has loaded correctly
    console.log(data);

    // Draw the line chart
    drawLineChart(data);

});


// Function to draw the line chart
const drawLineChart = data => {

    // ---------------------------------
    // 1. Set chart dimensions and margins
    // ---------------------------------

    const width = 700;
    const height = 500;

    const margin = {
        top: 40,
        right: 30,
        bottom: 70,
        left: 90
    };

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;


    // ---------------------------------
    // 2. Create the x scale
    // ---------------------------------

    const xScale = d3.scaleLinear()
        .domain(d3.extent(data, d => d.year))
        .range([0, innerWidth]);


    // ---------------------------------
    // 3. Create the y scale
    // ---------------------------------

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.averagePrice)])
        .range([innerHeight, 0])
        .nice();


    // ---------------------------------
    // 4. Create the axes
    // ---------------------------------

    const bottomAxis = d3.axisBottom(xScale)
        .tickFormat(d3.format("d"));

    const leftAxis = d3.axisLeft(yScale);


    // ---------------------------------
    // 5. Create the SVG container
    // ---------------------------------

    const svg = d3.select("#line-chart")
        .append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .classed("responsive-svg-container", true);


    // ---------------------------------
    // 6. Create the inner chart
    // ---------------------------------

    const innerChart = svg
        .append("g")
        .attr(
            "transform",
            `translate(${margin.left}, ${margin.top})`
        );


    // ---------------------------------
    // 7. Add the x-axis
    // ---------------------------------

    innerChart
        .append("g")
        .attr("transform", `translate(0, ${innerHeight})`)
        .call(bottomAxis);


    // ---------------------------------
    // 8. Add the y-axis
    // ---------------------------------

    innerChart
        .append("g")
        .call(leftAxis);


    // ---------------------------------
    // 9. Add the x-axis label
    // ---------------------------------

    innerChart
        .append("text")
        .attr("x", innerWidth / 2)
        .attr("y", innerHeight + 55)
        .attr("text-anchor", "middle")
        .text("Year");


    // ---------------------------------
    // 10. Add the y-axis label
    // ---------------------------------

    innerChart
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -innerHeight / 2)
        .attr("y", -60)
        .attr("text-anchor", "middle")
        .text("Average Price ($ per megawatt hour)");


    // ---------------------------------
    // 11. Draw the scatter plot points
    // ---------------------------------

    innerChart
        .selectAll(".point")
        .data(data)
        .join("circle")
        .attr("class", "point")
        .attr("r", 4)
        .attr("cx", d => xScale(d.year))
        .attr("cy", d => yScale(d.averagePrice));


    // ---------------------------------
    // 12. Create the line generator
    // ---------------------------------

    const lineGenerator = d3.line()
        .x(d => xScale(d.year))
        .y(d => yScale(d.averagePrice));


    // ---------------------------------
    // 13. Draw the line
    // ---------------------------------

    innerChart
        .append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", lineGenerator);

};