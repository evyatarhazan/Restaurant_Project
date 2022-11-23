import express from 'express';
import {getAllTasbles, getByIdTasbles, postDataTasbles, updateTasbles, createTableTasbles, deleteByKeyTasbles} from "./TablesFood.js";


export const TablesFoodRouter  = express.Router();

TablesFoodRouter.post("/tables/createtable", createTableTasbles);
TablesFoodRouter.post("/tables", postDataTasbles)
TablesFoodRouter.get("/tables", getAllTasbles)
TablesFoodRouter.delete('/tables', deleteByKeyTasbles)
TablesFoodRouter.put('/tables/:id', updateTasbles)
TablesFoodRouter.get("/tables/:id", getByIdTasbles)
TablesFoodRouter.delete('/tables/:id', deleteByKeyTasbles)

TablesFoodRouter.get("/", (req, res) => {
    res.send("Let's build a CRUD API!");
  });