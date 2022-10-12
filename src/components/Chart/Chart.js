import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
    //Extracting the value from the objects
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    //max requires arguments to find the max not an array
    //Converting an array into 12 arguments
    const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
