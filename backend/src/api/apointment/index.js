import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export Apointment, { schema } from "./model";

const router = new Router();
const {
  No,
  PatientName,
  docID,
  Email,
  PhoneNo,
  Date,
  Time,
  depID,
  Msg,
  Age,
} = schema.tree;

/**
 * @api {post} /apointments Create apointment
 * @apiName CreateApointment
 * @apiGroup Apointment
 * @apiParam No Apointment's No.
 * @apiParam PatientName Apointment's PatientName.
 * @apiParam DocterName Apointment's DocterName.
 * @apiParam Email Apointment's Email.
 * @apiParam PhoneNo Apointment's PhoneNo.
 * @apiParam Date Apointment's Date.
 * @apiParam Time Apointment's Time.
 * @apiParam Department Apointment's Department.
 * @apiSuccess {Object} apointment Apointment's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Apointment not found.
 */
router.post(
  "/",
  body({
    No,
    PatientName,
    docID,
    Email,
    PhoneNo,
    Date,
    Time,
    depID,
    Msg,
    Age,
  }),
  create
);

/**
 * @api {get} /apointments Retrieve apointments
 * @apiName RetrieveApointments
 * @apiGroup Apointment
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of apointments.
 * @apiSuccess {Object[]} rows List of apointments.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/", query(), index);

/**
 * @api {get} /apointments/:id Retrieve apointment
 * @apiName RetrieveApointment
 * @apiGroup Apointment
 * @apiSuccess {Object} apointment Apointment's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Apointment not found.
 */
router.get("/:id", show);

/**
 * @api {put} /apointments/:id Update apointment
 * @apiName UpdateApointment
 * @apiGroup Apointment
 * @apiParam No Apointment's No.
 * @apiParam PatientName Apointment's PatientName.
 * @apiParam DocterName Apointment's DocterName.
 * @apiParam Email Apointment's Email.
 * @apiParam PhoneNo Apointment's PhoneNo.
 * @apiParam Date Apointment's Date.
 * @apiParam Time Apointment's Time.
 * @apiParam Department Apointment's Department.
 * @apiSuccess {Object} apointment Apointment's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Apointment not found.
 */
router.put(
  "/:id",
  body({
    No,
    PatientName,
    docID,
    Email,
    PhoneNo,
    Date,
    Time,
    depID,
    Msg,
    Age,
  }),
  update
);

/**
 * @api {delete} /apointments/:id Delete apointment
 * @apiName DeleteApointment
 * @apiGroup Apointment
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Apointment not found.
 */
router.delete("/:id", destroy);

export default router;
