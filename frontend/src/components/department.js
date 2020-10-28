import React from 'react';
import Navbar from './nav'
// import healthimg from '../img/healthcare.jfif'
// import dentistimg from '../img/Dentist.jfif'
// import pediatricianimg from '../img/Pediatrician.jfif'
import './css/department.css'
class Department extends React.Component {
    render(){
        return(
            <div>
                <Navbar></Navbar>
                <section class="department">
                    <form action="noaction.php" class="departmentform">
                        <input type="text" name="id" id="doctor_id" placeholder="Doctor_id" class="departmentformInput"/>

                        <select type="text" name="department" id="department" placeholder="Department*" class="departmentformInput departmentwidthfix"  required>
                        <option value= "ENT">ENT</option>
                        <option value= "Orthopedic">Orthopedic</option>
                        <option value= "General Medicine">General Medicine</option>
                        <option value= "Chemo">Chemo</option>
                        </select>

                        <input type="text" name="numbers_of_doctors" id="numbers_of_doctors" placeholder="Numbers_of_Doctors" class="departmentformInput datetime"/>
                    </form>
                </section>
            </div>
        );
    }
}

export default Department