// for machine learning to predict the outcome

import mongoose, { Document, Schema, Types } from "mongoose";

export interface IPrediction extends Document {
  patient: Types.ObjectId;
  admission?: Types.ObjectId;

  modelName: string;
  modelVersion?: string;

  predictionType: "ProlongedStay" | "Readmission" | "Other";

  prediction: number;
  probability: number;

  inputData: {
    age?: number;
    heartRate?: number;
    systolicBP?: number;
    diastolicBP?: number;
    temperature?: number;
    respiratoryRate?: number;
    oxygenSaturation?: number;
  };

  createdAt: Date;
}

const predictionSchema = new Schema<IPrediction>(
  {
    patient: {
      type: Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    admission: {
      type: Schema.Types.ObjectId,
      ref: "Admission",
    },
    modelName: {
      type: String,
      required: true,
    },
    modelVersion: {
      type: String,
    },
    predictionType: {
      type: String,
      required: true,
      enum: ["ProlongedStay", "Readmission", "Other"],
    },

    prediction: {
      type: Number,
      required: true,
    },

    probability: {
      type: Number,
      min: 0,
      max: 1,
    },

    inputData: {
      age: Number,
      heartRate: Number,
      systolicBP: Number,
      diastolicBP: Number,
      temperature: Number,
      respiratoryRate: Number,
      oxygenSaturation: Number,
    },
  },
  { timestamps: true },
);

const Prediction = mongoose.model<IPrediction>("Prediction", predictionSchema);
export default Prediction;
