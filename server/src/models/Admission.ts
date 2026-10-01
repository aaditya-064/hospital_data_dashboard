import mongoose, { Document, Schema, Types } from "mongoose";

export interface IAdmission extends Document {
  patient: Types.ObjectId;
  admissionDate: Date;
  dischargeDate?: Date;
  diagnosis: string;
  department?: string;
  admissionType?: "Emergency" | "Routine" | "Transfer";
  lengthOfStay?: number;
  outcome: "Discharged" | "Transferred" | "Deceased" | "Ongoing";

  vitals: {
    heartRate?: number;
    systolicBP?: number;
    diastolicBP?: number;
    temperature?: number;
    respiratoryRate?: number;
    oxygenSaturation?: number;
  };

  createdAt: Date;
  updatedAt: Date;
}

const admissionSchema = new Schema<IAdmission>(
  {
    patient: {
      type: Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    admissionDate: {
      type: Date,
      required: true,
    },
    dischargeDate: {
      type: Date,
    },
    diagnosis: {
      type: String,
      required: true,
      trim: true,
    },
    department: {
      type: String,
    },
    admissionType: {
      type: String,
      enum: ["Emergency", "Routine", "Transfer"],
    },
    lengthOfStay: {
      type: Number,
      min: 0,
    },
    outcome: {
      type: String,
      requried: true,
      enum: ["Discharged", "Transferred", "Deceased", "Ongoing"],
    },

    vitals: {
      heartRate: {
        type: Number,
      },
      systolicBP: {
        type: Number,
      },
      diastolicBP: {
        type: Number,
      },
      temperature: {
        type: Number,
      },
      respiratoryRate: {
        type: Number,
      },
      oxygenSaturation: {
        type: Number,
      },
    },
  },
  {
    timestamps: true,
  },
);

const Admission = mongoose.model<IAdmission>("Admission", admissionSchema);
export default Admission;
