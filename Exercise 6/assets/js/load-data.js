// Load the TV dataset
d3.csv("assets/data/Ex6_TVdata_withStar.csv", d => {

    return {
        brand: d.brand,
        model: d.model,
        screenSize: +d.screenSize,
        screenTech: d.screenTech,
        star: +d.star,
        energyConsumption: +d.energyConsumption
    };

}).then(data => {

    // Check that the data has loaded correctly
    console.log("TV data:", data);

    // Draw the histogram
   drawHistogram(data);
populateFilters(data);
drawScatterplot(data);
createTooltip();
handleMouseEvents();

}).catch(error => {

    console.error("Error loading the data:", error);

});