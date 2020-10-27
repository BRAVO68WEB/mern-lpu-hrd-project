# doctor-apointment v0.0.0



- [Apointment](#apointment)
	- [Create apointment](#create-apointment)
	- [Delete apointment](#delete-apointment)
	- [Retrieve apointment](#retrieve-apointment)
	- [Retrieve apointments](#retrieve-apointments)
	- [Update apointment](#update-apointment)
	
- [Auth](#auth)
	- [Authenticate](#authenticate)
	
- [Department](#department)
	- [Create department](#create-department)
	- [Delete department](#delete-department)
	- [Retrieve department](#retrieve-department)
	- [Retrieve departments](#retrieve-departments)
	- [Update department](#update-department)
	
- [Doctor](#doctor)
	- [Create doctor](#create-doctor)
	- [Delete doctor](#delete-doctor)
	- [Retrieve doctor](#retrieve-doctor)
	- [Retrieve doctors](#retrieve-doctors)
	- [Update doctor](#update-doctor)
	
- [User](#user)
	- [Create user](#create-user)
	- [Delete user](#delete-user)
	- [Retrieve current user](#retrieve-current-user)
	- [Retrieve user](#retrieve-user)
	- [Retrieve users](#retrieve-users)
	- [Update password](#update-password)
	- [Update user](#update-user)
	


# Apointment

## Create apointment



	POST /apointments


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| No			| 			|  <p>Apointment's No.</p>							|
| PatientName			| 			|  <p>Apointment's PatientName.</p>							|
| DocterName			| 			|  <p>Apointment's DocterName.</p>							|
| Email			| 			|  <p>Apointment's Email.</p>							|
| PhoneNo			| 			|  <p>Apointment's PhoneNo.</p>							|
| Date			| 			|  <p>Apointment's Date.</p>							|
| Time			| 			|  <p>Apointment's Time.</p>							|
| Department			| 			|  <p>Apointment's Department.</p>							|

## Delete apointment



	DELETE /apointments/:id


## Retrieve apointment



	GET /apointments/:id


## Retrieve apointments



	GET /apointments


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update apointment



	PUT /apointments/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| No			| 			|  <p>Apointment's No.</p>							|
| PatientName			| 			|  <p>Apointment's PatientName.</p>							|
| DocterName			| 			|  <p>Apointment's DocterName.</p>							|
| Email			| 			|  <p>Apointment's Email.</p>							|
| PhoneNo			| 			|  <p>Apointment's PhoneNo.</p>							|
| Date			| 			|  <p>Apointment's Date.</p>							|
| Time			| 			|  <p>Apointment's Time.</p>							|
| Department			| 			|  <p>Apointment's Department.</p>							|

# Auth

## Authenticate



	POST /auth

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Basic authorization with email and password.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Master access_token.</p>							|

# Department

## Create department



	POST /Departments


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| ID			| 			|  <p>Department's ID.</p>							|
| Name			| 			|  <p>Department's Name.</p>							|
| Nos			| 			|  <p>Department's Nos.</p>							|

## Delete department



	DELETE /Departments/:id


## Retrieve department



	GET /Departments/:id


## Retrieve departments



	GET /Departments


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update department



	PUT /Departments/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| ID			| 			|  <p>Department's ID.</p>							|
| Name			| 			|  <p>Department's Name.</p>							|
| Nos			| 			|  <p>Department's Nos.</p>							|

# Doctor

## Create doctor



	POST /Doctors


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| ID			| 			|  <p>Doctor's ID.</p>							|
| Name			| 			|  <p>Doctor's Name.</p>							|
| Dapartment			| 			|  <p>Doctor's Dapartment.</p>							|

## Delete doctor



	DELETE /Doctors/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|

## Retrieve doctor



	GET /Doctors/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|

## Retrieve doctors



	GET /Doctors


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update doctor



	PUT /Doctors/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| ID			| 			|  <p>Doctor's ID.</p>							|
| Name			| 			|  <p>Doctor's Name.</p>							|
| Dapartment			| 			|  <p>Doctor's Dapartment.</p>							|

# User

## Create user



	POST /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Master access_token.</p>							|
| email			| String			|  <p>User's email.</p>							|
| password			| String			|  <p>User's password.</p>							|
| name			| String			| **optional** <p>User's name.</p>							|
| picture			| String			| **optional** <p>User's picture.</p>							|
| role			| String			| **optional** <p>User's role.</p>							|

## Delete user



	DELETE /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve current user



	GET /users/me


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve user



	GET /users/:id


## Retrieve users



	GET /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update password



	PUT /users/:id/password

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Basic authorization with email and password.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| password			| String			|  <p>User's new password.</p>							|

## Update user



	PUT /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| name			| String			| **optional** <p>User's name.</p>							|
| picture			| String			| **optional** <p>User's picture.</p>							|


