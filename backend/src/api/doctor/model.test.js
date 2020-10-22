import { Doctor } from '.'

let doctor

beforeEach(async () => {
  doctor = await Doctor.create({ Id: 'test', Name: 'test', Department: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = doctor.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(doctor.id)
    expect(view.Id).toBe(doctor.Id)
    expect(view.Name).toBe(doctor.Name)
    expect(view.Department).toBe(doctor.Department)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = doctor.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(doctor.id)
    expect(view.Id).toBe(doctor.Id)
    expect(view.Name).toBe(doctor.Name)
    expect(view.Department).toBe(doctor.Department)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
