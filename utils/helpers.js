module.exports = {
  formatDate: (date) => {
const recordedAtDate = new Date(date);

// Extracts month, day, and last two digits of the year
const month = recordedAtDate.getMonth() + 1; // Adding 1 because getMonth() is zero-based
const day = recordedAtDate.getDate();
const yearLastTwoDigits = recordedAtDate.getFullYear().toString().slice(-2);

// Format the date as "month/day/last 2 of year"
const formattedDate = `${month}/${day}/${yearLastTwoDigits}`;

return formattedDate
  },
};
