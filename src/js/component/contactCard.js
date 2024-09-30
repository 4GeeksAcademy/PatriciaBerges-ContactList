import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/card.css";

export const ContactCard = (props) => {
      return(
        <div className="container d-flex justify-content-between contCard p-3">
            <div className="d-flex leftSide">
                <img className="contactPic ms-3" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmusicfeeds.com.au%2Fwp-content%2Fuploads%2Fsites%2F7%2F2021%2F02%2FRick-roll-2021.png&f=1&nofb=1&ipt=c7e7ed18aa6832873d97478a3380f4d925ef23784661f8a92bf1faef3e2834be&ipo=imageshttps://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyorkmix.com%2Fwp-content%2Fuploads%2F2019%2F11%2Frick-astley.jpg&f=1&nofb=1&ipt=2a219d42b6ac9702cb691e04cac9cb40954ab6d26154dac62a2ea8d684ee4dd4&ipo=images" ></img>
                <div className="props">
                    <h4>{props.name}</h4>
                    <h5>{props.address}</h5>
                    <p>{props.phone}</p>
                    <p>{props.email}</p>
                </div>
            </div>
            <div>
                <button className="contButton"><strong>E</strong></button>
                <button className="contButton"><strong>D</strong></button>
            </div>
        </div>
    )
}