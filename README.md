# Investment Insights

## Overview

Investment Insights is a single-page web application developed using Angular 17. The application is designed to help users forecast their investment growth over a specified period. By inputting key investment parameters, users can visualize the potential returns on their investments in a detailed tabular format. This tool is ideal for both novice and seasoned investors looking to plan their financial future.

## Features

- **User Inputs**:

  - **Initial Investment**: The amount of money initially invested.
  - **Annual Investment**: The amount added to the investment every year.
  - **Expected Return**: The anticipated annual rate of return on the investment (expressed as a percentage).
  - **Duration**: The number of years the investment will be held.

- **Output**:
  - **Year**: Each year of the investment duration.
  - **Investment Value**: The value of the investment at the end of each year.
  - **Interest (Year)**: The interest earned in that particular year.
  - **Total Interest**: The cumulative interest earned up to that year.
  - **Invested Capital**: The total amount of money invested up to that year (initial investment plus annual investments).

## How It Works

1. **Input Parameters**: The user enters the initial investment, annual investment, expected return, and duration.
2. **Calculation**:
   - The application calculates the investment growth year by year.
   - The interest for each year is computed based on the expected return and the investment value at the beginning of the year.
   - The total interest is updated annually by adding the interest earned in that year.
   - The invested capital is updated annually by adding the annual investment to the previous year's invested capital.
3. **Display Results**: The results are displayed in a table format, with each row representing a year in the investment duration.

## Example

Suppose a user inputs the following:

- **Initial Investment**: $10,000
- **Annual Investment**: $5,000
- **Expected Return**: 7%
- **Duration**: 10 years

The application will generate a table with 10 rows, each representing the investment details for one year from the start to the end of the duration. The table will include the investment value at the end of each year, the interest earned each year, the total interest accumulated, and the total invested capital.

## Getting Started

1. Clone the repository: `git clone https://github.com/your-repository/investment-insights.git`
2. Navigate to the project directory: `cd investment-insights`
3. Install the dependencies: `npm install`
4. Run the application: `ng serve`
5. Open your browser and navigate to `http://localhost:4200`

## Conclusion

Investment Insights is a powerful yet simple tool for visualizing the growth of your investments. Whether you are planning for retirement, saving for a major purchase, or just curious about the potential of your investments, this application provides a clear and concise way to project future value based on your inputs.
