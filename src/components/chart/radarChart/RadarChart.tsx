import { Radar, RadarChart as RChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'

export type RadarChartData = {
  subject: string
  A: number
}

interface Props {
  chartData: RadarChartData[]
}

export const RadarChart = (props: Props) => {
  const { chartData } = props

  return (
    <ResponsiveContainer width="100%" height={180}>
      <RChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RChart>
    </ResponsiveContainer>
  )
}
