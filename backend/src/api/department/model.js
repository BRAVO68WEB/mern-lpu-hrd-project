import mongoose, { Schema } from "mongoose";

const departmentSchema = new Schema(
  {
    depID: {
      type: String,
    },
    Name: {
      type: String,
    },
    Nos: {
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

departmentSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      depID: this.depID,
      Name: this.Name,
      Nos: this.Nos,
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

const model = mongoose.model("Department", departmentSchema);

export const schema = model.schema;
export default model;
