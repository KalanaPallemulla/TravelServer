import Services from "../models/Services";
import fs from "fs";

export const addService = async (req, res) => {
  //   console.log(req.fields);
  //   console.log("req.files", req.files);
  try {
    const files = req.files;
    const fields = req.fields;

    if (!fields.name || fields.name === "" || fields.name == null) {
      return res.status(400).send("Name is required");
    }
    if (!fields.price || fields.price === "" || fields.price == null) {
      return res.status(400).send("Price is required");
    }
    if (!fields.category || fields.category === "" || fields.category == null) {
      return res.status(400).send("Category is required");
    }
    if (!fields.time || fields.time === "" || fields.time == null) {
      return res.status(400).send("Time is required");
    }
    if (!fields.location || fields.location === "" || fields.location == null) {
      return res.status(400).send("Location is required");
    }
    if (
      !fields.serviceType ||
      fields.serviceType === "" ||
      fields.serviceType == null
    ) {
      return res.status(400).send("Type is required");
    }

    const { features, ...rest } = fields;

    let feat = Array.isArray(features)
      ? features
      : features.split("|").map((feature) => "" + feature.trim());
    console.log(feat);

    let add = new Services({
      features: feat,
      ...rest,
    });

    if (files.image) {
      add.image.data = fs.readFileSync(files.image.path);
      add.image.contentType = files.image.type;
    }

    await add.save((err, result) => {
      if (err) {
        console.log("Add saving error: ", err.message);
        res.status(400).json(err.message);
      }
      res.json(result);
    });
  } catch (err) {
    console.log("Server Error ==> ", err);
  }
};

export const getServices = async (req, res) => {
  try {
    const services = await Services.find()
      .select("-image.data")
      .sort("-createdAt")
      .exec();
    res.json(services);
  } catch (err) {
    console.log("Server Error ==> ", err);
  }
};

export const image = async (req, res) => {
  try {
    let service = await Services.findById(req.params.id).exec();
    if (service && service.image && service.image.contentType) {
      res.set("Content-Type", add.image.contentType);
      return res.send(add.image.data);
    }
  } catch (err) {
    console.log("Server Error ==> ", err);
  }
};

export const getSuggestServices = async (req, res) => {
  try {
    const services = await Services.find()
      .select("-image.data")
      .sort("-createdAt")
      .limit(3)
      .exec();
    res.json(services);
  } catch (err) {
    console.log("Server Error ==> ", err);
  }
};
