import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/add.css";

export const AddContact = () => {
    const { store, actions } = useContext(Context);

    const [inputName, setInputName] = useState("")
    const [inputEmail, setInputEmail] = useState("")
    const [inputPhone, setInputPhone] = useState("")
    const [inputAddress, setInputAddress] = useState("")

    const handleName = (e) => {
        setInputName(e.target.value)
    }

    const handleEmail = (e) => {
        setInputEmail(e.target.value)
    }

    const handlePhone = (e) => {
        setInputPhone(e.target.value)
    }

    const handleAddress = (e) => {
        setInputAddress(e.target.value)
    }

    const addContact = () => {
        let newContact = {
            "name": inputName,
            "phone": inputPhone,
            "email": inputEmail,
            "address": inputAddress
          }
        actions.addContact(newContact) 
        setInputName("")
        setInputAddress("")
        setInputEmail("")
        setInputPhone("")
    }

    return (
        <div className="d-flex flex-column">
            <h1 className="mt-5"><strong>Add a new contact</strong></h1>
            <div className="input-group m-3 row">
                <label name="full-name" className="col-12 ms-4"><strong>Full Name</strong></label>
                <input type="text" className="form-control col-12 m-4 mt-1 me-5" placeholder="Full Name" id="full-name" value={inputName} onChange={handleName}></input>
            </div>
            <div className="input-group m-3 row">
                <label name="email" className="col-12 ms-4"><strong>Email</strong></label>
                <input type="text" className="form-control col-12 m-4 mt-1 me-5" placeholder="Enter email" id="email" value={inputEmail} onChange={handleEmail}></input>
            </div>
            <div className="input-group m-3 row">
                <label name="phone" className="col-12 ms-4"><strong>Phone</strong></label>
                <input type="text" className="form-control col-12 m-4 mt-1 me-5" placeholder="Enter phone" id="phone" value={inputPhone} onChange={handlePhone}></input>
            </div>
            <div className="input-group m-3 row">
                <label name="address" className="col-12 ms-4"><strong>Address</strong></label>
                <input type="text" className="form-control col-12 m-4 mt-1 me-5" placeholder="Enter address" id="address" value={inputAddress} onChange={handleAddress}></input>
            </div>
            <div className="m-3 me-5 row">
                <button type="button" className="btn btn-primary col-12 m-4 mt-1" onClick={addContact}>Save</button>
                <Link className="ms-4" to="/">
                Get back to contacts
                </Link>
            </div>
        </div>
    )
}