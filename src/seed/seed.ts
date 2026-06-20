import mongoose from "mongoose";
import dotenv from "dotenv";

import Beneficiary from "../models/Beneficiary";
import CaseModel from "../models/Case";
import Risk from "../models/Risk";

dotenv.config({ path: ".env.local" });

async function seed() {
  console.log("MONGODB_URI =", process.env.MONGODB_URI);

  await mongoose.connect(process.env.MONGODB_URI!);

  await Beneficiary.deleteMany();
  await CaseModel.deleteMany();
  await Risk.deleteMany();

  await Beneficiary.insertMany([
    {
      childId: "CH-0021",
      fullName: "Amina Yusuf",
      age: 9,
      gender: "Female",
      location: "Kano",
      identityStatus: "Verified",
      riskLevel: "Medium",
      riskScore: 56,
    },
    {
      childId: "CH-0038",
      fullName: "Musa Ibrahim",
      age: 12,
      gender: "Male",
      location: "Kaduna",
      identityStatus: "Verified",
      riskLevel: "High",
      riskScore: 87,
    },
  ]);

  await CaseModel.insertMany([
    {
      caseId: "CASE-001",
      childId: "CH-0038",
      title: "Education Support",
      priority: "High",
      status: "Intervention Needed",
    },
  ]);

  await Risk.insertMany([
    {
      childId: "CH-0038",
      riskScore: 87,
      riskLevel: "High",
      riskFactors: [
        "School dropout",
        "Economic vulnerability",
      ],
      aiRecommendation: "Immediate intervention required",
    },
  ]);

  console.log("Seed data inserted successfully");

  process.exit(0);
}

seed();