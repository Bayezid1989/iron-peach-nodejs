import fs from "fs";

export const writeFile = (path: string, data: string) => {
  fs.writeFile(path, data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File has been created");
  });
};
