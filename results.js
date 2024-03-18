// l/obiettivo è quello di creare due arrayç uno per le risposte giuste
//e uno per le risposte sbagliate. nei data di chartData
//poi prenderò le length dei due arrai come dati

const chartData = {
  data: [62.5, 27.5],
};

const myChart = document.querySelector(".my-chart");

new Chart(myChart, {
  type: "doughnut",
  data: {
    labels: chartData.labels,
    datasets: [
      {
        label: " answers",
        data: chartData.data,
      },
    ],
  },
});
