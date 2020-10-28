import React from 'react';
// import axios from 'axios'; BACKEND PART IMPORT IT
import './css/newAppointment.css';
import Navbar from './nav'

class newAppointment extends React.Component {

    constructor(){

        super();
        this.onChangeName=this.onChangeName.bind(this);
        this.onChangePhone=this.onChangePhone.bind(this);
        this.onChangeEmail=this.onChangeEmail.bind(this);
        this.onChangeAge=this.onChangeAge.bind(this);
        this.onChangeGender=this.onChangeGender.bind(this);
        this.onChangeDepartment=this.onChangeDepartment.bind(this);
        this.onChangeDate=this.onChangeDate.bind(this);
        this.onChangeTime=this.onChangeTime.bind(this);
        this.onChangeDescription=this.onChangeDescription.bind(this);
        this.onSubmit= this.onSubmit.bind(this);
        this.state ={
            name: '',
            phone: '',
            email: '',
            age: '',
            gender: '',
            department: '',
            date: '',
            time: '',
            description: '',
            msg: ''
        }
    }

    onChangeName(e){
        this.setState({name: e.target.value});
    }
    onChangePhone(e){
        this.setState({phone: e.target.value});
    }
    onChangeEmail(e){
        this.setState({email: e.target.value});
    }
    onChangeAge(e){
        this.setState({age: e.target.value});
    }
    onChangeGender(e){
        this.setState({gender: e.target.value});
    }
    onChangeDepartment(e){
        this.setState({department: e.target.value});
    }
    onChangeDate(e){
        this.setState({date: e.target.value});
    }
    onChangeTime(e){
        this.setState({time: e.target.value});
    }
    onChangeDescription(e){
        this.setState({description: e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        console.log('Form Submited');
        console.log(`NAME: ${this.state.name}`);
        console.log(`PHONE: ${this.state.phone}`);
        console.log(`EMAIL: ${this.state.email}`);
        console.log(`AGE: ${this.state.age}`);
        console.log(`GENDER: ${this.state.gender}`);
        console.log(`DEPARTMENT: ${this.state.department}`);
        console.log(`DATE: ${this.state.date}`);
        console.log(`TIME: ${this.state.time}`);
        console.log(`DESCRIPTIOND: ${this.state.description}`);
        
        // PASSING OBJECT TO BACKEND

        // const patientinfo= {
        //     name : this.state.name,
        //     phone : this.state.phone,
        //     email : this.state.email,
        //     age : this.state.age,
        //     gender : this.state.gender,
        //     department : this.state.department,
        //     date : this.state.date,
        //     time : this.state.time,
        //     description : this.state.description,
        // }
        
        // BACKEND PART
        // axios.post('http://localhost:3000/newappointment', patientinfo)
        //                        .then(res => {
        //                         console.log(res.data)
        //                         this.setState({ msg: 'APPOINTMENT REGISTRATION SUCCESSFUL' })
        //                         })
        //                         .catch( err => console.log(err))


        this.setState({
            name: '',
            phone: '',
            email: '',
            age: '',
            gender: '',
            department: '',
            date: '',
            time: '',
            description: '',
            msg: ''
        })
    }

    render() {
        return (
            <div>
                <Navbar></Navbar>
                <section class="appointment">
                    <h1 class="subHeading">Fill The below form for New Appointment</h1>
                    <h4 class="note"> * refers to mandatory</h4>
                    <h4>{this.state.msg}</h4>
                    <form action="noaction.php" method="post" class="form" onSubmit={this.onSubmit}>
                        <input type="text" name="id" id="patient_id" placeholder="patient_id*" class="formInput" required/>

                        <input type="text" name="name" id="name" placeholder="Your Name*" class="formInput"  required value={this.state.name} onChange={this.onChangeName}/>

                        <input type="phone" name="phone" id="phone" placeholder="Your Phone*" class="formInput"  required value={this.state.phone} onChange={this.onChangePhone}/>

                        <input type="email" name="email" id="email" placeholder="Your Email(optional)" class="formInput" value={this.state.email} onChange={this.onChangeEmail}/>

                        <input type="text" name="age" id="age" placeholder="Your Age*" class="formInput"  required value={this.state.age} onChange={this.onChangeAge}/>

                        <select type="text" name="gender" id="gender" placeholder="Gender*" class="formInput widthfix"  required value={this.state.gender} onChange={this.onChangeGender}>
                        <option value= "Male">Male</option>
                        <option value= "Female">Female</option>
                        <option value= "Other">Other</option>
                        </select>

                        <select type="text" name="department" id="department" placeholder="Department*" class="formInput widthfix"  required value={this.state.department} onChange={this.onChangeDepartment}>
                        <option value= "ENT">ENT</option>
                        <option value= "Orthopedic">Orthopedic</option>
                        <option value= "General Medicine">General Medicine</option>
                        <option value= "Chemo">Chemo</option>
                        </select>

                        <input type="date" name="date" id="date" class="formInput datetime" required value={this.state.date} onChange={this.onChangeDate}/>

                        <input type="time" name="time" id="time"  class="formInput datetime" required value={this.state.time} onChange={this.onChangeTime}/>

                        <textarea name="description" id="Description" cols="30" rows="10" placeholder="Ellaborate your concern*" class="formInput" required value={this.state.description} onChange={this.onChangeDescription}></textarea>

                        <button class="btn-submit btn-dark">Submit</button>
                    </form>
                </section>
            </div>
        );
    }
}
export default newAppointment