import { useEffect, useState } from "react"
import '../../styles/routes/EntryExit.scss'

export default function CampusResponse() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [college, setCollege] = useState("");
    const [time, setTime] = useState()
    useEffect(() => {
        setName(localStorage.getItem("NAME"));
        setPhone(localStorage.getItem("PHONE"));
        setTime(Date(localStorage.getItem("TIME")).toLocaleString());
        setCollege(localStorage.getItem("COLLEGE"));
    }, [])
    
    return (
        <div className="ResponseMainContainer">
            <p className="ResponseMainContainer__title">YOUR RESPONSE HAS BEEN SAVED</p>
            <p className="ResponseMainContainer__text">NAME : <span>{name}</span></p>
            <p className="ResponseMainContainer__text">PHONE : <span>{phone}</span></p>
            <p className="ResponseMainContainer__text">COLLEGE : <span>{college}</span></p>
            <p className="ResponseMainContainer__text">TIME : <span>{time}</span></p>
            <p className="ResponseMainContainer__bottom">Please show this to the <span>SURGE SECURITY TEAM</span></p>
        </div>
    )
}