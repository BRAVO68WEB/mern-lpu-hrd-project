import { Doctor } from '.'

let doctor

beforeEach(async () => {
  doctor = await Doctor.create({ ID: 'test', Name: 'test', Dapartment: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = doctor.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(doctor.id)
    expect(view.ID).toBe(doctor.ID)
    expect(view.Name).toBe(doctor.Name)
    expect(view.Dapartment).toBe(doctor.Dapartment)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = doctor.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(doctor.id)
    expect(view.ID).toBe(doctor.ID)
    expect(view.Name).toBe(doctor.Name)
    expect(view.Dapartment).toBe(doctor.Dapartment)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
