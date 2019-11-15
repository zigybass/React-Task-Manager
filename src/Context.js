import React, { useState } from "react";


export const TaskContext = React.createContext();

//React Hooks could go here. useState?
export const TaskProvider = (props) => {

    const State = {
        test: "Hello"
    }
    
    return (
        <TaskContext.Provider value={State}>
            {props.children}
        </TaskContext.Provider>
    );
}



