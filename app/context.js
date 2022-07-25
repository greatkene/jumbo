import React, { useState, useContext, useEffect, useReducer } from "react";

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
    // ********** STATES FOR Managing togglings ******* */
    const [delivery, setDelivery] = useState(true)

    return (
        <AppContext.Provider value={{
            
            delivery,
            setDelivery
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}