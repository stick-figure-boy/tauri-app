import { Avatar, Card, CardContent, CardHeader, Grid, Rating, Typography } from '@mui/material'

import { RadarChart, RadarChartData } from '../../../components/chart/radarChart/RadarChart'
import { MainPage } from '../../MainPage'

// TODO
const chartData: RadarChartData[] = [
  {
    subject: 'Backend',
    A: 100,
  },
  {
    subject: 'Frontend',
    A: 98,
  },
  {
    subject: 'Mobile',
    A: 86,
  },
  {
    subject: 'Infrastructure',
    A: 99,
  },
  {
    subject: 'Security',
    A: 85,
  },
]

export const MemberDetailPage = () => {
  console.log('OK')
  return (
    <MainPage>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 100, height: 100 }} />
                </Grid>
                <Grid item xs={6}>
                  <div>name</div>
                </Grid>
                <Grid item xs={12}>
                  <RadarChart chartData={chartData} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Card sx={{ marginBottom: 2 }}>
            <CardHeader title="Backend Skills" />
            <CardContent>
              <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={3}>
                  <Typography component="legend">Read only</Typography>
                  <Rating name="read-only" value={5} readOnly />
                </Grid>
                <Grid item xs={3}>
                  <Typography component="legend">Read only</Typography>
                  <Rating name="read-only" value={5} readOnly />
                </Grid>
                <Grid item xs={3}>
                  <Typography component="legend">Read only</Typography>
                  <Rating name="read-only" value={5} readOnly />
                </Grid>
                <Grid item xs={3}>
                  <Typography component="legend">Read only</Typography>
                  <Rating name="read-only" value={5} readOnly />
                </Grid>
                <Grid item xs={3}>
                  <Typography component="legend">Read only</Typography>
                  <Rating name="read-only" value={5} readOnly />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card sx={{ marginBottom: 2 }}>
            <CardHeader title="Frontend Skills" />
            <CardContent>
              <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={3}>
                  <Typography component="legend">Read only</Typography>
                  <Rating name="read-only" value={5} readOnly />
                </Grid>
                <Grid item xs={3}>
                  <Typography component="legend">Read only</Typography>
                  <Rating name="read-only" value={5} readOnly />
                </Grid>
                <Grid item xs={3}>
                  <Typography component="legend">Read only</Typography>
                  <Rating name="read-only" value={5} readOnly />
                </Grid>
                <Grid item xs={3}>
                  <Typography component="legend">Read only</Typography>
                  <Rating name="read-only" value={5} readOnly />
                </Grid>
                <Grid item xs={3}>
                  <Typography component="legend">Read only</Typography>
                  <Rating name="read-only" value={5} readOnly />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </MainPage>
  )
}
