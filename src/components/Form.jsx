import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { firstVolunteers } from '../collabs.js';
import List from './List.jsx';
import Search from './Search.jsx';
import './Form.css';


function Form(){

    const [volunteers, setVolunteers] = useState(firstVolunteers);
    const [newVolunteer, setNewVolunteer] = useState({name:"test"});

    const instagramValidation = /^(?:@)([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)/;
    const phoneValidation = /^9\d{8}$/;

    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [specialty, setSpecialty] = useState("");
    const [instagram, setInstagram] = useState("");
    const [phone, setPhone] = useState ("");
    const [error, setError] = useState({});;
    const [filteredVolunteer, setFilteredVolunteer] = useState([])

    console.log(filteredVolunteer)

    const filterHandler = (searchValue) => {
        if(searchValue){
        const filteredVolunteer = volunteers.filter((volunteer) => {
            return (
                volunteer.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                volunteer.city.toLowerCase().includes(searchValue.toLowerCase()) ||
                volunteer.specialty.toLowerCase().includes(searchValue.toLowerCase()) ||
                volunteer.instagram.toLowerCase().includes(searchValue.toLowerCase()) ||
                volunteer.phone.toString().includes(searchValue.toString())
            );
        });
        setFilteredVolunteer(filteredVolunteer);
    } else {
        setFilteredVolunteer(volunteers);
    }
    };

    const infoChecker = (e) => {
        e.preventDefault();
        setError({});

        const newError = {}

        if (name === "") {
            newError.name = "The name is empty";
        }
        if (city === "") {
            newError.city = "The city is empty";
        }
        if (specialty === "") {
            newError.specialty = "The specialty is empty";
        }
        if (!instagramValidation.test( instagram ) || instagram === "") {
            newError.instagram = "The user of instagram is wrong. It must start in @";
        }
        if (!phoneValidation.test(phone)) {
            newError.phone = "The phone is invalid";
        }

        if (Object.keys(newError).length === 0) {
            const data = {name: name, city: city, specialty: specialty, instagram: instagram, phone: phone}
            console.log(newVolunteer, "This is the new volunteer")
            setVolunteers([...volunteers, data]);
            setName("");
            setCity("");
            setSpecialty("");
            setInstagram("");
            setPhone("");
          } else {
            setError(newError);
          }
          console.log(volunteers)
    }

    // const deleteVolunteer = (id) => {
    //     const updatedVolunteers = volunteers.splice((volunteer) => volunteer.id !== id);
    // }


            return (
        <>  
            <div className="col-4 mx-4 align-middle">
                <form onSubmit={(e) => infoChecker(e)}>
                    <div class="my-2 input">
                        <input type="text" class="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name & last name"/>
                        {error.name && <p className="text-danger">{error.name}</p>}
                        {console.log({name})}
                    </div>
                    <div class="my-2 input">
                        <input type="text" class="form-control" id="city" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City"/>
                        {error.city && <p className="text-danger">{error.city}</p>}
                    </div>
                    <div class="my-2 input">
                        <input type="text" class="form-control" id="Specialty" value={specialty} onChange={(e) => setSpecialty(e.target.value)} placeholder="Specialty"/>
                        {error.specialty && <p className="text-danger">{error.specialty}</p>}
                    </div>
                    <div class="my-2 input">
                        <input type="text" class="form-control" id="Instagram" value={instagram} onChange={(e) => setInstagram(e.target.value)} placeholder="@user.of.instagram"/>
                        {error.instagram && <p className="text-danger">{error.instagram}</p>}
                    </div>
                    <div class="my-2 input">
                        <input type="text" class="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone"/>
                        {error.phone && <p className="text-danger">{error.phone}</p>}
                    </div>
                    <button type="submit" class="btn btn-primary input" >Submit</button>
                </form>
            </div>
            <div className="col-6 mx-4 align-middle d-flex flex-column">
                <div>
                    <Search onFilter={filterHandler}/>
                </div>
                <List volunteers={filteredVolunteer.length > 0 ? filteredVolunteer: volunteers}/>
            </div>
        </>
    )
};

export default Form;