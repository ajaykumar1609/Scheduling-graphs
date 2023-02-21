# Scheduling Graph

Scheduling Graph is a web application that displays a graph of the number of schedules created over time, as well as the details of the schedules created on a particular day.

## Getting Started

### Prerequisites

To run this application, you will need to have Node.js and npm installed on your system.

### Installing

1. Clone the repository to your local machine. ---> 
git clone https://github.com/your-username/scheduling-graphs.git

2. Navigate to the project directory. --->
cd scheduling-graph

3. Install the dependencies. --->
npm install

### Running

To start the development server, run the following command: --->
npm start

The application will be available at `http://localhost:3000`.

### Building

To create a production build of the application, run the following command. --->
npm run build


The production build will be created in the `build` directory.

## Usage

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
