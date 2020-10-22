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

test('POST /departments 201 (admin)', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: adminSession, Id: 'test', Name: 'test', Nos. of Doctor: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.Id).toEqual('test')
  expect(body.Name).toEqual('test')
  expect(body.Nos. of Doctor).toEqual('test')
})

test('POST /departments 401 (user)', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: userSession })
  expect(status).toBe(401)
})

test('POST /departments 401', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /departments 200 (admin)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
    .query({ access_token: adminSession })
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /departments 401 (user)', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}`)
    .query({ access_token: userSession })
  expect(status).toBe(401)
})

test('GET /departments 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /departments/:id 200 (admin)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${department.id}`)
    .query({ access_token: adminSession })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(department.id)
})

test('GET /departments/:id 401 (user)', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}/${department.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(401)
})

test('GET /departments/:id 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}/${department.id}`)
  expect(status).toBe(401)
})

test('GET /departments/:id 404 (admin)', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
    .query({ access_token: adminSession })
  expect(status).toBe(404)
})

test('PUT /departments/:id 200 (admin)', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${department.id}`)
    .send({ access_token: adminSession, Id: 'test', Name: 'test', Nos. of Doctor: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(department.id)
  expect(body.Id).toEqual('test')
  expect(body.Name).toEqual('test')
  expect(body.Nos. of Doctor).toEqual('test')
})

test('PUT /departments/:id 401 (user)', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${department.id}`)
    .send({ access_token: userSession })
  expect(status).toBe(401)
})

test('PUT /departments/:id 401', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${department.id}`)
  expect(status).toBe(401)
})

test('PUT /departments/:id 404 (admin)', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ access_token: adminSession, Id: 'test', Name: 'test', Nos. of Doctor: 'test' })
  expect(status).toBe(404)
})

test('DELETE /departments/:id 204 (admin)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${department.id}`)
    .query({ access_token: adminSession })
  expect(status).toBe(204)
})

test('DELETE /departments/:id 401 (user)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${department.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(401)
})

test('DELETE /departments/:id 401', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${department.id}`)
  expect(status).toBe(401)
})

test('DELETE /departments/:id 404 (admin)', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
    .query({ access_token: adminSession })
  expect(status).toBe(404)
})
