function drawScatterplot(data) {

    // Create the SVG container for the scatterplot
    const svg = d3.select("#scatterplot")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    // Create the inner chart
    innerChartS = svg.append("g")
        .attr(
            "transform",
            `translate(${margin.left}, ${margin.top})`
        );

    // Find the maximum star rating
    const maxStarRating = d3.max(data, d => d.star);

    // Find the maximum energy consumption
    const maxEnergyConsumption = d3.max(
        data,
        d => d.energyConsumption
    );

    console.log("Maximum star rating:", maxStarRating);
    console.log(
        "Maximum energy consumption:",
        maxEnergyConsumption
    );

    // Set up x scale for star rating
    xScaleS
        .domain([0, maxStarRating])
        .range([0, innerWidth]);

    // Set up y scale for energy consumption
    yScaleS
        .domain([0, maxEnergyConsumption])
        .range([innerHeight, 0]);

    // Set up colour scale for screen technology
    colorScale
         .domain(["LCD", "LED", "OLED"])
         .range(["#e76f51", "#2a9d8f", "#457b9d"]);

    // Draw scatterplot circles
innerChartS
    .selectAll("circle")
    .data(data)
    .join("circle")
    .attr("cx", d => xScaleS(d.star))
    .attr("cy", d => yScaleS(d.energyConsumption))
    .attr("r", 4)
    .attr("fill", d => colorScale(d.screenTech))
    .attr("opacity", 0.5);

    // Add x-axis
    innerChartS
        .append("g")
        .attr("class", "axis")
        .attr("transform", `translate(0, ${innerHeight})`)
        .call(d3.axisBottom(xScaleS));

    // Add y-axis
    innerChartS
        .append("g")
        .attr("class", "axis")
        .call(d3.axisLeft(yScaleS));

    // Add x-axis label
    innerChartS
        .append("text")
        .attr("x", innerWidth / 2)
        .attr("y", innerHeight + 50)
        .attr("text-anchor", "middle")
        .text("Star Rating");

    // Add y-axis label
    innerChartS
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -innerHeight / 2)
        .attr("y", -50)
        .attr("text-anchor", "middle")
        .text("Energy Consumption");

        // Add legend
const legend = innerChartS
    .append("g")
    .attr("class", "legend")
    .attr("transform", `translate(${innerWidth - 100}, 20)`);

// Get the screen technology categories
const categories = colorScale.domain();

// Create one legend item for each category
const legendItems = legend
    .selectAll(".legend-item")
    .data(categories)
    .join("g")
    .attr("class", "legend-item")
    .attr("transform", (d, i) => `translate(0, ${i * 25})`);

// Add coloured rectangles
legendItems
    .append("rect")
    .attr("width", 15)
    .attr("height", 15)
    .attr("fill", d => colorScale(d));

// Add labels
legendItems
    .append("text")
    .attr("x", 22)
    .attr("y", 12)
    .text(d => d);
}