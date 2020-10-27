import { Department } from '.'

let department

beforeEach(async () => {
  department = await Department.create({ ID: 'test', Name: 'test', Nos: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = department.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(department.id)
    expect(view.ID).toBe(department.ID)
    expect(view.Name).toBe(department.Name)
    expect(view.Nos).toBe(department.Nos)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = department.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(department.id)
    expect(view.ID).toBe(department.ID)
    expect(view.Name).toBe(department.Name)
    expect(view.Nos).toBe(department.Nos)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
