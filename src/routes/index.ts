import { Router } from "express";
import { demoRoutes } from "./demo-routes";


const routes = Router()

routes.use("/", demoRoutes)

export { routes }