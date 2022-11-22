
import cors from "cors";
import express from "express";
import router from "./router.js";
import * as dotenv from "dotenv";

dotenv.config()

const app = express();

let port = process.env.PORT
 
app.use(cors());

app.use(express.json());
app.use(router);
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});


