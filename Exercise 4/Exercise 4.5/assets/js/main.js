
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

d3.csv("assets/data/BrandCount.csv", d => {
return {
    brand: d.Brand_Reg,
    count: +d["Count(SoldIn)"]
};

}).then(data => {
    
    console.log(data);
    console.log(data.length);
    console.log(d3.max(data, d => d.count));
    console.log(d3.min(data, d => d.count));
    console.log(d3.extent(data, d => d.count));

    drawBarChart(data);

});

const drawBarChart = data => {

    const barHeight = 20;
    const barSpacing = 5;

    svg
        .selectAll("rect")
        .data(data)
        .join("rect")
        .attr("class", "bar")
        .attr("x", 0)
        .attr("y", (d, i) => i * (barHeight + barSpacing))
        .attr("width", d => d.count)
        .attr("height", barHeight)
        .attr("fill", "steelblue");

};