import { IconButton as IB } from '@mui/material'

import { MUIColor, MUIFontSize, muiColor, muiFontSize } from '../../style/mui.style'
import { Icon, IconType } from '../icon/Icon'

interface Props {
  type: IconType
  color?: MUIColor
  size?: MUIFontSize
  onClick: (e: React.MouseEvent<HTMLElement>) => void
}

export const IconButton = (props: Props) => {
  const { color, size, onClick, type } = props

  return (
    <IB onClick={onClick}>
      <Icon color={color} size={size} type={type} />
    </IB>
  )
}

IconButton.defaultProps = {
  color: muiColor.inherit,
  size: muiFontSize.medium,
}
