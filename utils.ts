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
