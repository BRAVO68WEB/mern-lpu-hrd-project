import React, { useEffect, useState } from "react";
import axios from "axios"; //BACKEND PART IMPORT IT
import "./css/newAppointment.css";
import Navbar from "./nav";
import { Redirect } from "react-router";
import { API } from "../helper/apicall";

const NewAppointment = () => {
  const [PatientName, setPatientName] = useState("");
  const [DocterName, setDocterName] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNo, setPhoneNo] = useState("");
  const [Date, setDate] = useState("");
  const [Time, setTime] = useState("");
  const [Age, setAge] = useState("");
  const [Description, setDescription] = useState("");
  const [Department, setDepartment] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [routeRedirect, setRedirect] = useState("");
  const createItem = (e) => {
    e.preventDefault();
    const item = {
      PatientName: PatientName,
      // DocterName: DocterName,
      Email: Email,
      PhoneNo: PhoneNo,
      Date: Date,
      Time: Time,
      Age: Age,
      Description: Description,
      // Department: Department,
    };

    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    };

    if (
      PatientName &&
      // DocterName &&
      Email &&
      PhoneNo &&
      Date &&
      Time &&
      Age &&
      Description
      // Department
    ) {
      fetch(API + "/apointments", options).then((res) => {
        console.log(res);
        setRedirect(true);
      });
    } else {
      console.log("The form is not valid to be sent");
    }
  };
  const redirect = routeRedirect;
  if (redirect) {
    return <Redirect to="/" />;
  }

  const createApppointmentForm = () => (
    <div>
      <Navbar></Navbar>
      <section className="appointment">
        <h1 className="subHeading">Fill The below form for New Appointment</h1>
        <h4 className="note"> * refers to mandatory</h4>
        <form className="form" onSubmit={createItem}>
          <input
            type="text"
            id="name"
            name="PatientName"
            onChange={(e) => setPatientName(e.target.value)}
            placeholder="Your Name*"
            className="formInput"
            required
          />

          {/* <input
            type="text"
            id="name"
            placeholder="Doctor Name*"
            className="formInput"
            name="DocterName"
            onChange={(e) => setDocterName(e.target.value)}
            value={DocterName}
            required
          /> */}

          <input
            type="email"
            id="email"
            placeholder="Your Email(optional)"
            onChange={(e) => setEmail(e.target.value)}
            className="formInput"
            name="Email"
          />
          <input
            type="phone"
            id="phone"
            name="PhoneNo"
            placeholder="Your Phone*"
            className="formInput"
            onChange={(e) => setPhoneNo(e.target.value)}
            value={PhoneNo}
            required
          />

          <input
            type="date"
            id="date"
            className="formInput datetime"
            onChange={(e) => setDate(e.target.value)}
            name="Date"
            required
          />

          <input
            type="time"
            id="time"
            className="formInput datetime"
            onChange={(e) => setTime(e.target.value)}
            name="Time"
            required
          />
          <input
            type="number"
            className="formInput datetime"
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
            name="Age"
            required
          />
          <textarea
            type="text"
            className="formInput datetime"
            placeholder="Elaborate your problem"
            onChange={(e) => setDescription(e.target.value)}
            name="Msg"
            required
          />

          <button className="btn-submit btn-dark">Submit</button>
        </form>
      </section>
    </div>
  );

  return (
    <div className="row bg-dark text-white rounded">
      <div className="col-md-8 offset-md-2">{createApppointmentForm()}</div>
    </div>
  );
};

export default NewAppointment;
