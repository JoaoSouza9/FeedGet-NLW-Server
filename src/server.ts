import express from "express";
import { routes } from "./routes";

const app = express();

app.use(express.json());        //Middleware
app.use(routes);


app.listen(3333, () => {
    console.log("The server is running at port 3333");
});