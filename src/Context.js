import React, { useState } from "react";

export const TaskContext = React.createContext();

export const TaskProvider = (props) => {
    return (
        <TaskContext.Provider value={"Hello"}>
            {props.children}
        </TaskContext.Provider>
    );
}



