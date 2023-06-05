import { classNames } from 'shared/lib/classNames/classNames'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import LightSwitcher from 'shared/assets/icons/theme-light.svg'
import DarkSwitcher from 'shared/assets/icons/theme-dark.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkSwitcher /> : <LightSwitcher />}
        </Button>
    )
}
