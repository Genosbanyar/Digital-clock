function updateTime() {
  let date = new Date();
  let hr;

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Sepemter",
    "October",
    "November",
    "December",
  ];
  let weeks = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thusday",
    "Friday",
    "Satesday",
  ];

  //not calculate
  let ncH = date.getHours();
  let ncM = date.getMinutes();
  let ncS = date.getSeconds();
  let nc_day = date.getDate();

  //Hours
  if (ncH > 12) {
    hr = ncH - 12;
    if (hr < 10) {
      let real = ncH - 12;
      hr = "0" + real;
    }
  } else if (ncH === 0) {
    hr = 12;
  } else if (ncH < 23) {
    hr = ncH;
  }
  //Am or Pm
  let AmOrPm = ncH >= 12 ? "PM" : "AM";
  let min = ncM < 10 ? "0" + ncM : ncM;
  //Seconds
  let sec = ncS < 10 ? "0" + ncS : ncS;
  //day
  let day = nc_day < 10 ? "0" + nc_day : nc_day;
  //month
  let month = months[date.getMonth()];
  //year
  let year = date.getFullYear();
  //Weeks
  let week = weeks[date.getDay()];

  document.querySelector(
    ".hms"
  ).innerHTML = `<p>${hr} : ${min} : ${sec}<span>${AmOrPm}</span></p>`;
  document.querySelector(
    ".dmy"
  ).innerHTML = `<p>${day} /${month} /${year} ${week}</p>`;
}

setInterval(updateTime, 1000);
