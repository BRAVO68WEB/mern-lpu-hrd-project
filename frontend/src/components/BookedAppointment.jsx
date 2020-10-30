import React, { useEffect, useState } from "react";
import Navbar from "./nav";
import "../components/css/bookedAppointment.css";
import { API } from "../helper/apicall";
import Axios from "axios";
import { Redirect } from "react-router";

function BookedAppointment(props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [routeRedirect, setRedirect] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await Axios(API + "/apointments");
      setData(result.data.rows);
      setIsLoading(false);
      console.log(result.data.rows);
    };

    fetchData();
  }, []);

  const removeData = (id) => {
    Axios.delete(API + `/apointments/${id}`).then((res) => {
      const del = data.filter((item) => id !== item.id);
      setData(del);
      setRedirect(true);
    });
  };

  const redirect = routeRedirect;
  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="container-booked">
        <table className="table table-responsive">
          <thead className="text-dark">
            <tr>
              <th scope="col">PatientName</th>
              {/* <th scope="col">DocterName</th> */}
              <th scope="col">Email</th>
              <th scope="col">PhoneNo</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Age</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {isLoading ? (
            <div>Loading ...</div>
          ) : (
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td className="text-center"> {item.PatientName}</td>
                  {/* <td className="text-center">{item.DocterName}</td> */}
                  <td className="text-center">{item.Email}</td>
                  <td className="text-center">{item.PhoneNo}</td>
                  <td className="text-center">{item.Date}</td>
                  <td className="text-center">{item.Time}</td>
                  <td className="text-center">{item.Age}</td>
                  <td className="text-center">{item.Description}</td>
                  <td className="text-center">
                    <button
                      onClick={() => removeData(item.id)}
                      className="btn-booked btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}

export default BookedAppointment;
