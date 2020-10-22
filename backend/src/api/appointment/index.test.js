import request from 'supertest'
import { apiRoot } from '../../config'
import { signSync } from '../../services/jwt'
import express from '../../services/express'
import { User } from '../user'
import routes, { Appointment } from '.'

const app = () => express(apiRoot, routes)

let userSession, adminSession, appointment

beforeEach(async () => {
  const user = await User.create({ email: 'a@a.com', password: '123456' })
  const admin = await User.create({ email: 'c@c.com', password: '123456', role: 'admin' })
  userSession = signSync(user.id)
  adminSession = signSync(admin.id)
  appointment = await Appointment.create({})
})

test('POST /appointments 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ No: 'test', Patient-Name: 'test', Docter-Name: 'test', Date: 'test', Time: 'test', Departent: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.No).toEqual('test')
  expect(body.Patient-Name).toEqual('test')
  expect(body.Docter-Name).toEqual('test')
  expect(body.Date).toEqual('test')
  expect(body.Time).toEqual('test')
  expect(body.Departent).toEqual('test')
})

test('GET /appointments 200 (admin)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
    .query({ access_token: adminSession })
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /appointments 401 (user)', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}`)
    .query({ access_token: userSession })
  expect(status).toBe(401)
})

test('GET /appointments 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /appointments/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${appointment.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(appointment.id)
})

test('GET /appointments/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /appointments/:id 200 (admin)', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${appointment.id}`)
    .send({ access_token: adminSession, No: 'test', Patient-Name: 'test', Docter-Name: 'test', Date: 'test', Time: 'test', Departent: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(appointment.id)
  expect(body.No).toEqual('test')
  expect(body.Patient-Name).toEqual('test')
  expect(body.Docter-Name).toEqual('test')
  expect(body.Date).toEqual('test')
  expect(body.Time).toEqual('test')
  expect(body.Departent).toEqual('test')
})

test('PUT /appointments/:id 401 (user)', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${appointment.id}`)
    .send({ access_token: userSession })
  expect(status).toBe(401)
})

test('PUT /appointments/:id 401', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${appointment.id}`)
  expect(status).toBe(401)
})

test('PUT /appointments/:id 404 (admin)', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ access_token: adminSession, No: 'test', Patient-Name: 'test', Docter-Name: 'test', Date: 'test', Time: 'test', Departent: 'test' })
  expect(status).toBe(404)
})

test('DELETE /appointments/:id 204 (admin)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${appointment.id}`)
    .query({ access_token: adminSession })
  expect(status).toBe(204)
})

test('DELETE /appointments/:id 401 (user)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${appointment.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(401)
})

test('DELETE /appointments/:id 401', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${appointment.id}`)
  expect(status).toBe(401)
})

test('DELETE /appointments/:id 404 (admin)', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
    .query({ access_token: adminSession })
  expect(status).toBe(404)
})
