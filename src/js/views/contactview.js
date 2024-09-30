import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/contactCard";

import { Context } from "../store/appContext";

import "../../styles/view.css";

export const ContactView = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {actions.loadContacts()}, [])

    const displayContacts = (list) => {
        return list.map((contact) => {
            return (<div key={contact.id} >
                <ContactCard fullname={contact.name} phone={contact.phone} address={contact.address} email={contact.email} contactid={contact.id}/>
            </div>)
        })
    }

    return(
        <div>
            <Link to="/add-contact">
                <button className="btn btn-success addButton mt-3">Add new contact</button>
            </Link>
            <div className="mt-4">{displayContacts(store.contacts)}</div>
        </div>
    )
}