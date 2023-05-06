import { Grid, Box } from '@mui/material'

import { Snackbar, snackbarType } from '../../../components/alert/Snackbar'
import { BasicButton } from '../../../components/button/BasicButton'
import { BasicCard } from '../../../components/card/BasicCard'
import { TextForm } from '../../../components/form/TextForm'

import { useSignIn } from './SignInPage.hooks'

export const SignInPage = () => {
  const VM = useSignIn()

  return (
    <Box>
      <Snackbar
        type={snackbarType.error}
        open={VM.isOpenErrSnackBar}
        message={VM.errSnackBarMsg}
        onClose={VM.handleCloseErrSnackBar}
      />
      <Grid container alignItems="center" justifyContent="center" sx={{ marginTop: 4 }}>
        <Grid item xs={8}>
          <BasicCard>
            <h1>Sign In</h1>

            <Box sx={{ mb: 2 }}>
              <TextForm id="email" label="email" val={VM.email} sx={{ width: 1 }} handleChange={VM.handleChangeEmail} />
            </Box>

            <Box sx={{ mb: 2 }}>
              <TextForm
                id="password"
                label="password"
                val={VM.password}
                sx={{ width: 1 }}
                handleChange={VM.handleChangePassword}
              />
            </Box>

            <Box sx={{ mb: 2, textAlign: 'center' }}>
              <BasicButton label="Sign In" size="large" sx={{ width: 300 }} onClick={() => VM.signIn()} />
            </Box>
          </BasicCard>
        </Grid>
      </Grid>
    </Box>
  )
}
