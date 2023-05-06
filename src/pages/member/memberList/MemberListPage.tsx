import { Grid } from '@mui/material'

import { MainPage } from '../../MainPage'

import { MemberOverView } from './components/memberOverview/MemberOverView'
import { useMemberListPage } from './MemberListPage.hooks'

export const MemberListPage = () => {
  const { members } = useMemberListPage()

  return (
    // TODO: infinity scroll
    <MainPage>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {members.map((m, _) => (
          <Grid item xs={4}>
            <MemberOverView key={m.name} member={m} />
          </Grid>
        ))}
      </Grid>
    </MainPage>
  )
}
