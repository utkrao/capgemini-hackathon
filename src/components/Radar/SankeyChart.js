import React, { Component } from 'react'
import Chart from 'react-google-charts'
const sankeyData = [
  ['From', 'To', 'link'],
  ['NA', '', 5],
  ['APAC', 'h1', 1],
  ['APAC', 'h1', 0],
  ['APAC', 'h1', 0],
  ['APAC', 'h1', 0],
  ['APAC', 'h1', 0],
  ['APAC', 'h1', 0],
  ['APAC', 'h1', 0],
  ['APAC', 'h1', 0],
  ['EMEA', 'h2', 1],
  ['EMEA', 'h2', 0],
  ['EMEA', 'h2', 0],
  ['EMEA', 'h2', 0],
  ['EMEA', 'h2', 0],
  ['EMEA', 'h2', 0],
  ['EMEA', 'h2', 0],
  ['EMEA', 'h2', 0],
  ['LATAM', 'h3', 1],
  ['LATAM', 'h3', 0],
  ['LATAM', 'h3', 0],
  ['LATAM', 'h3', 0],
  ['LATAM', 'h3', 0],
  ['LATAM', 'h3', 0],
  ['LATAM', 'h3', 0],
  ['LATAM', 'h3', 0],
  ['LATAM', 'h3', 0],
  ['LATAM', 'h3', 0],
]


  class SankeyChart extends Component {
    render() {
      return (
        <div className="container mt-2">
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