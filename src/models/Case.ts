import mongoose, { Schema, models } from "mongoose";

const CaseSchema = new Schema(
  {
    caseId: {
      type: String,
      required: true,
      unique: true,
    },
    childId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },
    status: {
      type: String,
      enum: ["Open", "Under Review", "Intervention Needed", "Resolved"],
      default: "Open",
    },
    assignedAgent: {
      type: String,
      default: "Case Agent",
    },
    recommendation: {
      type: String,
    },
    notes: {
      type: String,
    },
  },
  { timestamps: true }
);

const CaseModel = models.Case || mongoose.model("Case", CaseSchema);

export default CaseModel;