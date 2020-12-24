const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/person", { useNewUrlParser: true, useUnifiedTopology: true });

const PersonSchema = new mongoose.Schema({
  name: String,
  dob: String,
  gender: String,
});

const PersonModel = mongoose.model("Person", PersonSchema);

const get = async (name) => await PersonModel.find({ name });
const getAll = async () => await PersonModel.find();
const save = async (person) => await new PersonModel(person).save();
const remove = async (name) => await PersonModel.remove({ name });
const validate = async (person) => await PersonModel.validate(person);


module.exports = { PersonSchema, PersonModel, get, getAll, save, remove, validate};
