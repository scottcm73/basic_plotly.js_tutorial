
trace1 = {
  x: [0, 2, 3, 4, 5],
  y: [1, 10, 15, 13, 17],
  type: 'scatter',
  name: 'Name of Trace 1',
  };
trace2 = {
  x: [0, 2, 3, 4, 5],
  y: [0, 6, 11, 3, 7],
  type: 'scatter',
  name: 'Name of Trace 2',

  };

trace3 = {
  x: [0, 1, 2, 3, 4],
  y: [0, 6, 5, 3, 10],
  type: 'scatter',
  name: 'Name of Trace 3',
  };


layout ={
    title: {
    text:'Plot Title',
    font: {
    family: 'Times New Roman',
    size: 24
    },
    },
    xaxis: {
    range: [0, 6],
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
    range: [-1, 18],
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
data = [trace1];
Plotly.newPlot('myDiv', data, layout)



function findplot(){
    let eID = document.getElementById("plotselect");
    let plotVal = eID.options[eID.selectedIndex].value;

    
    let X=0;
    if (plotVal==="trace1"){
            data=[trace1];
            X=1;
            } 
    else if (plotVal==="trace2")
            {
            data=[trace2];
            X=3;
            }
    else if (plotVal==="trace3"){
            data=[trace3];
            X=4;
            }
    else{
        data=[trace1, trace2, trace3];
            X=5;
            };
            
    console.log(X)  
  
    Plotly.react('myDiv', data, layout);
    };