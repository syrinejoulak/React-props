import React from "react"
import Profil from "./Profil/Profil"
import image from "./Profil/profilepic.jpg"

const App = () => {
    const handleName = (nom) => {
    alert(nom)
    }
return (
    <div style ={{textAlign : "center"}}>
    <Profil  gererNom={handleName} fullName="Syrine Joulak" profession="Fullstack Developer" bio ="Innovative optimized solution seeker. Excited to be at the deployment phase of my new career as a web developer. I am ambitious, adventurous, assiduous, animated, and an alliteration advocate.">
    <img src= {image} style={{width : "10%"}}></img>
     </Profil>
     </div>

)
}

export default App