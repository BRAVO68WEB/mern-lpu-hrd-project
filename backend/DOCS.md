# docter-appointment v1.0.0



- [Appointment](#appointment)
	- [Create appointment](#create-appointment)
	- [Delete appointment](#delete-appointment)
	- [Retrieve appointment](#retrieve-appointment)
	- [Retrieve appointments](#retrieve-appointments)
	- [Update appointment](#update-appointment)
	
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
	


# Appointment

## Create appointment



	POST /appointments


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| No			| 			|  <p>Appointment's No.</p>							|
| Patient-Name			| 			|  <p>Appointment's Patient-Name.</p>							|
| Docter-Name			| 			|  <p>Appointment's Docter-Name.</p>							|
| Date			| 			|  <p>Appointment's Date.</p>							|
| Time			| 			|  <p>Appointment's Time.</p>							|
| Departent			| 			|  <p>Appointment's Departent.</p>							|

## Delete appointment



	DELETE /appointments/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|

## Retrieve appointment



	GET /appointments/:id


## Retrieve appointments



	GET /appointments


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update appointment



	PUT /appointments/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| No			| 			|  <p>Appointment's No.</p>							|
| Patient-Name			| 			|  <p>Appointment's Patient-Name.</p>							|
| Docter-Name			| 			|  <p>Appointment's Docter-Name.</p>							|
| Date			| 			|  <p>Appointment's Date.</p>							|
| Time			| 			|  <p>Appointment's Time.</p>							|
| Departent			| 			|  <p>Appointment's Departent.</p>							|

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



	POST /departments


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| Id			| 			|  <p>Department's Id.</p>							|
| Name			| 			|  <p>Department's Name.</p>							|
| Nos.			| 			|  <p>of Doctor Department's Nos. of Doctor.</p>							|

## Delete department



	DELETE /departments/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|

## Retrieve department



	GET /departments/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|

## Retrieve departments



	GET /departments


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update department



	PUT /departments/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| Id			| 			|  <p>Department's Id.</p>							|
| Name			| 			|  <p>Department's Name.</p>							|
| Nos.			| 			|  <p>of Doctor Department's Nos. of Doctor.</p>							|

# Doctor

## Create doctor



	POST /doctors


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| Id			| 			|  <p>Doctor's Id.</p>							|
| Name			| 			|  <p>Doctor's Name.</p>							|
| Department			| 			|  <p>Doctor's Department.</p>							|

## Delete doctor



	DELETE /doctors/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|

## Retrieve doctor



	GET /doctors/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|

## Retrieve doctors



	GET /doctors


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



	PUT /doctors/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| Id			| 			|  <p>Doctor's Id.</p>							|
| Name			| 			|  <p>Doctor's Name.</p>							|
| Department			| 			|  <p>Doctor's Department.</p>							|

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


