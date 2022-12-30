import { describe, it, vi } from 'vitest'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MockProvider } from './mock/MockProvider'
import { Transaction } from '../components/Transaction'

describe('Transaction', () => {
    it('should render a TransactionItem with correct signals and calling delete function from provider', async () => {
        const deleteTransactionFn = vi.fn()

        const transactionItem1 = {
            id: 1,
            text: 'item 1',
            amount: 2000
        }
        const transactionItem2 = {
            id: 1,
            text: 'item 2',
            amount: -2000
        }

        const { container } = render(
            <MockProvider addTransactionFn={vi.fn()} deleteTransactionfn={deleteTransactionFn}>
                <Transaction transaction={transactionItem1} />
                <Transaction transaction={transactionItem2} />
            </MockProvider>
        )

        const liPlusElement = container.getElementsByClassName('plus')[0]
        const liMinusElement = container.getElementsByClassName('minus')[0]

        expect(liPlusElement).toHaveTextContent('item 1')
        expect(liMinusElement).toHaveTextContent('item 2')

        const btnDeletePlusElement = liPlusElement.getElementsByTagName('button')[0]
        const btnDeleteMinusElement = liMinusElement.getElementsByTagName('button')[0]

        await userEvent.click(btnDeleteMinusElement)
        await userEvent.click(btnDeletePlusElement)


        expect(deleteTransactionFn).toBeCalledTimes(2)
    })
})