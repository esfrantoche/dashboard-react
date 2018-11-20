// ##############################
// // // general variables for reports
// #############################
let timeTPTS = ["00:08:04", "00:04:00", "00:31:05", "00:14:28", "00:10:01", "00:04:00", "00:31:04", "00:14:28", "00:08:07", "00:04:00", "00:31:05"];
let timeTPTSSeconds = timeTPTS.map(function(x) {
  let secondsVal = parseInt(x.substring(6,8));
  let minutesVal = parseInt(x.substring(3,5)) * 60;
  let hoursVal = parseInt(x.substring(0,2)) * 60 * 60;
  return secondsVal + minutesVal + hoursVal;
});

let timetpa = ["00:04:02", "00:02:00", "00:15:32", "00:07:14", "00:04:02", "00:02:00", "00:15:32", "00:07:14", "00:04:02", "00:02:00", "00:15:32"];
let timetpaSeconds = timetpa.map(function(x) {
  let secondsVal = parseInt(x.substring(6,8));
  let minutesVal = parseInt(x.substring(3,5)) * 60;
  let hoursVal = parseInt(x.substring(0,2)) * 60 * 60;
  return secondsVal + minutesVal + hoursVal;
});

let timetpc = ["00:04:02", "00:02:00", "00:15:32", "00:07:14", "00:04:02", "00:02:00", "00:15:32", "00:07:14", "00:04:02", "00:02:00", "00:15:32"];
let timetpcSeconds = timetpc.map(function(x) {
  let secondsVal = parseInt(x.substring(6,8));
  let minutesVal = parseInt(x.substring(3,5)) * 60;
  let hoursVal = parseInt(x.substring(0,2)) * 60 * 60;
  return (secondsVal + minutesVal + hoursVal)*2;
});

const chartsPrincipal1 = {
  data :  {
  // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Tiempo promedio total en suc.',
      type:'line',
      lineTension: 0.1,
      data: timeTPTSSeconds,
      fill: false,
      borderColor: '#8064a2',
      backgroundColor: '#8064a2',
      pointBorderColor: '#8064a2',
      pointBackgroundColor: '#8064a2',
      pointHoverBackgroundColor: '#8064a2',
      pointHoverBorderColor: '#8064a2',
      yAxisID: 'y-axis-1'
    },{
      type: 'bar',
      label: 'Tiempo Promedio en Cola',
      data: timetpaSeconds,
      fill: true,
      backgroundColor: '#f79646',
      borderColor: '#f79646',
      hoverBackgroundColor: '#f79646',
      hoverBorderColor: '#f79646',
      yAxisID: 'y-axis-1'
    },{
      type: 'bar',
      label: 'Tiempo Promedio de atencion',
      data: timetpcSeconds,
      fill: true,
      backgroundColor: '#4bacc6',
      borderColor: '#4bacc6',
      hoverBackgroundColor: '#4bacc6',
      hoverBorderColor: '#4bacc6',
      yAxisID: 'y-axis-1'
    }]
  },
  options : {
      responsive: true,
      labels: ['Aguilares', 'Ahuachapan', 'Alameda Roosevelt', 'Apopa', 'Bernal', 'Calavarena', 'Centroamerica', 'Chalatenango', 'Ciudad Barrios', 'Cojutepeque', 'Diagonal Universitaria'],
      tooltips: {
        mode: 'label'
      },
      elements: {
        line: {
          fill: false
        }
      },
      scales: {
        xAxes: [{
            display: true,
            stacked: true,
            gridLines: {
              display: true
            },
            labels: ['Aguilares', 'Ahuachapan', 'Alameda Roosevelt', 'Apopa', 'Bernal', 'Calavarena', 'Centroamerica', 'Chalatenango', 'Ciudad Barrios', 'Cojutepeque', 'Diagonal Universitaria'],
            ticks: {
              stepSize: 1,
              min: 0,
              autoSkip: false
            }
          }],
        yAxes: [{
          type: 'time',
          display: true,
          position: 'left',
          id: 'y-axis-1',
          gridLines: {
            display: false
          },
          labels: {
            show: true
          }
        },
        {
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-1',
          gridLines: {
            display: false
          },
          labels: {
            show: true
          }
        },
        {
          type: 'linear',
          display: true,
          position: 'right',
          id: 'y-axis-2',
          gridLines: {
            display: false
          },
          labels: {
            show: true
          }
        }]
      }
    },
    plugins : [{
      afterDraw: (chartInstance, easing) => {
        const ctx = chartInstance.chart.ctx;
        ctx.fillText("", 100, 100);
      }
    }]
};

