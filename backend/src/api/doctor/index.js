import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { token } from "../../services/passport";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export Doctor, { schema } from "./model";

const router = new Router();
const { ID, Name, Dapartment } = schema.tree;

/**
 * @api {post} /Doctors Create doctor
 * @apiName CreateDoctor
 * @apiGroup Doctor
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiParam ID Doctor's ID.
 * @apiParam Name Doctor's Name.
 * @apiParam Dapartment Doctor's Dapartment.
 * @apiSuccess {Object} doctor Doctor's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Doctor not found.
 * @apiError 401 admin access only.
 */
router.post("/", create);

/**
 * @api {get} /Doctors Retrieve doctors
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
router.get("/", query(), index);

/**
 * @api {get} /Doctors/:id Retrieve doctor
 * @apiName RetrieveDoctor
 * @apiGroup Doctor
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiSuccess {Object} doctor Doctor's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Doctor not found.
 * @apiError 401 admin access only.
 */
router.get("/:id", show);

/**
 * @api {put} /Doctors/:id Update doctor
 * @apiName UpdateDoctor
 * @apiGroup Doctor
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiParam ID Doctor's ID.
 * @apiParam Name Doctor's Name.
 * @apiParam Dapartment Doctor's Dapartment.
 * @apiSuccess {Object} doctor Doctor's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Doctor not found.
 * @apiError 401 admin access only.
 */
router.put(
  "/:id",
  token({ required: true, roles: ["admin"] }),
  body({ ID, Name, Dapartment }),
  update
);

/**
 * @api {delete} /Doctors/:id Delete doctor
 * @apiName DeleteDoctor
 * @apiGroup Doctor
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Doctor not found.
 * @apiError 401 admin access only.
 */
router.delete("/:id", token({ required: true, roles: ["admin"] }), destroy);

export default router;
