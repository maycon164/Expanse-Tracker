import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

export const Balance = () => {
    const { transactions } = useContext(GlobalContext)
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((prev, current) => prev += current, 0).toFixed(2);

    return (
        <>
            <div>
                <h4>Your Balance</h4>
                <h1 role='total'>${total}</h1>
            </div>
        </>
    )
}
