import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Doctor, { schema } from './model'

const router = new Router()
const { Id, Name, Department } = schema.tree

/**
 * @api {post} /doctors Create doctor
 * @apiName CreateDoctor
 * @apiGroup Doctor
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiParam Id Doctor's Id.
 * @apiParam Name Doctor's Name.
 * @apiParam Department Doctor's Department.
 * @apiSuccess {Object} doctor Doctor's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Doctor not found.
 * @apiError 401 admin access only.
 */
router.post('/',
  token({ required: true, roles: ['admin'] }),
  body({ Id, Name, Department }),
  create)

/**
 * @api {get} /doctors Retrieve doctors
 * @apiName RetrieveDoctors
 * @apiGroup Doctor
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of doctors.
 * @apiSuccess {Object[]} rows List of doctors.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 admin access only.
 */
router.get('/',
  token({ required: true, roles: ['admin'] }),
  query(),
  index)

/**
 * @api {get} /doctors/:id Retrieve doctor
 * @apiName RetrieveDoctor
 * @apiGroup Doctor
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiSuccess {Object} doctor Doctor's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Doctor not found.
 * @apiError 401 admin access only.
 */
router.get('/:id',
  token({ required: true, roles: ['admin'] }),
  show)

/**
 * @api {put} /doctors/:id Update doctor
 * @apiName UpdateDoctor
 * @apiGroup Doctor
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiParam Id Doctor's Id.
 * @apiParam Name Doctor's Name.
 * @apiParam Department Doctor's Department.
 * @apiSuccess {Object} doctor Doctor's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Doctor not found.
 * @apiError 401 admin access only.
 */
router.put('/:id',
  token({ required: true, roles: ['admin'] }),
  body({ Id, Name, Department }),
  update)

/**
 * @api {delete} /doctors/:id Delete doctor
 * @apiName DeleteDoctor
 * @apiGroup Doctor
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Doctor not found.
 * @apiError 401 admin access only.
 */
router.delete('/:id',
  token({ required: true, roles: ['admin'] }),
  destroy)

export default router
