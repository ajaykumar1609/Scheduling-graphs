# Schedule Graph App

This is a React app that displays a bar graph of scheduled appointments and allows users to select a specific date to view a table of appointment details for that date. The app is built with React, Recharts, and date-fns.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Installation

1. Clone the repository: `git clone https://github.com/your-username/schedule-graph-app.git`
2. Install the dependencies: `cd schedule-graph-app && npm install`

## Usage

1. Run the app: `npm start`
2. Open the app in a web browser: `http://localhost:3000`

## Contributing

Contributions are welcome! Please create a pull request with your changes.

### Selecting a Date

To view the schedules created on a particular date, use the date selector in the top right corner of the page. Click on a date in the calendar to view the schedules created on that date.

### Viewing the Graph

The graph shows the number of schedules created over time. Hover over a point on the graph to view the exact number of schedules created at that time.

### Viewing the Schedule Details

To view the details of the schedules created on a particular date, click on the bar in the graph that represents that date. The details will be displayed in a table below the graph.

## Built With

* [React](https://reactjs.org/) - The web framework used
* [Recharts](http://recharts.org/en-US/) - The charting library used
* [date-fns](https://date-fns.org/) - The date utility library used
