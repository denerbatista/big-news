import { Router } from "express";
const route = Router();

import {
  create,
  findAll,
  topNews,
  findById,
  searchByTitle,
  byUser,
  
} from "../controllers/news.controller.js";
import { authMiddlewere } from "../middlewares/auth.middlewares.js";

route.post("/", authMiddlewere, create);
route.get("/", findAll);
route.get("/search", searchByTitle);
route.get("/top", topNews);
route.get("byUser", authMiddlewere, byUser)




route.get("/:id", authMiddlewere, findById);

export default route;
