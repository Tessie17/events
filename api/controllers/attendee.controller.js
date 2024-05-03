import Attendee from "../models/attendee.model.js";

export const createAttendee = async (req, res) => {
  const { name, gender, specialization } = req.body;
  if (!req.body.name || !req.body.specialization) {
    return res
      .status(400)
      .send({ message: "Please provide all the required fields!" });
  }

  try {
    const attendee = new Attendee({ name, gender, specialization });
    await attendee.save();
    res.status(201).send(attendee);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getAttendees = async (req, res) => {
  try {
    const attendees = await Attendee.find();
    res.status(200).send(attendees);
  } catch (error) {
    res.status(500).send;
  }
};
