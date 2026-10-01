import mongoose, { Document, Schema } from "mongoose";

export interface IPatient extends Document {
  patientId: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: "Male" | "Female" | "Other";
  dateofBirth?: Date;
  bloodGroup?: string;
  createdAt: Date;
  updatedAt: Date;
}
