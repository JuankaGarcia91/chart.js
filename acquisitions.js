const ctx = document.getElementById('acquisitions');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
      datasets: [{
        label: 'Indice: alza de valor',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 0
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });