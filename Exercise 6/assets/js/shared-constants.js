// Chart dimensions
const width = 900;
const height = 500;

const margin = {
    top: 40,
    right: 30,
    bottom: 60,
    left: 70
};

// Inner chart dimensions
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;


// Colours
const bodyBackgroundColor = "#f4f8f9";
const barColor = "#4aa3a2";


// Scales
const xScale = d3.scaleLinear();
const yScale = d3.scaleLinear();


// Histogram bin generator
const binGenerator = d3.bin()
    .value(d => d.energyConsumption)
    .thresholds(14);

// Screen technology filters
const screenFilters = [
    {
        id: "all",
        label: "All",
        isActive: true
    },
    {
        id: "LCD",
        label: "LCD",
        isActive: false
    },
    {
        id: "LED",
        label: "LED",
        isActive: false
    },
    {
        id: "OLED",
        label: "OLED",
        isActive: false
    }
];

// Scatterplot shared variables
let innerChartS;

const xScaleS = d3.scaleLinear();
const yScaleS = d3.scaleLinear();

const colorScale = d3.scaleOrdinal();

// Tooltip dimensions
const tooltipWidth = 120;
const tooltipHeight = 40;