document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("weightChart").getContext("2d");

  let weightData = []; // Array to store weight data

  // Create an initial chart with no data
  const weightChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Weight Tracker",
          data: [],
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

  // Function to add data
  function addData() {
    const weightInput = document.getElementById("weightInput");
    const weight = parseFloat(weightInput.value);

    if (!isNaN(weight)) {
      // Get the current date
      const currentDate = new Date();

      // Add data to the arrays
      weightData.push({ date: currentDate, weight: weight });

      // Update the chart
      weightChart.data.labels.push(currentDate.toLocaleDateString());
      weightChart.data.datasets[0].data.push(weight);
      weightChart.update();

      // Clear the input field
      weightInput.value = "";
    }
  }

  // Add an event listener to the "Add Data" button
  const addButton = document.querySelector("button");
  addButton.addEventListener("click", addData);
});
