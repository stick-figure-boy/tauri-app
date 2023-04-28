// import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
// import FavoriteIcon from '@mui/icons-material/Favorite'
// import MoreVertIcon from '@mui/icons-material/MoreVert'
// import ShareIcon from '@mui/icons-material/Share'
import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import { red } from '@mui/material/colors'
import Typography from '@mui/material/Typography'

import { RadarChart } from '../../../../../components/chart/radarChart/RadarChart'

import { useMemberOverView } from './MemberOverView.hooks'

export const MemberOverView = () => {
  const { chartData } = useMemberOverView()

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardContent>
        <RadarChart chartData={chartData} />
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of
          frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
  )
}
