import { Appointment } from '.'

let appointment

beforeEach(async () => {
  appointment = await Appointment.create({ No: 'test', Patient-Name: 'test', Docter-Name: 'test', Date: 'test', Time: 'test', Departent: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = appointment.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(appointment.id)
    expect(view.No).toBe(appointment.No)
    expect(view.Patient-Name).toBe(appointment.Patient-Name)
    expect(view.Docter-Name).toBe(appointment.Docter-Name)
    expect(view.Date).toBe(appointment.Date)
    expect(view.Time).toBe(appointment.Time)
    expect(view.Departent).toBe(appointment.Departent)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = appointment.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(appointment.id)
    expect(view.No).toBe(appointment.No)
    expect(view.Patient-Name).toBe(appointment.Patient-Name)
    expect(view.Docter-Name).toBe(appointment.Docter-Name)
    expect(view.Date).toBe(appointment.Date)
    expect(view.Time).toBe(appointment.Time)
    expect(view.Departent).toBe(appointment.Departent)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
