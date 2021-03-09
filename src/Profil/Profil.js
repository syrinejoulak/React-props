import React from 'react';
import PropTypes from "prop-types";

const Profil = ({fullName, bio, profession, children, gererNom}) => {
    gererNom (fullName)
return (
    <div>
        <div>{children}</div>
        <div><span>Full Name : {fullName}</span></div>
        <div><span>Profession : {profession}</span></div>
        <div><span>{bio}</span></div>

        

    </div>
)
}
Profil.defaultProps = {
    fullName : "anonymous",
    bio : "Empty",
    profession : "Undefined"
}
Profil.propTypes = {
    fullName : PropTypes.string,
    bio : PropTypes.string,
    profession : PropTypes.string
}

export default Profil