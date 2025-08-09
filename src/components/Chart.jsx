import ReactECharts from "echarts-for-react";

export default function Chart({ chartData }) {
  if (!chartData) return null;

  const option = {
    tooltip: {
      trigger: "axis",
      confine: true,
    },
    grid: {
      left: "10%",
      right: "10%",
      bottom: "15%",
      top: "10%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: chartData.labels,
      axisLabel: {
        rotate: window.innerWidth < 640 ? 45 : 0,
        interval: 0,
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: function (value) {
          return value > 1000 ? (value / 1000).toFixed(1) + "k" : value;
        },
      },
    },
    series: chartData.datasets.map((ds) => ({
      ...ds,
      type: chartData.type || "bar",
    })),
  };

  return (
    <div className="bg-white shadow-sm rounded-lg p-4 border border-gray-200 w-full">
      <ReactECharts
        option={option}
        style={{
          height: window.innerWidth < 640 ? "250px" : "320px",
          width: "100%",
        }}
        opts={{ renderer: "canvas" }}
      />
    </div>
  );
}
