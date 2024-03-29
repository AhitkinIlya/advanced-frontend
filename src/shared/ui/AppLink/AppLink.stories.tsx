import type { Meta, StoryObj } from '@storybook/react'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        to: '/',
    },
}

export default meta
type Story = StoryObj<typeof AppLink>

export const Primary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
    },
}

export const Secondary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY,
    },
}

export const PrimaryDark: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
}

export const SecondaryDark: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
}
