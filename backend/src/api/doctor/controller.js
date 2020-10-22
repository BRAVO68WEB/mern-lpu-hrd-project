import { success, notFound } from '../../services/response/'
import { Doctor } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Doctor.create(body)
    .then((doctor) => doctor.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Doctor.count(query)
    .then(count => Doctor.find(query, select, cursor)
      .then((doctors) => ({
        count,
        rows: doctors.map((doctor) => doctor.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Doctor.findById(params.id)
    .then(notFound(res))
    .then((doctor) => doctor ? doctor.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Doctor.findById(params.id)
    .then(notFound(res))
    .then((doctor) => doctor ? Object.assign(doctor, body).save() : null)
    .then((doctor) => doctor ? doctor.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Doctor.findById(params.id)
    .then(notFound(res))
    .then((doctor) => doctor ? doctor.remove() : null)
    .then(success(res, 204))
    .catch(next)
