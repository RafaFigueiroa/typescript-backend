import express from "express";
import PetController from "../controller/petController"

const router = express.Router();

const petController = new PetController();

router.post("/", petController.criaPet);
router.get("/", petController.listaPets);
router.put("/:id", petController.atualizaPets);
router.delete("/:id", petController.deletaPet);

export default router;