const ctx = document.getElementById("weightChart");
fetch("/api/weights")
  .then((response) => response.json())
  .then((userData) => {
    console.log(userData);
    const user = userData;
    const labels = user.weights.map((weightData) => weightData.recorded_at);
    const data = user.weights.map((weightData) => weightData.weight);
    console.log(data);
    console.log(labels);
    // Create the chart
    new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Weight Graph",
            data: data,
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  })
  .catch((error) => {
    console.error("Error fetching user weight data:", error);
  });
