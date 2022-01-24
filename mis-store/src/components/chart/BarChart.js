import { Chart } from "react-google-charts";

function GoogleChart() {

    const data = [
        ["Year", "Sales", "Expenses"],
        ["2004", 1000, 400],
        ["2005", 1170, 460],
        ["2006", 660, 1120],
        ["2007", 1030, 540],
    ];

    const options = {
        title: "Company Performance",
        curveType: "function",
        legend: { position: "bottom" },
    };

    return (
        <div>
            <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />

            <Chart
                chartType="AreaChart"
                width="99%"
                height="400px"
                data={data}
                options={options}
            />

            <Chart
                chartType="Bar"
                width="90%"
                height="300px"
                data={data}
                options={options}
            />
        </div>
    );
}

export default GoogleChart;