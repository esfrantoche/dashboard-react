// ##############################
// // // general variables for charts
// #############################

const chartColor = "#FFFFFF";

// General configuration for the charts with Line gradientStroke
const gradientChartOptionsConfiguration = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  tooltips: {
    bodySpacing: 4,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
    xPadding: 10,
    yPadding: 10,
    caretPadding: 10
  },
  responsive: 1,
  scales: {
    yAxes: [
      {
        display: 0,
        ticks: {
          display: false
        },
        gridLines: {
          zeroLineColor: "transparent",
          drawTicks: false,
          display: false,
          drawBorder: false
        }
      }
    ],
    xAxes: [
      {
        display: 0,
        ticks: {
          display: false
        },
        gridLines: {
          zeroLineColor: "transparent",
          drawTicks: false,
          display: false,
          drawBorder: false
        }
      }
    ]
  },
  layout: {
    padding: { left: 0, right: 0, top: 15, bottom: 15 }
  }
};

var gradientChartOptionsConfigurationWithNumbersAndGrid = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  tooltips: {
    bodySpacing: 4,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
    xPadding: 10,
    yPadding: 10,
    caretPadding: 10
  },
  responsive: 1,
  scales: {
    yAxes: [
      {
        gridLines: {
          zeroLineColor: "transparent",
          drawBorder: false
        }
      }
    ],
    xAxes: [
      {
        display: 0,
        ticks: {
          display: false
        },
        gridLines: {
          zeroLineColor: "transparent",
          drawTicks: false,
          display: false,
          drawBorder: false
        }
      }
    ]
  },
  layout: {
    padding: { left: 0, right: 0, top: 15, bottom: 15 }
  }
};

const chartsPrincipal1 = {
  data :  {
  // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Tiempo promedio total en suc.',
      type:'line',
      lineTension: 0.1,
      data: [8, 3, 31, 14, 10, 4, 30, 14, 8, 4, 31],
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
      data: [3, 2, 15, 7, 4, 2, 15, 7, 4, 2, 15],
      fill: true,
      backgroundColor: '#f79646',
      borderColor: '#f79646',
      hoverBackgroundColor: '#f79646',
      hoverBorderColor: '#f79646',
      yAxisID: 'y-axis-1'
    },{
      type: 'bar',
      label: 'Tiempo Promedio de atencion',
      data: [8, 3, 31, 14, 10, 4, 30, 14, 8, 4, 31],
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
