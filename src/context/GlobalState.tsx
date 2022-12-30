import { createContext, useReducer } from "react"
import AppReducer from './AppReducer';

export type Transaction = {
    id: number
    text: string
    amount: number
}

type context = {
    transactions: Transaction[],
    deleteTransaction: Function,
    addTransaction: Function
}

const initialState: context = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 3, text: 'Book', amount: 45 },
        { id: 2, text: 'Salary', amount: 2500 },
        { id: 4, text: 'Camera', amount: -200 },
        { id: 5, text: 'Keyboard', amount: -150 }
    ],
    deleteTransaction: () => { },
    addTransaction: () => { }
}

//Create Context
export const GlobalContext = createContext(initialState);

//Provider
export const GlobalProvider = ({ children }: { children: any }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function deleteTransaction(id: number) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction: Transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}