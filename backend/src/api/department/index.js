import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Department, { schema } from './model'

const router = new Router()
const { ID, Name, Nos } = schema.tree

/**
 * @api {post} /Departments Create department
 * @apiName CreateDepartment
 * @apiGroup Department
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiParam ID Department's ID.
 * @apiParam Name Department's Name.
 * @apiParam Nos Department's Nos.
 * @apiSuccess {Object} department Department's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Department not found.
 * @apiError 401 admin access only.
 */
router.post('/',
  token({ required: true, roles: ['admin'] }),
  body({ ID, Name, Nos }),
  create)

/**
 * @api {get} /Departments Retrieve departments
 * @apiName RetrieveDepartments
 * @apiGroup Department
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of departments.
 * @apiSuccess {Object[]} rows List of departments.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /Departments/:id Retrieve department
 * @apiName RetrieveDepartment
 * @apiGroup Department
 * @apiSuccess {Object} department Department's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Department not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /Departments/:id Update department
 * @apiName UpdateDepartment
 * @apiGroup Department
 * @apiParam ID Department's ID.
 * @apiParam Name Department's Name.
 * @apiParam Nos Department's Nos.
 * @apiSuccess {Object} department Department's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Department not found.
 */
router.put('/:id',
  body({ ID, Name, Nos }),
  update)

/**
 * @api {delete} /Departments/:id Delete department
 * @apiName DeleteDepartment
 * @apiGroup Department
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Department not found.
 */
router.delete('/:id',
  destroy)

export default router
