import { render, screen } from '@testing-library/react'
import { describe, it, vi } from 'vitest'
import { TransactionList } from '../components/TransactionList';
import { MockProvider } from './mock/MockProvider';

describe('Transaction List', () => {

    it('should render a list of transaction', () => {

        render(
            <MockProvider addTransactionfn={vi.fn()} deleteTransactionfn={vi.fn()}>
                <TransactionList />
            </MockProvider>
        )

        const listItemElements = screen.getAllByRole('listitem')
        expect(listItemElements).toHaveLength(2)

        expect(listItemElements[0]).toHaveTextContent('item 1')
        expect(listItemElements[0]).toHaveTextContent('+$1000')

        expect(listItemElements[1]).toHaveTextContent('item 2')
        expect(listItemElements[1]).toHaveTextContent('-$2000')


    })

})