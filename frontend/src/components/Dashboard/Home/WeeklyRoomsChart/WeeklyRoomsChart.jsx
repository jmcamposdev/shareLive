import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'
import BoxDashboard from '../../../common/Dashboard/BoxDashboard/BoxDashboard'
import TitleBoxDashboard from '../../../common/Dashboard/TitleBoxDashboard/TitleBoxDashboard'
import useWeeklyRoomsChart from '../../../../hooks/useWeeklyRoomsChart'

const WeeklyRoomsChart = () => {
  const { weeklyStats, lines } = useWeeklyRoomsChart()
  return (
    <BoxDashboard className='xl:!mb-0'>
      <TitleBoxDashboard title='Weekly Rooms' />
      <div
        className='tab-pane w-100'
        style={{ height: '500px' }}
      >
        <div className='chart-container'>
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart
              width={500}
              height={300}
              data={weeklyStats}
              margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='date' />
              <YAxis />
              <Tooltip />
              <Legend />
              {lines.map((line, index) => (
                <Line
                  key={index}
                  type='monotone'
                  dataKey={line.dataKey}
                  name={line.name}
                  stroke={line.stroke}
                  fill={line.fill}
                />
              ))}

            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </BoxDashboard>
  )
}

export default WeeklyRoomsChart
