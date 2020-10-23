import mongoose, { Schema } from 'mongoose'

const appointmentSchema = new Schema({
  No: {
    type: String
  },
  PatientName: {
    type: String
  },
  DocterName: {
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
      PatientName: this.PatientName,
      DocterName: this.DocterName,
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
