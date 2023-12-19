import server from "./src/app"
import dotenv from "dotenv"
dotenv.config();

const { PORT } = process.env || 3001


server.listen(PORT, () => {
    console.log(`Port in ${PORT}`);
    
})
