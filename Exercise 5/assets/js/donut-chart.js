// Load the TV screen size data
d3.csv("assets/data/Data_exercise 5.3.csv", d => {

    // Rename columns and convert Count to a number
    return {
        category: d.Screensize_Category,
        count: +d.Count
    };

}).then(data => {

    // Check that the data has loaded correctly
    console.log(data);

    // Draw the donut chart
    drawDonutChart(data);

});


// Function to draw the donut chart
const drawDonutChart = data => {

    // ---------------------------------
    // 1. Set chart dimensions
    // ---------------------------------

    const width = 700;
    const height = 500;

    // Work out the largest radius that will fit inside the SVG
    const radius = Math.min(width, height) / 2 - 40;


    // ---------------------------------
    // 2. Create the colour scale
    // ---------------------------------

    const colourScale = d3.scaleOrdinal()
        .domain(data.map(d => d.category))
        .range(d3.schemeTableau10);


    // ---------------------------------
    // 3. Create the pie generator
    // ---------------------------------

    const pie = d3.pie()
        .sort(null)
        .value(d => d.count);


    // ---------------------------------
    // 4. Create the arc generator
    // ---------------------------------

    const arcGenerator = d3.arc()
        .innerRadius(radius * 0.6)
        .outerRadius(radius)
        .padAngle(0.02)
        .cornerRadius(4);


    // ---------------------------------
    // 5. Create the SVG container
    // ---------------------------------

    const svg = d3.select("#donut-chart")
        .append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .classed("responsive-svg-container", true);


    // ---------------------------------
    // 6. Create a group for the donut
    // ---------------------------------

    const innerChart = svg
        .append("g")
        .attr(
            "transform",
            `translate(${width / 2}, ${height / 2})`
        );


    // ---------------------------------
    // 7. Calculate the angles
    // ---------------------------------

    const pieData = pie(data);


    // ---------------------------------
    // 8. Draw the donut slices
    // ---------------------------------

    innerChart
        .selectAll(".slice")
        .data(pieData)
        .join("path")
        .attr("class", "slice")
        .attr("d", arcGenerator)
        .attr("fill", d => colourScale(d.data.category));


    // ---------------------------------
    // 9. Add labels to the slices
    // ---------------------------------

    innerChart
        .selectAll(".donut-label")
        .data(pieData)
        .join("text")
        .attr("class", "donut-label")
        .attr(
            "transform",
            d => `translate(${arcGenerator.centroid(d)})`
        )
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .text(d => `${d.data.category}: ${d.data.count}`);

};