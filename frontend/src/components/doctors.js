import React from 'react';
import Navbar from './nav'
import './css/doctor.css'
class Doctors extends React.Component {
    render(){
        return(
            <div>
                <Navbar></Navbar>
                <section class="doctor">
                    <form action="noaction.php" class="doctorform">
                        <input type="text" name="id" id="doctor_id" placeholder="Doctor_id" class="departmentformInput"/>

                        <input type="text" name="doctor_name" id="doctor_name" placeholder="Doctor_Name" class="doctorformInput datetime"/>

                        <select type="text" name="department" id="department" placeholder="Department*" class="doctorformInput doctorwidthfix"  required>
                        <option value= "ENT">ENT</option>
                        <option value= "Orthopedic">Orthopedic</option>
                        <option value= "General Medicine">General Medicine</option>
                        <option value= "Chemo">Chemo</option>
                        </select>
                    </form>
                </section>
            </div>
        );
    }
}

export default Doctors