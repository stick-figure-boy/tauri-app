import { SxProps, Theme } from '@mui/material'
import TextField from '@mui/material/TextField'

interface Props {
  id: string
  label: string
  val: string
  hasError?: boolean
  errorMessage?: string
  sx?: Sx
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleBlur?: React.FocusEventHandler<HTMLInputElement>
}

export interface Sx {
  width?: number
  p?: number
}

export const TextForm = (props: Props) => {
  const { id, label, val, hasError, errorMessage, sx, handleChange, handleBlur } = props

  return (
    <TextField
      id={id}
      error={hasError as boolean}
      helperText={errorMessage}
      label={label}
      value={val}
      sx={sx as SxProps<Theme>}
      variant="outlined"
      onChange={handleChange}
      onBlur={handleBlur}
    />
  )
}

TextForm.defaultProps = {
  hasError: false,
  errorMessage: '',
  sx: {},
  handleBlur: undefined,
}
