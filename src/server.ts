import express from "express";
import { routes } from "./routes";
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());        //Middleware
app.use(routes);


app.listen(3333, () => {
    console.log("The server is running at port 3333");
});