import { useNavigate } from 'react-router-dom'

import { RadarChartData } from '../../../../../components/chart/radarChart/RadarChart'
import { PrivatePath } from '../../../../../RouteConfig'

export const useMemberOverView = () => {
  const navigate = useNavigate()

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

  const handleMoveDetail = (accountID: string) => {
    navigate(`${PrivatePath.members}/${accountID}`)
  }

  return {
    chartData,
    handleMoveDetail,
  }
}
