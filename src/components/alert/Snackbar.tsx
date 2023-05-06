import { Snackbar as SB, Box, Stack, SnackbarOrigin } from '@mui/material'
import MuiAlert, { AlertColor, AlertProps } from '@mui/material/Alert'
import React from 'react'

export const snackbarType = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error',
} as const

export type SnackBarType = (typeof snackbarType)[keyof typeof snackbarType]

export const snackBarVertical = {
  top: 'top',
  bottom: 'bottom',
} as const

export type SnackBarVertical = (typeof snackBarVertical)[keyof typeof snackBarVertical]

export const snackBarHorizontal = {
  center: 'center',
  left: 'left',
  right: 'right',
} as const

export type SnackBarHorizontal = (typeof snackBarHorizontal)[keyof typeof snackBarHorizontal]

interface Props {
  open: boolean
  onClose: (event?: React.SyntheticEvent | Event) => void
  message: string
  vertical?: SnackBarVertical
  horizontal?: SnackBarHorizontal
  type?: SnackBarType
  autoHideDuration?: number | null
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
))

export const Snackbar = (props: Props) => {
  const { open, horizontal, vertical, type, message, onClose, autoHideDuration } = props

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <SB
        open={open}
        anchorOrigin={{
          horizontal: horizontal as SnackbarOrigin['horizontal'],
          vertical: vertical as SnackbarOrigin['vertical'],
        }}
        autoHideDuration={autoHideDuration as number | null}
        onClose={onClose}
      >
        <Alert onClose={onClose} severity={type as AlertColor} sx={{ width: '100%' }}>
          <Box sx={{ whiteSpace: 'break-spaces' }}>{message}</Box>
        </Alert>
      </SB>
    </Stack>
  )
}

Snackbar.defaultProps = {
  vertical: snackBarVertical.top,
  horizontal: snackBarHorizontal.center,
  type: snackbarType.success,
  autoHideDuration: 5000,
}
