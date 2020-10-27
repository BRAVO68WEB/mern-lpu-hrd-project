import { success, notFound } from '../../services/response/'
import { Apointment } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Apointment.create(body)
    .then((apointment) => apointment.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Apointment.count(query)
    .then(count => Apointment.find(query, select, cursor)
      .then((apointments) => ({
        count,
        rows: apointments.map((apointment) => apointment.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Apointment.findById(params.id)
    .then(notFound(res))
    .then((apointment) => apointment ? apointment.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Apointment.findById(params.id)
    .then(notFound(res))
    .then((apointment) => apointment ? Object.assign(apointment, body).save() : null)
    .then((apointment) => apointment ? apointment.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Apointment.findById(params.id)
    .then(notFound(res))
    .then((apointment) => apointment ? apointment.remove() : null)
    .then(success(res, 204))
    .catch(next)
