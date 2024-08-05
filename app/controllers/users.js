import { User } from "../models/users.js";

export const createItems = async (req, res) => {
  try {
    const { name, email } = req.body;
    const resDeateil = await User.create({
      name,
      email,
    });
    res.send({ data: resDeateil });
  } catch (error) {
    console.log(error);
  }
};

export const getItems = async (req, res) => {
  try {
    const data = await User.find();
    res.send({ data: data });
  } catch (error) {
    console.log(error);
  }
  res.send({ message: "Bien el controlador para obtener los items" });
};

export const deleteItems = (req, res) => {
  res.send({ message: "Bien el controlador para eliminar los items" });
};
