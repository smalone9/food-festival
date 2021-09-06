dateConverter = function (UNIX_timestamp) {
  const a = new Date(UNIX_timestamp);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  const result = month + " " + date + ", " + year;
  return result;
};

// First image is hard coded in index.html
const carouselSlides = [
  {
    title: "We travel all over the US",
    subtitle: "Check out our schedule!",
    img: "./assets/img/food-table.jpg",
    btnText: "View Schedule",
    btnUrl: "schedule.html",
  },
  {
    title: "Our food is seriously the bomb!",
    subtitle: "What are you waiting for?",
    img: "./assets/img/grill.jpg",
    btnText: "Purchase Tickets",
    btnUrl: "tickets.html",
  },
];

module.exports = {
  dateConverter,
  createLoremIpsum,
};
