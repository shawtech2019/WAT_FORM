import express from "express"; 
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

import registrationRoutes from "../server/app/routes/RegistrationRoutes.js";

const app = express();

// Needed for ES modules (__dirname, __filename)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(bodyParser.json());

// API Routes
app.use("/api/register", registrationRoutes);

//  Serve frontend (React/Vite build)
app.use(express.static(path.join(__dirname, "../clients/dist")));

// Catch-all to handle React Router paths
app.get("*", (req, res) => {
    
  res.sendFile(path.join(__dirname, "../clients/dist/index.html"));
});

export default app;
