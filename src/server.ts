import express from "express";
import { errorHandling } from "./middlewares/error-handling.js";
import { routes } from "./routes/index.js";

const PORT = 3333

const app = express()

app.use(express.json())
app.use(routes)
app.use(errorHandling)

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))