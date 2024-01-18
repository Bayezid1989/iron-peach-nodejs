import fs from "fs";
import axios from "axios";

require("dotenv").config();

export const writeStringFile = (path: string, data: string) => {
  fs.writeFile(path, data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File has been created");
  });
};

// Canal Cruise Company --> canalCruiseCompany
export const convertToCamelCase = (str: string, lower1st = true) => {
  return str
    .split(" ")
    .map((word, i) => {
      if (lower1st && i === 0) return word.toLowerCase();
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
};

export const getCoordinates = (placeName: string) => {
  const params = {
    access_key: process.env.POSITIONSTACK_API_KEY,
    query: placeName,
  };

  axios
    .get("http://api.positionstack.com/v1/forward", { params })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.response.data);
    });
};
