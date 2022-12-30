import { GlobalContext, Transaction } from '../../context/GlobalState';

// Mock Component to GlobalState Provider 

export const MockProvider = (
    { children, deleteTransactionfn, addTransactionFn }:
        { children: any, deleteTransactionfn: any, addTransactionFn: any }
) => {

    const transactions: Transaction[] = [
        {
            id: 1,
            text: 'item 1',
            amount: 1000
        },
        {
            id: 2,
            text: 'item 2',
            amount: -2000
        }
    ]

    return (
        <GlobalContext.Provider value={{
            transactions,
            deleteTransaction: deleteTransactionfn,
            addTransaction: addTransactionFn
        }}>
            {children}
        </GlobalContext.Provider >
    )
}
