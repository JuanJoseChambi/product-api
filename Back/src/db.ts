import mongoose from "mongoose";

const db = mongoose.connect("mongodb://127.0.0.1:27017/producto-api")
    .then(() => console.log("DB Conected"))
    .catch(err => console.log("Error al conctarse a MongoDB :", err))

export default db