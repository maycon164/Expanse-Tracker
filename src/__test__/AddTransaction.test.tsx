import { screen, render } from '@testing-library/react'
import { AddTransaction } from '../components/AddTransaction'
import { vitest, describe, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { MockProvider } from './mock/MockProvider'
describe('[component] Add Transaction', () => {

    it('should send data from form to function', async () => {
        const addTransactionfn = vitest.fn();

        render(
            <MockProvider
                deleteTransactionfn={vitest.fn()}
                addTransactionFn={addTransactionfn}
            >
                <AddTransaction />
            </MockProvider>
        )

        const txtElement = screen.getByPlaceholderText('Enter text...')
        const amountElement = screen.getByPlaceholderText('Enter amount...')
        const btnAddTransactionElement = screen.getByRole('button', { name: 'Add transaction' })


        await userEvent.type(txtElement, 'teste')
        await userEvent.type(amountElement, '100')
        await userEvent.click(btnAddTransactionElement)

        expect(addTransactionfn).toHaveBeenCalledWith({
            id: 2,
            text: 'teste',
            amount: 100
        })
    })

})