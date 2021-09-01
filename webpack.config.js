const path = require("path");

module.exports = {
  entry: "./assets/js/script.js",
  output: {
    path: path.resolve(__dirname, "dis"),
    filename: "main.bundle.js",
  },
  mode: development,
};
