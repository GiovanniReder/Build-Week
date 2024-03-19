// l/obiettivo è quello di creare due arrayç uno per le risposte giuste
//e uno per le risposte sbagliate. nei data di chartData
//poi prenderò le length dei due arrai come dati

// const chartData = {
//   data: [62.5, 27.5]
// };

const labels1 = ["right", "wrong"];
let data1 = [27.5, 62.5];
const colors1 = ["#D20094", "#00FFFF"];

// const ShadowPlugin = {
//     beforeDraw: (chart, args, options) => {
//       const { myChart } = chart;
//       myChart.shadowColor = "rgba(0, 0, 0, 0.5)";
//       myChart.shadowBlur = 10;
//       myChart.shadowOffsetX = 5;
//       myChart.shadowOffsetY = 5;
//     },
//   };

const myChart = document.querySelector(".my-chart");

let chart = new Chart(myChart, {
  type: "doughnut",
  data: {
    datasets: [
      {
        backgroundColor: colors1,
        data: data1,
        borderWidth: 0,
        cutout: 135,
      },
    ],
    // options: {},
    // plugins: [ShadowPlugin],
  },
});
