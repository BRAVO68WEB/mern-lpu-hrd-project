import { success, notFound } from '../../services/response/'
import { Appointment } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Appointment.create(body)
    .then((appointment) => appointment.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Appointment.count(query)
    .then(count => Appointment.find(query, select, cursor)
      .then((appointments) => ({
        count,
        rows: appointments.map((appointment) => appointment.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Appointment.findById(params.id)
    .then(notFound(res))
    .then((appointment) => appointment ? appointment.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Appointment.findById(params.id)
    .then(notFound(res))
    .then((appointment) => appointment ? Object.assign(appointment, body).save() : null)
    .then((appointment) => appointment ? appointment.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Appointment.findById(params.id)
    .then(notFound(res))
    .then((appointment) => appointment ? appointment.remove() : null)
    .then(success(res, 204))
    .catch(next)
