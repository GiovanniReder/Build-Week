// l/obiettivo è quello di creare due arrayç uno per le risposte giuste
//e uno per le risposte sbagliate. nei data di chartData
//poi prenderò le length dei due arrai come dati

// const chartData = {
//   data: [62.5, 27.5]
// };

const labels1 = ["right", "wrong"];
let data1 = [27.5, 62.5];
const colors1 = ["#D20094", "#00FFFF"];
const doughnutLabel = {
  id: "doughnutLabel",
  beforeDataSetDraw(chart, args, pluginOptions) {
    const { ctx, data } = chart;
    ctx.save();
    const xCoor = chart.getDatasetMeta(0).data[0].x;
    const yCoor = chart.getDatasetMeta(0).data[0].y;
    ctx.font = "bold 30px sans-serif";
    ctx.fillStyle = "rgba(54, 162, 235, 1)";
    ctx.textAlign = "center";
    ctx.textBaseline = "center";
    ctx.fillText("congratulazioni", xCoor, yCoor);
  },
};

const myChart = document.querySelector(".my-chart");

let chart = new Chart(myChart, {
  type: "doughnut",
  data: {
    datasets: [
      {
        backgroundColor: colors1,
        data: data1,
        borderWidth: 0,
      },
    ],
    options: {},
    plugins: [doughnutLabel],
  },
});
