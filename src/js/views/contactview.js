import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const ContactView = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {actions.loadContacts()}, [])

    const displayContacts = (list) => {
        return list.map((contact, index) => {
            return (<div key={index}>
                <p>Name: {contact.name}</p>
                <p>Phone number: {contact.phone}</p>
                <p>email: {contact.email}</p>
                <p>Address: {contact.address}</p>
            </div>)
        })
    }

    return(
        <div>
            {displayContacts(store.contacts)}
        </div>
    )
}