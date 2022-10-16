import React, { Component } from 'react'
import Chart from 'react-google-charts'
const sankeyData = [
  ['From', 'To', 'width'],
  ['NA', '', 5],
  ['APAC', 'Z', 1],
  ['EMEA', 'Y', 1],
  ['LATAM', 'X', 1],
]


class SankeyChart extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h2>React Simple Sankey Chart Example</h2>
        <Chart className='h6 font-weight-light'
          width={600}
          height={'500px'}
          chartType="Sankey"
          loader={<div>Loading Chart</div>}
          data={sankeyData}
          rootProps={{ 'data-testid': '100' }}
        />
      </div>
    )
  }
}
export default SankeyChart;