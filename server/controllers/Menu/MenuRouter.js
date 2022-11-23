import express from 'express';
import {getAllMenu, getByIdMenu, postDataMenu, updateMenu, createTableMenu, deleteByKeyMenu} from "./Menu.js";


export const MenuRouter  = express.Router();

MenuRouter.post("/menu/createtable", createTableMenu);
MenuRouter.post("/menu", postDataMenu)
MenuRouter.get("/menu", getAllMenu)
MenuRouter.put('/menu/:id', updateMenu)
MenuRouter.get("/menu/:id", getByIdMenu)
MenuRouter.delete('/menu/:id', deleteByKeyMenu)

MenuRouter.get("/", (req, res) => {
    res.send("Let's build a CRUD API!");
  });