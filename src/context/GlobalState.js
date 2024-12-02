import React, {createContext , useReducer } from "react";

import AppReducer from "./AppReducer";
//Create an Initial State 
const initialState = {
    transactions: [
        {id: 1, description: "Income 1" , transactionAmount: 1000},
        {id: 2, description: "Expense 1" , transactionAmount: -100},
        {id: 3, description: "Income 2" , transactionAmount: 3000},
        {id: 4, description: "Expense 2" , transactionAmount: -1000}
    ]
}
//Create a Global Context
export const GlobalContext = createContext(initialState);



//Create a Provider for Global Context 
export const GlobalProvider = ({children}) =>{

    let [state , dispatch] = useReducer(AppReducer , initialState)

    return(
        <GlobalContext.Provider value={ 
            {
                transactions: state.transactions
            }
         }>
                {children}
        </GlobalContext.Provider>
    )
}