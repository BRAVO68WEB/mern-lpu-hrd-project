import request from 'supertest'
import { apiRoot } from '../../config'
import { signSync } from '../../services/jwt'
import express from '../../services/express'
import { User } from '../user'
import routes, { Department } from '.'

const app = () => express(apiRoot, routes)

let userSession, adminSession, department

beforeEach(async () => {
  const user = await User.create({ email: 'a@a.com', password: '123456' })
  const admin = await User.create({ email: 'c@c.com', password: '123456', role: 'admin' })
  userSession = signSync(user.id)
  adminSession = signSync(admin.id)
  department = await Department.create({})
})

test('POST /Departments 201 (admin)', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: adminSession, ID: 'test', Name: 'test', Nos: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.ID).toEqual('test')
  expect(body.Name).toEqual('test')
  expect(body.Nos).toEqual('test')
})

test('POST /Departments 401 (user)', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: userSession })
  expect(status).toBe(401)
})

test('POST /Departments 401', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /Departments 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /Departments/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${department.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(department.id)
})

test('GET /Departments/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /Departments/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${department.id}`)
    .send({ ID: 'test', Name: 'test', Nos: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(department.id)
  expect(body.ID).toEqual('test')
  expect(body.Name).toEqual('test')
  expect(body.Nos).toEqual('test')
})

test('PUT /Departments/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ ID: 'test', Name: 'test', Nos: 'test' })
  expect(status).toBe(404)
})

test('DELETE /Departments/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${department.id}`)
  expect(status).toBe(204)
})

test('DELETE /Departments/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
