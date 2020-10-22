import request from 'supertest'
import { apiRoot } from '../../config'
import { signSync } from '../../services/jwt'
import express from '../../services/express'
import { User } from '../user'
import routes, { Doctor } from '.'

const app = () => express(apiRoot, routes)

let userSession, adminSession, doctor

beforeEach(async () => {
  const user = await User.create({ email: 'a@a.com', password: '123456' })
  const admin = await User.create({ email: 'c@c.com', password: '123456', role: 'admin' })
  userSession = signSync(user.id)
  adminSession = signSync(admin.id)
  doctor = await Doctor.create({})
})

test('POST /doctors 201 (admin)', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: adminSession, Id: 'test', Name: 'test', Department: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.Id).toEqual('test')
  expect(body.Name).toEqual('test')
  expect(body.Department).toEqual('test')
})

test('POST /doctors 401 (user)', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: userSession })
  expect(status).toBe(401)
})

test('POST /doctors 401', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /doctors 200 (admin)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
    .query({ access_token: adminSession })
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /doctors 401 (user)', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}`)
    .query({ access_token: userSession })
  expect(status).toBe(401)
})

test('GET /doctors 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /doctors/:id 200 (admin)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${doctor.id}`)
    .query({ access_token: adminSession })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(doctor.id)
})

test('GET /doctors/:id 401 (user)', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}/${doctor.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(401)
})

test('GET /doctors/:id 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}/${doctor.id}`)
  expect(status).toBe(401)
})

test('GET /doctors/:id 404 (admin)', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
    .query({ access_token: adminSession })
  expect(status).toBe(404)
})

test('PUT /doctors/:id 200 (admin)', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${doctor.id}`)
    .send({ access_token: adminSession, Id: 'test', Name: 'test', Department: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(doctor.id)
  expect(body.Id).toEqual('test')
  expect(body.Name).toEqual('test')
  expect(body.Department).toEqual('test')
})

test('PUT /doctors/:id 401 (user)', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${doctor.id}`)
    .send({ access_token: userSession })
  expect(status).toBe(401)
})

test('PUT /doctors/:id 401', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${doctor.id}`)
  expect(status).toBe(401)
})

test('PUT /doctors/:id 404 (admin)', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ access_token: adminSession, Id: 'test', Name: 'test', Department: 'test' })
  expect(status).toBe(404)
})

test('DELETE /doctors/:id 204 (admin)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${doctor.id}`)
    .query({ access_token: adminSession })
  expect(status).toBe(204)
})

test('DELETE /doctors/:id 401 (user)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${doctor.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(401)
})

test('DELETE /doctors/:id 401', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${doctor.id}`)
  expect(status).toBe(401)
})

test('DELETE /doctors/:id 404 (admin)', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
    .query({ access_token: adminSession })
  expect(status).toBe(404)
})
