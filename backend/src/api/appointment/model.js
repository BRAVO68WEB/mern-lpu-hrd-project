import mongoose, { Schema } from 'mongoose'

const appointmentSchema = new Schema({
  No: {
    type: String
  },
  Patient-Name: {
    type: String
  },
  Docter-Name: {
    type: String
  },
  Date: {
    type: String
  },
  Time: {
    type: String
  },
  Departent: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

appointmentSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      No: this.No,
      Patient-Name: this.Patient-Name,
      Docter-Name: this.Docter-Name,
      Date: this.Date,
      Time: this.Time,
      Departent: this.Departent,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Appointment', appointmentSchema)

export const schema = model.schema
export default model
