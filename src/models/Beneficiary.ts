import mongoose, { Schema, models } from "mongoose";

const BeneficiarySchema = new Schema(
  {
    childId: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    guardianName: {
      type: String,
    },
    location: {
      type: String,
    },
    identityStatus: {
      type: String,
      enum: ["Pending", "Verified", "Rejected"],
      default: "Pending",
    },
    riskLevel: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Low",
    },
    riskScore: {
      type: Number,
      default: 0,
    },
    blockchainRecord: {
      type: String,
      default: "Not Recorded",
    },
  },
  { timestamps: true }
);

const Beneficiary =
  models.Beneficiary || mongoose.model("Beneficiary", BeneficiarySchema);

export default Beneficiary;