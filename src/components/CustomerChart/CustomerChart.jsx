import Chart from "react-apexcharts";

const CustomerChart = () => {
    const series = [{
        name: 'Last Month',
        data: [31, 40, 28, 51, 42, 109, 100]
    }, {
        name: 'This Month',
        data: [11, 32, 45, 32, 34, 52, 41]
    }]
    const options = {
        grid: {
            show: false
        },
        chart: {
            toolbar: {
                show: false
            },
            height: 350,
            type: 'area'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            labels: {
                formatter: (val) => {
                    return ''
                }
            }
        },
        yaxis: {
            labels: {
                formatter: (val) => {
                    return ''
                }
            }
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },

    };

    return (
        <Chart
            options={options}
            series={series}
            type="area"
            width={'100%'}
            height={260}
        />
    )
}

export default CustomerChart

