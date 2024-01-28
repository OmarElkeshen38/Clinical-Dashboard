import Chart from "react-apexcharts";
import './MonthlySalesReport.css'
const MonthlySalesReport = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const options = {
        chart: {
            type: 'area',
            height: 200,
            zoom:false
        },
        tooltip: {
            custom: function ({ series, seriesIndex, dataPointIndex }) {
                return `<div className="apexcharts-tooltip">
                    <p>Total Customers </p>
                    <span>  ${series[seriesIndex][dataPointIndex]}  </span> 
                    </div> `
            }
        },
        xaxis: {
            categories: months
        },
        colors: ["#006AFF", "#1F7DFF00"],
        grid: {
            show: true,
            borderColor: '#e0e0e0',
            strokeDashArray: 5,
            strokeOpacity: 1,
            row: 1,
            column: 1,
            position: 'back',
        },
        dataLabels: {
            enabled: false
        },
    }
    const series = [
        {
            name: "Total Customers",
            data: [125, 200, 125, 200, 110, 115, 90]
        }
    ]

    return (
        <Chart
            className="my-4"
            options={options}
            series={series}
            type="area"
            height={200}
            width={"100%"} />
    );
}

export default MonthlySalesReport
