// Select all FAQ questions
const faqQuestions = document.querySelectorAll(".faq-question");

// Add a click event to each question
faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        // Find the answer belonging to this question
        const answer = question.nextElementSibling;

        // Show or hide the answer
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }

    });

});


// ========================================
// FILTERS
// ========================================

function populateFilters(data) {

    d3.select("#filters_screen")
        .selectAll("button")
        .data(screenFilters)
        .join("button")
        .attr("class", "filter-button")
        .classed("active", d => d.isActive)
        .text(d => d.label)
        .on("click", function(event, d) {

            // Set all filters to inactive
            screenFilters.forEach(filter => {
                filter.isActive = false;
            });

            // Set clicked filter to active
            d.isActive = true;

            // Update button styles
            d3.select("#filters_screen")
                .selectAll("button")
                .classed("active", filter => filter.isActive);

            // Update histogram
            updateHistogram(data, d.id);
        });


    function updateHistogram(data, id) {

        // Use all data if "All" is selected
        let updatedData = data;

        // Otherwise filter by screen technology
        if (id !== "all") {
            updatedData = data.filter(
                tv => tv.screenTech === id
            );
        }

        console.log("Selected filter:", id);
        console.log("Filtered data:", updatedData);

        // Generate new bins
        const updatedBins = binGenerator(updatedData);

        // Update histogram bars
        d3.select("#histogram")
            .selectAll(".bar")
            .data(updatedBins)
            .transition()
            .duration(750)
            .attr("x", d => xScale(d.x0))
            .attr("y", d => yScale(d.length))
            .attr("width", d => xScale(d.x1) - xScale(d.x0))
            .attr("height", d => innerHeight - yScale(d.length));
    }
}


function createTooltip() {

    // Create tooltip group
    const tooltip = innerChartS
        .append("g")
        .attr("class", "tooltip")
        .style("opacity", 0);

    // Tooltip background
    tooltip
        .append("rect")
        .attr("width", tooltipWidth)
        .attr("height", tooltipHeight)
        .attr("rx", 5)
        .attr("ry", 5)
        .attr("fill", barColor)
        .attr("opacity", 0.9);

    // Tooltip text
    tooltip
        .append("text")
        .attr("x", tooltipWidth / 2)
        .attr("y", tooltipHeight / 2)
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .attr("fill", "white");
}

// Handle mouse events for scatterplot tooltip
function handleMouseEvents() {

    innerChartS
        .selectAll("circle")

        .on("mouseenter", function(event, d) {

            // Get the position of the selected circle
            const cx = +event.currentTarget.getAttribute("cx");
            const cy = +event.currentTarget.getAttribute("cy");

            // Update tooltip text
            d3.select(".tooltip")
                .select("text")
                .text(`Screen Size: ${d.screenSize}"`);

            // Show and position tooltip
            d3.select(".tooltip")
                .attr(
                    "transform",
                    `translate(${cx + 10}, ${cy - tooltipHeight - 10})`
                )
                .transition()
                .duration(200)
                .style("opacity", 1);
        })

        .on("mouseleave", function() {

            // Hide tooltip
            d3.select(".tooltip")
                .transition()
                .duration(200)
                .style("opacity", 0);
        });
}