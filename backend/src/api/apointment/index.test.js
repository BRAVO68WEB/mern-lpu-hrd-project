import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Apointment } from '.'

const app = () => express(apiRoot, routes)

let apointment

beforeEach(async () => {
  apointment = await Apointment.create({})
})

test('POST /apointments 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ No: 'test', PatientName: 'test', DocterName: 'test', Email: 'test', PhoneNo: 'test', Date: 'test', Time: 'test', Department: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.No).toEqual('test')
  expect(body.PatientName).toEqual('test')
  expect(body.DocterName).toEqual('test')
  expect(body.Email).toEqual('test')
  expect(body.PhoneNo).toEqual('test')
  expect(body.Date).toEqual('test')
  expect(body.Time).toEqual('test')
  expect(body.Department).toEqual('test')
})

test('GET /apointments 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /apointments/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${apointment.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(apointment.id)
})

test('GET /apointments/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /apointments/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${apointment.id}`)
    .send({ No: 'test', PatientName: 'test', DocterName: 'test', Email: 'test', PhoneNo: 'test', Date: 'test', Time: 'test', Department: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(apointment.id)
  expect(body.No).toEqual('test')
  expect(body.PatientName).toEqual('test')
  expect(body.DocterName).toEqual('test')
  expect(body.Email).toEqual('test')
  expect(body.PhoneNo).toEqual('test')
  expect(body.Date).toEqual('test')
  expect(body.Time).toEqual('test')
  expect(body.Department).toEqual('test')
})

test('PUT /apointments/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ No: 'test', PatientName: 'test', DocterName: 'test', Email: 'test', PhoneNo: 'test', Date: 'test', Time: 'test', Department: 'test' })
  expect(status).toBe(404)
})

test('DELETE /apointments/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${apointment.id}`)
  expect(status).toBe(204)
})

test('DELETE /apointments/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
