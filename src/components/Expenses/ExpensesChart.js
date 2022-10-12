import Chart from "../Chart/Chart";

function ExpensesChart (props){

    const ChartDataPoints = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'June', value: 0},
        {label: 'July', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0}
    ];

    for(const expense of props.expenses){
        const expensesMonth = expense.date.getMonth(); //Starting at 0 => jan
        ChartDataPoints[expensesMonth].value += expense.amount;
    }

    return (
        <Chart dataPoints={ChartDataPoints}/>
    );
}

export default ExpensesChart;