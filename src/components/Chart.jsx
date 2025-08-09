import ReactECharts from 'echarts-for-react'

export default function Chart({ chartData }) {
  if (!chartData) return null
  const option = {
    tooltip: {},
    xAxis: { type: 'category', data: chartData.labels },
    yAxis: { type: 'value' },
    series: chartData.datasets.map(ds => ({ ...ds, type: chartData.type || 'bar' }))
  }
  return (
    <div className="bg-white shadow rounded p-4 w-full mb-4">
      <ReactECharts option={option} style={{ height: 320 }} />
    </div>
  )
}