import React, { useContext, useState } from "react";

import { Context } from "../store/appContext";

import "../../styles/card.css";

export const ContactCard = (props) => {

    const { actions } = useContext(Context);

    
    const deleteContact = (e) => {
        let id = e.target.value
        actions.delContact(id)
    }

    const [inputName, setInputName] = useState("")
    const [inputEmail, setInputEmail] = useState("")
    const [inputPhone, setInputPhone] = useState("")
    const [inputAddress, setInputAddress] = useState("")

    const handleModal = () => {
        setInputName(props.fullname)
        setInputEmail(props.email)
        setInputPhone(props.phone)
        setInputAddress(props.address)
        console.log(props.fullname)
    }

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

    const updateContact = () => {
        let updatedContact = {
            "name": inputName,
            "phone": inputPhone,
            "email": inputEmail,
            "address": inputAddress
        }
        let id = props.contactid
        actions.updContact(updatedContact, id)
    }

      return(
        <div className="container d-flex justify-content-between contCard p-3">
            <div className="d-flex leftSide">
                <img className="contactPic ms-3" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmusicfeeds.com.au%2Fwp-content%2Fuploads%2Fsites%2F7%2F2021%2F02%2FRick-roll-2021.png&f=1&nofb=1&ipt=c7e7ed18aa6832873d97478a3380f4d925ef23784661f8a92bf1faef3e2834be&ipo=imageshttps://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyorkmix.com%2Fwp-content%2Fuploads%2F2019%2F11%2Frick-astley.jpg&f=1&nofb=1&ipt=2a219d42b6ac9702cb691e04cac9cb40954ab6d26154dac62a2ea8d684ee4dd4&ipo=images" ></img>
                <div className="props">
                    <h4>{props.fullname}</h4>
                    <h5>{props.address}</h5>
                    <p>{props.phone}</p>
                    <p>{props.email}</p>
                </div>
            </div>
            <div>
                <button className="contButton" value={props.contactid} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleModal}>E</button>
                <button className="contButton" value={props.contactid} onClick={deleteContact}>D</button>
            </div>
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Update Contact</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body d-flex flex-column">
                                <label name="fullName"className="me-2">Full Name: </label>
                                <input type="text" id="fullName" value={inputName} onChange={handleName}></input>
                                <label name="email"className="me-2">Email: </label>
                                <input type="text" id="email" value={inputEmail} onChange={handleEmail}></input>
                                <label name="phone"className="me-2">Phone: </label>
                                <input type="text" id="phone" value={inputPhone} onChange={handlePhone}></input>
                                <label name="address"className="me-2">Address: </label>
                                <input type="text" id="address" value={inputAddress} onChange={handleAddress}></input>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={updateContact}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}