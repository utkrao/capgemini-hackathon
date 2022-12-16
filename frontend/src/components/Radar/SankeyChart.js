import React, { Component } from 'react'
import Chart from 'react-google-charts'
const sankeyData = [
  ['From', 'To', 'link'],
  // ['NA', 'h1', 1],
  // ['EMEA', 'h2', 1],
       [ '01', '', 0 ],
       [ '02', '', 0 ],
       [ '03', '', 0 ],
       [ '04', '', 0 ],
       [ '05', '', 0 ],
       [ '06', '', 0 ],
       [ '07', '', 0 ],
       [ '08', '', 0 ],
       [ '09', '', 0 ],
       [ '10', '', 0 ],
       [ '11', '', 0 ],
       [ '12', '', 0 ],
       [ '14', '', 0 ],
       [ '15', '', 0 ],
       [ '16', '', 0 ],
       [ '17', '', 0 ],
       [ '13', 'NA', 5 ],
       [ '13', 'LATAM', 1 ],
       [ '13', 'APAC', 1 ],
       [ '13', 'EMEA', 1 ],
       [ '13', 'NA', 1 ],
       [ '13', 'LATAM', 5 ],
       [ '13', 'EMEA', 1 ],
       [ '13', 'NA', 1 ],
       [ '13', 'LATAM', 1 ],
       [ '13', 'APAC', 5 ],
       [ '13', 'EMEA', 1 ],
       [ '13', 'NA', 1 ],
       [ '13', 'LATAM', 1 ],
       [ '13', 'APAC', 1 ],
       [ '13', 'EMEA', 5 ],
       [ 'NA', 'AI', 2 ],
       [ 'NA', 'AI', 1 ],
       [ 'NA', 'AI', 1 ],
       [ 'NA', 'AI', 3 ],
       [ 'LATAM', 'AI', 1 ],
       [ 'LATAM', 'AI', 3 ],
       [ 'LATAM', 'AI', 3 ],
       [ 'LATAM', 'AI', 3 ],
       [ 'LATAM', 'AI', 1 ],
       [ 'APAC', 'AI', 1 ],
       [ 'APAC', 'AI', 3 ],
       [ 'APAC', 'AI', 1 ],
       [ 'EMEA', 'AI', 1 ],
       [ 'EMEA', 'AI', 1 ],
       [ 'EMEA', 'AI', 2 ],
       [ 'EMEA', 'AI', 7 ],
       [ 'AI', 'H1', 5 ],
       [ 'AI', 'H3', 1 ],
       [ 'AI', 'H2', 3 ],
       [ 'AI', 'H1', 5 ],
       [ 'AI', 'H3', 1 ],
       [ 'AI', 'H2', 3 ],
       [ 'AI', 'H1', 5 ],
       [ 'AI', 'H3', 1 ],
       [ 'AI', 'H2', 3 ],
       [ 'AI', 'H1', 5 ],
       [ 'AI', 'H3', 1 ],
       [ 'AI', 'H2', 3 ],
       [ 'AI', 'H1', 5 ],
       [ 'AI', 'H3', 1 ],
       [ 'AI', 'H2', 3 ]
]


  class SankeyChart extends Component {
    render() {
      return (
        <div className="container mt-2">
          <Chart className='h6 font-weight-light'
            width={700}
            height={'700px'}
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