export const ConfigChart = {
  ChartConfig: {
        labels: [],
        datasets: [
          {
            data: [],
            tension: 0.1,
            fill: false,
            backgroundColor: [
              'rgb(255, 76, 5)',
              'rgb(255, 197, 5)',
              'rgb(190, 236, 22)',
              'rgb(22, 236, 225)',
              'rgb(22, 97, 236)',
             ],
            borderColor: "rgba(136,136,136,0.5)",
            label: "2021",
          },
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "Chart.js Line Chart",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              display: true,
              categoryPercentage: 0.5,
              scaleLabel: {
                display: true,
                labelString: "Month",
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Value",
              },
            },
          ],
        },
    }
}