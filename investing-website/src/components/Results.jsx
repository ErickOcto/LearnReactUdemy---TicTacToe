import { calculateInvestmentResults } from "../util/investment"
import { formatter } from "../util/investment";

export default function Results({input}) {

const results = calculateInvestmentResults(input);

const initialInvestment =
  results[0].valueEndOfYear - 
  results[0].interest - 
  results[0].annualInvestment;

console.log(results[0].valueEndOfYear);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, index) => 
        {
        const totalInterest =
          result.valueEndOfYear -
          result.annualInvestment * result.year -
          initialInvestment;
        return (
          <tr key={index}>
            <th>{result.year}</th>
            <th>{formatter.format(result.valueEndOfYear)}</th>
            <th>{formatter.format(result.interest)}</th>
            <th>{formatter.format(totalInterest)}</th>
            <th>{formatter.format(result.annualInvestment)}</th>
          </tr>
        );})}
      </tbody>
    </table>
  );
}
