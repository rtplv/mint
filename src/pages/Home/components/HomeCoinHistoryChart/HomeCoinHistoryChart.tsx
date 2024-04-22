import { LineChart } from '@mantine/charts'
import { data } from './stub.ts'

export function HomeCoinHistoryChart() {
  return (
    // TODO: Color we can get from currency icon package metadata
    <LineChart
      w="90%"
      h={300}
      m="0 auto"
      data={data}
      dataKey="date"
      series={[
        { name: 'BTC', color: 'yellow.6' },
        { name: 'USDT', color: 'blue.6' },
      ]}
      curveType="linear"
    />
  )
}