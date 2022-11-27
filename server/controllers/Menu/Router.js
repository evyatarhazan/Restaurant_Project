import express from 'express';
import { deleteByIdMenu, getAllMenu, getByIdMenu, postDataMenu, updateMenu } from './Model.js';


export const MenuRouter  = express.Router();

MenuRouter.post("/menu", postDataMenu)
MenuRouter.get("/menu", getAllMenu)
MenuRouter.put('/menu/:id', updateMenu)
MenuRouter.get("/menu/:id", getByIdMenu)
MenuRouter.delete('/menu/:id', deleteByIdMenu)

MenuRouter.get("/", (req, res) => {
    res.send("Let's build a CRUD API!");
  });