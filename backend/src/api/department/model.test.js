import { Department } from '.'

let department

beforeEach(async () => {
  department = await Department.create({ Id: 'test', Name: 'test', NoofDoctor: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = department.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(department.id)
    expect(view.Id).toBe(department.Id)
    expect(view.Name).toBe(department.Name)
    expect(view.NoofDoctor).toBe(department.NoofDoctor)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = department.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(department.id)
    expect(view.Id).toBe(department.Id)
    expect(view.Name).toBe(department.Name)
    expect(view.NoofDoctor).toBe(department.NoofDoctor)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
