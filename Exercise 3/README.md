# Exercise 3 – Data Story: TV Energy Consumption

## Data Story

### Audience

The target audience for this visualisation is consumers
who are interested in purchasing a television.

### What does the audience want to know?

The audience wants to understand how different television
characteristics relate to energy consumption. This can help
consumers consider energy use when comparing television
models.

### Data Question

The main question explored in this data story is:

Does TV screen size affect energy consumption?
How does screen technology affect energy consumption?

## About the Data

### Data Source

The analysis uses the following CSV data files:

- `BrandCount.csv`
- `tv_2026_02_15.csv`
These files contain information about television products and their 
characteristics, including screen size, screen technology and labelled 
energy consumption.

The TV dataset was provided for the COS30045 Data Visualisation exercises 
and was used for the data exploration activities in Exercise 2.

### Data Processing
The data was explored and processed using KNIME.

The following processing and exploration steps were completed:

1. The television data was imported into KNIME from the CSV file.
2. Relevant columns were selected using the Column Filter node.
3. Screen size was initially analysed in centimetres.
4. Screen size was converted from centimetres to inches using an 
   Expression node because television screen sizes are commonly discussed 
   in inches.
5. Screen size in inches was converted into a categorical variable so 
   that it could be used in categorical visualisations.
6. TVs were classified into three screen-size categories:
   - Small: less than 43 inches
   - Medium: 44–65 inches
   - Large: greater than 66 inches
7. GroupBy was used to calculate frequencies and summary values for 
   categorical variables such as screen technology.
8. Pivot was used to compare screen technology and screen-size categories.
9. Mean labelled energy consumption was used to compare the energy 
   consumption of different TV groups.
10. Charts were created in KNIME to explore relationships between screen 
    size, screen technology and energy consumption.

These processing steps allowed the original product-level data to be 
transformed into information that could be communicated through 
visualisations.

### Privacy

The dataset contains information about television products
rather than individuals and does not contain personal
identifying information.

### Accuracy and Limitations
The visualisations describe patterns within the available dataset and 
should not be interpreted as representing every television available 
in the Australian market.

There are several limitations to the dataset and analysis:

- The dataset contains a limited selection of television models.
- Energy consumption can be affected by factors other than screen size, 
  including screen technology and individual model characteristics.
- The relationship shown in the visualisations does not necessarily mean 
  that screen size alone causes higher energy consumption.
- Some unusual screen sizes or frequency values were identified during 
  the data exploration process. These values require careful 
  interpretation because they may represent niche products, data 
  classification issues or possible errors.
- Grouping TVs into small, medium and large categories simplifies the 
  original continuous screen-size data and may hide differences between 
  individual models.
- Average energy consumption represents a group and does not describe 
  every TV within that group.
  
The results should therefore be used to identify general patterns rather 
than to predict the energy consumption of a specific television model.



### Ethics

The visualisations should present the data accurately and
avoid misleading comparisons. Energy consumption should not
be attributed to screen size alone because other television
characteristics may also influence energy use.

## AI Declaration

Generative AI was used as a support tool during the development of this 
exercise.

AI was used to help with:
- organising and structuring the README content;
- improving the wording and clarity of explanations; and
- discussing possible approaches to presenting the data story.

The data processing and exploration were completed using KNIME. The 
visualisations and data interpretations were reviewed by the student, 
and the student is responsible for understanding and explaining the 
final work.
