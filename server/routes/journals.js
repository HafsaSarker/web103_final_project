import express from "express";

import JournalController from "../controllers/journals.js";

const router = express.Router();

router.get("/:user_id", JournalController.getEntries);
router.post("/:user_id", JournalController.createEntry);
router.get("/:user_id/:id", JournalController.getEntry);
router.patch("/:user_id/:id", JournalController.updateEntry);
router.delete("/:user_id/:id", JournalController.deleteEntry);
export default router;
