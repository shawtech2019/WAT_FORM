import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 9001;

app.listen(PORT, () => {
    console.log(`server running at port:${PORT}`);
});