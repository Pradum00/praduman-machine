import mongoose from "mongoose";

const interviewSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "student"
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"company",
  },
  date: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    default: "didn't attempt",
    enum: ["pass", "fail", "on hold", "didn't attempt"]
  }
});

const interviewModel = mongoose.model("interview", interviewSchema);
export default interviewModel;
