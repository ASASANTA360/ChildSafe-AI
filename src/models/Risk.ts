import mongoose, { Schema, models } from "mongoose";

const RiskSchema = new Schema(
  {
    childId: {
      type: String,
      required: true,
    },
    riskScore: {
      type: Number,
      required: true,
    },
    riskLevel: {
      type: String,
      enum: ["Low", "Medium", "High"],
      required: true,
    },
    riskFactors: {
      type: [String],
      default: [],
    },
    aiRecommendation: {
      type: String,
    },
    reviewedByHuman: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Risk = models.Risk || mongoose.model("Risk", RiskSchema);

export default Risk;