/*const chartsPrincipal1 = {
  type: 'line',
  data: {
    labels: ['Aguilares', 'Ahuachapan', 'Alameda Roosevelt', 'Apopa', 'Bernal', 'Calavarena', 'Centroamerica', 'Chalatenango', 'Ciudad Barrios', 'Cojutepeque', 'Diagonal Universitaria'],
    datasets: [{
      label: 'Tiempo promedio total en suc.',
      type:'line',
      lineTension: 0.1,
      fill: false,
      data: timeTPTS,
      borderColor: '#8064a2',
      backgroundColor: '#8064a2',
      pointBorderColor: '#8064a2',
      pointBackgroundColor: '#8064a2',
      pointHoverBackgroundColor: '#8064a2',
      pointHoverBorderColor: '#8064a2'
    }]
  },
  options: {
    scales: {
      xAxes: [{
        display: true,
        stacked: true,
        gridLines: {
          display: true
        }
      }],
      yAxes: [{
        type: 'time',
        time: {
          parser: 'hh:mm:ss',
          unit: 'seconds',
          unitStepSize: 100,
          min: '00:10:00',
          max: '00:10:00',
          displayFormats: {
            'seconds': 'hh:mm:ss'
          }
        }
      }]
    }
  }
};*/

const chartsPrincipal2 = {
  data :  {
  // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Tiempo promedio total en suc.',
      type:'line',
      lineTension: 0.1,
      data: [28, 15, 28, 20, 15, 20, 28, 24, 10, 2, 15],
      fill: false,
      borderColor: '#f79646',
      backgroundColor: '#f79646',
      pointBorderColor: '#f79646',
      pointBackgroundColor: '#f79646',
      pointHoverBackgroundColor: '#f79646',
      pointHoverBorderColor: '#f79646',
      yAxisID: 'y-axis-1'
    },{
      type: 'bar',
      label: 'Tiempo Promedio en Cola',
      data: [3, 0, 1, 8, 0, 1, 7, 2, 0, 0, 0],
      fill: true,
      backgroundColor: '#8064a2',
      borderColor: '#8064a2',
      hoverBackgroundColor: '#8064a2',
      hoverBorderColor: '#8064a2',
      yAxisID: 'y-axis-1'
    },{
      type: 'bar',
      label: 'Tiempo Promedio de atencion',
      data: [28, 15, 28, 20, 15, 20, 28, 24, 10, 2, 15],
      fill: true,
      backgroundColor: '#c0504d',
      borderColor: '#c0504d',
      hoverBackgroundColor: '#c0504d',
      hoverBorderColor: '#c0504d',
      yAxisID: 'y-axis-1'
    }]
  },
  options : {
      responsive: true,
      labels: ['Aguilares', 'Ahuachapan', 'Alameda Roosevelt', 'Apopa', 'Bernal', 'Calavarena', 'Centroamerica', 'Chalatenango', 'Ciudad Barrios', 'Cojutepeque', 'Diagonal Universitaria'],
      tooltips: {
        mode: 'label'
      },
      elements: {
        line: {
          fill: false
        }
      },
      scales: {
        xAxes: [{
            display: true,
            stacked: true,
            gridLines: {
              display: true
            },
            labels: ['Aguilares', 'Ahuachapan', 'Alameda Roosevelt', 'Apopa', 'Bernal', 'Calavarena', 'Centroamerica', 'Chalatenango', 'Ciudad Barrios', 'Cojutepeque', 'Diagonal Universitaria'],
            ticks: {
              stepSize: 1,
              min: 0,
              autoSkip: false
            }
          }],
        yAxes: [{
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-1',
          gridLines: {
            display: false
          },
          labels: {
            show: true
          }
        },
        {
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-1',
          gridLines: {
            display: false
          },
          labels: {
            show: true
          }
        },
        {
          type: 'linear',
          display: true,
          position: 'right',
          id: 'y-axis-2',
          gridLines: {
            display: false
          },
          labels: {
            show: true
          }
        }]
      }
    },
    plugins : [{
      afterDraw: (chartInstance, easing) => {
        const ctx = chartInstance.chart.ctx;
        ctx.fillText("", 100, 100);
      }
    }]
};

