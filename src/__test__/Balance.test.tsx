import { describe, it, vitest } from "vitest";
import { screen, render } from "@testing-library/react";
import { MockProvider } from "./mock/MockProvider";
import { Transaction } from "../context/GlobalState";
import { Balance } from '../components/Balance';

describe('Balance Component', () => {

    it('should render the right value of balance', () => {
        const transactions: Transaction[] = [
            {
                id: 1,
                text: '1',
                amount: 100
            },
            {
                id: 2,
                text: '2',
                amount: -10
            }
        ]

        render(
            <MockProvider
                addTransactionfn={vitest.fn()}
                deleteTransactionfn={vitest.fn()}
                transactionsMock={transactions}
            >
                <Balance />
            </MockProvider>
        )

        const totalElement = screen.getByRole('total')
        expect(totalElement).toHaveTextContent('$90.00')
    })

})