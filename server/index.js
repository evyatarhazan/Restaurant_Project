
import cors from "cors";
import express from "express";
import router from "./router.js";
import * as dotenv from "dotenv";
import { DinersRouter } from "./controllers/Diners/DinersRouter.js";
import { MenuRouter } from "./controllers/Menu/MenuRouter.js";
import { reservationRouter } from "./controllers/reservation/reservationRouter.js";
import { TablesFoodRouter } from "./controllers/TablesFood/TablesFoodRouter.js";

dotenv.config()

const app = express();

let port = process.env.PORT
 
app.use(cors());

app.use(express.json());
app.use(router);
app.use(DinersRouter);
app.use(MenuRouter);
app.use(reservationRouter);
app.use(TablesFoodRouter);
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});


