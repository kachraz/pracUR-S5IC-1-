/*
Results component - 
1. Where the calculations from input from Usin.jsx will be calculated using inso.js and output below the table
*/

import { calInvRes, forma } from "../util/inso.js";

export default function Resu({ input }) {
  const resultsData = calInvRes(input);
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  console.log(resultsData);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>InvetmentValue</th>
          <th>Interest(year)</th>
          <th>TotalInterest</th>
          <th>InvestedCapital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yD) => {
          const totalInterest =
            yD.valueEndOfYear -
            yD.annualInvestment * yD.year -
            initialInvestment;

          const totalAmountInvested = yD.valueEndOfYear - totalInterest;
          return (
            <tr key={yD.year}>
              <td>{yD.year}</td>
              <td>{forma.format(yD.valueEndOfYear)}</td>
              <td>{forma.format(yD.interest)}</td>
              <td>{forma.format(totalInterest)}</td>
              <td>{forma.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
