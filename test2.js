let trace1 = {
  x: [0, 2, 3, 4, 5],
  y: [1, 10, 15, 13, 17],
  type: 'scatter',
  name: 'Name of Trace 1',
  };
let trace2 = {
  x: [0, 2, 3, 4, 5],
  y: [0, 6, 11, 3, 7],
  type: 'scatter',
  name: 'Name of Trace 2',
  };
let layout ={
    title: {
    text:'Plot Title',
    font: {
    family: 'Times New Roman',
    size: 24
    },
    },
    xaxis: {
    title: {
    text: 'x Axis',
    font: {
    family: 'Courier New, monospace',
    size: 18,
    color: '#7f7f7f'
    }
    }
    },
    yaxis: {
    title: {
    text: 'y Axis',
    font: {
    family: 'Courier New, monospace',
    size: 18,
    color: '#7f7f7f'
    }
    }
    }
    }
let data = [trace1, trace2];
Plotly.newPlot('myDiv', data, layout);