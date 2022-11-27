
import cors from "cors";
import express from "express";
import * as dotenv from "dotenv";
import { DinersRouter } from "./controllers/Diners/Router.js";
import { MenuRouter } from "./controllers/Menu/Router.js";
// import { reservationRouter } from "./controllers/reservation/Router.js";
import { TablesFoodRouter } from "./controllers/TablesFood/Router.js";

dotenv.config()

const app = express();

let port = process.env.PORT
 
app.use(cors());

app.use(express.json());

app.use('/api/v1', DinersRouter);
app.use('/api/v1', MenuRouter);
// app.use('/api/v1', reservationRouter);
app.use('/api/v1', TablesFoodRouter);


app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});


