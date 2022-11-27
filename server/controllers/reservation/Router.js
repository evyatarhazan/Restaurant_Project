import express from 'express';
import { getReservation, getSum, postReservation } from './reservation.js';



export const reservationRouter  = express.Router();

reservationRouter.get('/diners/sum/:id', getSum)
reservationRouter.post('/diners/:category/:id/reservation', postReservation)
reservationRouter.get('/diners/:category/:id/reservation', getReservation)

reservationRouter.get("/", (req, res) => {
    res.send("Let's build a CRUD API!");
  });