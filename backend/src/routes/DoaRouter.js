import { Router } from "express";
import DoaController from "../controllers/DoaController.js";

const router = Router();

router.get("/", DoaController.getAllDoa);
router.get("/:id", DoaController.getDoaById);
router.get("/doa/:name", DoaController.getDoaByName);

export default router;
