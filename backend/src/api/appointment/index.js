import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Appointment, { schema } from './model'

const router = new Router()
const { No, PatientName, DocterName, Date, Time, Departent } = schema.tree

/**
 * @api {post} /appointments Create appointment
 * @apiName CreateAppointment
 * @apiGroup Appointment
 * @apiParam No Appointment's No.
 * @apiParam PatientName Appointment's PatientName.
 * @apiParam DocterName Appointment's DocterName.
 * @apiParam Date Appointment's Date.
 * @apiParam Time Appointment's Time.
 * @apiParam Departent Appointment's Departent.
 * @apiSuccess {Object} appointment Appointment's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Appointment not found.
 */
router.post('/',
  body({ No, PatientName, DocterName, Date, Time, Departent }),
  create)

/**
 * @api {get} /appointments Retrieve appointments
 * @apiName RetrieveAppointments
 * @apiGroup Appointment
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of appointments.
 * @apiSuccess {Object[]} rows List of appointments.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 admin access only.
 */
router.get('/',
  token({ required: true, roles: ['admin'] }),
  query(),
  index)

/**
 * @api {get} /appointments/:id Retrieve appointment
 * @apiName RetrieveAppointment
 * @apiGroup Appointment
 * @apiSuccess {Object} appointment Appointment's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Appointment not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /appointments/:id Update appointment
 * @apiName UpdateAppointment
 * @apiGroup Appointment
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiParam No Appointment's No.
 * @apiParam PatientName Appointment's PatientName.
 * @apiParam DocterName Appointment's DocterName.
 * @apiParam Date Appointment's Date.
 * @apiParam Time Appointment's Time.
 * @apiParam Departent Appointment's Departent.
 * @apiSuccess {Object} appointment Appointment's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Appointment not found.
 * @apiError 401 admin access only.
 */
router.put('/:id',
  token({ required: true, roles: ['admin'] }),
  body({ No, PatientName, DocterName, Date, Time, Departent }),
  update)

/**
 * @api {delete} /appointments/:id Delete appointment
 * @apiName DeleteAppointment
 * @apiGroup Appointment
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Appointment not found.
 * @apiError 401 admin access only.
 */
router.delete('/:id',
  token({ required: true, roles: ['admin'] }),
  destroy)

export default router
