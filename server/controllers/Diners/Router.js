import express from 'express';
import { deleteByIdDiners, getAllDiners, getByIdDiners, getReservation, postDataDiners, postReservation, sitByPeriority, updateDiners } from './Model.js';


export const DinersRouter  = express.Router();

DinersRouter.post("/diners", postDataDiners)
DinersRouter.get("/diners", getAllDiners)
DinersRouter.get("/diners/sitbyperiority", sitByPeriority)
DinersRouter.get("/diners/:id", getByIdDiners)
DinersRouter.put('/diners/:id', updateDiners)
DinersRouter.delete('/diners/:id', deleteByIdDiners)

DinersRouter.get('/diners/:category/:id/reservation', getReservation)
DinersRouter.post('/diners/:category/:id/reservation', postReservation)

DinersRouter.get("/", (req, res) => {
    res.send("Let's build a CRUD API!");
  });