import { Decorator } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'

export const ThemeDecorator = (theme: Theme): Decorator => (StoryComponent) => {
    return (
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    )
}
