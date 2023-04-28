import { RadarChartData } from '../../../../../components/chart/radarChart/RadarChart'

export const useMemberOverView = () => {
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

  return {
    chartData,
  }
}
