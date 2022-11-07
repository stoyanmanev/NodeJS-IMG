const fs = require("fs");
const axios = require("axios");

const download = async function (uri, filename, callback) {
  axios({
    method: "get",
    url: uri,
    responseType: "stream",
  }).then(function (response) {
    response.data.pipe(fs.createWriteStream(filename)).on("close", callback);
  });
};


download(
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Google_2011_logo.png/800px-Google_2011_logo.png",
  "google.png",
  function () {
    console.log("done");
  }
);
