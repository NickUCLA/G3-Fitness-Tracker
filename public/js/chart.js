
const ctx = document.getElementById("weightChart");
fetch("/api/weights")
  .then((response) => response.json())
  .then((userData) => {
    console.log(userData);

    const goal = userData[0].user.goalWeight
    const labels = userData.map((weightData) => formatDate(weightData.recorded_at));
    const data = userData.map((weightData) => weightData.weight);

    console.log(goal)
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
          "responsive": true,
          "maintainAspectRatio": false,
        scales: {
          y: {
            min: goal, // Set the minimum to target weight var
          },
        },
      },
    });
  })
  .catch((error) => {
    console.error("Error fetching user weight data:", error);
  });

  function formatDate(date) {
    const recordedAtDate = new Date(date);
    
    // Extracts month, day, and last two digits of the year
    const month = recordedAtDate.getMonth() + 1; // Adding 1 because getMonth() is zero-based
    const day = recordedAtDate.getDate();
    const yearLastTwoDigits = recordedAtDate.getFullYear().toString().slice(-2);
    
    // Format the date as "month/day/last 2 of year"
    const formattedDate = `${month}/${day}/${yearLastTwoDigits}`;
    
    return formattedDate
  }

  