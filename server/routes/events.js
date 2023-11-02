import express from "express";

import EventsController from "../controllers/events.js";

const router = express.Router();

router.get("/:user_id", EventsController.getEvents);
router.post("/:user_id", EventsController.createEvent);
router.get("/:user_id/:id", EventsController.getEvent);
router.patch("/:user_id/:id", EventsController.updateEvent);
router.delete("/:user_id/:id", EventsController.deleteEvent);
export default router;
