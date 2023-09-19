document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("weightChart").getContext("2d");

  // Sample weight data (replace with your actual data)
  const weightData = [
    { date: "2023-09-01", weight: 150 },
    { date: "2023-09-02", weight: 149 },
    { date: "2023-09-03", weight: 148 },
    // Add more data points as needed
  ];

  // Extract dates and weights from the data
  const dates = weightData.map((entry) => entry.date);
  const weights = weightData.map((entry) => entry.weight);

  // Create the chart
  const weightChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: dates,
      datasets: [
        {
          label: "Weight Tracker",
          data: weights,
          borderColor: "blue",
          backgroundColor: "rgba(0, 0, 255, 0.2)",
          borderWidth: 2,
          pointRadius: 4,
          pointBackgroundColor: "blue",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          type: "time",
          time: {
            unit: "day",
            displayFormats: {
              day: "MMM D",
            },
          },
        },
        y: {
          title: {
            display: true,
            text: "Weight (lbs)",
          },
        },
      },
    },
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("weightChart").getContext("2d");

  // Sample weight data (replace with your actual data)
  const weightData = [
    { date: "2023-09-01", weight: 150 },
    { date: "2023-09-02", weight: 149 },
    { date: "2023-09-03", weight: 148 },
    // Add more data points as needed
  ];

  // Extract dates and weights from the data
  const dates = weightData.map((entry) => entry.date);
  const weights = weightData.map((entry) => entry.weight);

  // Create the chart
  const weightChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: dates,
      datasets: [
        {
          label: "Weight Tracker",
          data: weights,
          borderColor: "blue",
          backgroundColor: "rgba(0, 0, 255, 0.2)",
          borderWidth: 2,
          pointRadius: 4,
          pointBackgroundColor: "blue",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          type: "time",
          time: {
            unit: "day",
            displayFormats: {
              day: "MMM D",
            },
          },
        },
        y: {
          title: {
            display: true,
            text: "Weight (lbs)",
          },
        },
      },
    },
  });
});
