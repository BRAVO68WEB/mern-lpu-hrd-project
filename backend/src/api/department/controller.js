import { success, notFound } from '../../services/response/'
import { Department } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Department.create(body)
    .then((department) => department.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Department.count(query)
    .then(count => Department.find(query, select, cursor)
      .then((departments) => ({
        count,
        rows: departments.map((department) => department.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Department.findById(params.id)
    .then(notFound(res))
    .then((department) => department ? department.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Department.findById(params.id)
    .then(notFound(res))
    .then((department) => department ? Object.assign(department, body).save() : null)
    .then((department) => department ? department.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Department.findById(params.id)
    .then(notFound(res))
    .then((department) => department ? department.remove() : null)
    .then(success(res, 204))
    .catch(next)
