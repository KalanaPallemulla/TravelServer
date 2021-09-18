import Women from "../models/Women";
import fs from "fs";

export const addService = async (req, res) => {
  //   console.log(req.fields);
  //   console.log("req.files", req.files);
  try {
    const files = req.files;
    const fields = req.fields;

    let add = new Women(fields);

    if (files.image) {
      add.image.data = fs.readFileSync(files.image.path);
      add.image.contentType = files.image.type;
    }

    await add.save((err, result) => {
      if (err) {
        console.log("Add saving error: ", err);
        res.status(400).json("Error saving");
      }
      res.json(result);
    });
  } catch (err) {
    console.log("Server Error ==> ", err);
  }
};

export const getServices = async (req, res) => {
  try {
    const services = await Women.find().exec();
    res.json(services);
    return res.send(services.image.data);
  } catch (err) {
    console.log("Server Error ==> ", err);
  }
};
