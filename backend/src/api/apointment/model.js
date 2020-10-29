import mongoose, { Schema } from "mongoose";

const apointmentSchema = new Schema(
  {
    No: {
      type: String,
    },
    PatientName: {
      type: String,
    },
    DocterName: {
      type: String,
    },
    Email: {
      type: String,
    },
    PhoneNo: {
      type: String,
    },
    Date: {
      type: String,
    },
    Time: {
      type: String,
    },
    Age: {
      type: String,
    },
    Description: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (obj, ret) => {
        delete ret._id;
      },
    },
  }
);

apointmentSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      No: this.No,
      PatientName: this.PatientName,
      DocterName: this.DocterName,
      Email: this.Email,
      PhoneNo: this.PhoneNo,
      Date: this.Date,
      Time: this.Time,
      Age: this.Age,
      Description: this.Description,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };

    return full
      ? {
          ...view,
          // add properties for a full view
        }
      : view;
  },
};

const model = mongoose.model("Apointment", apointmentSchema);

export const schema = model.schema;
export default model;
