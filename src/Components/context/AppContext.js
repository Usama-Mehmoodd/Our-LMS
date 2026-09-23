// import React from "react";


// const AppContext = React.createContext({
//     showCanva: false,
    
//   });

//   export default AppContext;

import React, { createContext, useContext, useState } from "react";

const AppContext = createContext({
    showCanva: false,
    toggleCanva: () => {}
});

export function AppProvider({ children }) {

    const [showCanva, setShowCanva] = useState(true);

    const toggleCanva = () => {
        setShowCanva(prev => !prev);
    };

    return (
        <AppContext.Provider
            value={{
                showCanva,
                toggleCanva
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export function useApp() {
    return useContext(AppContext);
}

export default AppContext;