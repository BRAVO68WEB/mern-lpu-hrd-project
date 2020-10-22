import mongoose, { Schema } from 'mongoose'

const doctorSchema = new Schema({
  Id: {
    type: String
  },
  Name: {
    type: String
  },
  Department: {
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
      Id: this.Id,
      Name: this.Name,
      Department: this.Department,
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
