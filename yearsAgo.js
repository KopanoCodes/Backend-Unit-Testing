export default function yearsAgo(year) {
    let currentYear = new Date().getFullYear();
    var yearsDifference = currentYear - year;
    return yearsDifference;
  }
  console.log(yearsAgo(2000)); 