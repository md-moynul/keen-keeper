
import { useState } from "react";
import { ContactContext } from "./ContactContext";


const ContactProvider = ({ children }) => {


    const [callContact, setCallContact] = useState([])
    const [textContact, setTextContact] = useState([])
    const [videoContact, setVideoContact] = useState([])
    const allContact = [...callContact, ...textContact, ...videoContact]
    const data = {
        allContact,
        callContact,
        textContact,
        videoContact,
        setCallContact,
        setTextContact,
        setVideoContact
    }
    return (
        <ContactContext.Provider value={data}>
            {children}
        </ContactContext.Provider>
    );
};

export default ContactProvider;