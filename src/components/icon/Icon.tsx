import ReadMoreIcon from '@mui/icons-material/ReadMore'

import { MUIColor, MUIFontSize, muiColor, muiFontSize } from '../../style/mui.style'

export const iconType = {
  readMore: 'ReadMoreIcon',
} as const

export type IconType = (typeof iconType)[keyof typeof iconType]

const icons = { ReadMoreIcon }

interface Props {
  type: IconType
  color?: MUIColor
  size?: MUIFontSize
}

export const Icon = (props: Props) => {
  const { type, color, size } = props
  const IconComponent = icons[type]

  return <IconComponent color={color as MUIColor} fontSize={size as MUIFontSize} />
}

Icon.defaultProps = {
  color: muiColor.inherit,
  size: muiFontSize.medium,
}
