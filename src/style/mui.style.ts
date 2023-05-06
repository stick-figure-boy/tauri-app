export const muiColor = {
  inherit: 'inherit',
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  error: 'error',
  info: 'info',
  warning: 'warning',
} as const

export type MUIColor = (typeof muiColor)[keyof typeof muiColor]

export const muiFontSize = {
  small: 'small',
  medium: 'medium',
  large: 'large',
} as const

export type MUIFontSize = (typeof muiFontSize)[keyof typeof muiFontSize]
