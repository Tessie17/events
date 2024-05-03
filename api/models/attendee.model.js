import mongoose from "mongoose";

const attendeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Attendee = mongoose.model("Attendee", attendeeSchema);

export default Attendee;
