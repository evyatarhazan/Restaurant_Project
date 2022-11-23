import express from 'express';
import {getAllDiners, getByIdDiners, deleteByIdDiners, postDataDiners, updateDiners, sitByPeriority, createTableDiners}  from "./Diners.js";


export const DinersRouter  = express.Router();

DinersRouter.get("/diners", getAllDiners)
DinersRouter.post("/diners", postDataDiners)
DinersRouter.get("/diners/sitbyperiority", sitByPeriority)
DinersRouter.put('/diners/:id', updateDiners)
DinersRouter.get("/diners/:id", getByIdDiners)
DinersRouter.post("/diners/createtable", createTableDiners);
DinersRouter.delete('/diners/:id', deleteByIdDiners)

DinersRouter.get("/", (req, res) => {
    res.send("Let's build a CRUD API!");
  });