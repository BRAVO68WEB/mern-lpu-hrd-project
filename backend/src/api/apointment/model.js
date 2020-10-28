import mongoose, { Schema } from "mongoose";

const apointmentSchema = new Schema(
  {
    No: {
      type: String,
    },
    PatientName: {
      type: String,
    },
    docID: {
      type: Number,
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
    depID: {
      type: Number,
    },
    Msg: {
      type: String,
    },
    Age: {
      type: Number,
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
      docID: this.docID,
      Email: this.Email,
      PhoneNo: this.PhoneNo,
      Date: this.Date,
      Time: this.Time,
      Msg: this.Msg,
      Age: this.Age,
      depID: this.depID,
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
