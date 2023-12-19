import server from "./src/app"
import dotenv from "dotenv"
import db from "./src/db"
dotenv.config();
const { PORT } = process.env || 3001


server.listen(PORT,async () => {
    console.log(`Port in ${PORT}`);
    db;
})
