import { render, screen } from '@testing-library/react'
import { describe, it, vitest } from 'vitest'
import { Transaction } from '../context/GlobalState'
import { MockProvider } from './mock/MockProvider'
import { IncomeExpenses } from '../components/IncomeExpenses'

describe('Income Expanse', () => {

    it('should render income and expanse values', () => {
        const transactions: Transaction[] = [
            {
                id: 1,
                text: 'one',
                amount: 100
            },
            {
                id: 2,
                text: 'two',
                amount: 50
            },
            {
                id: 3,
                text: 'three',
                amount: -15
            },
            {
                id: 4,
                text: 'four',
                amount: -50
            },
        ]

        const { container } = render(
            <MockProvider
                addTransactionfn={vitest.fn()}
                deleteTransactionfn={vitest.fn()}
                transactionsMock={transactions}
            >
                <IncomeExpenses />
            </MockProvider>
        )

        const incomeTextElement = container.querySelector('#money-plus')
        const expanseTextElement = container.querySelector('#money-minus')

        expect(expanseTextElement).toHaveTextContent('-$65.00')
        expect(incomeTextElement).toHaveTextContent('+$150.00')
    })

})