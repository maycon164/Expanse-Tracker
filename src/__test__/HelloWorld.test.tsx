import { describe, it } from 'vitest'
import { HelloWorld } from '../components/HelloWorld'
import { render, screen } from '@testing-library/react'

//Arrange
//Act
//Expect

describe('Exemplo for tests', () => {

    it('should render Hello World Messsage', () => {
        render(
            <HelloWorld
                name='Maycon'
                age={20}
            />
        )

        const namePElement = screen.getByRole('name-msg')
        const agePElement = screen.getByRole('age-msg')

        expect(namePElement).toHaveTextContent('Welcome Maycon')
        expect(agePElement).toHaveTextContent('Your age is 20')
    })

})
