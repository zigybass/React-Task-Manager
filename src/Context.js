import React, { useState } from "react";


export const TaskContext = React.createContext();

//React Hooks could go here. useState?
export const TaskProvider = (props) => {

    const State = {
        fun: "Test Fun",
        boring: "Test Boring",
    }
    
    return (
        <TaskContext.Provider value={State}>
            {props.children}
        </TaskContext.Provider>
    );
}



