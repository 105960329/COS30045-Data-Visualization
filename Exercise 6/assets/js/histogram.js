function drawHistogram(data) {

    // Create the SVG container
    const svg = d3.select("#histogram")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    // Create the inner chart
    const innerChart = svg.append("g")
        .attr(
            "transform",
            `translate(${margin.left}, ${margin.top})`
        );

    // Generate histogram bins from energy consumption data
    const bins = binGenerator(data);

    // Check the generated bins
    console.log("Histogram bins:", bins);

    // Get the minimum and maximum values of the bins
    const binsMin = bins[0].x0;
    const binsMax = bins[bins.length - 1].x1;

    // Find the largest bin frequency
    const binsMaxLength = d3.max(bins, d => d.length);

    console.log("Minimum bin value:", binsMin);
    console.log("Maximum bin value:", binsMax);
    console.log("Maximum bin frequency:", binsMaxLength);

    // Set up the x scale
    xScale
        .domain([binsMin, binsMax])
        .range([0, innerWidth]);

    // Set up the y scale
    yScale
        .domain([0, binsMaxLength])
        .range([innerHeight, 0]);

    // Draw the histogram bars
    innerChart
        .selectAll("rect")
        .data(bins)
        .join("rect")
        .attr("class", "bar")
        .attr("x", d => xScale(d.x0))
        .attr("y", d => yScale(d.length))
        .attr("width", d => xScale(d.x1) - xScale(d.x0))
        .attr("height", d => innerHeight - yScale(d.length))
        .attr("stroke", bodyBackgroundColor);

    // Create the x-axis
    const xAxis = d3.axisBottom(xScale);

    // Add the x-axis
    innerChart
        .append("g")
        .attr("class", "axis")
        .attr("transform", `translate(0, ${innerHeight})`)
        .call(xAxis);

    // Create the y-axis
    const yAxis = d3.axisLeft(yScale);

    // Add the y-axis
    innerChart
        .append("g")
        .attr("class", "axis")
        .call(yAxis);

    // Add x-axis label
    innerChart
        .append("text")
        .attr("x", innerWidth / 2)
        .attr("y", innerHeight + 50)
        .attr("text-anchor", "middle")
        .text("Energy Consumption");

    // Add y-axis label
    innerChart
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -innerHeight / 2)
        .attr("y", -50)
        .attr("text-anchor", "middle")
        .text("Frequency");
}