import express from "express";
import {
  createAttendee,
  getAttendees,
} from "../controllers/attendee.controller.js";

const router = express.Router();

router.post("/create", createAttendee);
router.get("/getAllAttendees", getAttendees);

export default router;
