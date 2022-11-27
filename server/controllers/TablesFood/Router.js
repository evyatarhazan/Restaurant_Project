import express from 'express';
import { getAllTablesFood, postDataTablesFood, getByIdTablesFood, updateTablesFood, deleteByIdTablesFood } from './Model.js';


export const TablesFoodRouter  = express.Router();


TablesFoodRouter.post("/tables", postDataTablesFood)
TablesFoodRouter.get("/tables", getAllTablesFood)
TablesFoodRouter.put('/tables/:id', updateTablesFood)
TablesFoodRouter.get("/tables/:id", getByIdTablesFood)
TablesFoodRouter.delete('/tables/:id', deleteByIdTablesFood)
[
TablesFoodRouter.get("/", (req, res) => {
    res.send("Let's build a CRUD API!");
  })]