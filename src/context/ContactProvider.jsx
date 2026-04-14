
import { useState } from "react";
import { ContactContext } from "./ContactContext";


const ContactProvider = ({children}) => {

    const [allContact , setAllContact] = useState([])
    
    const data = {
        allContact , setAllContact
    }
    return (
        <ContactContext.Provider value={data}>
            {children}
        </ContactContext.Provider>
    );
};

export default ContactProvider;