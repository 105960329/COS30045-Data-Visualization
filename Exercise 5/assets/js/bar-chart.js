// Load the CSV data
d3.csv("assets/data/Data_exercise 5.1.csv", d => {

    // Rename the columns and convert energy consumption to a number
    return {
        screenType: d.Screen_Tech,
        energy: +d["Mean(Labelled energy consumption (kWh/year))"]
    };

}).then(data => {

    // Sort from highest to lowest energy consumption
    data.sort((a, b) => b.energy - a.energy);

    // Check the processed data in the console
    console.log(data);

    // Draw the vertical bar chart
    drawBarChart(data);

});


// Function to draw the vertical bar chart
const drawBarChart = data => {

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
    // 2. Create the SVG container
    // ---------------------------------

    const svg = d3.select("#bar-chart")
        .append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .classed("responsive-svg-container", true);


    // ---------------------------------
    // 3. Create the inner chart
    // ---------------------------------

    const innerChart = svg
        .append("g")
        .attr(
            "transform",
            `translate(${margin.left}, ${margin.top})`
        );


    // ---------------------------------
    // 4. Create the x scale
    // ---------------------------------

    const xScale = d3.scaleBand()
        .domain(data.map(d => d.screenType))
        .range([0, innerWidth])
        .padding(0.2);


    // ---------------------------------
    // 5. Create the y scale
    // ---------------------------------

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.energy)])
        .range([innerHeight, 0])
        .nice();


    // ---------------------------------
    // 6. Create the x and y axes
    // ---------------------------------

    const bottomAxis = d3.axisBottom(xScale)
        .tickSizeOuter(0);

    const leftAxis = d3.axisLeft(yScale);


    // Add x-axis to the bottom of the chart
    innerChart
        .append("g")
        .attr("transform", `translate(0, ${innerHeight})`)
        .call(bottomAxis);


    // Add y-axis to the left of the chart
    innerChart
        .append("g")
        .call(leftAxis);


    // ---------------------------------
    // 7. Add y-axis label
    // ---------------------------------

    innerChart
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -innerHeight / 2)
        .attr("y", -60)
        .attr("text-anchor", "middle")
        .text("Average Energy Consumption (kWh/year)");


    // ---------------------------------
    // 8. Draw the bars
    // ---------------------------------

    innerChart
        .selectAll(".bar")
        .data(data)
        .join("rect")
        .attr("class", "bar")
        .attr("x", d => xScale(d.screenType))
        .attr("y", d => yScale(d.energy))
        .attr("width", xScale.bandwidth())
        .attr("height", d => innerHeight - yScale(d.energy));


    // ---------------------------------
    // 9. Add value labels above the bars
    // ---------------------------------

    innerChart
        .selectAll(".bar-label")
        .data(data)
        .join("text")
        .attr("class", "bar-label")
        .attr("x", d => xScale(d.screenType) + xScale.bandwidth() / 2)
        .attr("y", d => yScale(d.energy) - 8)
        .attr("text-anchor", "middle")
        .text(d => d.energy.toFixed(1));

};