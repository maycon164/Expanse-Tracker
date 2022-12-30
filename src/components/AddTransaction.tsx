import { useContext, useState } from "react"
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
    const [text, setText] = useState('');

    const [amount, setAmount] = useState(0);

    const { addTransaction, transactions } = useContext(GlobalContext)

    function handleClick(e: any) {
        e.preventDefault()
        addTransaction({ id: transactions.length, text, amount })

        setText('')
        setAmount(0)
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br /> (negative - expanse, positive - income)</label>
                    <input type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} placeholder="Enter amount..." />
                </div>
                <button onClick={handleClick} className="btn">Add transaction</button>
            </form>
        </>
    )
}
