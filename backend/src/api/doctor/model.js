import mongoose, { Schema } from 'mongoose'

const doctorSchema = new Schema({
  ID: {
    type: String
  },
  Name: {
    type: String
  },
  Dapartment: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

doctorSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      ID: this.ID,
      Name: this.Name,
      Dapartment: this.Dapartment,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Doctor', doctorSchema)

export const schema = model.schema
export default model
