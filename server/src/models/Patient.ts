import mongoose, { Document, Schema } from "mongoose";

export interface IPatient extends Document {
  patientId: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: "Male" | "Female" | "Other";
  dateOfBirth?: Date;
  bloodGroup?: string;
  createdAt: Date;
  updatedAt: Date;
}

const patientSchema = new Schema<IPatient>(
  {
    patientId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
      min: 0,
      max: 120,
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Others"],
    },
    dateOfBirth: {
      type: Date,
    },
    bloodGroup: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const Patient = mongoose.model<IPatient>("Patient", patientSchema);
export default Patient;
