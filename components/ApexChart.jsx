import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import ReactApexChart with SSR disabled
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        data: [
          { x: new Date().getTime() - 10000, y: 40 },
          { x: new Date().getTime() - 5000, y: 45 },
          { x: new Date().getTime(), y: 42 },
        ]
      }],
      options: {
        height: 70,
        chart: {
          type: 'line',
          height: 70,
          animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
              speed: 1000
            }
          },
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          },
          width: '100%',
          height: '100%',
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
          width: 2,
          colors: [],
        },
        title: {
          text: ' ',
        },
        markers: {
          size: 0,
        },
        xaxis: {
          show: false,
          type: 'datetime',
          range: 10000,
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
        },
        legend: {
          show: false
        },

        tooltip: {
          enabled: false,
        },
        grid: {
          show: false,
        },
      },
    };
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.interval = window.setInterval(() => {
        this.getNewSeries();
        ApexCharts.exec('realtime', 'updateSeries', [this.state.series]);
      }, 1000);
    }
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  getNewSeries = () => {
    const newDate = new Date().getTime();
    const newData = {
      x: newDate,
      y: Math.floor(Math.random() * (50 - 10 + 1)) + 10
    };

    this.setState(prevState => ({
      series: [{
        data: [...prevState.series[0].data, newData]
      }]
    }));
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart
            options={{
              ...this.state.options,
              stroke: {
                ...this.state.options.stroke,
                colors: [this.props.strokeColor],
              },
            }}
            series={this.state.series}
            type="line" />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default ApexChart;
