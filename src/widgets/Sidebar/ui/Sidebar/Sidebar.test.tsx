import { fireEvent, screen } from '@testing-library/react'
import { renderWIthTranslation } from 'shared/lib/tests/renderWithTranslation/renderWIthTranslation'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
    test('Test render Sidebar', () => {
        renderWIthTranslation(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('test toggle', () => {
        renderWIthTranslation(<Sidebar />)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})
