import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/add.css";

export const AddContact = () => {
    const { store, actions } = useContext(Context);
    
    return (
        <div className="d-flex flex-column">
            <h1 className="mt-5"><strong>Add a new contact</strong></h1>
            <div className="input-group m-3 row">
                <label for="full-name" className="col-12 ms-4"><strong>Full Name</strong></label>
                <input type="text" className="form-control col-12 m-4 mt-1 me-5" placeholder="Full Name" id="full-name"></input>
            </div>
            <div className="input-group m-3 row">
                <label for="email" className="col-12 ms-4"><strong>Email</strong></label>
                <input type="text" className="form-control col-12 m-4 mt-1 me-5" placeholder="Enter email" id="email"></input>
            </div>
            <div className="input-group m-3 row">
                <label for="phone" className="col-12 ms-4"><strong>Phone</strong></label>
                <input type="text" className="form-control col-12 m-4 mt-1 me-5" placeholder="Enter phone" id="phone"></input>
            </div>
            <div className="input-group m-3 row">
                <label for="address" className="col-12 ms-4"><strong>Address</strong></label>
                <input type="text" className="form-control col-12 m-4 mt-1 me-5" placeholder="Enter address" id="address"></input>
            </div>
            <div className="m-3 me-5 row">
                <button type="button" className="btn btn-primary col-12 m-4 mt-1">Save</button>
                <Link className="ms-4" to="/">
                Get back to contacts
                </Link>
            </div>
        </div>
    )
}