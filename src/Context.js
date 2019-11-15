import React, { useState } from "react";


export const TaskContext = React.createContext();

//React Hooks could go here. useState?
export const TaskProvider = (props) => {

    const State = {
        test: "Hello",
        style: {width: "70%"}
    }
    
    return (
        <TaskContext.Provider value={State}>
            {props.children}
        </TaskContext.Provider>
    );
}



