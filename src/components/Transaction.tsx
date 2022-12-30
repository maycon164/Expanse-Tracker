import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

export const Transaction = ({ transaction }: { transaction: any }) => {
    const sign = transaction.amount < 0 ? '-' : '+'
    const { deleteTransaction } = useContext(GlobalContext)

    return (
        <li key={transaction.id} className={sign == '-' ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span> <button onClick={(e) => deleteTransaction(transaction.id)} className='delete-btn'>x</button>
        </li>
    )
}
