import { SxProps, Theme } from '@mui/material'
import Button, { ButtonPropsColorOverrides, ButtonPropsSizeOverrides } from '@mui/material/Button'
import { OverridableStringUnion } from '@mui/types'

import { MUIColor, MUIFontSize, muiColor, muiFontSize } from '../../style/mui.style'

interface Props {
  color?: MUIColor
  size?: MUIFontSize
  label: string
  sx?: Sx
  onClick: (e: React.MouseEvent<HTMLElement>) => void
}

interface Sx {
  width?: number
}

export const BasicButton = (props: Props) => {
  const { color, size, label, sx, onClick } = props

  return (
    <Button
      variant="contained"
      size={size as OverridableStringUnion<'small' | 'medium' | 'large', ButtonPropsSizeOverrides>}
      color={
        color as OverridableStringUnion<
          'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',
          ButtonPropsColorOverrides
        >
      }
      sx={sx as SxProps<Theme>}
      onClick={onClick}
    >
      {label}
    </Button>
  )
}

BasicButton.defaultProps = {
  color: muiColor.primary,
  size: muiFontSize.medium,
  sx: {},
}
