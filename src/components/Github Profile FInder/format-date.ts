export function formatDate(dateString: string) {
  const date = new Date(dateString);

  // Specify the locale and options for the desired output
  const formattedDate = date.toLocaleDateString('en-US', {
    month: 'long', // Full name of the month
    year: 'numeric', // Numeric value of the year
  });

  return formattedDate;
}
