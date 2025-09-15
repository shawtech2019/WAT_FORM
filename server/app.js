import express from "express"; 
import cors from "cors";
import bodyParser from "body-parser";
import registrationRoutes from "../server/app/routes/RegistrationRoutes.js"


const app = express();

app.use(cors());
app.use(bodyParser.json());


// Routes
app.use("/api/register", registrationRoutes)

export default app;