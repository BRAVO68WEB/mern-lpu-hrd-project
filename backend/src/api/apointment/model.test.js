import { Apointment } from '.'

let apointment

beforeEach(async () => {
  apointment = await Apointment.create({ No: 'test', PatientName: 'test', DocterName: 'test', Email: 'test', PhoneNo: 'test', Date: 'test', Time: 'test', Department: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = apointment.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(apointment.id)
    expect(view.No).toBe(apointment.No)
    expect(view.PatientName).toBe(apointment.PatientName)
    expect(view.DocterName).toBe(apointment.DocterName)
    expect(view.Email).toBe(apointment.Email)
    expect(view.PhoneNo).toBe(apointment.PhoneNo)
    expect(view.Date).toBe(apointment.Date)
    expect(view.Time).toBe(apointment.Time)
    expect(view.Department).toBe(apointment.Department)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = apointment.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(apointment.id)
    expect(view.No).toBe(apointment.No)
    expect(view.PatientName).toBe(apointment.PatientName)
    expect(view.DocterName).toBe(apointment.DocterName)
    expect(view.Email).toBe(apointment.Email)
    expect(view.PhoneNo).toBe(apointment.PhoneNo)
    expect(view.Date).toBe(apointment.Date)
    expect(view.Time).toBe(apointment.Time)
    expect(view.Department).toBe(apointment.Department)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
