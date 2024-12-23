import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import adminAuthMiddleware from "../middlewares/adminAuthMiddleware.js";
import {
  createAbout,
  getAbout,
  getAllAbout,
  updateAbout,
} from "../controllers/about.controllers.js";

const Router = express.Router();

Router.route("/").get(getAllAbout).post(authMiddleware,adminAuthMiddleware, createAbout);

Router.route("/:id")
  .get(getAbout)
  .put(authMiddleware,adminAuthMiddleware, updateAbout)
 export default Router;