const chartsPrincipal3 = {
  data :  {
  // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Tiempo de ciclo',
      type:'line',
      lineTension: 0.1,
      data: [28, 15, 28, 20, 15, 20, 28, 24, 10, 2, 15],
      fill: false,
      borderColor: '#c0504d',
      backgroundColor: '#c0504d',
      pointBorderColor: '#c0504d',
      pointBackgroundColor: '#c0504d',
      pointHoverBackgroundColor: '#c0504d',
      pointHoverBorderColor: '#c0504d',
      yAxisID: 'y-axis-1'
    },{
      type: 'line',
      lineTension: 0.1,
      label: 'Tiempo total de transaccion',
      data: [3, 0, 1, 8, 0, 1, 7, 2, 0, 0, 0],
      fill: false,
      backgroundColor: '#4f81bd',
      borderColor: '#4f81bd',
      hoverBackgroundColor: '#4f81bd',
      hoverBorderColor: '#4f81bd',
      yAxisID: 'y-axis-1'
    },{
      type: 'bar',
      label: 'Cantidad de clientes en cola',
      barThickness: 'flex',
      categoryPercentage: 0.1,
      data: [28, 15, 28, 20, 15, 20, 28, 24, 10, 2, 15],
      fill: true,
      backgroundColor: '#9bbb59',
      borderColor: '#9bbb59',
      hoverBackgroundColor: '#9bbb59',
      hoverBorderColor: '#9bbb59',
      yAxisID: 'y-axis-1'
    }]
  },
  options : {
      responsive: true,
      labels: ['Aguilares', 'Ahuachapan', 'Alameda Roosevelt', 'Apopa', 'Bernal', 'Calavarena', 'Centroamerica', 'Chalatenango', 'Ciudad Barrios', 'Cojutepeque', 'Diagonal Universitaria'],
      tooltips: {
        mode: 'label'
      },
      elements: {
        line: {
          fill: false
        }
      },
      scales: {
        xAxes: [{
            display: true,
            stacked: true,
            gridLines: {
              display: true
            },
            labels: ['Aguilares', 'Ahuachapan', 'Alameda Roosevelt', 'Apopa', 'Bernal', 'Calavarena', 'Centroamerica', 'Chalatenango', 'Ciudad Barrios', 'Cojutepeque', 'Diagonal Universitaria'],
          }],
        yAxes: [{
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-1',
          gridLines: {
            display: false
          },
          labels: {
            show: true
          }
        },
        {
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-1',
          gridLines: {
            display: false
          },
          labels: {
            show: true
          }
        },
        {
          type: 'linear',
          display: true,
          position: 'right',
          id: 'y-axis-2',
          gridLines: {
            display: false
          },
          labels: {
            show: true
          }
        }]
      }
    },
    plugins : [{
      afterDraw: (chartInstance, easing) => {
        const ctx = chartInstance.chart.ctx;
        ctx.fillText("", 100, 100);
      }
    }]
};

module.exports = {
  chartsPrincipal1,
  chartsPrincipal2,
  chartsPrincipal3
};
