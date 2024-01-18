import fs from "fs";

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
